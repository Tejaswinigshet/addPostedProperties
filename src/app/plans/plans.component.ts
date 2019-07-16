import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  click(){

    this.router.navigateByUrl("/card");
  }
}
