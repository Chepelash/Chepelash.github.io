import reactLogo from "./assets/react.svg";
import gb_cert from "./assets/gb_cert.png";
import otus_cert from "./assets/otus_cert.png";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Знакомство</h1>
      <h4>Меня зовут Антон Чепелев</h4>
      <div className="polaroid">
        <img src={gb_cert} className="cert_img" />
        <p>В 2017 году проходил курсы Python в Geekbrains</p>
      </div>
      <div className="polaroid">
        <img src={otus_cert} className="cert_img" />
        <p>В 2024 году прошел курсы Rust в Otus</p>
      </div>
      <h4>Цели</h4>
      <ul>
        <li>
          Разобраться в разработке на React для создания GUI для Rust приложений
        </li>
      </ul>
    </>
  );
}

export default App;
