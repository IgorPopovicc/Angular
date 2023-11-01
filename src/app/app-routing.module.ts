import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { AngularCliComponent } from './pages/angular-cli/angular-cli.component';
import { HowToStartComponent } from './pages/how-to-start/how-to-start.component';
import { ComponentsPreviewComponent } from './pages/angular-basic/components-preview/components-preview.component';
import { TemplatesComponent } from './pages/angular-basic/templates/templates.component';
import { DirectivesPreviewComponent } from './pages/angular-basic/directives-preview/directives-preview.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'introduction', component: IntroductionComponent },
  { path: 'angular-cli', component: AngularCliComponent },
  { path: 'how-to-start', component: HowToStartComponent },
  { path: 'components', component: ComponentsPreviewComponent },
  { path: 'templates', component: TemplatesComponent},
  { path: 'directive', component: DirectivesPreviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
