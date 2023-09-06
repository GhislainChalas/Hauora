import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BaseProvider {
  private uri = 'http://localhost:3000';
  private headers = { 'Access-Control-Allow-Origin': '*' };

  constructor(public http: HttpClient, public path: String) {}

  public async getData(): Promise<any> {
    return lastValueFrom(
      this.http.get(`${this.uri}/${this.path}`, {
        headers: this.headers,
      })
    );
  }

  public async postData(body: any): Promise<any> {
    return lastValueFrom(
      this.http.post(`${this.uri}/${this.path}/create`, body, {
        headers: this.headers,
      })
    );
  }

  public async putData(): Promise<any> {
    return lastValueFrom(
      this.http.put(`${this.uri}/${this.path}`, null, {
        headers: this.headers,
      })
    );
  }
}
