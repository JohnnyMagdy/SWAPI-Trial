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

export class MovieController {
    async index(): Promise<Movie[] | string> {
        try {
            const movies = await swapi.get('https://swapi.dev/api/films/');
            if (movies.results.length > 0) {
                return movies.results;
            } else {
                return 'There are currently no movies yet';
            }
        } catch (err) {
            return `Can not get movies from api error: ${err}`;
        }
    }

    async detail(requestedId: Number): Promise<Movie | string> {
        if (Number.isNaN(requestedId)) {
            return `The movie id should be a number`;
        }
        if (requestedId <= 0) {
            return 'The movie id is not valid';
        }
        try {
            const movie = await swapi.films({ id: requestedId });
            const actors = movie.characters;
            let actorsNames: string[] = [];

            for (var actorURL of actors) {
                actorsNames.push(await getActorNameByURL(actorURL) as string);
            }

            movie.characters = actorsNames;

            return movie;
        } catch (err) {
            return `There was an error trying to get movie data ${err}`;
        }
    }
}
