import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AdminUsersComponent } from './admin-users.component';
import { AdminUserDetailsComponent } from './user-detail.component';

import { AdminUsersRoutingModule } from './admin-users-routing.module';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminUsersRoutingModule,
    SharedModule
  ],
  declarations: [
    AdminUsersComponent,
    AdminUserDetailsComponent
  ]
})
export class AdminUsersModule { }
