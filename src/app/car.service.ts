import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from './interfaces/car.interface';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

 
  getCarsSmall() {
    return this.http.get('/assets/angular-large.json')
                .toPromise()
                .then((res:any) => <Car[]> res.data)
                .then(data => { return data; });
}
}
