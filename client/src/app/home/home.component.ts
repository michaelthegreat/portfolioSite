import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {PortfolioItems} from '../fixtures/portfolio-list';
import { PortfolioItem } from '../portfolio/portfolio-item';
import {PortfolioService} from '../portfolio/portfolio.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  portfolioItems: PortfolioItem[];//PortfolioItems;
   //portfolioItems = PortfolioItems;
  constructor(
    private portfolioService: PortfolioService
  ) { }
  
  ngOnInit() {
    this.portfolioService.getPortfolio().subscribe(p => this.portfolioItems=p);
  }

}
