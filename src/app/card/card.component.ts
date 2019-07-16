import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private cardService: CardService) { }
  arrayOfSpace: any = [];
  arrayOfSpace1: any = [];
  arrayOfCategory: any = [];

  ngOnInit() {
    this.cardService.getTrainingRoom().subscribe(data => {
      console.log(data);
      console.log(data[0].SpaceId);
      console.log(data[1].SpaceId);
      console.log(data[2].SpaceId);
      this.arrayOfSpace = data;
    });

    this.cardService.getHotDesk().subscribe(data => {
      console.log(data);
      console.log(data[0].SpaceId);
      console.log(data[1].SpaceId);
      console.log(data[2].SpaceId);
      this.arrayOfSpace1 = data;
    });

    this.cardService.getCategory1().subscribe(data => {
      console.log(data);
      console.log(data[0].categoryname);
    })
  }
}

