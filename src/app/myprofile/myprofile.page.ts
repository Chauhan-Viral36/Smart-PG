import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.page.html',
  styleUrls: ['./myprofile.page.scss'],
})
export class MyprofilePage implements OnInit {

  form:FormGroup;

  constructor(
    public toastController: ToastController,
    private formBuilder: FormBuilder,
    public router: Router,
    public http: HttpClient,
  ) {
    this.form = this.formBuilder.group({
      fName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z ]{2,64}$'),
      ])),
      mName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z ]{2,64}$'),
      ])),
      lName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z ]{2,64}$'),
      ])),
      adrs: ['', Validators.required],
      pin: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6)
      ])),
      city: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      contact: ['', Validators.required],
    });
   }

  ngOnInit() {
  }

  async showToast(message: string){
    const toast = await this.toastController.create({
    message:message, 
    duration: 2000
    }); 
    toast.present(); 
  }

  updateData(){

    let data = {
      f_name:this.form.value.fName,
      m_name:this.form.value.mName,
      l_name:this.form.value.lName,
      address:this.form.value.adrs,
      pincode:this.form.value.pin,
      city:this.form.value.city,
      dob:this.form.value.dob,
      gender:this.form.value.gender,
      email:this.form.value.email,
      contact_no:this.form.value.contact,
    }
    //this.submitted=true
    if(this.form.valid) 
    {
      this.http.post("http://localhost/Smart-PGApi/",data).subscribe(res=>{
        console.log(res.status);     
        if(res.status === "Success"){
          this.showToast("Data Updated successfully"); 
          this.router.navigateByUrl('/home');
        }
        else{
          this.showToast("Something went wrong"); 
        }
      })
    } 
    else 
    {
      this.showToast("Please Enter Valid Data.");
    } 
  }
}
