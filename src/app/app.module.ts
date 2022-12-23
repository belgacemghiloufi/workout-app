import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './angular-material.module';
import { AnatomieComponent } from './anatomie/anatomie.component';
import { ExercicesComponent } from './exercices/exercices.component';
import { AboutComponent } from './about/about.component';
import { AnatomieDetailsComponent } from './anatomie/anatomie-details/anatomie-details.component';
import { ExerciceCategoryComponent } from './exercices/exercice-category/exercice-category.component';
import { ExerciceComponent } from './exercices/exercice/exercice.component';

@NgModule({
  declarations: [
    AppComponent,
    AnatomieComponent,
    ExercicesComponent,
    AboutComponent,
    AnatomieDetailsComponent,
    ExerciceCategoryComponent,
    ExerciceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
