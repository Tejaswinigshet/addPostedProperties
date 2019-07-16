import { Component, OnInit } from '@angular/core';
import { ClientDashboardService } from '../client-dashboard.service';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css']
})
export class ClientDashboardComponent implements OnInit {

  
  constructor(private clientService:ClientDashboardService ) { }
  ArrayOfClientData : any = [];
  ArrayOfdetails: any =[];

  ngOnInit() {

    {
      this.clientService.getClientData().subscribe(data=>
          {
           console.log(data);
          
           this.ArrayOfClientData=data;
        });
  }

  {
    this.clientService.getdetails().subscribe(data=>
        {
         console.log(data);
    
         this.ArrayOfdetails=data;
      });
}

  }

}
