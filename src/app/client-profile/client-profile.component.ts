import { Component, OnInit } from '@angular/core';
import { ClientDashboardService } from '../client-dashboard.service';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit {
  ArrayOfClientData:any=[];
  constructor(private clientService:ClientDashboardService) { }

  ngOnInit() {
    this.clientService.getClientData().subscribe(data=>
      {
       console.log(data);
      //  console.log
       this.ArrayOfClientData=data;
    });
  }

}
