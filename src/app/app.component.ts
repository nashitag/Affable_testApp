import { Component} from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http'
import { map} from 'rxjs/operators';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: Http) { }
  // constructor(private http: HttpClient) { }
  ngOnInit() {
     
  }
}
