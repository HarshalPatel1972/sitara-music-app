// test-api.js
const axios = require("axios");

// Replace this with your actual API key from the .env file
const apiKey = "92c90b54famsh55bcb2a61834512p1a8497jsn06b2e40b0565";

const options = {
  method: "GET",
  url: "https://shazam-core.p.rapidapi.com/v2/charts/world",
  headers: {
    "X-RapidAPI-Key": apiKey,
    "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
  },
};

console.log("Attempting to call the Shazam API...");

axios
  .request(options)
  .then((response) => {
    console.log("\n✅ SUCCESS! API call worked.");
    console.log("---------------------------------");
    console.log("Here is the data:");
    // The actual song data is inside response.data.tracks
    console.log(response.data.tracks.slice(0, 3)); // Show first 3 tracks
  })
  .catch((error) => {
    console.error("\n❌ FAILED! The API call did not work.");
    console.error("--------------------------------------");

    // This provides detailed error information
    if (error.response) {
      console.error("Status Code:", error.response.status);
      console.error("Error Data:", error.response.data);
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Error setting up request:", error.message);
    }
  });
