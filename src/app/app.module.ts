// IMPORTE DE BASE
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// AUTRES
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// FONT-AWESOME
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


// MATERIAL
import { MatButtonModule} from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

// COMPONENT
import { TestMaterialComponent } from './test-material/test-material.component';
import { FilsComponent } from './fils/fils.component';
import { PereComponent } from './pere/pere.component';
import { ProduitComponent } from './produit/produit.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    DataBindingComponent,
    FilsComponent,
    PereComponent,
    TestMaterialComponent,
    FirstPageComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatSliderModule,
    MatCardModule,
    MatProgressBarModule,
    MatDividerModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
