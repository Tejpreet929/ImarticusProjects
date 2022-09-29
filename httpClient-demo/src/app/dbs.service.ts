import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbsService {

  getUSerData(){
    return this.dbsClient.get("http://localhost:8080/all");
    
  }
  htmlClient:any
  constructor(private dbsClient:HttpClient) 
  {
   }

}
