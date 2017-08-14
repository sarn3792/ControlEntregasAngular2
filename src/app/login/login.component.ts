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
  errorMessage = "";

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
  			console.log(response);
        if(response.status == 400){
           this.errorMessage = "Usuario y/o contraseña incorrectos";
        }  
        else{
           this.errorMessage = "Ha ocurrido un error al consultar los datos";
        }
        this.loginError = true;
        this.loading = false;
  		});
  }

}
