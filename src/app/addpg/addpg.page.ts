import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CameraResultType, Plugins } from '@capacitor/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-addpg',
  templateUrl: './addpg.page.html',
  styleUrls: ['./addpg.page.scss'],
})
export class AddpgPage implements OnInit {

  form: FormGroup;
  imageElement:any;
  submitted = false;

  constructor(
    public toastController: ToastController,
    private formBuilder: FormBuilder,
    public router: Router,
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

  async takePicture() {
    const { Camera } = Plugins;
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64
    });
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.base64String;
    // Can be set to the src of an image now
    this.imageElement = "data:image/jpeg;base64,"+imageUrl;
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
      user_id : localStorage.getItem('id'),
      images : this.imageElement
    }
    this.submitted=true
    if(this.form.invalid) 
    {
      this.showToast("Please Enter Valid Data");
    } 
    else 
    {
      this.http.post("http://localhost/Smart-PGApi/add_pg.php",details).subscribe(res=>{
        console.log(res)
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
  }
}
