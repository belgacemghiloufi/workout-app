import { Component } from '@angular/core';
import { Anatomie } from '../services/anatomie.model';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-anatomie',
  templateUrl: './anatomie.component.html',
  styleUrls: ['./anatomie.component.css'],
})
export class AnatomieComponent {
  anatomies: Array<Anatomie> = [];
  anatomiesSnapshot: Array<Anatomie> = [];

  constructor(private dbService: DbService) {
    this.anatomiesSnapshot = this.dbService.getAnatomies().slice(0, 3);
  }

  next(): void {
    this.anatomiesSnapshot = this.dbService.getAnatomies().slice(3);
  }

  previous(): void {
    this.anatomiesSnapshot = this.dbService.getAnatomies().slice(0, 3);
  }
}
