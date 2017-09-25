import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { DocumentsComponent } from './documents.component';
import { DocumentsCreateComponent } from './documents-create.component';
import { DocumentsViewComponent } from './documents-view.component';
import { DocumentsListComponent } from './documents-list.component';

import { DocumentsRoutingModule } from './documents-routing.module';
import { QuillModule } from 'ngx-quill';

import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    DocumentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule,
    SharedModule,
    NgbModule
  ],
  declarations: [
    DocumentsComponent,
    DocumentsCreateComponent,
    DocumentsViewComponent,
    DocumentsListComponent
  ]
})
export class DocumentsModule { }
