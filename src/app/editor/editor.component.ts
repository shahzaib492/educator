import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  text: string = "<div>Hello World!</div><div>PrimeNG <b>Editor</b> Rocks</div><div><br></div>";
text1:string="";
text2:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
