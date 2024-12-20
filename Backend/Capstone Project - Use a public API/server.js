import express from 'express'; // Import the Express framework for building the server
import axios from 'axios'; // Import Axios for making HTTP requests
import dotenv from 'dotenv'; // Import dotenv to manage environment variables

dotenv.config(); // Load environment variables from the .env file

const app = express(); // Initialize the Express app
const PORT = 3000; // Define the port for the server
const API_URL = 'https://calendarific.com/api/v2'; // Base URL for the Calendarific API
const apiKey = process.env.apiKey; // Fetch the API key from environment variables

// Middleware to parse incoming JSON requests
app.use(express.json());

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Route handler for the root endpoint
app.get('/', async (req, res) => {
  try {
    // Get the current date information
    const currentDate = new Date(); // Create a new Date object for the current date
    const currentDay = currentDate.getDate(); // Extract the current day (1-31)
    const currentMonth = currentDate.getMonth() + 1; // Extract the current month (0-11) and add 1 for 1-12 format
    const currentYear = currentDate.getFullYear(); // Extract the current year (e.g., 2024)
    const country = 'us'; // Define the country code (can be dynamically updated later)

    // Make a GET request to the Calendarific API to fetch holidays
    const response = await axios.get(`${API_URL}/holidays`, {
      params: {
        api_key: apiKey, // API key for authentication
        country, // Country code for fetching holidays
        year: currentYear, // Filter holidays by the current year
        month: currentMonth, // Filter holidays by the current month
        day: currentDay, // Filter holidays by the current day
      },
    });

    // Render the holidays data using the EJS template
    res.render('index.ejs', { content: response.data });
  } catch (error) {
    // Log the error for debugging
    console.error('Error fetching holidays:', error.message);

    // Respond with a 500 status code and error message
    res.status(500).json({ error: error.message });
  }
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
