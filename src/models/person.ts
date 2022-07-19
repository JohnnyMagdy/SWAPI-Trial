import { PopulatePeople } from './helpers/person_helpers';

export type Person = {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
}

let people: Person[][];

export class PersonController {
    async index(): Promise<Person[][]> {
        try {
            people = await PopulatePeople();

            return people;
        } catch (err) {
            throw new Error(`Cannot get people from api ${err}`);
        }
    }

    async getActorByName(requestedName: string): Promise<Person | string> {
        try {
            people = await PopulatePeople();
        } catch (err) {
            throw new Error(`Cannot get people from api ${err}`);
        }

        let actor: Person | undefined;

        for (let i = 0; i < people.length; i++) {
            for (let j = 0; j < people[i].length; j++) {
                if (people[i][j].name == requestedName) {
                    actor = people[i][j];
                }
                if (actor !== undefined){
                    break;
                }
            }
            if (actor !== undefined){
                break;
            }
        }
        if (actor !== undefined) {
            return actor;
        } else {
            return `Can not find an actor with the name of ${requestedName}`;
        }
    }
}