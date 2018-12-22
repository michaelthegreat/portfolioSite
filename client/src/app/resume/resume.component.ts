import { Component, OnInit } from '@angular/core';
import {PortfolioItems} from '../fixtures/portfolio-list';
import { PortfolioItem } from '../portfolio/portfolio-item';
import {WorkExperienceItems} from '../fixtures/work-experience-list';
import { WorkExperienceItem } from '../work-experience-item/work-experience-item';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  portfolioItems = PortfolioItems;
  workExperienceItems = WorkExperienceItems;
  constructor() { }

  ngOnInit() {
  }

}
