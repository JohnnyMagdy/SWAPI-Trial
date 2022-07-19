import bodyParser from 'body-parser';
import express from 'express';
import movies_routes from './handlers/movie';
import people_routes from './handlers/person';

const app = express();
const port = 3000;

app.use(bodyParser.json());

movies_routes(app);
people_routes(app);

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`)
})

export default app;