import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';
import { ConfirmedValidator } from 'src/app/confirm-dialog/confirmed-validator';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {


  public reset :FormGroup =new FormGroup
  ({
  newPassword: new FormControl("", [Validators.required]),
  confirmPassword: new FormControl("", [Validators.required]),
  });


  //submit form


  constructor(public dialog: MatDialog, private formBuilder: FormBuilder) {

    //    this.reset = fb.group({

    //    newPassword: new FormControl("", [Validators.required]),
    //    confirmPassword: new FormControl("", [Validators.required]),

    //})
    //Validator: ConfirmedValidator('newPassword', 'confirmPassword')
  }
  //get f() {
  //  return this.reset.controls;
  //}

  //OnSubmit() {
  //  console.log(this.reset.value);
  //}




  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '200px',
      data: "Password has been reset!"
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Yes clicked');

      }
    });
  }



  ngOnInit() {

    this.reset = this.formBuilder.group({

      newPassword: new FormControl("", [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl("", [Validators.required]),

    }, {
      Validator: ConfirmedValidator('newPassword', 'confirmPassword')
    });

  }
  
  OnSubmit() {
    if (this.reset.valid) {
      alert("success" + this.reset.value);
    }
  }

  // get f() { return this.reset.controls; }

  //  onSubmit() {
  //    this.submitted = true;


  //}
}
