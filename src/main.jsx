import ReactDOM from "react-dom/client";
// import { PrimerComponente } from './PrimerComponente'
// import { ContadorApp } from './ContadorApp'
// import { ListadoApp } from "./ListadoApp";
import { UsersApp } from "./UsersApp";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <ListadoApp /> */}
    <UsersApp />
    {/* <ContadorApp value ={0}/> */}
    {/* <PrimerComponente titulo="Esto es un prop" subtitulo="prop de subtitulo" /> */}
  </>
);
