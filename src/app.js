import express from "express";
import UserRoute from "./routes/users";
import AdminRoute from "./routes/admin";

const app = express();

app.use(express.json());

// custom routes
app.use("/users", UserRoute);
app.use("/admin", AdminRoute);

// Routes
app.get("/", (req, res) => {
  res.send("Hello, World and added some changes over here!");
});

export default app;
