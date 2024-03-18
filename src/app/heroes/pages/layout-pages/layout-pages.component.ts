import { Component } from '@angular/core';

interface Items {
  label: string;
  icon: string;
  url: string;
}

@Component({
  selector: 'app-layout-pages',
  templateUrl: './layout-pages.component.html',
  styles: ``,
})
export class LayoutPagesComponent {
  public sidebarItems: Items[] = [
    { label: 'Listado', icon: 'label', url: './list' },
    { label: 'Anadir', icon: 'add', url: './new-hero' },
    { label: 'Buscar', icon: 'search', url: './search' },
  ];
}
