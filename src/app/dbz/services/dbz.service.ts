import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),

      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),

      name: 'Toranzo',
      power: Infinity,
    },
  ];
  constructor() {}
  onNewCharacter(character: Character) {
    const newCharacter: Character = {
      id: uuid(),
      name: character.name,
      power: character.power,
    };
    this.characters.push(newCharacter);
  }
  onDeleteCharacter(id: string): void {
    this.characters = this.characters.filter((elemento) => {
      elemento.id !== id;
    });
  }
  deleteCharacterById (id:string){
    this.characters = this.characters.filter(character => character.id!==id);
  }
}
