import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://localhost:52573/api";
readonly PhotoUrl = "http://localhost:52573/Photos/";

  constructor(private http:HttpClient) { }
  getStoreList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/store');
  }

  addStore(val:any){
    return this.http.post(this.APIUrl+'/Store',val);
  }

  updateStore(val:any){
    return this.http.put(this.APIUrl+'/Store',val);
  }

  deleteStore(val:any){
    return this.http.delete(this.APIUrl+'/Store/'+val);
  }


  getProductsList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Products');
  }

  addProducts(val:any){
    return this.http.post(this.APIUrl+'/Products',val);
  }

  updateProducts(val:any){
    return this.http.put(this.APIUrl+'/Products',val);
  }

  deleteProducts(val:any){
    return this.http.delete(this.APIUrl+'/Products/'+val);
  }


  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Products/SaveFile',val);
  }

  getAllStoreNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Products/GetAllStoreNames');
  }

}
