import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sub-navbar',
  templateUrl: './sub-navbar.component.html',
  styleUrls: ['./sub-navbar.component.css']
})
export class SubNavbarComponent implements OnInit {
  @Input() subLinks: any[] = []; 
  ngOnInit() {
  }

}
