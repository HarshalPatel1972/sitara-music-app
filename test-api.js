// test-api.cjs
const axios = require("axios");

// Replace this with your actual API key from the .env file
const apiKey = "92c90b54famsh55bcb2a61834512p1a8497jsn06b2e40b0565";

const options = {
  method: "GET",
  url: "https://shazam-core.p.rapidapi.com/v1/charts/genre-world",
  params: { genre_code: "POP" }, // This is the required parameter
  headers: {
    "X-RapidAPI-Key": apiKey,
    "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
  },
};

console.log("Attempting to call the CORRECT Shazam API endpoint...");

axios
  .request(options)
  .then((response) => {
    console.log("\n✅ SUCCESS! The API call finally worked.");
    console.log("-----------------------------------------");
    console.log("Here is the data (first 3 tracks):");
    // This endpoint returns the array directly, no .tracks property needed
    console.log(response.data.slice(0, 3));
  })
  .catch((error) => {
    console.error("\n❌ FAILED! The API call still did not work.");
    console.error("-------------------------------------------");
    if (error.response) {
      console.error("Status Code:", error.response.status);
      console.error("Error Data:", error.response.data);
    } else {
      console.error("Error:", error.message);
    }
  });
