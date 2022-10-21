import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service'; 
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor( private usersService :UsersService) { }
  users:any;
  name="";
  email="";
  terms="";
  address="";

  addinfo(formvalue:NgForm){
    console.log(formvalue.value);
    const postbody ={
      title: formvalue.value.name,
      body:  formvalue.value.address
    
    }
    this.usersService.addInfo(postbody).subscribe(data=>{
      console.log(data);
      
    },(err)=>{
      console.log("unable to add info" +err);
      
    });
    
  }
 
  
  ngOnInit(): void {
    this.usersService.getUsers().subscribe(data => { this.users = data; },(err)=>{
      console.log('unable to get data form URL');
      this.usersService.updateUser()
      
    });
  }
  updateUser(){
    this.usersService.updateUser().subscribe(data=>{console.log(data)});
  
  }

  deleteuser(){
    this.usersService.deleteusers(1).subscribe(data=>{console.log("successful deletion"+data)},(err)=>{console.log("unable to delete")});
  }

}
