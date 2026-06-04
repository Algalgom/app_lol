import { Routes } from '@angular/router';
import { Home } from '../components/home/home';
import { Contact } from '../components/contact/contact';
import { CharacterDetail } from '../components/character-detail/character-detail';

export const routes: Routes = [
    {path: '', component: Home },
    {path: 'contact', component: Contact },
    {path: 'character/:id', component: CharacterDetail }
];
