import React, { useState, useEffect } from 'react';
import { Card, Alert } from 'react-bootstrap';

const WeatherWidget = () => {
  const [widgetData, setWidgetData] = useState({});
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    // Make API call to Django backend to fetch widget data
    fetch('http://localhost:8000/api/weather_widget/')
      .then((response) => response.json())
      .then((data) => {
        setWidgetData(data.widget_html);
        setAlertMessage(data.alert_message);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <Card>
      <Card.Body>
        <div dangerouslySetInnerHTML={{ __html: widgetData }} />
        {alertMessage && <Alert variant="danger">{alertMessage}</Alert>}
      </Card.Body>
    </Card>
  );
};

export default WeatherWidget;
