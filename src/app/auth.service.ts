import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  uri='https://localhost:3000/api';
  token;

  constructor(private http: HttpClient,private router: Router) { }
  login(email: string, password: string) {
    this.http.post(this.uri + '/authenticate', {amail: email,password: password})
    .subscribe((resp: any) => {
    this.router.navigate(['edicion'])
    localStorage.setItem('auth_token', resp.token);
    })

  }


logout() {
  localStorage.removeItem('token');
}

public get logIn() : boolean {
  return (localStorage.getItem('token') !== null)
}

}
