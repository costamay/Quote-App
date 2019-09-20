import { Quote } from './quote';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 quotes:Quote[] =[
   {id:1, quote:'Mobile is the enabling centerpiece of digital convergence. Mobile is the glue for all other digital industries to use when approaching convergence, but mobile is also the digital gateway for the real world to join in this global metamorphosis of human behavior.'},

 ];
}
