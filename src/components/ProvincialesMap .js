import React from "react";
import {
  Map,
  Marker,
  Popup,
  TileLayer,
  Polygon,
  Polyline
} from "react-leaflet";

import provincialesData from "../data/provinciales";

const ProvincialesMap = () => {
  const [activeProvincia, setActiveProvincia] = React.useState(null);

  return (
    <Map center={[18.7726333, -69.4162013]} zoom={8}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {provincialesData.features.map(provincia => (
        <Marker
          key={provincia.properties.PROVINCIAL_ID}
          position={[
            provincia.geometry.coordinates[1],
            provincia.geometry.coordinates[0]
          ]}
          onClick={() => setActiveProvincia(provincia)}
        />
      ))}
      {activeProvincia && (
        <Popup
          position={[
            activeProvincia.geometry.coordinates[1],
            activeProvincia.geometry.coordinates[0]
          ]}
          onClose={() => {
            setActiveProvincia(null);
          }}
        >
          <div>
            <h2>{activeProvincia.properties.NAME}</h2>
            <p>
              {" "}
              <strong>
                Director: {activeProvincia.properties.DIRECTOR_NAME}
              </strong>
            </p>
            <p>Direccion: {activeProvincia.properties.DIRECCION}</p>
            <p>Telefono: {activeProvincia.properties.TELEFONO}</p>
            <p>Flota: {activeProvincia.properties.FLOTA}</p>
            <img
              width="100px"
              height="100px"
              src={activeProvincia.properties.IMAGEN}
              alt="Imagen Provincial"
            />
          </div>
        </Popup>
      )}
    </Map>
  );
};

export default ProvincialesMap;
