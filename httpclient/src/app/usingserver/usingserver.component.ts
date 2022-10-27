import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-usingserver',
  templateUrl: './usingserver.component.html',
  styleUrls: ['./usingserver.component.css']
})
export class UsingserverComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

//   getemployeeList(){
//    this.http.get 
// }

}
