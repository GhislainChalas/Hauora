import { Component, Input, SimpleChanges } from '@angular/core';
import {
  Chart,
  ChartConfiguration,
  ChartItem,
  ChartTypeRegistry,
} from 'chart.js/auto';
import { Data } from '../types/data';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent {
  public displayedSizeColumns: any[] = ['date', 'taille'];
  public displayedWeightColumns: any[] = ['date', 'poids'];
  public displayedCholesterolColumns: any[] = ['date', 'taux'];
  public displayedGlycemicColumns: any[] = ['date', 'taux'];

  @Input() isHistoryTabActive: Boolean = false;

  public historySizeChart: any;
  public historyWeightChart: any;
  public historyGlycemicChart: any;
  public historyCholesterolChart: any;

  public isWeightTabActive: boolean = false;
  public isGlycemicTabActive: boolean = false;
  public isCholesterolTabActive: boolean = false;

  public sizeData: Data[] = [];
  public weightData: Data[] = [];
  public glycemicData: Data[] = [];
  public cholesterolData: Data[] = [];

  constructor(private dataService: DataService) {
    this.historySizeChart = {};
    this.historyWeightChart = {};
    this.historyGlycemicChart = {};
    this.historyCholesterolChart = {};
  }

  async ngOnInit(): Promise<void> {
    this.cholesterolData = await this.dataService.getCholesterolData();
    this.glycemicData = await this.dataService.getGlycemicData();
    this.sizeData = await this.dataService.getSizeData();
    this.weightData = await this.dataService.getWeightData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isHistoryTabActive) {
      this.historySizeChart = this.createChart(
        'historySizeChart',
        this.sizeData,
        'line',
        'Taille',
        [125, 128, 135, 138, 141, 150],
        [145, 151, 153, 155, 160, 165]
      );
    }
  }

  private createChart(
    id: string,
    array: any[],
    type: keyof ChartTypeRegistry,
    label: string,
    minData?: number[],
    maxData?: number[]
  ): Chart {
    const labels = [];
    const data = [];
    for (let element of array) {
      labels.push(element.date);
      data.push(element.count);
    }

    const minimum = {
      label: 'Min',
      borderColor: 'rgba(50, 255, 38, 0.2)',
      fill: false, //no fill here
      data: minData ? minData : [],
    };

    const maximum = {
      label: 'Max',
      backgroundColor: 'rgba(255, 171, 38, 0.15)',
      borderColor: 'rgba(255, 39, 41, 0.2)',
      fill: '-1', //fill until previous dataset
      data: maxData ? maxData : [],
    };

    const config: ChartConfiguration = {
      type,
      data: {
        labels,
        datasets: [
          {
            label,
            data,
            backgroundColor: 'grey',
            borderColor: 'grey',
          },
          minimum,
          maximum,
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    };
    return new Chart(id, config);
  }

  public changeTab(event: any): void {
    event.index === 1
      ? (this.historyWeightChart = this.createChart(
          'historyWeightChart',
          this.weightData,
          'line',
          'Poids',
          [25, 30, 32, 35, 40, 45],
          [45, 50, 55, 58, 61, 65]
        ))
      : event.index == 2
      ? (this.historyGlycemicChart = this.createChart(
          'historyGlycemicChart',
          this.glycemicData,
          'line',
          'Taux de Glucose',
          [70, 70, 70, 70, 70, 70],
          [110, 110, 110, 110, 110, 110]
        ))
      : event.index == 3
      ? (this.historyCholesterolChart = this.createChart(
          'historyCholesterolChart',
          this.cholesterolData,
          'line',
          'Taux de Cholestérol',
          [0, 0, 0, 0, 0, 0],
          [225, 225, 225, 225, 225, 225]
        ))
      : null;
  }
}
