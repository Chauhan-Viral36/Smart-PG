import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, ToastController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import { HomePage } from '../home/home.page';
import { FormGroup, FormControl, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form:FormGroup;

  constructor(
    private modalController: ModalController,
    public toastController: ToastController,
    private formBuilder: FormBuilder,
    public http: HttpClient,
    public router: Router,
  ) { 
      this.form = this.formBuilder.group({
        email: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])),
        password: ['', Validators.required]
      });
    }

  ngOnInit() {}

  async showToast(message: string){
    const toast = await this.toastController.create({
    message:message, 
    duration: 2000
    }); 
    toast.present(); 
    }

  login(){

    let data = {
      
      email:this.form.value.email,
      password:this.form.value.password
    }
    if(this.form.valid) 
    {
      this.http.post("http://localhost/Smart-PGApi/login.php",data).subscribe(res => {
        if(res.result === "Login Success"){
          console.log(res.result);
          this.showToast(res.result); 
          this.router.navigateByUrl('/home');
        }
        else{
          console.log(res.result);
          this.showToast(res.result); 
        }
      },
    );
    } 
    else 
    {
      this.showToast("Please Enter Correct Email and Password");
    }
  }
}
