import { Component, OnInit } from '@angular/core';
import {FilmOmdbProviderService} from '../services/film-omdb-provider.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rechercher',
  templateUrl: './rechercher.component.html',
  styleUrls: ['./rechercher.component.scss'],
})
export class RechercherComponent implements OnInit {

  title: string = '';
  year: number;
  type: string = '';

  films: any[] = [];

  error: string = '';

  constructor(private filmSrv: FilmOmdbProviderService,
              private router: Router) { }

  ngOnInit() {}

  rechercher() {
    this.filmSrv.search(this.title, this.year, this.type)
      //traitement en cas de succès et donc du resolve
      .then((resultat) => {
        this.films = resultat;
      })
      //traitement en cas d'echec, donc du reject()
      .catch((err) => {
        this.error = 'Impossible de récupérer la liste de films';
      });
  }

  /*
  * Traitement asyc/await d'une promise
  */
  async rechercher2(){
    try{
      this.films = await this.filmSrv.search(this.title, this.year, this.type);
    }
    catch (e) {
      this.error = 'Impossible de récupérer la liste de films';
    }
  }
/*
  redirection(): void {
    //Besoin du Router à injecter
    this.router.navigate(['/details', 'idfilm']);
  }
  */

}
