export class Film {

  public imdbID: string;
  public Title: string;
  public Poster: string;
  public Year: number;
  public Plot: string;

  constructor(Title: string, Poster: string, Year: number) {
    this.Title = Title;
    this.Poster = Poster;
    this.Year = Year;
  }
}
