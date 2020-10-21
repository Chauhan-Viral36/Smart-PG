import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  selectedTabs="all"
  dataList : any;
  dataAmenities : any;
  dataArea : any;
  dataPrice : any;
  pgAmenities : any;
  form : FormGroup;

  constructor(
    public toastController: ToastController,
    public http: HttpClient,
    public router: Router,
    public alertCtrl: AlertController,
    private formBuilder: FormBuilder,
    ) {
      this.form = this.formBuilder.group({
        pgArea: ['', Validators.required]
      });
    }

  ngOnInit() {
    this.getData()
  }

  async showToast(message: string){
    const toast = await this.toastController.create({
    message:message,
    duration: 5000
    }); 
    toast.present(); 
  }

  async showAmenities() {  
    const alert = await this.alertCtrl.create({  
      inputs: [  
        {  
          name: 'amenities 1',  
          type: 'radio',  
          label: 'Cooking',  
          value: 'cooking',  
          checked: true,  
        },  
        {  
          name: 'amenities 2',  
          type: 'radio',  
          label: 'Laundry',  
          value: 'laundry',  
        },  
        {  
          name: 'amenities 3',  
          type: 'radio',  
          label: 'Ac',  
          value: 'ac',  
        }, 
        {  
          name: 'amenities 4',  
          type: 'radio',  
          label: 'Geyser',  
          value: 'geyser',  
        },
        {  
          name: 'amenities 5',  
          type: 'radio',  
          label: 'Tv',  
          value: 'tv',  
        },
        {  
          name: 'amenities 6',  
          type: 'radio',  
          label: 'Wifi',  
          value: 'wifi',  
        },
        {  
          name: 'amenities 7',  
          type: 'radio',  
          label: 'Lift',  
          value: 'lift',  
        },
        {  
          name: 'amenities 8',  
          type: 'radio',  
          label: 'CCTV',  
          value: 'cctv',  
        }, 
      ],  
      buttons: [  
        {  
          text: 'Cancel',  
          handler: data => {  
            console.log('Cancel clicked');  
          }  
        },  
        {  
          text: 'Ok',  
          handler: data => {  
            //console.log(data);
            this.pgAmenities=data  
            this.getAmenities()
          }  
        }  
      ]  
    });  
    await alert.present(); 
  }
  
  async showPrice() {  
    const alert = await this.alertCtrl.create({  
      inputs: [  
        {  
          name: 'price 1',  
          type: 'radio',  
          label: 'High Price',  
          value: 'highprice',  
          checked: true,  
        },  
        {  
          name: 'price 2',  
          type: 'radio',  
          label: 'Low Price',  
          value: 'lowprice',  
        },   
      ],  
      buttons: [  
        {  
          text: 'Cancel',  
          handler: data => {  
            console.log('Cancel clicked');  
          }  
        },  
        {  
          text: 'Ok',  
          handler: data => {  
            //console.log(data);
            if(data=="lowprice")
            {
              this.getLowPrice()
            }
            else
            {
              this.getHighPrice() 
            }
          }  
        }  
      ]  
    });  
    await alert.present(); 
  }
  
  getData(){

    this.http.get("http://localhost/Smart-PGApi/show_pg_detail.php").subscribe(res =>{
      this.dataList=res;
    })
  }

  getDetail(pid:any){
    this.router.navigateByUrl('/pgdetails/'+pid);
  }

  getAmenities(){
    let data={
      pg_amenities: this.pgAmenities
    }
    this.http.post("http://localhost/Smart-PGApi/amenities.php",data).subscribe(res =>{
      this.dataAmenities=res;
    })
  }

  getArea(){

    let data={
      pg_area: this.form.value.pgArea,
    }
    if(this.form.valid) 
    {
      this.http.post("http://localhost/Smart-PGApi/area.php",data).subscribe(res=>{
        this.dataArea=res;
      })
    } 
    else 
    {
      this.showToast("Please Enter Area Where You Want To Search PG");
    }
  }

  getLowPrice(){
    this.http.get("http://localhost/Smart-PGApi/lowprice.php").subscribe(res =>{
      this.dataPrice=res;
    })
  }
  getHighPrice(){
    this.http.get("http://localhost/Smart-PGApi/highprice.php").subscribe(res =>{
      this.dataPrice=res;
    })
  }
}
