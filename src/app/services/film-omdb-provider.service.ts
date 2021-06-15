import { Injectable } from '@angular/core';
import {Film} from '../modeles/film';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmOmdbProviderService {
  //Android ne supporte que https
  LINK: string = 'https://www.omdbapi.com/';
  apiKey: string = '7f113491';

  constructor(private httpclient: HttpClient) { }

  public search(title: string, year: number, type: string): Promise<Film[]>{
    /* Tout traitement potentiellement long on le fait de façon asynchrone */

    //fonction lambda
    return new Promise((resolve, reject) => {
      let params = new HttpParams();
      params = params.append('apikey', this.apiKey);
      params = params.append('s', title);

      if(year){
        params = params.append('y', String(year));
      }

      if(type != null){
        params = params.append('type', type);
      }

      this.httpclient.get(this.LINK, {params}).toPromise()
        .then((reponse) => {
            if(reponse && reponse['Response'] === 'True'){
              resolve(reponse['Search']);
            }
            else{
              reject({message: 'Le serveur a renvoyé une réponse innatendue'});
            }
        })
        .catch((err) => {
          reject(err);
        });

    });

  }

  public getFilm(imdbID: string):
    Promise<Film> {
    return new Promise((resolve, reject) => {
      let params = new HttpParams();
      params = params.append('apikey', '7f113491');
      params = params.append('i', imdbID);

      this.httpclient.get(this.LINK, {params})
        .toPromise()
        .then((response: any) => {
          if (response && response.Response === 'True') {
            resolve(response);
          } else {
            reject('Le serveur a renvoyé une réponse innatendue');
          }
        })
        .catch((error) => {
          reject(error);
        });

    });
  }
}
