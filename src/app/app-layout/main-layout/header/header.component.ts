import { Component, OnInit } from '@angular/core';
import { ME_NAV_LINKS } from '../../app-layout.constants';
import { INavLink } from '../../app-layout.interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public navLinks: INavLink[] = ME_NAV_LINKS;

  constructor() { }

  ngOnInit(): void {
  }

  public navigateToSection(section: string) {
        window.location.hash = '';
        window.location.hash = section;
  }

}
