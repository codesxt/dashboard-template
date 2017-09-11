import { NgModule, ModuleWithProviders } from '@angular/core';
import { RoleTranslatePipe } from './pipes/role-translate';
import { UsersService } from './services/users.service';

@NgModule({
  providers: [UsersService],
  declarations: [ RoleTranslatePipe ],
  exports: [ RoleTranslatePipe ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        UsersService
      ]
    };
  }
}
