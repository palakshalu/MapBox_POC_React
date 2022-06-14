import React from 'react';
import mapboxgl from 'mapbox-gl'; 
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';

mapboxgl.accessToken = 'pk.eyJ1IjoicGFsYWtzaGFybWEiLCJhIjoiY2w0NWhhNXgyMDB2aTNibzhlc3ZwNXY3ciJ9.nV0nvKMiw2HZ7y_WRBtS0w';

export default class App extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
          lng: -70.9,
          lat: 42.35,
          zoom: 12
        };
        this.mapContainer = React.createRef();
    
    
      }

      render() {
        return (
          <div>
            <div ref={this.mapContainer} className="map-container" />
          </div>
        );
      }
      
      componentDidMount() {
        const { lng, lat, zoom } = this.state;
        const map = new mapboxgl.Map({
          container: this.mapContainer.current,
          style: 'mapbox://styles/mapbox/satellite-streets-v11',
          center: [lng, lat],
          zoom: zoom
        });

        var directions = new MapboxDirections({
          accessToken: mapboxgl.accessToken,
          unit: 'metric',
          profile: 'cycling'
        });

        map.addControl(directions, 'top-left');

      }
}  