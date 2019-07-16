import { Component, OnInit } from '@angular/core';
import {ClientProfileService} from '../client-profile.service'

@Component({
  selector: 'app-client-mid-section',
  templateUrl: './client-mid-section.component.html',
  styleUrls: ['./client-mid-section.component.css']
})
export class ClientMidSectionComponent implements OnInit {
  ArrayOfClientData: any;

  constructor(private clientprofileService:ClientProfileService) { }

  ngOnInit() {

    this.clientprofileService.getClientData().subscribe(data=>
      {
       console.log(data);
       this.ArrayOfClientData=data;
    });
  }

}
