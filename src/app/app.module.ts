import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import {DockModule} from 'primeng/dock';
import { EditorComponent } from './editor/editor.component';
import {EditorModule} from 'primeng/editor';
import { TableComponent } from './table/table.component';
import {SidebarModule} from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MenubarModule} from 'primeng/menubar';
import {DividerModule} from 'primeng/divider';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {TabViewModule} from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { ClipboardModule } from 'ngx-clipboard';
import {NgxPrintModule} from 'ngx-print';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    TableComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TableModule,
    HttpClientModule,
    FormsModule,
    DockModule,
    EditorModule,
    SidebarModule,
    BrowserAnimationsModule,
    MenubarModule,
    DividerModule,
    DialogModule,
    InputTextModule,
    TabViewModule,
    TagModule,
    ClipboardModule,
    NgxPrintModule,
    CalendarModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
