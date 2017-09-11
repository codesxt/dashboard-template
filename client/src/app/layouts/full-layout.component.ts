import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/services/authentication.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {
  user: any = {};
  public options = {
    position: ["top", "left"],
    timeOut: 1500,
    lastOnBottom: true,
    maxLength: 0,
    showProgressBar: true,
    pauseOnHover: true,
    clickToClose: false
  };
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private notificationsService: NotificationsService
  ){

  }

  public disabled = false;
  public status: {isopen: boolean} = {isopen: false};

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  logout(){
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    if(!this.authenticationService.isLoggedIn()){
      this.notificationsService.alert("Error", "Debes acceder para poder usar la aplicación.");
      this.router.navigate(['/login']);
    }else{
      this.user = this.authenticationService.getCurrentUser();
    }
  }

  isAdmin(){
    return this.user.role == "administrator";
  }
}
