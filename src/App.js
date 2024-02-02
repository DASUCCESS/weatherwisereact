import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import Axios from 'axios';
import WeatherInfo from './components/WeatherInfo';

function App() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      
      const apiKey = '************************';
      const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;
  
      const response = await Axios.get(apiUrl);
      const fetchedWeatherData = response.data;
  
      
      setWeatherData(fetchedWeatherData);
      console.log(weatherData);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <Container className="m-4">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formLocation">
          <Form.Label>Enter Location:</Form.Label>
          <Form.Control
            type="text"
            placeholder="E.g., City name or coordinates"
            value={location}
            onChange={handleLocationChange}
          />
        </Form.Group>
        <Button className="mt-2" variant="primary" type="submit">
          Get Weather
        </Button>

      </Form>

      {weatherData && <WeatherInfo weatherData={weatherData} />}
    </Container>
  );
}

export default App;
