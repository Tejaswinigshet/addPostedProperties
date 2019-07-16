import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  helper=new JwtHelperService();
  name: any;
  password: any;
  constructor(private userService:UserService, private route: ActivatedRoute, private router:Router,private modal:NgbModal) { }
  arrayOfUser:any[];
  ngOnInit() {
    console.log("in ngoninit")
  }

  authenticateUser(name,password)
  {
    console.log("Login Working");
    console.log(name ,password);
    let userdata=
    {
      name:name,
      password:password
    }
    console.log("object ",userdata);
    this.userService.authenticateUser(userdata);
    this.userService.getToken(userdata).subscribe(data=>{
        console.log(data);
         sessionStorage.setItem('token',data.token);
          sessionStorage.setItem('details', JSON.stringify(this.helper.decodeToken(data.token)))
          console.log(this.helper.decodeToken(data.token));
        let type = this.helper.decodeToken(data.token).sub;
        console.log(data.token);
        console.log(type, "this is the role");
        if (type == "Client") {
          console.log("ClientLogin");
          this.router.navigateByUrl('/client-login');
        }
       if(type == "owner") {
          this.router.navigateByUrl('/owner-login/'+name);

        }
        
    })
  }
  user:any;
  email:any;
  pass:any;
  contact:any;
  uid:any;
  address:any;

  registerUser(user,email,pass,contact,uid,address){
    let userDetails={
      user:user,
      email:email,
      pass:pass,
      contact:contact,
      uid:uid,
      address:address
    }

    console.log(userDetails);
    this.userService.registerUser(userDetails).subscribe();
  }

 
  openModal(content){
    this.modal.open(content);
    console.log(content);
  }

  openRegistrationModal(contents){
    this.modal.open(contents);
    console.log(contents);
    console.log("in registration modal");
  }
}
