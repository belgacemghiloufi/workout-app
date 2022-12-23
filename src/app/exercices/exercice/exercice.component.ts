import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DbService } from 'src/app/services/db.service';
import { Exercice } from 'src/app/services/exercice.model';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css'],
})
export class ExerciceComponent {
  exercice: Exercice;
  constructor(private dbService: DbService, private route: ActivatedRoute) {
    this.exercice = this.dbService.getExercice(0);
    this.route.params.subscribe((params) => {
      this.exercice = this.dbService.getExercice(+params['id']);
    });
  }

  playSound(): void {
    let audio = new Audio();
    audio.src = this.exercice.mp3;
    audio.load();
    audio.play();
  }
}
