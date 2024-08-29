import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { AngularCliComponent } from './pages/angular-cli/angular-cli.component';
import { HowToStartComponent } from './pages/how-to-start/how-to-start.component';
import { ComponentsPreviewComponent } from './pages/angular-basic/components-preview/components-preview.component';
import { TemplatesComponent } from './pages/angular-basic/templates/templates.component';
import { DirectivesPreviewComponent } from './pages/angular-basic/directives-preview/directives-preview.component';
import { DependencyInjectionPreviewComponent } from './pages/angular-basic/dependency-injection-preview/dependency-injection-preview.component';
import { SecurityComponent } from './pages/best-practice/security/security.component';
import { AccessibilityComponent } from './pages/best-practice/accessibility/accessibility.component';
import { LazyLoadingComponent } from './pages/best-practice/lazy-loading/lazy-loading.component';
import { OverviewDeveloperGuidesComponent } from './pages/developer-guides/overview-developer-guides/overview-developer-guides.component';
import {ChangeDetectionComponent} from "./pages/developer-guides/change-detection/change-detection.component";
import {RoutingComponent} from "./pages/developer-guides/routing/routing.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'introduction', component: IntroductionComponent },
  { path: 'angular-cli', component: AngularCliComponent },
  { path: 'how-to-start', component: HowToStartComponent },
  { path: 'components', component: ComponentsPreviewComponent },
  { path: 'templates', component: TemplatesComponent},
  { path: 'directive', component: DirectivesPreviewComponent },
  { path: 'dependency-injection', component: DependencyInjectionPreviewComponent },
  { path: 'security', component: SecurityComponent },
  { path: 'accessibility', component: AccessibilityComponent },
  { path: 'lazy-loading', component: LazyLoadingComponent },
  { path: 'developer-guides', component: OverviewDeveloperGuidesComponent },
  { path: 'change-detection', component: ChangeDetectionComponent },
  { path: 'routing', component: RoutingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
