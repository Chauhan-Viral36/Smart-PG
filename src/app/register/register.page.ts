import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  form:FormGroup;
  submitted = false;
  
  constructor(
    public toastController: ToastController,
    private formBuilder: FormBuilder,
    public router: Router,
    public http: HttpClient,
  ) { }

  ngOnInit() : void {

    this.form = this.formBuilder.group({
      fName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z ]{2,20}$'),
      ])),
      mName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z ]{2,20}$'),
      ])),
      lName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z ]{2,20}$'),
      ])),
      adrs: ['', Validators.required],
      pin: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[ 0-9 ]{6}$'),
      ])),
      city: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z ]{2,64}$'),
      ])),
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      contact: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[ 0-9 ]{10}$'),
      ])),
      password: ['', Validators.required],
    });
  }

  async showToast(message: string){
    const toast = await this.toastController.create({
    message:message, 
    duration: 2000
    }); 
    toast.present(); 
  }

  fetchData()
  {
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
      password:this.form.value.password
    }
    this.submitted=true
    if(this.form.invalid) 
    {
      this.showToast("Please Enter Valid Data.");
    } 
    else 
    {
      this.http.post("http://localhost/Smart-PGApi/registration.php",data).subscribe(res=>{
        console.log(res.status);     
        if(res.status === "Success"){
          this.showToast("Register successfully"); 
          this.router.navigateByUrl('/login');
        }
        else{
          this.showToast("Something went wrong"); 
        }
      })
    } 
  }
}