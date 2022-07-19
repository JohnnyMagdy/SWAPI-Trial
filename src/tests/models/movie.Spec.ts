import { Movie, MovieController } from '../../models/movie';

const controller = new MovieController();

describe('Test movie functions.', () => {
    it('It checks if index function exists.', async () => {
        expect(await controller.index()).toBeDefined();
    });
    it('It checks if detail function exists.', async () => {
        expect(await controller.detail(1)).toBeDefined();
    });
    
    it('It expects index function to return all movies data.', async () => {
        //Arrange
        let movies = await controller.index();

        console.log(movies)
        //Act
        if(typeof movies == 'string'){
            movies = [];
        }

        //Assert
        expect(movies.length).toBeGreaterThan(0);
    });
    it("It expects detail function to return a specific movie --SUCCESS", async () => {
        //Arrange
        let movie = await controller.detail(1)

        //Act
        
        //Assert
        expect(typeof movie).not.toEqual('string');
    });
    it("It expects detail function to return a specific movie --FAIL", async () => {
        //Arrange
        let movie = await controller.detail(10)

        //Act
        
        //Assert
        expect(typeof movie).toEqual('string');
    });
});