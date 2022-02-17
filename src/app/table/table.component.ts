import { Component, OnInit } from '@angular/core';
import { FilterMatchMode, MenuItem, SelectItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { CarService } from '../car.service';
import { Car } from '../interfaces/car.interface';
import { FilterService } from 'primeng/api';
import * as fileSaver from "file-saver";
import * as FileSaver from 'file-saver';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  cols: any[] = [];
  matchModeOptions: SelectItem[] = [];
  exportColumns: any[] = [];
  dateValue:string="1";
  dates?  : Date[]=[new Date("2022-04-09Z08:00:00"),new Date("2022-03-09Z08:00:00")];
  arr:any=[0,1,2];
  cars: Car[] = [];
  first: number = 3;
  date14!: Date;

  displayMaximizable?: boolean;

  constructor(private carService: CarService, private filterService: FilterService
    ,
    private _clipboardService: ClipboardService
  ) {

  }
  dockItems: MenuItem[] = [];
  loading: boolean = true;
  data=""

  ngOnInit() {
    this.data=`
      
    `



    const customFilterName = 'custom-equals';
    this.exportColumns = this.cols.map(col => ({ title: col.header, dataKey: col.field }));

    this.filterService.register(customFilterName, (value: any, filter: any): boolean => {
      if (filter === undefined || filter === null || filter.trim() === '') {
        return true;
      }

      if (value === undefined || value === null) {
        return false;
      }

      return value.toString() === filter.toString();
    });


    this.cols = [
      { field: 'name', header: 'name' },
      { field: 'id', header: 'id' },
      { field: 'date', header: 'date' },
      { field: 'activity', header: 'activity' }
    ];

    this.matchModeOptions = [
      { label: 'Custom Equals', value: customFilterName },
      { label: 'Starts With', value: FilterMatchMode.STARTS_WITH },
      { label: 'Contains', value: FilterMatchMode.CONTAINS },
    ];


    this.dockItems = [
      {
        label: 'Finder',
        icon: "assets/app-icon-realistic-materials_2x.png"
      },
      {
        label: 'App Store',
        icon: "assets/appstore.jpeg"
      },
      {
        label: 'Photos',
        icon: "assets/photos-app-icon-mac-300x294.jpg"
      },
      {
        label: 'Trash',
        icon: "assets/trash.png"
      }
    ];
    this.carService.getCarsSmall().then(cars => {
      console.log(cars)
      this.cars = cars;
    });
  }

  reset() {
    this.first = 0;
  }

  exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.cars);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, "products");
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }
  copy(){
    this._clipboardService.copy(JSON.stringify(this.cars))
  }

  display: boolean = false;

  showDialog() {
    this.display = true;
  }

  clear(table: Table) {
    table.clear();
  }






}
