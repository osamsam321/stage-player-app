import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user'
import { UserService } from './user.service';

@Component({
  selector: 'user-root',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  title = 'user_App';
  public users!: User[];

  constructor(private userService: UserService){}
  ngOnInit(): void {
    this.getUsers();
  }
  public getUsers(): void{
    this.userService.getUser().subscribe( 
      (response: User[]) => {
        this.users= response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
  public onAddUser(addForm:NgForm):void
  {
    document.getElementById('submit_sign_form')?.click();
    this.userService.addUser(addForm.value).subscribe(
      (response: User) => {},
      (error: HttpErrorResponse) => {
        alert(error.message);
        this.getUsers;
      }
    );
    
  }
}
