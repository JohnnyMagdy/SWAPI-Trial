import { Person, PersonController } from '../../models/person';

const controller = new PersonController();

describe('Test person functions.', () => {
    it('It checks if index function exists.', async () => {
        expect(await controller.index()).toBeDefined();
    });
    it('It checks if getActorByName function exists.', async () => {
        expect(await controller.getActorByName('Luke Skywalker')).toBeDefined();
    });

    it('It expects index to return all person data', async () => {
        //Arrange
        const people = await controller.index();

        //Act

        //Assert
        expect(people.length).toBeGreaterThan(0);
    });
    it("It expects getActorByName to return a specific person --SUCCESS", async () => {
        //Arrange
        let actor = await controller.getActorByName('Luke Skywalker');

        //Act

        //Assert
        expect(typeof actor).not.toEqual('string');
    });
    it("It expects getActorByName to return a specific person --Fail", async () => {
        //Arrange
        let actor = await controller.getActorByName('11111111111');

        //Act
        
        //Assert
        expect(typeof actor).toEqual('string');
    });
});