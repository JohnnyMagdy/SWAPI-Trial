import { Movie, MovieStore } from '../../models/movie';

const store = new MovieStore();

describe('Test movie functions.', () => {
    it('It checks if index function exists.', async () => {
        expect(await store.index()).toBeDefined();
    });
    it('It checks if detail function exists.', async () => {
        expect(await store.detail(1)).toBeDefined();
    });
    it('It expects index to return a value.', async () => {
        expect(await store.index()).toBeTruthy();
    });
    it('It expects detail to return a value.', async () => {
        expect(await store.detail(1)).toBeTruthy();
    });
    it('It expects index to return all movies data and the title of the first one is (A New Hope).', async () => {
        const movies = await store.index();
        const PersonName = movies[0].title;
        expect(PersonName).toEqual('A New Hope');
    });
    it("It expects detail to return a specific movie and it's title is (A New Hope).", async () => {
        expect((await store.detail(1)).title).toEqual('A New Hope');
    });
});