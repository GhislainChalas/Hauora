import { DataProvider } from '../providers/data.provider';
import { Data } from '../types/data';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private dataProvider: DataProvider) {}

  public async getSizeData(): Promise<Data[]> {
    const data = await this.dataProvider.getSizeData();
    return data.sort();
  }

  public async getWeightData(): Promise<Data[]> {
    const data = await this.dataProvider.getWeightData();
    return data.sort();
  }

  public async getCholesterolData(): Promise<Data[]> {
    const data = await this.dataProvider.getCholesterolData();
    return data.sort();
  }

  public async getGlycemicData(): Promise<Data[]> {
    const data = await this.dataProvider.getGlycemicData();
    return data.sort();
  }
}
