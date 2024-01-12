import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponent } from './SegundoComponente';
import { TercerComponente } from './TercerComponent';

function App() {

  const ficha_medica = {
    altura: "185cm",
    sangre: "O+",
    estado:"Excelente",
    alergias: "Ninguna"
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <hr />
        <div className='componentes'>
          {/* Cargar mi componente */}
          <hr />
          <TercerComponente 
          nombre="Johan"
          apellido="Ontiveros"
          ficha={ficha_medica}
          />
          <hr />
          <SegundoComponent />
          <hr />
          <MiComponente />
          <hr />
        </div>
      </header>

    </div>
  );
}

export default App;
