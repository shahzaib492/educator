import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './editor/editor.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path: "table", component: EditorComponent
  },
  {
    path:"",component:TableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
