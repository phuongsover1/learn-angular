import {Component, Input} from '@angular/core';

interface Header {
  key: string;
  label: string;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() headers: Header[] = [];
  @Input() data: any[] = [];


}
