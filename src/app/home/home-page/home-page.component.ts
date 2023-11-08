import { Component, OnInit } from '@angular/core';
import { PortfolioItems, WorkExperienceItems } from './home-page.constants';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  portfolioItems = PortfolioItems;
  workItems = WorkExperienceItems
  constructor() { }

  ngOnInit(): void {
  }

  generateSkillString(skills: string[]): string {
    let skillString = '';
    skills.forEach((skill, index) => {
      skillString += skill;
      if (index !== skills.length - 1) {
        skillString += ', ';
      }
    })
    return skillString;
  }
}
