import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../users.service'; 
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  @Input() empDetails ={name:'',email:"",address:"",terms:""}
  constructor( private usersService :UsersService) { }
  
  users:any;
  name="";
  email="";
  terms="";
  address="";

  // addinfo(formvalue:NgForm)
  // addinfo(body:any){
  //   // console.log(formvalue.value);
  //   // const postbody ={
  //   //   title: formvalue.value.name,
  //   //   body:  formvalue.value.address
    
  //   // }
  //   this.usersService.addInfo(body).subscribe(data=>{
  //     console.log(data);
      
  //   },(err)=>{
  //     console.log("unable to add info" +err);
      
  //   });
  // }
 
  
 
  
  ngOnInit(): void {
    this.usersService.getUsers().subscribe(data => { this.users = data; },(err)=>{
      console.log('unable to get data form URL');
      this.usersService.updateUser()
      
    });
  }
  addEmployee(dataEmployee:any){
   return this.usersService.createEmployee(this.empDetails).subscribe((data:{})=>{console.log(data);
    })
  }
  updateUser(){
    this.usersService.updateUser().subscribe(data=>{console.log(data)});
  
  }

  deleteuser(){
    this.usersService.deleteusers(1).subscribe(data=>{console.log("successful deletion"+data)},(err)=>{console.log("unable to delete")});
  }

}
