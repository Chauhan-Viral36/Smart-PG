import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settingpg',
  templateUrl: './settingpg.page.html',
  styleUrls: ['./settingpg.page.scss'],
})
export class SettingpgPage implements OnInit {

  selectedTabs = "mypg"
  dataMypg:any;
  dataBookpg:any;
  dataNotificacions:any;

  constructor(public http: HttpClient,public router: Router) { }

  ngOnInit() {
    this.getMypg()
    this.getNotificationData()
  }

  getDetail(pid:any){
    this.router.navigateByUrl('/showpgupdate/'+pid);
  }

  getMypg(){
    let data={
      user_id: localStorage.getItem('id')
    }
    this.http.post("http://localhost/Smart-PGApi/mypg.php",data).subscribe(res =>{
      this.dataMypg=res;
    })
  }

  getBookpg(){
    let data={
      book_user_id : localStorage.getItem('id')
    }
    //console.log(data)
    this.http.post("http://localhost/Smart-PGApi/show_book_pg.php",data).subscribe(res =>{
      this.dataBookpg=res;
      //console.log(res)
    })
  }
  getNotificationData(){
    let data={
      book_user_id : localStorage.getItem('id')
    }
    this.http.post("http://localhost/Smart-PGApi/getnotificationdetails.php",data).subscribe(res =>{
      localStorage.setItem('userid',res[0].user_id);
      console.log(res[0].user_id)
    })
  }
  notigication(){

    let data={
      user_id : localStorage.getItem('userid'),
      book_user_id : localStorage.getItem('id')
    }
    console.log(data)
    this.http.post("http://localhost/Smart-PGApi/notification.php",data).subscribe(res =>{
      this.dataNotificacions=res;
      console.log(res)
    })

  }
}
