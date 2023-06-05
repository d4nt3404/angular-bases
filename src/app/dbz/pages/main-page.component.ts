import { Component, Input, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service.ts.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-paige.component.html'
})

export class MainPaigeComponent implements OnInit {
  constructor(private dbzService: DbzService) {
  }

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  ngOnInit( ) { }

onDeleteCharacter(id: string): void {
  this.dbzService.deleteCharacterById(id);
}

onNewCharacter(character: Character) {
  this.dbzService.addCharacter(character);
}

}
