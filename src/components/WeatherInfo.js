import React from 'react';
import ClothingSuggestions from './recommendations/ClothingSuggestions';
import OutdoorActivities from './recommendations/OutdoorActivities';
import FoodRecommendations from './recommendations/FoodRecommendations';
import HealthTips from './recommendations/HealthTips';
import { Container, Row, Col } from 'react-bootstrap';



const WeatherInfo = ({ weatherData }) => {
  const { location, current } = weatherData;

  return (
    <Container className="m-4">
      <h2>Weather Information</h2>
      <table className="table">
        <tbody>
          <tr>
            <td>Location:</td>
            <td>{`${location.name}, ${location.region}, ${location.country}`}</td>
          </tr>
          <tr>
            <td>Latitude:</td>
            <td>{location.lat}</td>
          </tr>
          <tr>
            <td>Longitude:</td>
            <td>{location.lon}</td>
          </tr>
          <tr>
            <td>Timezone:</td>
            <td>{location.tz_id}</td>
          </tr>
          <tr>
            <td>Current Date & Time :</td>
            <td>{location.localtime}</td>
          </tr>
         
          <tr>
            <td>Temperature:</td>
            <td>{`${current.temp_c}°C / ${current.temp_f}°F`}</td>
          </tr>
          <tr>
            <td>Condition:</td>
            <td>{current.condition.text}</td>
          </tr>

          <tr>
            <td>Wind Level:</td>
            <td>Mph: {current.wind_mph} | Degree:  {current.wind_degree} | Wind Direction: {current.wind_dir} </td>
          </tr>

          <tr>
            <td>Humidity Level:</td>
            <td>{current.humidity}  </td>
          </tr>

          <tr>
            <td>Cloud Level:</td>
            <td>{current.cloud}  </td>
          </tr>
          
        </tbody>
      </table>

      <Row className="m-4">
        <Col md={6}>
          <div className="p-3 bg-white rounded shadow-sm">
            <ClothingSuggestions temperatureC={current.temp_c} />
          </div>
        </Col>
        <Col md={6}>
          <div className="p-3 bg-white rounded shadow-sm">
            <OutdoorActivities condition={current.condition.text} />
          </div>
        </Col>
      </Row>

      <Row className="m-4">
        <Col md={6}>
          <div className="p-3 bg-white rounded shadow-sm">
            <FoodRecommendations condition={current.condition.text} />
          </div>
        </Col>
        <Col md={6}>
          <div className="p-3 bg-white rounded shadow-sm">
            <HealthTips humidity={current.humidity} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default WeatherInfo;
