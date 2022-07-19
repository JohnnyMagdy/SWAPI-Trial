import swapi from 'swapi-node';
import { Person } from '../person';

export const PopulatePeople = async ():Promise<Person[][]> => {
    let APIResult = await swapi.get('https://swapi.dev/api/people/');
    let people = [APIResult.results];

    while (true) {
        APIResult = await APIResult.nextPage();

        people.push(APIResult.results);

        if (!APIResult.next) break;
    }
    return people;
}

export const getActorNameByURL = async (actorURL: string):Promise<string> => {
    const actorDetails = await swapi.get(actorURL);
    const actorName = actorDetails.name;

    return actorName;
}