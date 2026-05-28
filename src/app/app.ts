import { Component, signal } from '@angular/core';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { Home } from "../components/home/home";
import { RouterOutlet } from "../../node_modules/@angular/router/types/_router_module-chunk";

@Component({
  selector: 'app-root',
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app_lol');
}
