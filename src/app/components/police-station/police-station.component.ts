import { Component, OnInit } from '@angular/core';

import { PoliceStationService } from 'src/app/services/police-service/police-station.service';

@Component({
  selector: 'app-police-station',
  templateUrl: './police-station.component.html',
  styleUrls: ['./police-station.component.scss']
})
export class PoliceStationComponent implements OnInit {

  constructor(private policeStationService:PoliceStationService) { }

  ngOnInit(): void {
  }

}
