import {Component, OnInit} from "@angular/core";
import {UserService} from "./user.service";
import {Router} from "@angular/router";

@Component({
    selector: 'logout',
    templateUrl: './logout.component.html',
})
export class LogoutComponent implements OnInit{

    constructor(private userService: UserService, private router: Router) {}

    ngOnInit():void {
        this.logout();
    }

    logout() {
        this.userService.logout()
            .then(r => {
                if (r) {
                    this.router.navigateByUrl('/home');
                } else {
                    alert("O no, it went wrong.")
                }
            });
    }
}