import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private httpClient:HttpClient) { }

  addSpace(spaceInfo):Observable<any>{
    //this.counter++;
  console.log(spaceInfo, "**********");

  // name:this.username,
  // contactNumber:this.contact,
  // emailId:this.emailId,
  // spaceId:this.firstFormGroup.controls.IdCtrl.value,
  // spaceName:this.firstFormGroup.controls.NameCtrl.value,
  // categoryName:this.firstFormGroup.controls.CategoryCtrl.value,
  // price:this.firstFormGroup.controls.PriceCtrl.value,
  // buildingNumber:this.secondFormGroup.controls.NumberCtrl.value,
  // area:this.secondFormGroup.controls.AreaCtrl.value,
  // city:this.secondFormGroup.controls.CityCtrl.value,
  // state:this.secondFormGroup.controls.StateCtrl.value,
  // country:this.secondFormGroup.controls.CountryCtrl.value,
  // pincode:this.secondFormGroup.controls.PincodeCtrl.value,
  // amenities:this.third


  let obj = {
    spaceId:spaceInfo.spaceId,
    spaceName:  spaceInfo.spaceName,
    category: [{
      categoryName:spaceInfo.categoryName,
      categoryId:spaceInfo.categoryId,
      price:spaceInfo.price,
      dimension:{
        width:spaceInfo.width,
        height:spaceInfo.height,
      }
    }],
    address:{
      buildingNumber:spaceInfo.buildingNumber,
      area:spaceInfo.area,
      city:spaceInfo.city,
      state:spaceInfo.state,
      country:spaceInfo.country,
      pincode:spaceInfo.pincode,
    },
    user:{
      name:spaceInfo.name,
      contactNumber:spaceInfo.contactNumber,
      emailId:spaceInfo.emailId,
    },
    amenities:{
        amenities:spaceInfo.amenities,
    },
    location:{
      locationName:spaceInfo.area,
    }

  }
  
  // this.space= new Space(register.spaceId,register.spaceName,register.spaceImageUrl,register.totalprice,register.pincode,register.buildingNumber,register.area,register.city,register.state,register.country,register.amenities,register.categoryId,register.categoryName,register.price,register.additionalAmenities,register.width,register.height,register.locationName,register.latitude,register.longitude);
  return this.httpClient.post<any>('http://localhost:8090/api/v1/newSpace',obj);
}


}
