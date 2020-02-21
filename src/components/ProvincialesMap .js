import React from "react";
import {
  Map,
  Marker,
  Popup,
  TileLayer,
  Polygon,
  Polyline
} from "react-leaflet";
import "../index.css";
import provincialesData from "../data/provinciales";

const ProvincialesMap = () => {
  const [activeProvincia, setActiveProvincia] = React.useState(null);

  const polygon = [
    [
      [18.50695893941549, -70.00179290771484],
      [18.465932477273835, -69.98651504516602],
      [18.455837160395028, -69.95922088623047],
      [18.474236244323777, -69.90222930908203],
      [18.50126140713585, -69.89347457885742],
      [18.521283325496277, -69.91853713989258],
      [18.50695893941549, -70.00179290771484]
    ]
  ];
  const polyline = [
    [18.500773038403693, -69.95475769042969],
    [18.505982233063104, -69.93158340454102],
    [18.50402880363998, -69.91579055786133],
    [18.513144616883434, -69.89587783813477]
  ];

  return (
    <Map center={[18.7726333, -69.4162013]} zoom={9}>
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
            <p>Director: {activeProvincia.properties.DIRECTOR_NAME}</p>
            <p>Direccion: {activeProvincia.properties.DIRECCION}</p>
            <p>Telefono: {activeProvincia.properties.TELEFONO}</p>
            <p>Flota: {activeProvincia.properties.FLOTA}</p>
          </div>
        </Popup>
      )}
      <Polygon color="purple" positions={polygon} />
      <Polyline color="lime" positions={polyline} />
    </Map>
  );
};

export default ProvincialesMap;
