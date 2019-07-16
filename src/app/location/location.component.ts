import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
  providers :[NgbModalConfig, NgbModal]
})
export class LocationComponent implements OnInit {
 
  
  constructor(public dialogRef: MatDialogRef<LocationComponent>) {

  }

  ngOnInit() {
     
  }
  onNoClick(){
    this.dialogRef.close();
  }
}
