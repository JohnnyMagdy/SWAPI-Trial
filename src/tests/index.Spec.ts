import supertest from "supertest";
import app from "../index";

const request = supertest(app);

describe('Test endpoint responses', () => {
    it('gets the people endpoint', async () => {
        const response = await request.get('/people');
        expect(response.status).toBe(200);
    });
    it('gets the movies endpoint', async () => {
        const response = await request.get('/movies');
        expect(response.status).toBe(200);
    });
    it('gets the movie by id endpoint', async () => {
        const response = await request.get('/movies/1');
        expect(response.status).toBe(200);
    });
    it('gets the person by name endpoint', async () => {
        const response = await request.get('/people/Luke Skywalker');
        expect(response.status).toBe(200);
    });
});
