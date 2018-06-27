//Application level services 
import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Subject } from 'rxjs/Subject';
import{CommonService } from './common.service'

@Injectable()
export class RequestService {
  headers:any;
 requestOptions:any;
  baseServiceUrl :any= "http://172.16.19.149:8080/";
  constructor(private _http:Http,private _commonService:CommonService){
    this.headers = new Headers({
      'Content-Type':'application/json'
    });
    this.requestOptions = new RequestOptions({headers:this.headers});
  }
  fetchData(serviceName){    
    return this._http.get(this.baseServiceUrl+serviceName);
  }
  postData(serviceName,params){    
    return this._http.post(this.baseServiceUrl+serviceName,params,this.requestOptions);
  }
  
}