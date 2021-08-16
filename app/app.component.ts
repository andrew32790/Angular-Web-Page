import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
wpass:boolean;
title = 'oscar-times';
test:string="Engine Running!";
 
 ngOnInit(){
   this.wpass=true;
 }
 
 

  onTest(){
    this.wpass=false;
  }
}
