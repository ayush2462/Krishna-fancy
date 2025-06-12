import { Component } from '@angular/core';
import { HeroSection } from './components/hero-section/hero-section';
import { About } from './components/about/about';
import { Categories } from './components/categories/categories';
import { Features } from './components/features/features';
import { ClientReviews } from './components/client-reviews/client-reviews';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [
    HeroSection,
    About,
    Categories,
    Features,
    ClientReviews,
    Contact,
    Footer,
  ],
})
export class App {
  protected title = 'Krishna-Fancy Dress';
}
