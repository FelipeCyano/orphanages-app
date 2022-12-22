import "../styles/pages/orphanages-map.css";

import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

// import "leaflet/dist/leaflet.css";

import mapMarkerImg from "../images/map-marker.svg";

function OrphanagesMap() {
  return (
    <div id="map-page">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
      
        <footer>
          <strong>Santo André</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <MapContainer 
        center={[-23.6571683, -46.5223315]} 
        zoom={13} 
        style={{ width: '100%', height: '100%', zIndex: '5'}}
        id="map"
      >
        <TileLayer 
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>

    </div>
  );
} 

export default OrphanagesMap;