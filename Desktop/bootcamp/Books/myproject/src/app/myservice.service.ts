import { Injectable } from '@angular/core';
//import { HttpClient } from 'selenium-webdriver/http';
import { HttpHeaders, HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  // Options = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   })
  // };

  private listingsurl : string = "http://localhost:8000/listingsdata";
  private wishlisturl : string = "http://localhost:8000/wishlistdata";
  private addbookurl : string = "http://localhost:8000/addbook";
  private adduserurl : string = "http://localhost:8000/adduser";
  private detailurl : string = "http://localhost:8000/detail";
  private fetchurl : string = "http://localhost:8000/fetch";
  private addwishurl : string = "http://localhost:8000/addwish";
  private mylisturl : string = "http://localhost:8000/mylistdata";
  private sendmsgurl : string = "http://localhost:8000/addmsg";
  private mysentmsgsurl : string = "http://localhost:8000/mysentmsgs";
  private myrecmsgsurl : string = "http://localhost:8000/myrecmsgs";

  public id;
  public userid;
  public email;
  public password;
//  public wish;

  constructor(private http : HttpClient) { }

  // getwish(wid){
  //   this.wish=wid;
  // }

  useridVal(getid){
    this.userid=getid;
    localStorage.setItem('currentuid',getid);
  }

  loginhelp(email,password){
    this.email=email;
    this.password=password;
  }

  idVal(inp){
    this.id=inp;
  }

  getlistings(): Observable<any>{
    return this.http.get(this.listingsurl);
  }

  getdetail(): Observable<any>{
    return this.http.get(this.detailurl + `?id=` + this.id);
  }

  mylisting(): Observable<any>{
    return this.http.get(this.mylisturl + `?id=` + localStorage.getItem('currentuid'));
  }

  mysentmsgs(): Observable<any>{
    return this.http.get(this.mysentmsgsurl + `?id=` + localStorage.getItem('currentuid'));
  }

  myrecmsgs(): Observable<any>{
    return this.http.get(this.myrecmsgsurl + `?id=` + localStorage.getItem('currentuid'));
  }

  fetchuser(): Observable<any>{
    let Params = new HttpParams();
    Params = Params.append('email', this.email);
    Params = Params.append('password', this.password);
    // let params = new HttpParams().set('email', this.email);
    // let params = new HttpParams().set('password', this.password);
    return this.http.get(this.fetchurl, {params:Params})
  }

  getwishlist(): Observable<any>{
    return this.http.get(this.wishlisturl + `?id=` + localStorage.getItem('currentuid'));
  }

  
  create (user) {
    return this.http.post<any>(this.adduserurl, user, httpOptions)
      .pipe(catchError(this.errorHandler))
  }

  addBook (book): Observable<any> {
    return this.http.post(this.addbookurl, book, httpOptions)
  }

  addtowishlist (wish): Observable<any>{
    // let Params = new HttpParams();
    // Params = Params.append('bookid', this.wish);
    // Params = Params.append('userid', this.userid);
    // return this.http.post(this.wishlisturl, Params, httpOptions)
    wish.userid = localStorage.getItem('currentuid');
    return this.http.post(this.addwishurl, wish, httpOptions)
  }

  message (message): Observable<any>{
    message.senderid = localStorage.getItem('currentuid');
    return this.http.post(this.sendmsgurl, message, httpOptions)
  }

  clearuid(){
    localStorage.removeItem('currentuid');
  }  

  errorHandler(error: HttpErrorResponse) {
    return throwError(error)
  }

}
