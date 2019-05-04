import app from "./app";
import { PORT } from './config/environments';

const server = app.listen(PORT);

export default server;
