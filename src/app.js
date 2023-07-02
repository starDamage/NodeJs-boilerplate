import express from "express";
import UserRoute from "./routes/users";
import AdminRoute from "./routes/admin";

const app = express();

// Middleware
app.use(express.json());

// custom routes
app.use("/users", UserRoute);
app.use("/admin", AdminRoute);

// Routes
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

export default app;
