import { getActorNameByURL, PopulatePeople } from "../../../models/helpers/person_helpers";

describe('Test person helpers functions.', () => {
    it('It checks if PopulatePeople function exists.', async () => {
        expect(await PopulatePeople()).toBeDefined();
    });
    it('It checks if getActorNameByURL function exists.', async () => {
        expect(await getActorNameByURL("https://swapi.dev/api/people/1/")).toBeDefined();
    });
    it('It expects PopulatePeople to return a value.', async () => {
        expect(await PopulatePeople()).toBeTruthy();
    });
    it('It expects getActorNameByURL to return a value.', async () => {
        expect(await getActorNameByURL("https://swapi.dev/api/people/1/")).toBeTruthy();
    });
    it('It expects PopulatePeople to return all people data and the name of the first one is (luke skywalker)', async () => {
        const People = await PopulatePeople()
        const PersonName = People[0][0].name;
        expect(PersonName).toEqual('Luke Skywalker');
    });
    it('It expects getActorNameByURL to return a specific person name (luke skywalker)', async () => {
        expect(await getActorNameByURL("https://swapi.dev/api/people/1/")).toEqual('Luke Skywalker');
    });
});
