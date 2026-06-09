import { Component, OnInit, signal } from '@angular/core';
import { CharacterService } from '../../services/character-service';
import { Character } from '../../model/character';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-character-tank',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './character-tank.html',
  styleUrl: './character-tank.css',
})
export class CharacterTank implements OnInit {

  public characters = signal<Character[]>([]);

  constructor(private _characterService: CharacterService) { }

  ngOnInit(): void {
  this._characterService.getCharacterWithTankRoles().subscribe( result => {
    this.characters.set(result);
  })
}
}
