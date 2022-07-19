import express, { Request, Response } from 'express';
import { Movie, MovieController } from '../models/movie';

const store = new MovieController();

const index = async (_req: Request, res: Response) => {
    let movies: Movie[] | string = await store.index();

    res.json(movies);
}

const detail = async (req: Request, res: Response) => {
    let movie: Movie | string = await store.detail(parseInt(req.params.id));

    res.json(movie);
}

const movies_routes = (app: express.Application) => {
    app.get('/movies', index);
    app.get('/movies/:id', detail);
}

export default movies_routes;