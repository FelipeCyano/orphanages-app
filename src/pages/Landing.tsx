// componente (principal?) chamado no método '.render()' do #root 
import OrphanagesMap from "./OrphanagesMap";

function Landing() {
  return (
    <div id="landing-page">
      <h1>Santo Antônio de Pádua</h1>
      <OrphanagesMap />
    </div>
  );
}

export default Landing;
