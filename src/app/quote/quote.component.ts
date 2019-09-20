import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] =[
    {id:1,quote:'\"Mobile is the enabling centerpiece of digital convergence. Mobile is the glue for all other digital industries to use when approaching convergence, but mobile is also the digital gateway for the real world to join in this global metamorphosis of human behavior."'},
    {id:2,quote:'\"I think the biggest change, and the one we’re already starting to see take shape, is that globally the majority of internet usage will be done via a mobile device and for most people the mobile web will be their primary – if not their only – way of experiencing the internet."'},
    {id:3,quote:'\"Mobile is becoming not only the new digital hub, but also the bridge to the physical world. That’s why mobile will affect more than just your digital operations — it will transform your entire business."'},
    {id:4,quote:'\"The future of mobile is the future of online. It is how people access online content now."'},
    {id:5,quote:'\"Our lives will be facilitated by a myriad of adaptive applications running on different devices, with different sensors, all of them collecting tidbits about everything we do, and feeding big digital brains that can adapt applications to our needs simply because they get to know us."'},
 
  ];

  constructor() { }

  ngOnInit() {
  }

}
