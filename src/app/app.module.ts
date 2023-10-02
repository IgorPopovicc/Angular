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


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    IntroductionComponent,
    AngularCliComponent,
    CodeDisplayComponent
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
    MatSnackBarModule
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
        },
        theme: 'monokai-sublime'
      },
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
