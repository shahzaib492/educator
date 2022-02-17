import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css']
})
export class LatestComponent implements OnInit {
  date14!: Date;
  dockItems: MenuItem[] = [];
  loading: boolean = true;
  data=""
  constructor() { }

  ngOnInit(): void {
  }

}
