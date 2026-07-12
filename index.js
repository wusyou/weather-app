import express from "express";
import axios from "axios";
import "dotenv/config";

const app = express();
const port = 3000;

const apiKey = "process.env.WEATHER_API_KEY";
const weatherAPI = "https://api.weatherapi.com/v1";

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    res.render("weather.ejs");
  } catch (error) {
    console.log(error.response.data);
    res.status(500).send("Server Error");
  }
});

app.post("/get-weather", async (req, res) => {
  const { location, latitude, longitude } = req.body;

  try {
    let query;

    if (latitude && longitude) {
      query = `${latitude},${longitude}`;
    } else if (location) {
      query = location;
    } else {
      return res.render("weather.ejs", {
        error: "Please provide either location name or coordinates!",
      });
    }

    const response = await axios.get(`${weatherAPI}/forecast.json`, {
      params: {
        key: apiKey,
        q: query,
        days: 7,
        aqi: "no",
      },
    });

    const data = response.data;
    const displayName = `${data.location.name}, ${data.location.region}, ${data.location.country}`;

    res.render("weather.ejs", {
      weatherData: data,
      locationName: displayName,
    });
  } catch (error) {
    res.render("weather.ejs", {
      error: "Location not found or API Error. Please try again.",
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
