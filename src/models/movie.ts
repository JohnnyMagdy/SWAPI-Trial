import swapi from 'swapi-node';
import { getActorNameByURL } from './helpers/person_helpers';

export type Movie = {
    title: string;
    episode_id: Number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    created: string;
    edited: string;
    url: string;
}

let movie: Movie[];

export class MovieStore {
    async index(): Promise<Movie[]> {
        const movies = await swapi.get('https://swapi.dev/api/films/');
        return movies.results;
    }

    async detail(requestedId: Number): Promise<Movie> {
        const movie = await swapi.films({ id: requestedId });
        const actors = movie.characters;
        let actorsNames: string[] = [];

        for (var actorURL of actors) {
            actorsNames.push(await getActorNameByURL(actorURL) as string);
        }

        movie.characters = actorsNames;

        return movie;
    }
}
