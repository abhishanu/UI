//Application level services 
import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RequestService {
  baseServiceUrl :any= "http://172.16.16.118:8080/";
  constructor(private _http:Http){}
  fetchData(serviceName){
    return this._http.get(this.baseServiceUrl+serviceName);
  }
  
}