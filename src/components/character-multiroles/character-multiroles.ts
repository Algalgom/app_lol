import { Component, OnInit, signal } from '@angular/core';
import { CharacterService } from '../../services/character-service';
import { Character } from '../../model/character';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-character-multiroles',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './character-multiroles.html',
  styleUrl: './character-multiroles.css',
})
export class CharacterMultiroles implements OnInit{

  public characters = signal<Character[]>([]);

  constructor (private _characterService: CharacterService) {}

ngOnInit(): void {
  this._characterService.getCharactersWithMultipleRoles().subscribe( result => {
    this.characters.set(result);
  })
}
}
