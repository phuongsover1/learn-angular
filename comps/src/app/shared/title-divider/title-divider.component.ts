import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-title-divider',
  templateUrl: './title-divider.component.html',
  styleUrls: ['./title-divider.component.css']
})
export class TitleDividerComponent {
  @Input() title: string = '';
}
