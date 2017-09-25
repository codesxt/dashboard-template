import { Component, OnInit, ViewChild } from '@angular/core';
import { DocumentsService } from '../shared/services/documents.service';
import { NotificationsService } from 'angular2-notifications';
import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'app-documents-list',
  templateUrl: './documents-list.component.html'
})
export class DocumentsListComponent implements OnInit {
  documents: any[];
  total    : number = 1;
  page     : number = 1;
  pageSize : number = 10;

  constructor(
    private documentsService: DocumentsService,
    private notificationsService: NotificationsService,
    private authenticationService: AuthenticationService
  ) {  }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.documentsService.getUserDocuments(this.page-1, this.pageSize)
    .subscribe(
      data => {
        this.documents = data.data;
        this.total = data.meta['total-items'];
      },
      error => {

      }
    )
  }

  deleteDocument(documentId: any){
    this.documentsService.deleteDocument(documentId)
    .subscribe(
      data => {
        this.notificationsService.success("Documento Eliminado", "El documento fue eliminado exitosamente");
        this.loadData();
      },
      error => {
        this.notificationsService.error("Error", "Se produjo un error en la eliminación del documento.");
      }
    )
  }

  onPageChange(event: Event){
    this.loadData();
  }
}
