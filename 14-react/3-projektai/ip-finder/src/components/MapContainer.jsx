import Map, {Popup,  Marker} from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useState } from "react";
import { MAP_API_KEY } from "../utils/constants";

const MapContainer = (props) => {
    const [viewPort, setViewPort] = useState({
        latitude: props.latitude,
        longitude: props.longitude,
        zoom: 5,
        width: '100%',
        height: '100%'
    });

    useEffect(() => {
        console.log(props)
        const tmpViewport = {...viewPort};
        tmpViewport.latitude = props.latitude;
        tmpViewport.longitude = props.longitude;
        tmpViewport.zoom = 14;
        
        setViewPort(tmpViewport)
      }, [props])

    return(
        <>
       <Map 
              mapboxAccessToken={MAP_API_KEY}
              {...viewPort}
              mapStyle="mapbox://styles/mapbox/streets-v9"
              onViewportChange= {(viewPort) => setViewPort(viewPort)}>
              
              <Marker latitude={props.latitude} longitude={props.longitude} anchor="bottom">
              <img src="https://docs.mapbox.com/help/demos/custom-markers-gl-js/mapbox-icon.png" alt="Marker" 
              style={{ width: '30px', height: '30px' }}/>
              </Marker>
             </Map>
        </>
    )
};

export default MapContainer;