Backend:

    Weather Report (Status: Completed)
    Schedule Meeting (Status: Completed)
    Login Page/Sign-In/Sign-Up ((Status: Completed)

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

## changing city/state/country location:

In LandingPage.tsx
Open-Weather: change the q= parameter (City,CountryCode)
eg. fetch(`https://..q=Delhi,In) => fetch(`https://..q=Mumbai,In) 

Open‑Meteo fallback: update the latitude/longitude
eg. await fetch(
    "https://..latitude=28.." => "https://..latitude=56.."
);

Refresh and boom! changes applied :D

QTip: Tip: Use a geocoder to find coordinates, e.g., Open‑Meteo’s geocoding or OpenWeather’s geocoding API.


## deployment of this project
Github
