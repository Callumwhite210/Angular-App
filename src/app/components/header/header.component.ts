import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //Try to use typscript with your components (: string =)
  title: string = 'Task Tracker';

  //Constructor runs whenever an object is initialized
  constructor() { }

  //Lifecyle method: want to use most of time when initing code (Run when the component loads) 
  ngOnInit(): void {
  }

  //Referring to the onClick event in header.comp
  toggleAddTask() {
    console.log('toggle');
  }

}
