import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl:string = "http://localhost:3000/"

  httpheaders :HttpHeaders = new HttpHeaders()
                            .set('content-type','application/json')
  constructor(private http:HttpClient) { }

  getDetailsFromServer(endpoint:string,httpparams : HttpParams = new HttpParams()){
    let url = this.baseUrl + endpoint
return this.http.get(url,{'headers':this.httpheaders,'params':httpparams})
  }
}
