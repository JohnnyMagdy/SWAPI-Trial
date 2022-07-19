import express, { Request, Response } from 'express';
import { Movie, MovieStore } from '../models/movie';

const store = new MovieStore();

const index = async (_req: Request, res: Response) => {
    let movies:Movie[] = await store.index();
    
    res.json(movies);
}

const detail = async (req: Request, res: Response) => {
    let movie:Movie = await store.detail(parseInt(req.params.id));

    res.json(movie);
}

const movies_routes = (app: express.Application) => {
    app.get('/movies', index);
    app.get('/movies/:id', detail);
}

export default movies_routes;