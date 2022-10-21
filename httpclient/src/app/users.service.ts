import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnimateTimings } from '@angular/animations';
interface users{
  name: string;
  email: string;
  phonenumber:number;
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {
 
  constructor( private http: HttpClient) { }
  addInfo(body:any){
    // const postbody ={
    //   title: body.title,
    //   body: body.description,
    //   userId: 1,
    // };
    const header= new HttpHeaders({
      'content-type':'application/form',
      'authenticationToken':'12345'
    });
    const param= new HttpParams()
    .set('page-size','10')
    .set('page-option','100');

    return this.http.post('https://jsonplaceholder.typicode.com/users',body,{headers:header,params:param})
  }

  getUsers():Observable<users>{

    const header= new HttpHeaders({
      'content-type':'application/form',
      'authenticationToken':'12345'
    });
    const param= new HttpParams()
    .set('page-size','10')
    .set('page-option','100');
    return this.http.get<users>('https://jsonplaceholder.typicode.com/users',{headers :header, params:param});
  }
}
