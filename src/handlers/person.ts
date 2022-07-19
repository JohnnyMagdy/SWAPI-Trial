import express, { Request, Response } from 'express';
import { Person, PersonStore } from '../models/person';

const store = new PersonStore();

const index = async (_req: Request, res: Response) => {
    const people = await store.index();
    res.json(people);
}

const getActorByName = async (req: Request, res: Response) => {
    const person = await store.getActorByName(req.params.name);

    if ((typeof person) == 'string') res.json(person); //So I can do something here if I want to.

    res.json(person);
}

const people_routes = (app: express.Application) => {
    app.get('/people', index);
    app.get('/people/:name', getActorByName);
}

export default people_routes;
