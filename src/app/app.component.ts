import { Component } from '@angular/core';
import {UsersService} from "./users.service";
import {Response} from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  public todos: any = [];

  user = {
    email: '',
    fullName: ''
  };

  constructor(private _usersService: UsersService){
       this._usersService.getUsers().subscribe((response: Response) => {
       return this.todos = response.json();
     });
  }

  add(user){
    this.user={email: '',
      fullName: ''}
   this._usersService.add(user).subscribe((todo) => {
     this.todos.push(user);
   });
  }

  destroy(user){
    this._usersService.destroy(user).subscribe((todo) => {
      this.todos = this.todos.filter(todo => todo !== user);
    })
    this.todos = this.todos.filter(todo => todo !== user);
  }
}
