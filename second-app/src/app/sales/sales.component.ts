import { Component, OnInit } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  name:String="hello"
  dbsUser:User=
  {
    "id":121,
    "name":"john",
    "email":"john@gmail.com"

  }

  product:any={
    "pid":122,
    "pname":"ramu",
    "psal":23000
  }
  sales:any=[
    {
      "eid":122,
    "ename":"ramu",
    "esal":23000
    },
    {
      "eid":123,
    "ename":"ram",
    "esal":33000
    },
    {
      "eid":124,
    "ename":"raju",
    "esal":43000
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
