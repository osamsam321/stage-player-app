import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { UserLoginDetails } from './UserLoginDetails';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 

  constructor(private loginService: LoginService, private router: Router) { 

  }

  login(addForm:NgForm) {

        this.loginService.login(addForm.value)
            .subscribe(
                () => {
                    console.log("User is logged in");
                    //user
                    this.router.navigateByUrl('/');
                }
            );
    

 
    
}
  ngOnInit(): void {
  }

}
