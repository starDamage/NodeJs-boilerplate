// Start the server
import "dotenv/config";
import app from "./src/app";

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
