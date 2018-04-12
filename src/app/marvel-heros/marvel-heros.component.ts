import { HeroService } from './marvel-hero.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvel-heros',
  templateUrl: './marvel-heros.component.html',
  styleUrls: ['./marvel-heros.component.css'],
  providers: [HeroService]
})
export class MarvelHerosComponent implements OnInit {
  heros: string[];

  inputHero = null;

  btnDisable = false;

  Adding = false;

  AddHero() {
    this.heros.push(this.inputHero);

    this.inputHero = null;

    this.Adding = !this.Adding;
  }

  AddMore() {
    this.Adding = !this.Adding;
  }

  constructor(private ajax: HeroService) {
    this.heros = this.ajax.heros;
  }

  ngOnInit() {

  }

}
