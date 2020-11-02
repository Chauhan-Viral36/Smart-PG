import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {

  form:FormGroup;

  constructor(
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
      forgotpassword: ['', Validators.required]
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

  submit(){

    let data = {
      
      email:this.form.value.email,
      password:this.form.value.forgotpassword,
    }
    if(this.form.valid) 
    {
      this.http.post("http://localhost/Smart-PGApi/update_passsword.php",data).subscribe(res => {
        if(res.status === "Success"){
          console.log(data)
          console.log(res.status);
          this.showToast("Your Password Is Updated"); 
          this.router.navigateByUrl('/login');
        }
        else{
          console.log(res.status);
          this.showToast(res.status); 
        }
      });
    } 
    else 
    {
      this.showToast("Please Enter Valid Email or Password");
    }

  }

}
