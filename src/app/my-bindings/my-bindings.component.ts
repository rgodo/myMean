import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-bindings',
  templateUrl: './my-bindings.component.html',
  styleUrls: ['./my-bindings.component.css']
})
export class MyBindingsComponent {

  name='';
  @Input() newName;
  @Output() clicked= new EventEmitter();

  constructor() { 
  	//this.name='REGS';
  }

  cambiarNombre(){
  	//alert("cambiarNombre a :"+this.name);
  	//this.name='Rodrigo Enrique';
  	const saludo='Hola, soy'+this.newName;
  	this.clicked.emit(saludo);
  }
}
