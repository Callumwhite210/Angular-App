import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  //Text and color are being input which is a string 
  @Input() text = 'string';
  @Input() color = 'string';
  //Can now set buttons to fire different events
  @Output() btnClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  //Function event
  onClick() {
    //Onclick emit event
    this.btnClick.emit();
  }
}
