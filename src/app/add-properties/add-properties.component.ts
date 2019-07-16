import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PropertyService  } from '../property.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-properties',
  templateUrl: './add-properties.component.html',
  styleUrls: ['./add-properties.component.css']
})
export class AddPropertiesComponent implements OnInit {

  title = 'materialApp';   
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  panelOpenState = false;
   allSpaces = [];
   type:any;
  @ViewChild('var', {static: false}) var

  
  constructor(private _formBuilder: FormBuilder,private propertyService:PropertyService,private route: ActivatedRoute, private router:Router) {}

  arrayOfSpace:any=[];
  private username:any;
  private contact:any;
  private emailId;

  ngOnInit() {
     this.firstFormGroup = this._formBuilder.group({
        IdCtrl: ['', Validators.required],
       NameCtrl: ['', Validators.required],
     // CategoryCtrl: ['', Validators.required], 
     //  PriceCtrl: ['', Validators.required]

     HeightCtrl: ['', Validators.required],
     WidthCtrl: ['', Validators.required],
     HourCtrl: ['', Validators.required],
     DailyCtrl: ['', Validators.required],
     MonthlyCtrl: ['', Validators.required],
     CapacityCtrl: ['', Validators.required]

     });
     this.secondFormGroup = this._formBuilder.group({
        NumberCtrl: ['', Validators.required],
        AreaCtrl: ['', Validators.required],
        CityCtrl: ['', Validators.required],
        StateCtrl: ['', Validators.required],
        CountryCtrl: ['', Validators.required],
        PincodeCtrl: ['', Validators.required]
      
     });
     this.thirdFormGroup = this._formBuilder.group({
      AmenitiesCtrl: ['', Validators.required]
     });

     const name = this.route.snapshot.paramMap.get('name');
     const contactnumber = this.route.snapshot.paramMap.get('contactNumber');
     const email = this.route.snapshot.paramMap.get('email');

     console.log(name);
     console.log(contactnumber);
     console.log(email);
     this.username=name;
     this.contact=contactnumber;
     this.emailId=email;


  }
  addToSpaces(type) {
    let space = {
          type: type,
          w:this.firstFormGroup.controls. CapacityCtrl.value,
          x: this.firstFormGroup.controls.HourCtrl.value,
          y: this.firstFormGroup.controls. DailyCtrl.value,
          z:this.firstFormGroup.controls.MonthlyCtrl.value
       
    }
    this.allSpaces.push(space);

    console.log(this.allSpaces);
    
 }

  fireEvent():void{

    console.log(this.var.nativeElement, "ttttttttttttttttttttttttttttttttttttt")
    let spaceInfo ={
      name:this.username,
      contactNumber:this.contact,
      emailId:this.emailId,
      spaceId:this.firstFormGroup.controls.IdCtrl.value,
      spaceName:this.firstFormGroup.controls.NameCtrl.value,
      categoryName:this.firstFormGroup.controls.CategoryCtrl.value,
      price:this.firstFormGroup.controls.PriceCtrl.value,
      // height:this.firstFormGroup.controls.HeightCtrl.value,
      // width:this.firstFormGroup.controls.WidthCtrl.value,
      buildingNumber:this.secondFormGroup.controls.NumberCtrl.value,
      area:this.secondFormGroup.controls.AreaCtrl.value,
      city:this.secondFormGroup.controls.CityCtrl.value,
      state:this.secondFormGroup.controls.StateCtrl.value,
      country:this.secondFormGroup.controls.CountryCtrl.value,
      pincode:this.secondFormGroup.controls.PincodeCtrl.value,
      amenities:this.thirdFormGroup.controls.AmenitiesCtrl.value,
    }
    console.log(spaceInfo);
    console.log("hjgasdjskjfsjkk@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");

    this.propertyService.addSpace(spaceInfo).subscribe(console.log);
    
 }
  }
  

