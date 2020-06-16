import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  clickCounter = 0;
  name = '';
  constructor() { }

  ngOnInit(): void {
  }

countClick(){
    this.clickCounter += 1;
}
getRandomColor(){
  const letters = '0123456789ABCDEF';
  let colorr = '#';

  for (let i = 0; i < 6; i++) {
    colorr += letters[Math.floor(Math.random() * 16)];
  }
  return colorr;

}

setRandomColor(){
  const x = ['a', 'b', 'c', 'd', 'e'];
  for (let z = 0; z <= 5; z++) {
    document.getElementById(x[z]).style.color = this.getRandomColor();
  }
}

setClasses(){
    const myClasses = {
      active : this.clickCounter > 4,
      noactive : this.clickCounter <=  4,
    };
    return myClasses;
}

}
