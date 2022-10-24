import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  reverses= "";
  upper="";
  chain="";
  users=[
    {id:1,name:'John',Dob:new Date("08/12/1968"),detail:'Info '},
    {id:2,name:'Merry',Dob:new Date("12/05/1974"),detail:'Info '},
    {id:3,name:'Joe',Dob:new Date("09/09/2011"),detail:'Info '},
    {id:4,name:'Bob',Dob:new Date("07/19/2000"),detail:'Info '}
    // {id:4,name:'Anna',Dob:new Date("19/07/2001")},
]
    

  
  }
