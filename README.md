# Weather App

A responsive, full-stack web-based weather application that provides real-time weather forecasts, location tracking, and 7-day weather predictions.

## 🚀 Live Demo
You can view the live deployment here: [Weather App on Vercel](https://weather-app-eight-silk-81.vercel.app)

## ✨ Features
* **Real-time Forecasts:** Fetches up-to-date weather status using WeatherAPI.
* **Flexible Search:** Supports weather lookups via specific location names or direct geographical coordinates (Latitude and Longitude).
* **Responsive Layout:** Clean user interface with dynamic weather state displays.
* **Custom Favicon:** Enhanced web identity with a custom tab icon.

## 🛠️ Tech Stack
* **Frontend:** HTML5, CSS3, EJS (Embedded JavaScript Templates)
* **Backend:** Node.js, Express.js
* **API Integration:** Axios
* **Environment Management:** Dotenv (Configured securely to protect API Keys)
* **Deployment:** Vercel Architecture

## 💻 Local Setup Instructions

1. **Clone the repository:**
```
git clone https://github.com/wusyou/weather-app.git
```
2. Install dependencies:
```
npm install
```
3. Configure Environment Variables:
Create a .env file in the root directory and add your key:
```
WEATHER_API_KEY=your_actual_weather_api_key
```
4. Start the local development server:
```
node index.js
