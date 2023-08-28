import { DataProvider } from '../providers/data.provider';
import { Data } from '../types/data';
import { Injectable } from '@angular/core';
import countriesData from '../../data/curiexplore-pays.json';

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

  public getCountries(): any[] {
    return countriesData.sort(function (a: any, b: any) {
      if (a.name_fr < b.name_fr) {
        return -1;
      }
      if (a.name_fr > b.name_fr) {
        return 1;
      }
      return 0;
    });
  }
}
