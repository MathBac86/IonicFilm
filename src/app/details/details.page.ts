import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FilmOmdbProviderService} from '../services/film-omdb-provider.service';
import {Film} from '../modeles/film';
import {TextToSpeech} from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  id: string = '';
  film: Film;
  isLecture: boolean = false;

  constructor(private router: ActivatedRoute,
              private filmSrv: FilmOmdbProviderService,
              private tts: TextToSpeech) {
    //Besoin du ActivatedRoute
    //Observable
    this.router.params.subscribe(async (params) => {
      this.id = params['id'];
      try{
        this.film = await this.filmSrv.getFilm(this.id);
      }
      catch (e){
        console.log(e);
      }
    });


  }

  ngOnInit() {
    //Seulement si on ne mets pas à jour l'url du composant
    //this.id = this.router.snapshot.paramMap.get('id');

  }

  async lire() {
    this.isLecture = true;

    try{
      console.log(this.film.Plot);
      await this.tts.speak(this.film.Plot);
    }
    catch (e) {
      console.log(e.message);
    }
    finally {
      this.isLecture = false;
    }

  }
}
