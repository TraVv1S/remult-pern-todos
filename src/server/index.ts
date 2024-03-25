import express from 'express';
import {api} from "./api"

const app = express();
app.use(api);
const port = 3002;

app.get('/api/hi', (req, res) => res.send("hello"));
app.listen(port, () => console.log("[server]: Server started at " + port ));