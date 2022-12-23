import { Component } from '@angular/core';

import { DbService } from '../services/db.service';
import { Categorie } from '../services/categorie.model';

@Component({
  selector: 'app-exercices',
  templateUrl: './exercices.component.html',
  styleUrls: ['./exercices.component.css'],
})
export class ExercicesComponent {
  private exercicesCategories: Array<Categorie> = [];
  exercicesCategoriesSnapshot: Array<Categorie> = [];
  searchCriteria: string = '';
  private searchedExercicesCategories: Array<Categorie> = [];
  private currentIndex: number = 0;

  constructor(private dbService: DbService) {
    this.exercicesCategories = this.dbService.getExercicesCategories();
    this.exercicesCategoriesSnapshot = this.exercicesCategories.slice(0, 3);
    this.currentIndex = 3;
  }

  next(): void {
    const nextIndex = this.currentIndex + 3;
    if (nextIndex < this.exercicesCategories.length) {
      this.exercicesCategoriesSnapshot = this.exercicesCategories.slice(
        this.currentIndex,
        nextIndex
      );
      this.currentIndex = nextIndex;
    } else {
      if (this.currentIndex < this.exercicesCategories.length) {
        this.exercicesCategoriesSnapshot = this.exercicesCategories.slice(
          this.currentIndex,
          this.exercicesCategories.length
        );
        this.currentIndex = this.exercicesCategories.length;
      }
    }
  }

  previous(): void {
    const previousIndexStart = this.currentIndex - 6;
    const previousIndexEnd = this.currentIndex - 3;
    if (previousIndexStart > 0) {
      this.exercicesCategoriesSnapshot = this.exercicesCategories.slice(
        previousIndexStart,
        previousIndexEnd
      );
      this.currentIndex = previousIndexEnd;
    } else {
      this.exercicesCategoriesSnapshot = this.exercicesCategories.slice(0, 3);
      this.currentIndex = 3;
    }
  }

  search(): void {
    if (this.searchCriteria.length >= 3) {
      const filtredItems = this.exercicesCategories.filter((item) =>
        item.name.toLowerCase().includes(this.searchCriteria.toLowerCase())
      );
      if (filtredItems.length > 0) {
        this.searchedExercicesCategories = [...filtredItems];
      }
    }
  }
}
