import { getUserHandler } from "./get";
import { Router } from "express";
import { createUserHandler } from "./post";

const UserRoute = Router();
UserRoute.get("/", getUserHandler);
UserRoute.post("/create", createUserHandler);

export default UserRoute;
