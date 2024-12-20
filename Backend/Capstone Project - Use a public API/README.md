# Holiday Fetcher Application

This is a simple Node.js application that uses the [Calendarific API](https://calendarific.com/) to fetch holidays for the current day and display them using an Express server and EJS templating engine.

---

## Features

- Fetches and displays holidays for the current day in the US (can be extended to other countries).
- Uses `axios` to make API requests.
- Renders the holiday data dynamically with EJS.
- Provides error handling for failed API requests or no holidays on the current day.

---

## Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 14 or above)
- [npm](https://www.npmjs.com/) (comes with Node.js)

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/holiday-fetcher.git
   cd holiday-fetcher
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root of your project and add your Calendarific API key:

   ```env
   apiKey=YOUR_API_KEY
   ```

4. Start the server:
   ```bash
   npm start
   ```

---

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. If there are holidays on the current date, they will be displayed on the page.
3. If no holidays are found for the current date, a message will indicate that.

---

## Project Structure

```
├── views/
│   ├── index.ejs    # EJS template for rendering holidays
├── .env             # Environment variables (not included in repo)
├── app.js           # Main application file
├── package.json     # Project metadata and dependencies
├── README.md        # Project documentation
```

---

## Technologies Used

- **Node.js**: JavaScript runtime for building the server.
- **Express**: Web framework for routing and middleware.
- **EJS**: Template engine for rendering dynamic views.
- **Axios**: HTTP client for making API requests.
- **Dotenv**: Manage environment variables securely.

---

## API Reference

- **Calendarific API**:
  - Base URL: `https://calendarific.com/api/v2/holidays`
  - Query Parameters:
    - `api_key`: Your API key.
    - `country`: Country code (e.g., `US`).
    - `year`: Year to fetch holidays for.
    - `month` (optional): Month to filter holidays.
    - `day` (optional): Day to filter holidays.

Example request:

```bash
GET https://calendarific.com/api/v2/holidays?api_key=YOUR_API_KEY&country=US&year=2024&month=12&day=20
```

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## Acknowledgements

- [Calendarific API](https://calendarific.com/) for providing holiday data.
- [Node.js](https://nodejs.org/) and its ecosystem.

---

## Contact

For any inquiries or issues, please contact:

- **Your Name**: [your.email@example.com](mailto:your.email@example.com)
- GitHub: [your-username](https://github.com/your-username)
