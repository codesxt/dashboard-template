import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import * as JWT from 'jwt-decode';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class DocumentsService {
  baseURL: string = "http://localhost:3000";
  constructor(
    private http: Http,
    private authenticationService: AuthenticationService
  ) { }
  createDocument(documentData: any): any{
    let headers = new Headers({
      'Authorization': 'Bearer ' + this.authenticationService.getToken()
    });
    let options = new RequestOptions({
      headers: headers
    });
    return this.http.post(this.baseURL + '/api/v1/documents', documentData, options).map(
      (response: Response) => response.json()
    );
  }

  getDocument(documentId: string): any{
    let headers = new Headers({
      'Authorization': 'Bearer ' + this.authenticationService.getToken()
    });
    let options = new RequestOptions({
      headers: headers
    });
    return this.http.get(this.baseURL+'/api/v1/documents/' + documentId, options).map(
      (response: Response) => response.json()
    );
  }

  deleteDocument(documentId: string): any{
    let headers = new Headers({
      'Authorization': 'Bearer ' + this.authenticationService.getToken()
    });
    let options = new RequestOptions({
      headers: headers
    });
    return this.http.delete(this.baseURL+'/api/v1/documents/' + documentId, options).map(
      (response: Response) => response.json()
    );
  }

  updateDocument(documentId: string, documentData: any): any{
    let headers = new Headers({
      'Authorization': 'Bearer ' + this.authenticationService.getToken()
    });
    let options = new RequestOptions({
      headers: headers
    });
    return this.http.patch(this.baseURL+'/api/v1/documents/' + documentId, documentData, options).map(
      (response: Response) => response.json()
    );
  }

  getUserDocuments(pageNumber: number = 0, pageSize: number = 1): any{
    let headers = new Headers({
      'Authorization': 'Bearer ' + this.authenticationService.getToken()
    });
    let params = new URLSearchParams();
    params.append('page[number]', pageNumber+"");
    params.append('page[size]', pageSize+"");
    let options = new RequestOptions({
      headers: headers,
      params: params
    });
    return this.http.get(this.baseURL + '/api/v1/user-documents', options).map(
      (response: Response) => response.json()
    );
  }
}
