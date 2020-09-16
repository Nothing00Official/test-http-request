import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data: Object;
  laoding: boolean = false;

  title = 'test-request';

  constructor(private http: HttpClient) {

  }

  get() {
    this.laoding = true;
    this.http.get('https://craftuniversity.it/test/?request=sellers').subscribe(res => {
      this.data = res;
      console.log(res);
      this.laoding = false;
    })
  }

  post() {
    this.laoding = true;
    this.http.post('https://craftuniversity.it/test/', {
      session: true,
      request: "logout",
      mail: "nothing00@nothmail.it",
      password: "134"
    }).subscribe(res => {
      this.data = res;
      console.log(res);
      this.laoding = false;
    })
  }
}

