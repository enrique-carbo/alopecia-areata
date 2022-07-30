import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';
import { FooterComponent } from './components/footer/footer.component';

//Angular Material
import { AppMaterialModule } from './app-material.module'


// Flex Layout
import { FlexLayoutModule } from "@angular/flex-layout";

//Pages
import { DescriptionComponent } from './pages/description/description.component';
import { ClinimetricsComponent } from './pages/clinimetrics/clinimetrics.component';
import { RecommendationsComponent } from './pages/recommendations/recommendations.component';
import { HomeComponent } from './pages/home/home.component';
import { SaltComponent } from './pages/salt/salt.component';
import { DlqiComponent } from './pages/dlqi/dlqi.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavListComponent,
    FooterComponent,
    DescriptionComponent,
    ClinimetricsComponent,
    RecommendationsComponent,
    HomeComponent,
    SaltComponent,
    DlqiComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppMaterialModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
