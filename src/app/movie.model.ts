import { Movie } from './movie';

export class MovieModel {
    image: string;
    title: string;
    rating: number;
    desc: string;
    date: string;
    type: string;
    id: number;

    mapping(data): Movie {
        return {
            image: data.poster_path,
            rating: data.vote_average,
            desc: data.overview,
            title: data.title ? data.title : data.name,
            date: data.first_air_date ? data.first_air_date : data.release_date,
            type: data.media_type,
            id: data.id
        }
    }

}