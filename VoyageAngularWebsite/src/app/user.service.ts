import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers, URLSearchParams} from "@angular/http";

@Injectable()
export class UserService{

    private baseUrl: string = "http://localhost:59318/";
    
    constructor(private http: Http) {}

    public login(username: string, password: string): Promise<boolean> {
        let body: URLSearchParams = new URLSearchParams();
        body.set('grant_type', 'password');
        body.set('username', username);
        body.set('password', password);

        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({headers: headers});
        return this.http.post(this.baseUrl + 'Token', body, options).toPromise()
            .then(response => {
                console.log(response.json());
                localStorage.setItem('token', response.json().access_token);
                return true;
            });
    }

    public register(username: string, email: string, password: string, confirmPassword: string): Promise<boolean> {
        let data = {
            Username: username,
            Email: email,
            Password: password,
            ConfirmPassword: confirmPassword
        };
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({headers: headers});

        return this.http.post(this.baseUrl + 'api/Account/Register', JSON.stringify(data), options).toPromise()
            .then(response => {
                console.log(response);
                return true;
            });
    }

    public logout(): Promise<boolean> {
        localStorage.removeItem('username');
        localStorage.removeItem('token');

        return Promise.resolve(true);
    }
}