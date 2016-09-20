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
  public error: any = {};

  user = {email: '', fullName: '' };
  public errEmail: string;
  public errFullName: string;
  constructor(private _usersService: UsersService){

    this._usersService.getUsers().subscribe(
        (response: Response) => {
          return this.todos = response.json();
        },
        (error: Response) => {
          //debugger;
          console.log('here is an error!!!')
        }
    );

  }

    add(user){

     this._usersService.add(user).subscribe(
         (todo) => {
             this.user={email: '', fullName: ''}
             this.todos.push(user);
         },
         (error: Response) => {
            this.error = error.json();
             if (this.error.errors.fullName) {
                 this.errFullName = this.error.errors.fullName;
                // alert(this.error.errors.fullName);
             }
             if (this.error.errors.email){
                // alert(this.error.errors.email);
                 this.errEmail = this.error.errors.email;
             }

         });
        this.errEmail = '';
        this.errFullName = '';
    }

  destroy(user){
    this._usersService.destroy(user).subscribe((todo) => {
      this.todos = this.todos.filter(todo => todo !== user);
    })
    this.todos = this.todos.filter(todo => todo !== user);
  }
}
