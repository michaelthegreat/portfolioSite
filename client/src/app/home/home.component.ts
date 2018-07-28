import { Component, OnInit } from '@angular/core';
import {PortfolioItems} from '../portfolio-list';
import { PortfolioItem } from '../portfolio-item';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  portfolioItems = PortfolioItems;
  constructor() { }
  
  ngOnInit() {
  }

}
