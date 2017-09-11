import { NgModule } from '@angular/core';

import { DocumentsComponent } from './documents.component';
import { DocumentsCreateComponent } from './documents-create.component';

import { DocumentsRoutingModule } from './documents-routing.module';

@NgModule({
  imports: [ DocumentsRoutingModule ],
  declarations: [
    DocumentsComponent,
    DocumentsCreateComponent
  ]
})
export class DocumentsModule { }
