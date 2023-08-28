import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataProvider {
  constructor(private http: HttpClient) {}

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
