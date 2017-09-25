import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuillEditorComponent } from 'ngx-quill/src/quill-editor.component';
import { DocumentsService } from '../shared/services/documents.service';
import { NotificationsService } from 'angular2-notifications';
import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'app-documents-create',
  templateUrl: './documents-create.component.html'
})
export class DocumentsCreateComponent implements OnInit {
  text: string;
  editorForm: FormGroup;
  @ViewChild('editor') editor: QuillEditorComponent
  constructor(
    private formBuilder: FormBuilder,
    private documentsService: DocumentsService,
    private notificationsService: NotificationsService,
    private authenticationService: AuthenticationService
  ) {  }

  ngOnInit() {
    this.editorForm = this.formBuilder.group({
      title: ['', Validators.required],
      editor: ['', Validators.required]
    })
  }

  saveDocument(){
    this.documentsService.createDocument({
      title: this.editorForm.controls['title'].value,
      content: this.editorForm.controls['editor'].value,
      author: this.authenticationService.getCurrentUser().id
    })
    .subscribe(
      data => {
        this.notificationsService.success("Creación Exitosa", data.message);
      },
      error => {
        this.notificationsService.error("Error", error.json().message);
      }
    )
  }
}
