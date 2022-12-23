import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AnatomieDetailsComponent } from './anatomie/anatomie-details/anatomie-details.component';
import { AnatomieComponent } from './anatomie/anatomie.component';
import { ExerciceCategoryComponent } from './exercices/exercice-category/exercice-category.component';
import { ExerciceComponent } from './exercices/exercice/exercice.component';
import { ExercicesComponent } from './exercices/exercices.component';

const routes: Routes = [
  { path: 'anatomie', component: AnatomieComponent },
  { path: 'anatomie/:id', component: AnatomieDetailsComponent },
  { path: 'exercices', component: ExercicesComponent },
  { path: 'exercices/:name', component: ExerciceCategoryComponent },
  { path: 'exercices/:name/:id', component: ExerciceComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
