import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'
import { NavigationComponent } from './components/navigation/navigation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { AngularCliComponent } from './pages/angular-cli/angular-cli.component';
import { CodeDisplayComponent } from './components/code-display/code-display.component';
import { HIGHLIGHT_OPTIONS, HighlightOptions, HighlightModule } from 'ngx-highlightjs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HowToStartComponent } from './pages/how-to-start/how-to-start.component';
import { MatTableModule } from '@angular/material/table';
import { ComponentsPreviewComponent } from './pages/angular-basic/components-preview/components-preview.component';
import { DirectivesPreviewComponent } from './pages/angular-basic/directives-preview/directives-preview.component';
import { TemplatesComponent } from './pages/angular-basic/templates/templates.component';
import { InfoPanelComponent } from './components/info-panel/info-panel.component';
import { DependencyInjectionPreviewComponent } from './pages/angular-basic/dependency-injection-preview/dependency-injection-preview.component';
import { SecurityComponent } from './pages/best-practice/security/security.component';
import { AccessibilityComponent } from './pages/best-practice/accessibility/accessibility.component';
import { LazyLoadingComponent } from './pages/best-practice/lazy-loading/lazy-loading.component';
import { OverviewDeveloperGuidesComponent } from './pages/developer-guides/overview-developer-guides/overview-developer-guides.component';
import { ChangeDetectionComponent } from './pages/developer-guides/change-detection/change-detection.component';
import { RoutingComponent } from './pages/developer-guides/routing/routing.component';
import { FormsComponent } from './pages/developer-guides/forms/forms.component';
import { SimpleInteractiveFormComponent } from './components/simple-interactive-form/simple-interactive-form.component';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import { ComplexFormComponent } from './components/complex-form/complex-form.component';
import { HttpClientComponent } from './pages/developer-guides/http-client/http-client.component';
import { ServerSideRenderingComponent } from './pages/developer-guides/server-side-rendering/server-side-rendering.component';
import { TestingComponent } from './pages/developer-guides/testing/testing.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DocumentationComponent } from './pages/documentation/documentation.component';
import { AngularIdeComponent } from './pages/angular-ide/angular-ide.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UpdateNotificationComponent } from './components/update-notification/update-notification.component';
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    IntroductionComponent,
    AngularCliComponent,
    CodeDisplayComponent,
    HowToStartComponent,
    ComponentsPreviewComponent,
    DirectivesPreviewComponent,
    TemplatesComponent,
    InfoPanelComponent,
    DependencyInjectionPreviewComponent,
    SecurityComponent,
    AccessibilityComponent,
    LazyLoadingComponent,
    OverviewDeveloperGuidesComponent,
    ChangeDetectionComponent,
    RoutingComponent,
    FormsComponent,
    SimpleInteractiveFormComponent,
    ComplexFormComponent,
    HttpClientComponent,
    ServerSideRenderingComponent,
    TestingComponent,
    DocumentationComponent,
    AngularIdeComponent,
    PageNotFoundComponent,
    UpdateNotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FontAwesomeModule,
    MatSidenavModule,
    MatCardModule,
    HighlightModule,
    MatSnackBarModule,
    MatTableModule,
    MatInputModule,
    ReactiveFormsModule,
    PdfViewerModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: <HighlightOptions>{
        lineNumbers: true,
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          javascript: () => import('highlight.js/lib/languages/javascript'),
          typescript: () => import('highlight.js/lib/languages/typescript'),
          html: () => import('highlight.js/lib/languages/xml'),
        },
        theme: 'monokai-sublime'
      },
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
