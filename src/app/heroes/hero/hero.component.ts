import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent {

  public name: string = 'yamato';
  public age: number = 21;

  get capitalizedName(): string{
    return  this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void{
    this.name = 'Nami';
  }

  changeAge(): void{
    this.age = 19;
  }

  resetForm(): void{
    this.name = 'yamato';
    this.age = 21
  }

}
