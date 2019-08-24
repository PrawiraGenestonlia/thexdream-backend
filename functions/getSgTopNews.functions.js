const axios = require('axios');

module.exports = async function getSgTopNews() {
  try {
    return await axios.get('https://newsapi.org/v2/top-headlines?country=sg&apiKey=7a3cf41f75694319ac3e3529c17f27c4');
  } catch (err) {
    return false;
  }
}

