import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-addpg',
  templateUrl: './addpg.page.html',
  styleUrls: ['./addpg.page.scss'],
})
export class AddpgPage implements OnInit {

  form: FormGroup;
  img: PhotoService["photos"];
  // imageElement:any;
  // photos: any;

  constructor(
    public toastController: ToastController,
    private formBuilder: FormBuilder,
    public router: Router,
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
    //await this.photoService.loadSaved();
  }

  async showToast(message: string){
    const toast = await this.toastController.create({
    message:message,
    duration: 2000
    }); 
    toast.present(); 
  }

  // async takePicture() {
  //   const { Camera } = Plugins;
  //   const image = await Camera.getPhoto({
  //     quality: 90,
  //     allowEditing: true,
  //     resultType: CameraResultType.Uri
  //   });
  //   // image.webPath will contain a path that can be set as an image src.
  //   // You can access the original file using image.path, which can be
  //   // passed to the Filesystem API to read the raw data of the image,
  //   // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
  //   var imageUrl = image.webPath;
  //   // Can be set to the src of an image now
  //   this.imageElement = imageUrl;
  // }

  imageUpload(){
    this.photoService.addNewToGallery();
  }

  

  addDetails(){

    let details={
      pg_name: this.form.value.pgName,
      pg_price: this.form.value.pgPrice,
      pg_amenities: this.form.value.pgAmenities,
      pg_address: this.form.value.pgAddress,
      pg_area: this.form.value.pgArea,
      deposite: this.form.value.pgDeposite,
      pg_description: this.form.value.pgDescription,
      // get upload image value 
    }
    if(this.form.valid) 
    {
      this.http.post("http://localhost/Smart-PGApi/add_pg_detail.php",details).subscribe(res=>{
        console.log(res.status);     
        if(res.status === "Success"){
          this.showToast("Your PG Details Add successfully"); 
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
