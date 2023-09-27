import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit{

  // custom text, color and callback
  @Input() text:string='';
  @Input() color:string='';
  @Output() btnClick:EventEmitter<string>=new EventEmitter();


   constructor(){}

   onClick(){
    this.btnClick.emit('clicou')
   }

   ngOnInit(): void {
       
   }
}
