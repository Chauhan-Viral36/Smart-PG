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
  //submitted = false;

  // errormessages : {
  //   fName: [
  //     {
  //       type: 'required',
  //       message: 'First Name is required.'
  //     },
  //     {
  //       type: 'pattern',
  //       message: 'Only Character Allows In First Name.'
  //     },
  //   ],

  //   mName: [
  //     {
  //       type: 'required',
  //       message: 'Middle Name is required.'
  //     },
  //     {
  //       type: 'pattern',
  //       message: 'Only Character Allows In Middle Name.'
  //     },
  //   ],

  //   lName: [
  //     {
  //     type: 'required',
  //     message: 'Last Name is required.'
  //     },
  //     {
  //       type: 'pattern',
  //       message: 'Only Character Allows In Last Name.'
  //     },
  //   ],

  //   adrs: [{
  //     type: 'required',
  //     message: 'Address is required.'
  //   }],

  //   pin: [
  //     {
  //     type: 'required',
  //     message: 'Pin is required.'
  //     },
  //     {
  //       type: 'minLength',
  //       message: 'Enter Valid Pin.'
  //     },
  //     {
  //       type: 'maxLength',
  //       message: 'Enter Valid Pin.'
  //     },
  //   ],

  //   city: [{
  //     type: 'required',
  //     message: 'City is required.'
  //   }],

  //   gender: [{
  //     type: 'required',
  //     message: 'Select Gender.'
  //   }],

  //   dob: [{
  //     type: 'required',
  //     message: 'Select Date Of Birth.'
  //   }],

  //   email: [
  //     {
  //     type: 'required',
  //     message: 'Email is required.'
  //     },
  //     {
  //       type: 'pattern',
  //       message: 'Enter Valid Email.'
  //     },
  //   ],

  //   contact: [
  //     {
  //     type: 'required',
  //     message: 'Contact is required.'
  //     },
  //     {
  //       type: 'minLength',
  //       message: 'Enter Valid Contact Number.'
  //     },
  //     {
  //       type: 'maxLength',
  //       message: 'Enter Valid Contact Number.'
  //     },
  //   ],

  //   password: [{
  //     type: 'required',
  //     message: 'Password is required.'
  //     }],
  // }

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
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ])),
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
    //this.submitted=true
    if(this.form.valid) 
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
    else 
    {
      this.showToast("Please Enter Valid Data.");
    } 
  }
}