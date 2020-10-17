import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  form:FormGroup;

  constructor(
    public toastController: ToastController,
    private formBuilder: FormBuilder,
    public http: HttpClient,
    public router: Router,
  ) {
    this.form = this.formBuilder.group({
      // email: new FormControl('', Validators.compose([
      //   Validators.required,
      //   Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      // ])),
      description: ['', Validators.required]
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
      
      //email:this.form.value.email,
      description:this.form.value.description
    }
    if(this.form.valid) 
    {
      this.http.post("http://localhost/Smart-PGApi/feedback.php",data).subscribe(res => {
        if(res.status === "Success"){
          console.log(res.status);
          this.showToast(res.status); 
          this.router.navigateByUrl('/home');
        }
        else{
          console.log(res.status);
          this.showToast(res.status); 
        }
      });
    } 
    else 
    {
      this.showToast("Please Enter Feedback");
    }
  }

}
