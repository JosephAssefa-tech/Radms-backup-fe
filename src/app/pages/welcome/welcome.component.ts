import * as L from 'leaflet';

import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';

import { MapService } from 'src/app/services/map-services/map.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit , AfterViewInit {

  @Input() mapping:any;
  myInput:boolean | undefined;
  private map: L.Map | undefined;
  private marker: any;
  latvValue: number | undefined;
  longValue: number | undefined;

  private iconUrl = 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png';
  private icon = L.icon({
    iconUrl: this.iconUrl,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });

constructor(private route:Router,public mapService:MapService)
{


}
ngAfterViewInit(): void {

  this.map = this.mapService.createMap();


}
  ngOnInit():void {
    console.log("bakhhhhhh")
    this.latvValue=this.mapService.latValue;
    // create the map
  //   this.map = L.map('map').setView([8.9733, 38.7930], 13);


  //   // add the tile layer
  //   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
  //     maxZoom: 18
  //   }).addTo(this.map);
  //  this.marker= L.marker([8.9733, 38.7930],{ icon: this.icon }).addTo(this.map)
  //     .bindPopup('You are here!')
  //     .openPopup();
  //   // add a click listener to the map
  //   this.map.on('click', this.onMapClick.bind(this));

  }

  // onMapClick(event: any) {
  //   // remove the previous marker if it exists
  //   if (this.marker) {
  //     this.map.removeLayer(this.marker);
  //   }

  //   // add a marker to the clicked location
  //   this.marker = L.marker(event.latlng, { icon: this.icon }).addTo(this.map);

  //   // get the latitude and longitude values
  //   const lat = event.latlng.lat;
  //   const lng = event.latlng.lng;
  //   this.latValue = `${event.latlng.lat}`,
  //   this.longValue=` ${event.latlng.lng}`;
  //   console.log("value is equal to"+this.latValue+"long value is "+this.longValue);
  //   console.log('Latitude:', lat);
  //   console.log('Longitude:', lng);
  // }
  AccidentDetailPage()
  {
    this.route.navigate(['/accident']);


  }


}

