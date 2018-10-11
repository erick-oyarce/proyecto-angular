import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

	//se obtiene el valor a través del nombre de la variable enviada en el componente padre
	// se debe utilizar el mismo nombre
	// es necesario importar el Input
	@Input() ancho: number;

	//para cambiar el nombre de una variable que se recibe de otro componente
	//se ingresa el nombre real dentro del input y luego se define el nuevo nombre
	@Input('etiquetas') captions: boolean;

	//Output es utilizado para enviar parametros a otro componente
	//el cual debe tener una función con nombre
	//EventEmitter permite crear un evento para enviar datos a otro componente
	@Output() conseguirAutor = new EventEmitter();


	public autor: any;

  constructor() {
  	//datos a enviar al componente padre
  	this.autor = {
  		nombre: "Erick Oyarce",
  		web: "erick.com",
  		youtube: "erick.youtube"
  	};
  }

  ngOnInit() {
  	//uso de jquery en angular
  	$("#logo").click(function(e){
  		e.preventDefault();
  		$("header").css("background","green")
  					.css("height","50px");

  	});

  	//libreria bxslider
  	$('.galeria').bxSlider({
  		mode: 'fade',
  		captions:this.captions,
  		slideWidth: this.ancho

  	});
  }

  lanzar(event){
  	//esta instrucción permite enviar los parametros a traves de un evento
  	this.conseguirAutor.emit(this.autor);

  }

}
