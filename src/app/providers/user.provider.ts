import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserProvider {
  private uri = 'http://localhost:3000';

  private headers = { 'Access-Control-Allow-Origin': '*' };

  constructor(private http: HttpClient) {}

  public getUsers(): Promise<any> {
    return lastValueFrom(
      this.http.get(`${this.uri}/users`, {
        headers: this.headers,
      })
    );
  }

  public createUser(body: any): Promise<any> {
    return lastValueFrom(
      this.http.post(`${this.uri}/users/create`, body, {
        headers: this.headers,
      })
    );
  }
}
