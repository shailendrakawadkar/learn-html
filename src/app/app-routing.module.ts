import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessibilityComponent } from './components/accessibility/accessibility.component';
import { AttributesComponent } from './components/attributes/attributes.component';
import { BasicElementsComponent } from './components/basic-elements/basic-elements.component';
import { BestPracticesComponent } from './components/best-practices/best-practices.component';
import { BlocksAndInlineElementsComponent } from './components/blocks-and-inline-elements/blocks-and-inline-elements.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { DocumentStructureComponent } from './components/document-structure/document-structure.component';
import { DragAndDropComponent } from './components/drag-and-drop/drag-and-drop.component';
import { FormsComponent } from './components/forms/forms.component';
import { HtmlAndCssComponent } from './components/html-and-css/html-and-css.component';
import { HtmlAndInternationalizationComponent } from './components/html-and-internationalization/html-and-internationalization.component';
import { HtmlAndJavascriptComponent } from './components/html-and-javascript/html-and-javascript.component';
import { HtmlAndMicrodataComponent } from './components/html-and-microdata/html-and-microdata.component';
import { HtmlAndMicroformatsComponent } from './components/html-and-microformats/html-and-microformats.component';
import { HtmlAndPerformanceComponent } from './components/html-and-performance/html-and-performance.component';
import { HtmlAndSearchEnginesComponent } from './components/html-and-search-engines/html-and-search-engines.component';
import { HtmlEmailComponent } from './components/html-email/html-email.component';
import { HtmlFrameworksComponent } from './components/html-frameworks/html-frameworks.component';
import { Html5Component } from './components/html5/html5.component';
import { IframesComponent } from './components/iframes/iframes.component';
import { ImagesAndMultimediaComponent } from './components/images-and-multimedia/images-and-multimedia.component';
import { InputTypesComponent } from './components/input-types/input-types.component';
import { ListsComponent } from './components/lists/lists.component';
import { OptimizationComponent } from './components/optimization/optimization.component';
import { ResponsiveWebDesignComponent } from './components/responsive-web-design/responsive-web-design.component';
import { SemanticHtmlComponent } from './components/semantic-html/semantic-html.component';
import { SeoComponent } from './components/seo/seo.component';
import { TablesComponent } from './components/tables/tables.component';
import { TextFormattingComponent } from './components/text-formatting/text-formatting.component';
import { ToolingComponent } from './components/tooling/tooling.component';
import { VersioningComponent } from './components/versioning/versioning.component';

const routes: Routes = [
  { path: '', redirectTo : "/basic-elements" },
  { path: 'basic-elements', component: BasicElementsComponent },
  { path: 'text-formatting', component: TextFormattingComponent },
  { path: 'images-and-multimedia', component: ImagesAndMultimediaComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'semantic-html', component: SemanticHtmlComponent },
  { path: 'html5', component: Html5Component },
  { path: 'html-and-css', component: HtmlAndCssComponent },
  { path: 'best-practices', component: BestPracticesComponent },
  { path: 'html-frameworks', component: HtmlFrameworksComponent },
  { path: 'html-and-javascript', component: HtmlAndJavascriptComponent },
  { path: 'responsive-web-design', component: ResponsiveWebDesignComponent },
  { path: 'accessibility', component: AccessibilityComponent },
  { path: 'seo', component: SeoComponent },
  { path: 'optimization', component: OptimizationComponent },
  { path: 'versioning', component: VersioningComponent},
  { path: 'tooling', component: ToolingComponent },
  { path: 'html-email', component: HtmlEmailComponent },
  { path: 'document-structure', component: DocumentStructureComponent },
  { path: 'attributes', component: AttributesComponent },
  { path: 'lists', component: ListsComponent },
  { path: 'blocks-and-inline-elements', component: BlocksAndInlineElementsComponent },
  { path: 'input-types', component: InputTypesComponent },
  { path: 'iframes', component: IframesComponent },
  { path: 'canvas', component: CanvasComponent },
  { path: 'drag-and-drop', component: DragAndDropComponent },
  { path: 'html-and-performance', component: HtmlAndPerformanceComponent },
  { path: 'html-and-search-engines', component: HtmlAndSearchEnginesComponent },
  { path: 'html-and-internationalization', component: HtmlAndInternationalizationComponent },
  { path: 'html-and-microdata', component: HtmlAndMicrodataComponent },
  { path: 'html-and-microformats', component: HtmlAndMicroformatsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
