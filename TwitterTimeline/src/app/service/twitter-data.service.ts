import { Injectable } from '@angular/core';
import {
  Http,
  Headers,
  RequestOptionsArgs,
  RequestOptions,
  RequestMethod
} from "@angular/http";
import { map } from "rxjs/operators";

@Injectable()
export class TwitterDataService {

  constructor(private http: Http) { }

  public getTwitterData(token: string) {
    let headers = new Headers();
    headers.set("Content-Type", "application/json");
    headers.set("Authorization", "Bearer " + token);
    let requestOptions: RequestOptionsArgs = new RequestOptions({
      method: RequestMethod.Get,
      headers: headers
    });

    return this.http
      .request( "http://twitter.com/search?q=%23LiesIveToldMyParents", requestOptions)
      .pipe(
        map(res => {
          console.log(res);
          return res.json();
        })
      );
  }

}
