import React, { useEffect, useState } from 'react';
import ReactMapGL, { Maker } from 'react-map-gl';
import { RiUserLocationFill } from 'react-icons/ri';

function Map({ lat, lon }) {
    return (
        <div>
            <ReactMapGL mapboxApiAccessToken={API_KEY}
                {...viewport}
                onViewportChange={(viewport) => setViewport(viewport)}
                mapStyle="mapbox: //styles/mapboxstreets-v11" >
                <Marker latitude={lat} longitude={lon}>
                    <div>
                        <RiUserLocationFill size="25px" color='blue'></RiUserLocationFill>
                    </div>
                </Marker>
            </ReactMapGL>
        </div>
    )
}