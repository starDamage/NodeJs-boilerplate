// Start the server
import "dotenv/config";
import app from "./src/app";
import { mongoDBConnection } from "./src/db";

const port = process.env.PORT || 3002;

(async () => {
  try {
    let db = await mongoDBConnection();
    if (db) {
      console.log(`Database connection established`);
      app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
      });
    }
  } catch (e) {
    console.log(`Mongodb connection failed: ${e.message}`);
  }
})();
