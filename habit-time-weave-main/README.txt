Backend:

    Weather Report: (Completed)
    Schedule Meeting: Scheduling meetings with a specified date and time and alerting the user on that moment. 
    To-do list + setTime()
    Login Page (Sign-In/Sign-Up)

Viva:
25 marks    Frontend (Why react/vite/tailwind, how, what technologia)
25 marks    Backend (database, middleware, moongoose, JWT tokens, npm init, routing, .env files, config, api, json)
20 marks    Explaination ()
10 marks    Presentation (2 slides each person)
20 marks    Viva

Grace:
Github Pull/Push (5)
Code Explaination (5)

More Questions
CRUD
API calls
"/" roots
DBMS vs RDBMS


Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

Weather-app socials

Api-call: https://www.weatherapi.com
Icons: https://openweathermap.org/weather-conditions
Code fetch: https://open-meteo.com/en/docs#weathervariables 

## changing city/state/country location: // v1
In LandingPage.tsx
Open-Weather: change the q= parameter (City,CountryCode)
eg. fetch(`https://..q=Delhi,In) => fetch(`https://..q=Mumbai,In) 
Open‑Meteo fallback: update the latitude/longitude
eg. await fetch(
    "https://..latitude=28.." => "https://..latitude=56.."
);
Refresh and boom! changes applied :D
QTip: Tip: Use a geocoder to find coordinates, e.g., Open‑Meteo’s geocoding or OpenWeather’s geocoding API.

V2 changelog:
Now we can search for our desired city/state or country just by a simple openWeatherDescription string that automatically fetches the input from the desired location given by the user. No manual backend hassle.

Calendar changelog:
7-column grid for days of the week (SUN-SAT)
Calendar header with Today button and navigation arrows
Proper date calculations for previous/current/next month days
Today highlighting with primary color border
Hover effects on day cells
Empty event slots (invisible placeholders for future events)
Responsive borders between cells
Muted styling for previous/next month dates

Grid Structure:
Header row with day names
6-7 rows for weeks (depending on month)
Each cell is 80px height with proper spacing
Border separators between all cells
This gives you the exact table/row/column structure you'll need for the backend events later! 

v3 changelog:
Now connected with backend! 
All my backend data works from server.js. This includes Authentication, Routing, Database Management and JWT
Aside from that, we have multiple new dependencies such as "@types/bcrypt": "^6.0.0", 2 new api keys 
for MongoDB and JWT and env variables (updated to gitignore)

Whenever user creates their account, they get Authentication for using our Omni-Calender.
Meaning only those users whose accounts exist are allowed.
Private Policies, cookies and other important security docs have been generated. 
Make sure to read them!

Color has been updated as per the request.
Possible dark mode in future (gradient contrasts are hard to make)


