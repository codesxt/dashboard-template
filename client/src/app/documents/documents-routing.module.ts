import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentsComponent } from './documents.component';
import { DocumentsCreateComponent } from './documents-create.component';
import { DocumentsViewComponent } from './documents-view.component';
import { DocumentsListComponent } from './documents-list.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Documentos'
    },
    component: DocumentsComponent,
    children: [
      {
        path: 'list',
        component: DocumentsListComponent,
        data: {
          title: 'Lista de Documentos'
        }
      },
      {
        path: 'create',
        component: DocumentsCreateComponent,
        data: {
          title: 'Crear Documento'
        }
      },
      {
        path: ':id',
        component: DocumentsViewComponent,
        data: {
          title: 'Mi Documento'
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DocumentsRoutingModule {}
