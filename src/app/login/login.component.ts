import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Login } from './login';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [LoginService]
})
export class LoginComponent implements OnInit {

	private user : Login;
  loading = false;
  loginError = false;

  constructor(private loginService : LoginService) { 
  	this.user = new Login();
  }

  ngOnInit() {
  }

  LogIn () : void{
    this.loading = true;
  	//console.log(this.user.email + " " + this.user.password);
  	this.loginService.LogIn(this.user)
  		.then(response => {
        this.loginError = false;
  			console.log('correcto');
  		})
  		.catch(response =>{
  			console.log('error');
        this.loginError = true;
        this.loading = false;
  		});
  }

}
