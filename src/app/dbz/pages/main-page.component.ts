import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import {v4 as uuid} from 'uuid';
import { Character } from '../interfaces/character.interface';
@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.html',
})
export class MainPageComponent {
  constructor(public dbzService:DbzService) {
    
  }
  get characters ():Character[]{
    return [...this.dbzService.characters];
  }

}
