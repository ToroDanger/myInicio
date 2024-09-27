import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})

export class AppComponent {
  name: string ='';
  age: number | null = null;
  users$: Observable<any[]>;

  constructor(private userService: UserService) {
    this.users$ = this.userService.getUsers();
  }
  agregar(){
    if (this.name && this.age !== null){
      this.userService.addUser(this.name, this.age).then(() => {
        console.log('User added successfully!');
        this.name='';
        this.age= null;
      })
    }
  }
}
