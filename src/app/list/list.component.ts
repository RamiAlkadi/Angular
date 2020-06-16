import { Component, OnInit } from '@angular/core';
import { BrewService } from '../services/brew.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  brews: any = [];

  constructor(private brewService: BrewService) { }

  public getData() {
    this.brewService.getBeer().subscribe( data => {
        this.brews = data;
        console.log(this.brews);
      },
      err => {
        console.error(err);
      });
  }

  ngOnInit(): void {
    this.getData()
  }

}
