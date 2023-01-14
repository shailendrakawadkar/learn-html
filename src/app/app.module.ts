import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { BasicElementsComponent } from './components/basic-elements/basic-elements.component'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { TextFormattingComponent } from './components/text-formatting/text-formatting.component';
import { ImagesAndMultimediaComponent } from './components/images-and-multimedia/images-and-multimedia.component';
import { FormsComponent } from './components/forms/forms.component';
import { TablesComponent } from './components/tables/tables.component';
import { SemanticHtmlComponent } from './components/semantic-html/semantic-html.component';
import { Html5Component } from './components/html5/html5.component';
import { HtmlAndCssComponent } from './components/html-and-css/html-and-css.component';
import { BestPracticesComponent } from './components/best-practices/best-practices.component';
import { HtmlFrameworksComponent } from './components/html-frameworks/html-frameworks.component';
import { HtmlAndJavascriptComponent } from './components/html-and-javascript/html-and-javascript.component';
import { ResponsiveWebDesignComponent } from './components/responsive-web-design/responsive-web-design.component';
import { AccessibilityComponent } from './components/accessibility/accessibility.component';
import { SeoComponent } from './components/seo/seo.component';
import { OptimizationComponent } from './components/optimization/optimization.component';
import { VersioningComponent } from './components/versioning/versioning.component';
import { ToolingComponent } from './components/tooling/tooling.component';
import { HtmlEmailComponent } from './components/html-email/html-email.component';
import { DocumentStructureComponent } from './components/document-structure/document-structure.component';
import { AttributesComponent } from './components/attributes/attributes.component';
import { ListsComponent } from './components/lists/lists.component';
import { BlocksAndInlineElementsComponent } from './components/blocks-and-inline-elements/blocks-and-inline-elements.component';
import { InputTypesComponent } from './components/input-types/input-types.component';
import { IframesComponent } from './components/iframes/iframes.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { DragAndDropComponent } from './components/drag-and-drop/drag-and-drop.component';
import { HtmlAndPerformanceComponent } from './components/html-and-performance/html-and-performance.component';
import { HtmlAndAccessibilityComponent } from './components/html-and-accessibility/html-and-accessibility.component';
import { HtmlAndSearchEnginesComponent } from './components/html-and-search-engines/html-and-search-engines.component';
import { HtmlAndInternationalizationComponent } from './components/html-and-internationalization/html-and-internationalization.component';
import { HtmlAndMicrodataComponent } from './components/html-and-microdata/html-and-microdata.component';
import { HtmlAndMicroformatsComponent } from './components/html-and-microformats/html-and-microformats.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BasicElementsComponent,
    TextFormattingComponent,
    ImagesAndMultimediaComponent,
    FormsComponent,
    TablesComponent,
    SemanticHtmlComponent,
    Html5Component,
    HtmlAndCssComponent,
    BestPracticesComponent,
    HtmlFrameworksComponent,
    HtmlAndJavascriptComponent,
    ResponsiveWebDesignComponent,
    AccessibilityComponent,
    SeoComponent,
    OptimizationComponent,
    VersioningComponent,
    ToolingComponent,
    HtmlEmailComponent,
    DocumentStructureComponent,
    AttributesComponent,
    ListsComponent,
    BlocksAndInlineElementsComponent,
    InputTypesComponent,
    IframesComponent,
    CanvasComponent,
    DragAndDropComponent,
    HtmlAndPerformanceComponent,
    HtmlAndAccessibilityComponent,
    HtmlAndSearchEnginesComponent,
    HtmlAndInternationalizationComponent,
    HtmlAndMicrodataComponent,
    HtmlAndMicroformatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
