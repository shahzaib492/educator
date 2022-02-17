import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { CarService } from './car.service';
import { Car } from './interfaces/car.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  visibleSidebar1:any;
  items:any;
  constructor(private primengConfig: PrimeNGConfig){

  }


  display: boolean = false;

  showDialog() {
      this.display = true;
  }


  ngOnInit() {
    this.primengConfig.ripple = true;

    this.items = [
      {
          label: 'File',
          items: [{
                  label: 'New', 
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {label: 'Project',routerLink:'/table'},
                      {label: 'Other'},
                  ]
              },
              {label: 'Open',routerLink:'/'},
              {label: 'Quit'}
          ]
      },
      {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
      }
  ];

  }
}
