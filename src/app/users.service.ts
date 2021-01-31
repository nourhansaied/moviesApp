import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users = [
    { name: 'Nourhan', age: 28, gender: 'F' },
    { name: 'asdasd', age: 23, gender: 'M' },
    { name: 'HEllo', age: 28, gender: 'F' },
    { name: 'Khaled', age: 23, gender: 'M' },
    { name: 'Ay7age', age: 28, gender: 'F' },

  ]
  constructor() { 

  }


  // public
  // private 
  // protected

  // mvc
  // mvvm
  public getUsers() {
    return this.users;
  }
}
