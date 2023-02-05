import {Component} from '@angular/core';

interface Person {
  name: string;
  age: number;
  job: string;
}
@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent {
  public data: Person[] = [
    {name: 'James', age: 30, job: 'Designer'},
    {name: 'Jill', age: 28, job: 'Engineer'},
    {name: 'Elyse', age: 32, job: 'Engineer'},
  ]

  public headers = [
    {key: 'name', label: 'Name'},
    {key: 'age', label: 'Age'},
    {key: 'job', label: 'Job'}
  ]


}
