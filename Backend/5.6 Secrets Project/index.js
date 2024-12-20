// HINTS:
// 3. Use the public folder for static files.

// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.

import express from 'express';
import axios from 'axios';

const app = express();
const PORT = 3000;
const API_URL = 'https://secrets-api.appbrewery.com/random';

app.use(express.static('public'));

app.get('/', async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    res.render('index.ejs', {
      secret: response.data.secret,
      user: response.data.username,
    });
  } catch (error) {
    console.log(error.response.data);
    res.status(500);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
