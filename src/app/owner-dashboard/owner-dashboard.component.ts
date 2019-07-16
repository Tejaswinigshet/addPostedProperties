import { Component, OnInit } from '@angular/core';
import { OwnerDashboardService } from '../owner-dashboard.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-owner-dashboard',
  templateUrl: './owner-dashboard.component.html',
  styleUrls: ['./owner-dashboard.component.css']
})
export class OwnerDashboardComponent implements OnInit {

 
  constructor(private ownerService:OwnerDashboardService,private route: ActivatedRoute, private router:Router) { }
  
  ArrayOfOwnerData:any=[];
  ArrayOfSpaceData:any=[];
  ngOnInit(){
  
    //const details1 = this.route.snapshot.paramMap.get('artistname');
      const ownerdata = this.route.snapshot.paramMap.get('name');
      // this.ownerService.searchByName(ownerdata).subscribe(data => {
      // this.ArrayOfOwnerData=data; 
      // console.log(ownerdata);
      // console.log(this.ArrayOfOwnerData);
        
      this.ownerService.searchByName(ownerdata).subscribe(data => {
        //data=ownerdata;
        this.ArrayOfOwnerData=data;
       // data=ownerdata;
        console.log(this.ArrayOfOwnerData) ; 
        console.log(ownerdata);
    
     //this.ArrayOfOwnerData=data;
  });
  this.ownerService.getSpaceByName(ownerdata).subscribe(data => {
    //data=ownerdata;
    this.ArrayOfSpaceData=data;
   // data=ownerdata;
     console.log(data);
    // console.log(this.ArrayOfSpaceData+"#####################################") ; 
    // console.log(ownerdata);
  // this.ownerService.getSpaceByName(this.ArrayOfOwnerData.name).subscribe(data=>
  //   {
  //     this.ArrayOfSpaceData=data;
     });
  }

 
  clickEvent(ArrayOfOwnerData){
    console.log(ArrayOfOwnerData)
    this.router.navigateByUrl('/add-property/'+ArrayOfOwnerData.name+'/'+ArrayOfOwnerData.contactNumber+'/'+ArrayOfOwnerData.emailId);
  }
  
  }
