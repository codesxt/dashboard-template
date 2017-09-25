import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuillEditorComponent } from 'ngx-quill/src/quill-editor.component';
import { DocumentsService } from '../shared/services/documents.service';
import { NotificationsService } from 'angular2-notifications';
import { AuthenticationService } from '../shared/services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-documents-view',
  templateUrl: './documents-view.component.html'
})
export class DocumentsViewComponent implements OnInit {
  text: string;
  editorForm: FormGroup;
  document: any;
  documentBelongsToUser = false;

  @ViewChild('editor') editor: QuillEditorComponent
  constructor(
    private formBuilder: FormBuilder,
    private documentsService: DocumentsService,
    private notificationsService: NotificationsService,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
  ) {  }

  ngOnInit() {
    this.editorForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    })
    this.route.params.subscribe(params => {
       // params['id']
       this.documentsService.getDocument(params['id'])
       .subscribe(
         data => {
           this.document = data.attributes;
           this.document.id = data.id;
           this.editorForm.setValue({
             title : this.document.title,
             content: this.document.content
           });
           this.documentBelongsToUser = this.document.author == this.authenticationService.getCurrentUser().id;
         },
         error => {
           this.notificationsService.error("Error", "Se produjo un error en la obtención del documento.");
         }
       )
    });
  }

  saveDocument(){
    this.documentsService.updateDocument(this.document.id, {
      title: this.editorForm.controls['title'].value,
      content: this.editorForm.controls['content'].value,
      author: this.authenticationService.getCurrentUser().id
    })
    .subscribe(
      data => {
        this.notificationsService.success("Actualización Exitosa", data.message);
        this.router.navigate(['/documents/list']);
      },
      error => {
        this.notificationsService.error("Error", error.json().message);
      }
    )
  }

  cancel(){
    this.router.navigate(['/documents/list']);
  }
}
