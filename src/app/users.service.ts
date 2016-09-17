import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
//import 'rxjs/add/operator/interval';
//import 'rxjs/add/operator/mergeMap';

type Todo = {fullName:string};

@Injectable()
export class UsersService {
  private _baseUrl = 'https://test-api.javascript.ru/v1/alla3/users/';
  public email: string;



  constructor(private _http: Http) {
  }

  getUsers(){
    return this._http.get(this._baseUrl);
  }

  add(user) {
    return this._http.post(this._baseUrl, user);
  }

  destroy(user) {
   return this._http.delete(this._baseUrl + user._id);
  }
}