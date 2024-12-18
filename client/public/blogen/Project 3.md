# Project 3: Full Stack Project

This project involves building a website using Next.js and GraphQL, utilizing the skills learned so far. It is designed for college students new to web development, aiming to provide a fun and engaging way to practice essential web technologies. The assignment offers a high degree of creative freedom, encouraging students to implement their unique ideas.

> If you'd like to work on a different project, you may do so, provided that the project leverages the skills you've learned.

## Project Overview

1. **Frontend**: Next.js
2. **Backend**: GraphQL
3. **Database**: MongoDB
4. **Deployment**: Vercel

---

## Option 1: Flight Information Lookup Website

### Project Goals

- Create a website for searching flight information.
- Implement login functionality.
- Add a feature to bookmark favorite flights.

### Project Features

1. Page to search for flight information.
2. Login page.
3. Signup page.
4. Favorites page.
5. My Page (for editing user information).

### Project Requirements

- Retrieve flight information via an API.
- Store user information in MongoDB.
- Save bookmarked flights in MongoDB.

### Flight Information API Instructions

Refer to the [API Documentation](https://docs.flightapi.io/oneway-trip-api).

> If you wish to use a different API, feel free to do so.

1. **API Key Generation**  
   Log in and generate your API Key.
2. **Using the API Key**  
   Include the API Key in the HTTP Header for your requests.
3. **Set Up Next.js Project and Install `axios`**
   ```bash
   npm install axios
   ```

### Example Code:

```javascript
const apiKey = "YOUR_API_KEY";
const departureAirport = "JFK";
const arrivalAirport = "LAX";
const departureDate = "20241201";

const url = `https://api.flightapi.io/trackbyroute/${apiKey}?date=${departureDate}&airport1=${departureAirport}&airport2=${arrivalAirport}`;

export const metadata = {
  title: "Home",
};

async function getFlights() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched flights:", data);
    return data; // Ensure the fetched data is returned
  } catch (error) {
    console.error("Error fetching flights:", error);
    return []; // Return an empty array in case of an error to avoid breaking the UI
  }
}

export default async function HomePage() {
  const flights = await getFlights();
  return (
    <div>
      {flights.length > 0 ? ( // Check if there are flights
        flights.map((flight) => (
          <div key={flight.id}>
            <h2>{flight.Airline}</h2>
            <p>Flight Number: {flight.FlightNumber}</p>
            <p>Departure: {departureAirport}</p>
            <p>Arrival: {arrivalAirport}</p>
            <p>Price: {flight.price}</p>
          </div>
        ))
      ) : (
        <p>No flights found or an error occurred.</p>
      )}
    </div>
  );
}
```

Additional functionalities can be implemented using the details in the API Documentation.

---

## Option 2: Budget Tracker Website

### Project Goals

- Create a website for tracking budgets.
- Implement login functionality.

### Project Features

1. Budget tracking page.
2. Login page.
3. Signup page.
4. My Page (for editing user information).

### Project Requirements

- Store budget information in MongoDB.
- Store user information in MongoDB.

---

## Option 3: Open Topic

You are free to work on a project of your choice, as long as it utilizes the skills you’ve learned.

---

## Project Deadline

- **December 2nd (Monday), 7 PM**
- A brief project presentation will take place during the basic workshop session.

---

## Project Submission Instructions

1. Create a new repository on GitHub.
2. Upload your project.
3. Write a project description in the `README.md` file.

> **Note**: This is a highly flexible project, so feel free to add or modify requirements as needed during development. If you encounter errors or have difficulty progressing, don’t hesitate to ask for help from the organizers or make use of ChatGPT.
