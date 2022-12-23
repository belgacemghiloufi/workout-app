import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categorie } from 'src/app/services/categorie.model';

import { DbService } from 'src/app/services/db.service';
import { Exercice } from 'src/app/services/exercice.model';

@Component({
  selector: 'app-exercice-category',
  templateUrl: './exercice-category.component.html',
  styleUrls: ['./exercice-category.component.css'],
})
export class ExerciceCategoryComponent {
  private exercices: Array<Exercice> = [];
  private category: Categorie;
  description: string = '';
  exercicesSnapshot: Array<Exercice> = [];
  private currentIndex: number = 0;

  constructor(private dbService: DbService, private route: ActivatedRoute) {
    this.category = this.dbService.getCategory('Épaules');
    this.route.params.subscribe((params) => {
      this.exercices = this.dbService.getCategoryExercices(params['name']);
      this.category = this.dbService.getCategory(params['name']);
      this.description = this.category.description;
    });
    this.exercicesSnapshot = this.exercices.slice(0, 3);
    this.currentIndex = 3;
    this.dbService.setexercicesSnapshot(this.exercicesSnapshot);
  }

  next(): void {
    const nextIndex = this.currentIndex + 3;
    if (nextIndex < this.exercices.length) {
      this.exercicesSnapshot = this.exercices.slice(
        this.currentIndex,
        nextIndex
      );
      this.currentIndex = nextIndex;
      this.dbService.setexercicesSnapshot(this.exercicesSnapshot);
    } else {
      if (this.currentIndex < this.exercices.length) {
        this.exercicesSnapshot = this.exercices.slice(
          this.currentIndex,
          this.exercices.length
        );
        this.currentIndex = this.exercices.length;
        this.dbService.setexercicesSnapshot(this.exercicesSnapshot);
      }
    }
  }

  previous(): void {
    const previousIndexStart = this.currentIndex - 6;
    const previousIndexEnd = this.currentIndex - 3;
    if (previousIndexStart > 0) {
      this.exercicesSnapshot = this.exercices.slice(
        previousIndexStart,
        previousIndexEnd
      );
      this.currentIndex = previousIndexEnd;
      this.dbService.setexercicesSnapshot(this.exercicesSnapshot);
    } else {
      this.exercicesSnapshot = this.exercices.slice(0, 3);
      this.currentIndex = 3;
      this.dbService.setexercicesSnapshot(this.exercicesSnapshot);
    }
  }
}
