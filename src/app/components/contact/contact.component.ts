import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	public widthSlider: number;
	public anchoSlider: any;
	public captions: boolean;
	public autor: any;

	//uso de viewchild para obtener elementos del html al estilo DOM
	@ViewChild('textos') textos;

  constructor() {
  	this.anchoSlider = null;
  	this.captions = false;
  }

  ngOnInit() {

  	//uso de js
  	var opcion_clasica = document.querySelector('#texto').innerHTML;

  	//uso de viewchild
  	console.log(this.textos.nativeElement.textContent);

  	

  }

  cargarSlider(){
  	this.anchoSlider = 0;
  	this.anchoSlider= this.widthSlider;
  	
  }

  resetearSlider(){
  	this.anchoSlider = false;
  }

  getAutor(event){
  	this.autor = event;
  	console.log(event);
  }
  

}
