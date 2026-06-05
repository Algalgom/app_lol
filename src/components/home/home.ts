import { Component, OnInit, signal } from '@angular/core'; // 1. Importa 'signal'
import { CharacterService } from '../../services/character-service';
import { Character } from '../../model/character';

@Component({
  selector: 'app-home',
  imports: [], 
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  // 2. Definimos 'characters' como una señal con un array vacío por defecto
  public characters = signal<Character[]>([]);

  constructor(private _characterService: CharacterService) {}

  ngOnInit(): void {
    this._characterService.getCharacters().subscribe(result => {
      // 3. Modificamos el valor de la señal usando .set()
      this.characters.set(result); 
    });
  }
}