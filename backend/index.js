import app from "./app.js";

import DB_Connect from "./config/DB_Connect.js";

DB_Connect();

const port = 5000;
app.listen(port, () => {
  console.log("Server started listening on port " + port);
});
