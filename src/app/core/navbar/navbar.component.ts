import { Component, OnInit } from '@angular/core';
import { SubNavbarComponent } from "../sub-navbar/sub-navbar.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  activeItem: number = 0;

  headerLinks: any[] = [
    { group: 'dashboard', link: ['sidenav/treeview'], label: 'Dashboard' },
    { group: 'analytics', link: ['/', 'analytics'], label: 'Analytics' }
  ];

  subLinks: any[] = [
    { group: 'dashboard', link: ['dashboard/main'], label: 'Main'},
    { group: 'dashboard', link: ['dashboard/productivity'], label: 'Productivity'},
    { group: 'analytics', link: ['analytics/users'], label: 'Users'},
    { group: 'analytics', link: ['analytics/main'], label: 'Main'},
    { group: 'analytics', link: ['analytics/external'], label: 'External'}
  ];

  getSubItems() {
    let _group = this.headerLinks[this.activeItem].group;
    let filtered = this.subLinks.filter(a => a.group === _group);
    return filtered;
  }

  toggleActive(item) {
    this.activeItem = this.headerLinks.findIndex(value => value.group === item.group);
  }

  ngOnInit() {
  }
}
