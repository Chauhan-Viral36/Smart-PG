import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-pgdetails',
  templateUrl: './pgdetails.page.html',
  styleUrls: ['./pgdetails.page.scss'],
})
export class PgdetailsPage implements OnInit {

  dataList:any;

  id:any;

  constructor(
    public http: HttpClient,
    public alertCtrl: AlertController,
    private route: ActivatedRoute,
    public toastController: ToastController,
    ) { }

  ngOnInit() {
    this.getIteamid()
    this.getData()
  }

  getIteamid(){

    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(params['id']);
    });
  }

  async showToast(message: string){
    const toast = await this.toastController.create({
    message:message, 
    duration: 2000
    }); 
    toast.present(); 
  }

  async showAlert() {  
    const alert = await this.alertCtrl.create({  
      header: 'Confirmation',  
      message: 'Are You Sure You Want To Book This PG?',  
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
            this.book(); 
          }  
        }  
      ]  
    });  
    await alert.present();  
    const result = await alert.onDidDismiss();
  }  

  getData(){

    let data = {
      id : this.id
    }
    this.http.post("http://localhost/Smart-PGApi/show_pg_details.php",data).subscribe(res =>{
      this.dataList=res;
    })
  }

  book(){

    //this.showToast("Your PG Is Booked......");
    let data = {
      id:this.id,
      book_user_id : localStorage.getItem('id')
    }
    console.log(data)
    this.http.post("http://localhost/Smart-PGApi/book_pg.php",data).subscribe(res =>{
      console.log(res.status)
      if(res.status==="Success"){
        this.showToast("Your PG Is Booked......");
      }
      else{
        this.showToast("Something Went Wrong......");
      }
    })
  }
}
