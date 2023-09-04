import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataProvider {
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
      this.http.post(`${this.uri}/users/create`, {
        headers: this.headers,
        body,
      })
    );
  }

  public async getSizeData(): Promise<any[]> {
    return [
      { date: '01/02/2018', count: 130 },
      { date: '04/07/2018', count: 135 },
      { date: '22/10/2018', count: 138 },
      { date: '03/03/2019', count: 142 },
      { date: '01/05/2020', count: 145 },
      { date: '19/11/2020', count: 153 },
    ];
  }

  public async getCholesterolData(): Promise<any[]> {
    return [
      { date: '01/02/2018', count: 150 },
      { date: '04/07/2018', count: 237 },
      { date: '22/10/2018', count: 194 },
      { date: '03/03/2019', count: 172 },
      { date: '01/05/2020', count: 163 },
      { date: '19/11/2020', count: 142 },
    ];
  }

  public async getWeightData(): Promise<any[]> {
    return [
      { date: '01/02/2018', count: 35 },
      { date: '04/07/2018', count: 38 },
      { date: '22/10/2018', count: 41 },
      { date: '03/03/2019', count: 42 },
      { date: '01/05/2020', count: 45 },
      { date: '19/11/2020', count: 49 },
    ];
  }

  public async getGlycemicData(): Promise<any[]> {
    return [
      { date: '01/02/2018', count: 75 },
      { date: '04/07/2018', count: 89 },
      { date: '22/10/2018', count: 97 },
      { date: '03/03/2019', count: 115 },
      { date: '01/05/2020', count: 127 },
      { date: '19/11/2020', count: 107 },
    ];
  }
}
