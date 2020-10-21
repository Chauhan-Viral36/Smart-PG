import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-updatepgdetails',
  templateUrl: './updatepgdetails.page.html',
  styleUrls: ['./updatepgdetails.page.scss'],
})
export class UpdatepgdetailsPage implements OnInit {

  form : FormGroup;
  img: PhotoService["photos"];
  id:any;

  constructor(
    public toastController: ToastController,
    private formBuilder: FormBuilder,
    public router: Router,
    private route: ActivatedRoute,
    public photoService: PhotoService,
    public http: HttpClient,
  ) { 
    this.form = this.formBuilder.group({
      pgName: ['', Validators.required],
      pgPrice: ['', Validators.required],
      pgDeposite: ['', Validators.required],
      pgAddress: ['', Validators.required],
      pgArea: ['', Validators.required],
      pgAmenities: ['', Validators.required],
      pgDescription: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.getIteamid()
  }

  getIteamid(){

    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  async showToast(message: string){
    const toast = await this.toastController.create({
    message:message,
    duration: 2000
    }); 
    toast.present(); 
  }

  imageUpload(){
    this.photoService.addNewToGallery();
  }

  updateDetails(){

    let details={
      pg_name: this.form.value.pgName,
      pg_price: this.form.value.pgPrice,
      pg_amenities: this.form.value.pgAmenities,
      pg_address: this.form.value.pgAddress,
      pg_area: this.form.value.pgArea,
      deposite: this.form.value.pgDeposite,
      pg_description: this.form.value.pgDescription,
      id : this.id
      // get upload image value 
    }
    if(this.form.valid) 
    {
      this.http.post("http://localhost/Smart-PGApi/update_pg_detail.php",details).subscribe(res=>{
        console.log(res.status);     
        if(res.status === "Success"){
          this.showToast("Your PG Details Updated successfully"); 
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
