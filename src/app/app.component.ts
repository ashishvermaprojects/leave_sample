import { Component, HostBinding } from '@angular/core';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { HttpsService } from './shared/services/https/https.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
  }

  constructor(private authService: AuthService, private screen: ScreenService, public appInfo: AppInfoService, private http: HttpsService) {
    // if(!sessionStorage.role) {
    //   this.http.getData().subscribe((res:any) => {
    //     sessionStorage.role = JSON.stringify(res[0]);
    //   })
    // }
  }

  isAuthenticated() {
    return this.authService.loggedIn;
  }
}
