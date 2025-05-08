import { useEffect, useState } from "react";
import './Home.css';
import { MAP_API_KEY } from "../utils/constants";
import MapContainer from '../components/MapContainer'


// latitude: 54.6876  55.261909, 
// longitude: 25.2806  24.034855

const Home = () => {
    const [data, setData] = useState({
        ip: null,
        city: null,
        org: null,
        contry_name: null
    });
  
    const [coordinates, setCoordinates] = useState({
        latitude: 55.261909,
        longitude: 24.034855
    })
    


    useEffect(() => {
        const fetchData = () => {
            fetch('https://ipapi.co/json/')
        //   fetch('https://cors-anywhere.herokuapp.com/https://ipapi.co/json/')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData({
                    ip: data.ip,
                    city: data.city,
                    org: data.org,
                    country_name: data.country_name

                });
                setCoordinates({
                    latitude: data.latitude,
                    longitude: data.longitude   
                })
            })

            .catch(() => {
                // fake data
                setData({
                    ip: '78.60.184.222',
                    city: 'Random city',
                    org: 'TEO',
                    country_name: 'Random country'

                });
                console.log('pagautas')
                setCoordinates({
                    latitude: 19.932344,
                    longitude: 78.254511  
                })
            })
        };
        
        fetchData();
      }, []);

    

    return(
        <div>
            <h1>example</h1>
            <h2>example</h2>
            <h4>example</h4>
            <h1>IP adress finder</h1>
            <p>What is my IP adress?</p>
            <p><strong>{data.ip}</strong></p>
            <p>Loacation</p>
            <p><strong>{data.country_name} {data.city}</strong> </p>
            <p>Internet provider</p>
            <p><strong>{data.org}</strong></p>

            <div className="mapContainer">
              <MapContainer 
              latitude={coordinates.latitude} 
              longitude={coordinates.longitude}/>
            </div>
        </div>
    )
};

export default Home; 