import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { Api } from '../api/api';

/*
  Generated class for the VideoDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VideoDataProvider {
  _video: any;
  constructor(public api: Api) {
    
  }

  getRemoteData(){
    return this.api.get('');
  }
}
