import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
//Declare task that is being passed in as an input
//Using strict mode (! don't use if you can)
@Input() task!: Task;
//declared as prop
faTimes = faTimes;
  constructor() {}

  ngOnInit(): void {}

}
