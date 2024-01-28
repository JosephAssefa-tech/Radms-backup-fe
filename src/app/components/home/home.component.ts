import * as L from 'leaflet';
// import * as Highcharts from 'highcharts';
// import HC_exporting from 'highcharts/modules/exporting';
// import HC_exportData from 'highcharts/modules/export-data';
//import { Chart } from 'angular-highcharts';
//import { Chart } from 'highcharts';
import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { latLng, tileLayer, marker } from 'leaflet';
import { MapService } from 'src/app/services/map-services/map.service';
import { Router } from '@angular/router';
import { AccidentDetailsTransactionService } from 'src/app/services/accident-details-transaction/accident-details-transaction.service';
import { VictimDetailService } from 'src/app/services/victim-details/victim-detail.service';
import { SummaryData } from 'src/app/models/get/SummaryData';
import { Pipe, PipeTransform } from '@angular/core';
import { BlackSpotService } from 'src/app/services/black-spot/black-spot.service';
import Chart from 'chart.js/auto';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegionsService } from 'src/app/services/region/regions.service';
import { RegionBasedSummaryData } from 'src/app/models/get/SummaryCount';
import { TrendAnalysisService } from 'src/app/services/trend-analysis/trend-analysis.service';
import { TrendAnalysisResponse } from 'src/app/models/get/TrendAnalysisResponse';
import { ChartDataset, ChartOptions } from 'chart.js';
import { RegionMaster } from 'src/app/models/post/region-master-model';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { LanguageService } from 'src/app/services/language-change/language-change-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit,AfterViewInit  {
  private trendChart: Chart;
