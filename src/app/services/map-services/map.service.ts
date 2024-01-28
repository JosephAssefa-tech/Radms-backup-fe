import * as L from 'leaflet';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {
    // myInput:boolean | undefined;;
    public map:  L.Map;
   private marker: any;
     latValue: number | undefined;
     longValue: number | undefined;

    private iconUrl = 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png';
    private icon = L.icon({
      iconUrl: this.iconUrl,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
    });

  constructor() { }
      //this.map=this.mapService.getMap();

       createMap():L.Map
      {
        this.map = L.map('map').setView([8.9733, 38.7930], 13);


        // add the tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
          maxZoom: 18
        }).addTo(this.map);
       this.marker= L.marker([8.9733, 38.7930],{ icon: this.icon }).addTo(this.map)
          .bindPopup('You are here!')
          .openPopup();
        // add a click listener to the map
        this.map.on('click', this.onMapClick.bind(this));
        return this.map;
      }
    // create the map




onMapClick(event: any):any {
  // remove the previous marker if it exists
  if (this.marker) {
    this.map.removeLayer(this.marker);
  }

  // add a marker to the clicked location
  this.marker = L.marker(event.latlng, { icon: this.icon }).addTo(this.map);

  // get the latitude and longitude values

  var lat = event.latlng.lat;
  var lng = event.latlng.lng;

  this.latValue = lat,
  this.longValue=lng;
  console.log("value is equal to"+this.latValue+"long value is "+this.longValue);
  console.log('Latitude:', lat);
  console.log('Longitude:', lng);
}


setLatLng(){

}
}
