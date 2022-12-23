import { Injectable } from '@angular/core';

import { Anatomie } from './anatomie.model';
import { Categorie } from './categorie.model';
import { Exercice } from './exercice.model';
import anatomieJson from './anatomies.json';
import exercicesCategoriesJson from './exercicesCategories.json';
import exercicesJson from './exercices.json';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  private anatomies: Array<Anatomie> = [];
  private exercicesCategories: Array<Categorie> = [];
  private exercices: Array<{
    category: Categorie;
    exercices: Array<Exercice>;
  }> = [];
  private exercicesSnapshot: Array<Exercice> = [];
  constructor() {
    this.anatomies = [...anatomieJson];
    exercicesCategoriesJson.map((item) =>
      this.exercicesCategories.push({
        name: item.exerciceTitle,
        img: item.imgBase64,
        description: item.description,
      })
    );
    for (const [key, value] of Object.entries(exercicesJson)) {
      const categorie = this.exercicesCategories.filter(
        (item) => item.name.toLowerCase() === key.toLowerCase()
      )[0];
      const exercices: Array<Exercice> = [];
      value.map((item) => {
        exercices.push({
          name: item.exerciceTitleDetails,
          img: item.imgBase64,
          gif: item.imgBase64Details,
          mp3: item.mp3Details,
        });
      });
      this.exercices.push({ category: categorie, exercices: exercices });
    }
    this.exercicesSnapshot = this.getCategoryExercices('Épaules').slice(0, 3);
  }

  getAnatomies(): Array<Anatomie> {
    return [...this.anatomies];
  }

  getExercicesCategories(): Array<Categorie> {
    return [...this.exercicesCategories];
  }

  getCategoryExercices(category: string): Array<Exercice> {
    return [
      ...this.exercices.filter(
        (item) => item.category.name.toLowerCase() === category.toLowerCase()
      )[0].exercices,
    ];
  }

  getCategory(name: String): Categorie {
    return {
      ...this.exercicesCategories.filter(
        (item) => item.name.toLowerCase() === name.toLowerCase()
      )[0],
    };
  }

  getExercice(index: number): Exercice {
    return { ...this.exercicesSnapshot[index] };
  }

  setexercicesSnapshot(array: Array<Exercice>): void {
    this.exercicesSnapshot = [...array];
  }
}
