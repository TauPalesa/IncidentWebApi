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


  userinfo = new FormGroup({
    email: new FormControl(''),
    cellphone: new FormControl(''),
  });


  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.userinfo.value);

  }

  constructor(private fb: FormBuilder,
    //private ResetpasswordService: resetpasswordService,
    private router: Router) {

    //this.userinfo;
  }

  ngOnInit(): void {
  }

}
