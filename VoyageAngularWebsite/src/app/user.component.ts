import { Component } from '@angular/core';
import {UserService} from "./user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
})
export class UserComponent {
    //Login fields
    loginUsername: string;
    loginPassword: string;
    
    //Register fields
    registerUsername: string;
    email: string;
    registerPassword: string;
    confirmPassword: string;

    constructor(private userService: UserService, private router: Router) {}

    login() {
        console.log(this.loginUsername + "\n" + this.loginPassword);
        this.userService.login(this.loginUsername, this.loginPassword)
            .then(r => {
                if (r) {
                    localStorage.setItem('username', this.loginUsername);
                    this.router.navigateByUrl('/home');
                } else {
                    alert("O no, you got it wrong.")
                }
            });
    }

    register(): void {
        console.log(this.registerUsername + "\n" + this.email + "\n" + this.registerPassword + "\n" + this.confirmPassword);
        this.userService.register(this.registerUsername, this.email, this.registerPassword, this.confirmPassword)
            .then(r => {
                if (r) {
                    this.router.navigateByUrl('/home');
                } else {
                    alert("O no, something went wrong.");
                }
            });
    }
}
