import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PatientProvider {
  private uri = 'http://localhost:3000';
  private headers = { 'Access-Control-Allow-Origin': '*' };

  constructor(private http: HttpClient) {}

  public async getPatient(id: string): Promise<any> {
    return lastValueFrom(
      this.http.get(`${this.uri}/patients/${id}`, {
        headers: this.headers,
      })
    );
  }

  public async createPatient(body: any): Promise<any> {
    return lastValueFrom(
      this.http.post(`${this.uri}/patients/create`, body, {
        headers: this.headers,
      })
    );
  }
}
