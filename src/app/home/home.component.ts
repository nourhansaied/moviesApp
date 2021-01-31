import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { UsersService } from '../users.service'
import { Movie } from '../movie'
import { MovieModel } from '../movie.model';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  parentMessage: string = '';
  updatedFromChild: string;
  term: string = '';
  displayUserData = false;
  data;
  username = 'Nour';
  userAge = 29;
  x = 'route'
  imgSrc = 'assets/item1.jpg';
  trending: Movie[] = [];
  testing: Movie[];

  baseImageURL = 'https://image.tmdb.org/t/p/w500';
  componentSubscribe: any = ''
  // DI --> decency injection
  // access modifiers
  constructor(
    private _apiService: ApiService
  ) { 

    //TODO: check function in interface 
    // this.testing = [
    //   { title: 'asdasd', image: 'asdasdasdas', desc: 'asdasdas', rating: 123123, sayHi: this.sayHi() },
    //   { title: 'asdasd', image: 'asdasdasdas', desc: 'asdasdas', rating: 123123, sayHi: this.sayHi()  },

    //   { title: 'asdasd', image: 'asdasdasdas', rating: 123123 },

    // ]
    // let users = new UsersService(true);
    this.data = [];
    console.log(this.data)
    this.getTrend()
  }

  sayHi() {

  }


  getTrend() {
    this.componentSubscribe =  this._apiService.getMovies('trending').subscribe(
      (bl7) => {
        this.trending = bl7.results;
        this.trending = this.trending.slice(0, 10)
        // for (let i = 0; i < this.trending.length; i++){
        //   this.trending[i]
        // }
        // this.trending = this.trending.map(ele => {
        //   let movieModel = new MovieModel();
        //    return movieModel.mapping(ele)

        // })
        //TODO: why this return as any 
        this.trending = this.trending.map(ele => {
          let movieModel = new MovieModel();
           return movieModel.mapping(ele)

        })
        console.log(this.trending)
       
      },
      (err) => {
        console.log(err)
      }


     )
  }



  ngOnInit(): void {
  }

  fromChild(e) {
    this.updatedFromChild = e
  }



    test() {
        alert('asdasdas')
    }

    toggleUserData() {
        // if (this.displayUserData) {
        //     this.displayUserData = false
        // } else {
        //     this.displayUserData = true
        // }
        // this.displayUserData = this.displayUserData ? false : true;
        this.displayUserData = !this.displayUserData ;

    }
  
  
  ngOnDestroy() {
    this.componentSubscribe.unsubscribe();
    console.log('HELLOW FROM ALEXANDRIA')
  }

  // getMoreData(id) {
  //   this._apiService.getDetials(id).subscribe()
  // }
}
