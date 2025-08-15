import EquipamentoCard from "./components/equipamentoCard";
import { equipamentos } from "./data/equipamentos";


function App() {
  return (
    <div className="App">
      <header>
        <h1>Painel de Controle</h1>
      </header>
      <div className="panelContent">
        {equipamentos.map((equipamento) => {
          console.log(equipamento);
        return <EquipamentoCard key={equipamento.id} equipamento={equipamento} />;
        })}
      </div>
    </div>
  );
}

export default App;
