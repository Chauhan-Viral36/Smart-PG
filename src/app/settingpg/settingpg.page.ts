import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settingpg',
  templateUrl: './settingpg.page.html',
  styleUrls: ['./settingpg.page.scss'],
})
export class SettingpgPage implements OnInit {

  selectedTabs = "mypg"
  dataMypg:any;
  dataBookpg:any;

  constructor(public http: HttpClient,) { }

  ngOnInit() {
    this.getMypg()
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
      user_id: localStorage.getItem('id')
    }
    console.log(data)
    this.http.post("http://localhost/Smart-PGApi/bookpg.php",data).subscribe(res =>{
      this.dataBookpg=res;
      console.log(res)
    })
  }
}
