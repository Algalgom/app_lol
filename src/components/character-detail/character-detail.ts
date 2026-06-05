import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../../model/character';
import { CharacterService } from '../../services/character-service';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [],
  templateUrl: './character-detail.html',
  styleUrl: './character-detail.css',
})
export class CharacterDetail implements OnInit {

  public id: string = '';
  public character = signal<Character | undefined>(undefined);

  constructor(private _route: ActivatedRoute, private _characterService: CharacterService) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id')!;
    this._characterService.getCharacterById(this.id).subscribe((result) => {
        // 3. Guardamos el objeto usando .set() para despertar la reactividad
        this.character.set(result); 
      });
  }

}