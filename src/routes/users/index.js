import { getUserHandler } from "./get";
import { Router } from "express";

const UserRoute = Router();
UserRoute.get("/", getUserHandler);

export default UserRoute;
