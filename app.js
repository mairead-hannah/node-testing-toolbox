import express from "express";
import logger from "morgan";

// import RoutesFolder from "./routes/routes";

const app = express();
const port = process.env.PORT || '3000';

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use('/api/something', RoutesFolder);
app.get('/api', (req, res) => res.send({ message: "Welcome to my API!" }));
app.get("*", (req, res) => res.status(404).send("There is no content at this route."));

app.listen(port, () => console.log(`Server is listening on port ${port}.`));