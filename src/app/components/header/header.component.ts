import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  topics = [
    { name: 'Basic Elements', link: 'basic-elements' },
    { name: 'Text Formatting', link: '/text-formatting' },
    { name: 'Images and Multimedia', link: '/images-and-multimedia' },
    { name: 'Forms', link: '/forms' },
    { name: 'Tables', link: '/tables' },
    { name: 'Semantic HTML', link: '/semantic-html' },
    { name: 'HTML5', link: '/html5' },
    { name: 'HTML and CSS', link: '/html-and-css' },
    { name: 'Best Practices', link: '/best-practices' },
    { name: 'HTML Frameworks', link: '/html-frameworks' },
    { name: 'HTML and JavaScript', link: '/html-and-javascript' },
    { name: 'Responsive Web Design', link: '/responsive-web-design' },
    { name: 'Accessibility', link: '/accessibility' },
    { name: 'SEO', link: '/seo' },
    { name: 'Optimization', link: '/optimization' },
    { name: 'Versioning', link: '/versioning' },
    { name: 'Tooling', link: '/tooling' },
    { name: 'HTML Email', link: '/html-email' },
    { name: 'Document Structure', link: '/document-structure' },
    { name: 'Attributes', link: '/attributes' },
    { name: 'Lists', link: '/lists' },
    { name: 'Blocks and Inline Elements', link: '/blocks-and-inline-elements' },
    { name: 'Input Types', link: '/input-types' },
    { name: 'Iframes', link: '/iframes' },
    { name: 'Canvas', link: '/canvas' },
    { name: 'Drag and Drop', link: '/drag-and-drop' },
    { name: 'HTML and Performance', link: '/html-and-performance' },
    { name: 'HTML and Search Engines', link: '/html-and-search-engines' },
    { name: 'HTML and Microdata', link: '/html-and-microdata' },
    { name: 'HTML and Microformats', link: '/html-and-microformats' },
  ];
  
  
  ngOnInit(): void {
  }

}
