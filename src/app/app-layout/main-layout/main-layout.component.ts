import { Component, OnInit } from '@angular/core';
import { AppLayoutFacadeService } from '@app-layout/app-layout-facade.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor(public facade: AppLayoutFacadeService) { }

  ngOnInit(): void {
  }

}
