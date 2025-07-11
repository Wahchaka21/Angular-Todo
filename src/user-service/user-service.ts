import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient)
  registerUser(data: { email: string, password: string, username: string }) {
  return this.http.post('https://todof.woopear.fr/api/v1/user/register', data)
  }
}
