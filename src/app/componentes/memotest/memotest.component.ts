import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memotest',
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.css']
})
export class MemotestComponent implements OnInit {

  letras: Array<string> = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D']; 
  valores_memoria: Array<number>=[];
  valores_cartas: Array<number>=[];
  cartas_vueltas: number;

  constructor() { }  

  ngOnInit() {
    this.dar_vuelta();
  }
  dar_vuelta(): void{
    let i: number;
    let j: number;
    let temp: number;

    i= this.letras.length, j, temp;
    while(--i>0){
      j=Math.floor(Math.random()*(i+1));
      temp= this[j];
      this [j]=this[i];
      this[i]=temp;
    }
  }

}


