import "../styles/pages/orphanages-map.css";

import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

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

      <div></div>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>

    </div>
  );
} 

export default OrphanagesMap;