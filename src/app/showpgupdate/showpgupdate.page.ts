import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-showpgupdate',
  templateUrl: './showpgupdate.page.html',
  styleUrls: ['./showpgupdate.page.scss'],
})
export class ShowpgupdatePage implements OnInit {

  dataList:any;

  id:any;

  constructor(
    public http: HttpClient,
    public alertCtrl: AlertController,
    private route: ActivatedRoute,
    public router: Router,
    public toastController: ToastController,
  ) { }

  ngOnInit() {
    this.getIteamid()
    this.getData()
  }

  getIteamid(){

    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  getDetail(pid:any){
    this.showAlertUpdate()
    this.router.navigateByUrl('/updatepgdetails/'+pid);
  }

  async showToast(message: string){
    const toast = await this.toastController.create({
    message:message, 
    duration: 2000
    }); 
    toast.present(); 
  }

  async showAlertUpdate() {  
    const alert = await this.alertCtrl.create({  
      header: 'Confirmation',  
      message: 'Are You Sure You Want To Update This PG?',  
      buttons: [  
        {  
          text: 'Cancel',  
          handler: data => {  
            this.router.navigateByUrl('/home');
          }  
        },  
        {  
          text: 'Ok',  
          handler: data => {  
            
          }  
        }  
      ]  
    });  
    await alert.present();  
    const result = await alert.onDidDismiss();
  }  

  async showAlertDelete() {  
    const alert = await this.alertCtrl.create({  
      header: 'Confirmation',  
      message: 'Are You Sure You Want To Delete This PG?',  
      buttons: [  
        {  
          text: 'Cancel',  
          handler: data => {  
            this.router.navigateByUrl('/home');
          }  
        },  
        {  
          text: 'Ok',  
          handler: data => {  
            this.deletePg()
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

  deletePg(){

    let data = {
      id : this.id
    }
    console.log(data)
    this.http.post("http://localhost/Smart-PGApi/delete_pg_detail.php",data).subscribe(res =>{
      if(res.status==="Success"){
        this.showToast("Your PG Is Deleted SuccessFully")
        this.router.navigateByUrl('/home');
      }
      else{
        console.log(res)
      }
    })
  }

}
