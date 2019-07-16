import { Component, OnInit } from '@angular/core';
import { SpaceService } from '../space.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {


  arrayOfData: any=[];

  // selectedSpaces = []

  constructor(private spaceService: SpaceService) { }

  ngOnInit() {

    this.spaceService.getSpace().subscribe(a=>
      {
        console.log(a, "?????????");
        this.arrayOfData=a;
      })
  }
   demo(){
    // console.log("");
    window.alert("Booking Suceesfully");
  }
}
