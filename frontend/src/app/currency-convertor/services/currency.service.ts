import { Injectable } from '@angular/core';
import { Http,Response,RequestOptions,Headers} from '@angular/http';
import { Observable } from 'rxjs';
import  'rxjs/add/operator/map';
import  'rxjs/add/operator/catch';
import { Currency } from '../model/currency';
import { Responses } from '../model/response';
@Injectable()
export class CurrencyService {
  constructor( private _httpService: Http){}
   _url:string='http://localhost:8080/api/v1/currency';
  convertCurrency(Currency): Observable<Responses> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._httpService.post(this._url, Currency, options).map((response: Response)=>response.json()).catch(this.handleError);
  }
  handleError(error:Response){
    return Observable.throw(error);
  }
}