startDate?:Date;
endDate?:Date
  regionMasters$:BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  /////////////
  trendAnalysisData: TrendAnalysisResponse[] = [];
  regionMasters: RegionMaster[]=[];
  apiResponse: any[]=[];
  chart: any = [];
  lineChart:any;
  myForm = new FormGroup({
    regionId: new FormControl('',Validators.required)
  });
  regionIdd: any;
  data: RegionBasedSummaryData;
  deathCount: number;
  seriousCount: number;
  slightCount: number;
  propertyDamageCount: number;





  center = latLng(11.1, 12.1);
  zoom = 10;

  // Define the options for the map
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      })
    ],
    zoom: this.zoom,
    center: this.center
  };

  // Initialize the layers for the markers
  layers = [];
  //chart: Chart;
  private mapp: L.Map;
  dateAndTime:any;
  totalAccidentCount:number | undefined;
  totalPropertyDamage:number | undefined;
  totalBlackspotCount:number | undefined;
  severityData : SummaryData[];
  blackSpots: any[];

  constructor(private languageService:LanguageService,
    private trendAnalysisService:TrendAnalysisService, public regionService:RegionsService,private blackSpotService: BlackSpotService,private accidentDetailTransactionService:AccidentDetailsTransactionService,private victimDetailService:VictimDetailService
   , private mapServicee:MapService,private route:Router) {


  }
  ngAfterViewInit(): void {
   // this.mapp = this.mapServicee.createMap();
  }
  ngOnInit(): void {

    this.languageService.selectedLanguage$.subscribe(language => {
      this.subscribeToFilterChanges(); // Subscribe to date filter changes
      this.GetRegionMaster(language);
    });


   // this.GetRegionMaster();
  // this.TrendanalysisServiceWithoutDateFilter();
    this.TrendanalysisServiceWithDateFilter();
    const map = L.map('mapid').setView([8.9733, 38.7930], 8);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  

    
    this.victimDetailService.dateFilterSubject.subscribe(filter => {
      if (filter.startDate && filter.endDate) {
        this.blackSpotService.getBlackSpots(filter.startDate, filter.endDate).subscribe(data => {
          this.blackSpots = data;
  
          map.eachLayer(layer => {
            if (layer instanceof L.Marker) {
              map.removeLayer(layer);
            }
          });
  
          for (const blackSpot of this.blackSpots) {
            const lat = blackSpot.blackSpotLat;
            const long = blackSpot.blackSpotLong;
  
            const marker = L.marker([lat, long], {
              icon: L.icon({
                iconUrl: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
                iconSize: [30, 35],
                iconAnchor: [22, 94],
                popupAnchor: [-3, -76]
              })
            }).addTo(map);
  
            marker.bindPopup(`Lat: ${lat}, Long: ${long}`);
          }
        });
      } else {
        this.blackSpotService.getBlackSpots().subscribe(data => {
          this.blackSpots = data;
  
          map.eachLayer(layer => {
            if (layer instanceof L.Marker) {
              map.removeLayer(layer);
            }
          });
  
          for (const blackSpot of this.blackSpots) {
            const lat = blackSpot.blackSpotLat;
            const long = blackSpot.blackSpotLong;
  
            const marker = L.marker([lat, long], {
              icon: L.icon({
                iconUrl: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
                iconSize: [30, 35],
                iconAnchor: [22, 94],
                popupAnchor: [-3, -76]
              })
            }).addTo(map);
  
            marker.bindPopup(`Lat: ${lat}, Long: ${long}`);
          }
        });
      }
    });
 


  this.GetSeverity();
  this.getTotalBlackspotCount();
  this.GetTotalAccidentCount();
  this.GettotalPropertyDamageCount();

  }
  subscribeToFilterChanges(): void {
    this.victimDetailService.dateFilterSubject.subscribe(filter => {
      // Check if both startDate and endDate are defined
      if (filter.startDate && filter.endDate) {
        this.victimDetailService.getGroupedData(filter.startDate, filter.endDate).subscribe(data => {
          this.severityData = data;
          // Perform any additional actions with the filtered data
          console.log(this.severityData);
        });
      }
    });
  }
  TrendanalysisServiceWithoutDateFilter() {
    this.trendAnalysisService.getTrendAnalysisdData().subscribe(data => {
      this.trendAnalysisData = data;
      this.createChart();
    });
  }
  TrendanalysisServiceWithDateFilter() {
    this.victimDetailService.dateFilterSubject.subscribe(filter => {
      // Check if both startDate and endDate are defined
      if (filter.startDate && filter.endDate) {
        this.trendAnalysisService.getTrendAnalysisdData(filter.startDate, filter.endDate).subscribe(data => {
          this.trendAnalysisData = data;
          this.createChart();
        });
      } else {
        this.TrendanalysisServiceWithoutDateFilter();
      }
    });
  }
  createChart() {
    const years = this.trendAnalysisData.map(item => item.year);
    const datasets = [
      {
        label: 'Fatal',
        data: this.trendAnalysisData.map(item => item.fatalCount),
        borderColor: 'red',
        fill: false,
      },
      {
        label: 'Serious',
        data: this.trendAnalysisData.map(item => item.seriousCount),
        borderColor: 'orange',
        fill: false
      },
      {
        label: 'Slight',
        data: this.trendAnalysisData.map(item => item.slightCount),
        borderColor: 'green',
        fill: false
      },
      {
        label: 'Property Damage',
        data: this.trendAnalysisData.map(item => item.propertyDamageCount),
        borderColor: 'blue',
        fill: false
      }
    ];
  
    // Destroy the previous chart if it exists
    if (this.trendChart) {
      this.trendChart.destroy();
    }
  
    // Create the new chart
    this.trendChart = new Chart('trendChart', {
      type: 'line',
      data: {
        labels: years,
        datasets: datasets
      },
      options: {
        responsive: true,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Year'
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Count'
            }
          }
        },
        plugins: {
          title: {
            display: true,
            text: 'Trend Analysis'
          },
          legend: {
            position: 'bottom' // Position the legend at the bottom
          }
        }
      }
    });
  }
  

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


  GetRegionMaster(language:string)
  {

    this.regionService.getAllByLanguage(language)
    .subscribe(
      (response) => {
        this.regionMasters$ .next(response);
        this.regionMasters = response; 
        // Reset the selected option when the options change
        this.regionIdd = null;
      },
      (error) => {
        console.error('Error retrieving data:', error);
      }
    );

    console.log("regionssssssss")

    console.log(this.regionMasters);
    console.log("regionssssssss")
  }
  GetSeverity()
  {
    this.victimDetailService.getGroupedData().subscribe(data=>{
      this.severityData  = data;

    })
  }
  getSeverityByType(type: number): any {
    return this.severityData.find(item => item.severityId === type);
  }
  GetTotalAccidentCount() {
    this.victimDetailService.dateFilterSubject.subscribe(filter => {
      // Check if both startDate and endDate are defined
      if (filter.startDate && filter.endDate) {
        console.log(filter.startDate)
        this.accidentDetailTransactionService.getTotalAccidentCount(filter.startDate, filter.endDate).subscribe(result => {
          this.totalAccidentCount = result.totalAccidentCount;
        });
      }else{
        
        this.accidentDetailTransactionService.getTotalAccidentCount().subscribe(result => {
          this.totalAccidentCount = result.totalAccidentCount;
        });
      }
    });
  }
  

  GettotalPropertyDamageCount()
  {
    this.victimDetailService.dateFilterSubject.subscribe(filter => {
      // Check if both startDate and endDate are defined
      if (filter.startDate && filter.endDate) {
    this.accidentDetailTransactionService.getTotalPropertyDamageCount(filter.startDate, filter.endDate).subscribe(result => {
      this.totalPropertyDamage = result.totalPropertyDamage;
      console.log(this.totalPropertyDamage);

    });

  }
});
}
  getTotalBlackspotCount()
  {
    this.blackSpotService.getTotalBlackspotCount().subscribe(result => {
      this.totalBlackspotCount = result.blackspotCount;


    });
  }
  getRegionBasedSummaryData(regionId: number) {
    this.victimDetailService.dateFilterSubject.subscribe(filter => {
      // Check if both startDate and endDate are defined
      if (filter.startDate && filter.endDate) {
        this.regionService.getDataByRegion(regionId, filter.startDate, filter.endDate).subscribe(data => {
          this.deathCount = data.find((item: RegionBasedSummaryData) => item.severityType === 'Death')?.count || 0;
          this.seriousCount = data.find((item: RegionBasedSummaryData) => item.severityType === 'Serious Injury')?.count || 0;
          this.slightCount = data.find((item: RegionBasedSummaryData) => item.severityType === 'Slight Injury')?.count || 0;
          this.propertyDamageCount = data.find((item: RegionBasedSummaryData) => item.severityType === 'Property Damage')?.count || 0;
  
          this.regionService.updateCounts(this.deathCount, this.seriousCount, this.slightCount, this.propertyDamageCount);
        }, error => {
          console.log('Error sending filter request: ', error);
        });
      }else{
        this.regionService.getDataByRegion(regionId).subscribe(data => {
          this.deathCount = data.find((item: RegionBasedSummaryData) => item.severityType === 'Death')?.count || 0;
          this.seriousCount = data.find((item: RegionBasedSummaryData) => item.severityType === 'Serious Injury')?.count || 0;
          this.slightCount = data.find((item: RegionBasedSummaryData) => item.severityType === 'Slight Injury')?.count || 0;
          this.propertyDamageCount = data.find((item: RegionBasedSummaryData) => item.severityType === 'Property Damage')?.count || 0;
  
          this.regionService.updateCounts(this.deathCount, this.seriousCount, this.slightCount, this.propertyDamageCount);
  

      });}
    });
  
  }
  

  AdvancedSearchPage()
  {
    this.route.navigate(['/advanceSearch']);

  }
// onFilterClick() {

//   // Call your API or perform other actions here
//   this.victimDetailService.getGroupedData().subscribe(data=>{
//     this.severityData  = data;

//   })
// }

getTranslation(key: string): string {
  return this.languageService.getTranslation(key);
}
}
