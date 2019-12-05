require('dotenv').config();

const server = require('./api/server.js');

// make port dynamic to deploy on Heroku
// this line is reading an environment variable 
// using process.env.PORT allows Heroku to use whichever port they assign
const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
