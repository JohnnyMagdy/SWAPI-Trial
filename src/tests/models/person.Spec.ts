import { Person, PersonStore } from '../../models/person';

const store = new PersonStore();

describe('Test person functions.', () => {
    it('It checks if index function exists.', async () => {
        expect(await store.index()).toBeDefined();
    });
    it('It checks if getActorByName function exists.', async () => {
        expect(await store.getActorByName('Luke Skywalker')).toBeDefined();
    });
    it('It expects index to return a value.', async () => {
        expect(await store.index()).toBeTruthy();
    });
    it('It expects getActorByName to return a value.', async () => {
        expect(await store.getActorByName('Luke Skywalker')).toBeTruthy();
    });
    it('It expects index to return all person data and the name of the first one is (Luke Skywalker).', async () => {
        const movies = await store.index();
        const PersonName = movies[0][0].name;
        expect(PersonName).toEqual('Luke Skywalker');
    });
    it("It expects getActorByName to return a specific person and it's name is (Luke Skywalker) or simple string if it dosen't exist.", async () => {
        let actor = await store.getActorByName('Luke Skywalker');
        if(typeof actor !== 'string'){
            expect(actor.name).toEqual('Luke Skywalker');
        }else{
            expect(actor)
            .toEqual('Can not find an actor with the name of Luke Skywalker');
        }
    });
});