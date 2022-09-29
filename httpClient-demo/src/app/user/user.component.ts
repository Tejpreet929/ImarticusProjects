import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DbsService } from '../dbs.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  htmlData:any
  getdata()
  {
    let response =this.htmlinfo.getUSerData();
    //temp.subscribe((dbsData)=>this.htmlClient=dbsData);

   // console.log(this.htmlClient);
 
    //return this.htmlClient;

    response.subscribe((data: any)=>this.htmlData = data);
  }
  constructor(private htmlinfo:DbsService) 
  { 


  }

  ngOnInit(): void {
  }

}
