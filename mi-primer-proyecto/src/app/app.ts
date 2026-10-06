import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header'
import { Footer } from './shared/footer/footer';
import { Navbar } from './shared/navbar/navbar';
import { Contact } from './pages/contact/contact';

@Component({
  imports: [RouterOutlet, Navbar, Footer, Contact, Header],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('mi-primer-proyecto');
}
