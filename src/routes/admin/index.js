import { getAdminHandler, getTestHandler } from "./get";

import { Router } from "express";
const AdminRoute = Router();

AdminRoute.get("/", getAdminHandler);
AdminRoute.get("/test", getTestHandler);

export default AdminRoute;
