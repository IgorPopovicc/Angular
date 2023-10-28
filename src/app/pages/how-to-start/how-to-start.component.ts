import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-to-start',
  templateUrl: './how-to-start.component.html',
  styleUrls: ['./how-to-start.component.css']
})
export class HowToStartComponent implements OnInit {

  ELEMENT_DATA: any[] = [
    { angular: '16.1.x || 16.2.x', node: '^16.14.0 || ^18.10.0', typescript: '>=4.9.3 <5.2.0' },
    { angular: '16.0.x', node: '^16.14.0 || ^18.10.0', typescript: '>=4.9.3 <5.1.0' },
    { angular: '15.1.x || 15.2.x', node: '^14.20.0 || ^16.13.0 || ^18.10.0', typescript: '>=4.8.2 <5.0.0' },
    { angular: '15.0.x', node: '^14.20.0 || ^16.13.0 || ^18.10.0', typescript: '~4.8.2' },
    { angular: '14.2.x || 14.3.x', node: '^14.15.0 || ^16.10.0', typescript: '>=4.6.2 <4.9.0' },
    { angular: '14.0.x || 14.1.x', node: '^14.15.0 || ^16.10.0', typescript: '>=4.6.2 <4.8.0' }
  ];

  displayedColumns: string[] = ['angular', 'node', 'typescript'];
  dataSource = this.ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
