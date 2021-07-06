//main class (Properties, Template & Stylesheet)

//Bring in Component from Core
import { Component } from '@angular/core';

//Component Decleration,  
@Component({
  //Selector (HTML tag to embed component)
  selector: 'app-root',
  //Root to your template HTML
  templateUrl: './app.component.html',
  //Root to the stylesheet(s)
  styleUrls: ['./app.component.css']
})
//Properties of components & Methods/Custom Methods/Lifecycle Methods (Similar to react class based components)
export class AppComponent {
  //Try to use typscript with your components (: string =)
}
