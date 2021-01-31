import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(movies: object[], term: string): object[] {

    let filteredData = movies.filter(movie => movie['title'].toLowerCase().includes(term.toLowerCase()))
    console.log(filteredData)
    
    return filteredData;
  }

}
