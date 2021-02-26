import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rgcomponent',
  templateUrl: './rgcomponent.component.html',
  styleUrls: ['./rgcomponent.component.css']
})
export class RgcomponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name='Rodrigo Godo';
  exercises=['abs', 'legs', 'arms', 'curls'];

  exerciseDay=false;
}
