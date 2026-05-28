import { Component, signal } from '@angular/core';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { Home } from "../components/home/home";

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app_lol');
}
