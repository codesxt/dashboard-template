import { NgModule, ModuleWithProviders } from '@angular/core';
import { RoleTranslatePipe } from './pipes/role-translate';
import { UsersService } from './services/users.service';
import { DocumentsService } from './services/documents.service';

@NgModule({
  providers: [
    UsersService,
    DocumentsService
  ],
  declarations: [ RoleTranslatePipe ],
  exports: [ RoleTranslatePipe ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        UsersService,
        DocumentsService
      ]
    };
  }
}
