import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/services/authentication.service';
import { NotificationsService } from 'angular2-notifications';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html'
})
export class AdminUsersComponent implements OnInit {
  users: any = [];
  meta : any = [];
  constructor(
    private notificationsService : NotificationsService,
    private authenticationService: AuthenticationService,
    private usersService         : UsersService
  ) {  }

  ngOnInit() {
    this.usersService.getUsers(0, 1)
    .subscribe(
      data => {
        this.notificationsService.success(
          'Datos cargados',
          'Los datos de usuarios se leyeron exitosamente.'
        )
        this.users = data.data;
        this.meta  = data.meta;
      },
      error => {
        this.notificationsService.error(
          'Error',
          'Los datos de usuarios no se pudieron leer.'
        )
      }
    );
  }
}
