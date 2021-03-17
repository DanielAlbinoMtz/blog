import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuscripcionService {

  private baseUrl = 'https://axincapital.us7.list-manage.com/subscribe/post-json?u=524d6e87dd4ea8d25621ea01f&id=042db4d02b';

  constructor(private http: HttpClient) { }

  subscribeAxin(data) {
    alert('Listo te has unido a la mejor comunidad, bienvenido'+' '+data);
    const params = new HttpParams()
  
    .set('FNAME', 'AXIN')
    .set('LNAME', 'CAPITAL')
    .set('EMAIL', data)
    .set('group[80463][2]', 'true')
    .set('b_524d6e87dd4ea8d25621ea01f&id_042db4d02b', '');
    const mailChimpUrl = `${this.baseUrl}&${params.toString()}`;
    return this.http.jsonp(mailChimpUrl, 'c');
  }
}
