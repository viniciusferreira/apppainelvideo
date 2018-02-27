import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { VideoDataProvider } from '../../providers/providers';

/**
 * Generated class for the VideosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-videos',
  templateUrl: 'videos.html',
})
export class VideosPage {
  videoItems;
  data;

  constructor(public navCtrl: NavController, public navParams: NavParams,public videoProvider :VideoDataProvider) {
    this.videoItems=videoProvider.getRemoteData();
      this.videoItems.subscribe(data => {
         this.data=data;
      })
  }

  ionViewDidLoad() {
    
      console.log(this.data);
      
  }
 
}
