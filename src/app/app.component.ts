import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CameraResultType, Plugins } from '@capacitor/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  userName:any;
  imageElement:any;
  dataImage:any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public http: HttpClient
  ) {
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.show();
      this.getImage(null)
      this.userName = localStorage.getItem('name');
    });
  }

  logout(){
    console.log("logout");
    
    // localStorage.clear()
    localStorage.removeItem('name');
    
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

    let data = {
      user_id : localStorage.getItem('id'),
      profile_photo : this.imageElement
    }
    this.http.post("http://localhost/Smart-PGApi/upload_user_photo.php",data).subscribe(res =>{
      console.log(res);
    })
  }
  getImage(event){
    let data = {
      user_id : localStorage.getItem('id')
    }
    this.http.post("http://localhost/Smart-PGApi/get_profile_image.php",data).subscribe(res =>{
      this.dataImage=res
      if (event)
          event.target.complete();
    })
  }
}
