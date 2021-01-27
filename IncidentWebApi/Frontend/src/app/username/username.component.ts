import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { resetpasswordService } from '../resetpassword.service';
import { Router } from '@angular/router';
//import { User_Account } from '../modell/User_Account';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  Emailpattern = "/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/";
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";

  public userinfo = new FormGroup({
   

    email: new FormControl("", [Validators.required,]),
    cellphone: new FormControl("", [Validators.required]),
  });


  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.userinfo.value);

  }

  constructor(private formbuilder: FormBuilder,
    //private ResetpasswordService: resetpasswordService,
    private router: Router) {

    //this.userinfo;
  }

  ngOnInit(): void {



    this.userinfo = this.formbuilder.group({

      email: new FormControl("", [Validators.required, Validators.pattern(this.Emailpattern)]),
      cellphone: new FormControl("", [Validators.required, Validators.pattern(this.mobNumberPattern)]),

    }, {
      //Validator: ConfirmedValidator('newPassword', 'confirmPassword')
    });
  }
  OnSubmit() {
    if (this.userinfo.valid) {
      alert("success" + this.userinfo.value);
    }

  }
}
