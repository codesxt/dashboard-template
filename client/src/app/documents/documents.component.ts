import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html'
})
export class DocumentsComponent implements OnInit {
  constructor(
    private router: Router
  ) {  }

  ngOnInit() {
    this.router.navigate(['/documents/list']);
  }
}
