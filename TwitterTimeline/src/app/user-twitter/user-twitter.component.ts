import { Component, OnInit, EventEmitter } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { TwitterDataService } from '../service/twitter-data.service'

@Component({
  selector: 'app-user-twitter',
  templateUrl: './user-twitter.component.html',
  styleUrls: ['./user-twitter.component.css']
})
export class UserTwitterComponent implements OnInit {
  title = 'app works!';
  searchquery = '';
  tweetsdata;
  
  constructor(private http: Http, private twitterDataService:TwitterDataService) { }

  ngOnInit() {
  

   }
   makecall() {
    var headers = new Headers();
    
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    
    this.http.post('http://localhost:3000/authorize', {headers: headers}).subscribe((res) => {
      console.log(res);
    })
  }


searchcall(){
    var headers = new Headers();
    var searchterm = 'query=' + this.searchquery;
    
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    
    this.http.post('http://localhost:3000/search', searchterm, {headers: headers}).subscribe((res) => {
      this.tweetsdata = res.json().data.statuses;
    });
  }

}
