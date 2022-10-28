import { Component, OnInit } from '@angular/core';
// import { FormControl } from '@angular/forms';
// import { NgForm } from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';
@Component({
  selector: 'app-local-session',
  templateUrl: './local-session.component.html',
  styleUrls: ['./local-session.component.css']
})
export class LocalSessionComponent implements OnInit {
  key="";
  value="";
  title ="Local and Session storage";
  ssn:any;
  local:any;
  display:boolean=false;

  public cookie_name='';
  public all_cookies:any='';
  constructor( private cookieService:CookieService) { }

  ngOnInit(): void {
   
  }
  save(){
    sessionStorage.setItem(this.key,this.value);
    localStorage.setItem(this.key,this.value);
  }
  retrive(){
    
    this.ssn = sessionStorage.getItem(this.key);
    this.local = localStorage.getItem(this.key);
    console.log(this.key);
    this.display=true;
  }

  remove(){
   sessionStorage.removeItem(this.key);
   localStorage.removeItem(this.key);
   this.display=false;
  }
 
  clear(){
    sessionStorage.clear();
    localStorage.clear();
  }

  // cookies
  setCookie(){
    this.cookieService.set(this.key,this.value);
  }
   getCookie(a:any){
    this.cookie_name=this.cookieService.get(a);
    this.all_cookies=this.cookieService.getAll();
  
   }
  deleteCookie(){
    this.cookieService.delete(this.key);
  }
   
  deleteAll(){
    this.cookieService.deleteAll();
  }
}
