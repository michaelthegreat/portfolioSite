import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { PortfolioItem } from '../portfolio/portfolio-item';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable()
export class PortfolioService {
// ARN - arn:aws:lambda:us-east-1:639013015350:function:portfolioApi
  private API_URL = 'https://k07uye59wi.execute-api.us-east-1.amazonaws.com/default/portfolioApi';
  constructor(private http: HttpClient) { }


  getPortfolio() : Observable<PortfolioItem[]>{
    return this.http.get<PortfolioItem[]>(this.API_URL)
      .pipe(
        tap(_ => console.log('fetched heroes')),
        catchError(this.handleError('getHeroes', []))
      );
  }

    /** GET heroes from the server */
    /*getHeroes (): Observable<Hero[]> {
      return this.http.get<Hero[]>(this.heroesUrl)
        .pipe(
          tap(heroes => this.log(`fetched heroes`)),
          catchError(this.handleError('getHeroes', []))
        );
    }*/

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
 
}
