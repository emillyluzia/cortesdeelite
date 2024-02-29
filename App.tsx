import React from "react";
import { Text, View } from "react-native";
import LoginProfissionalScreen from "./src/login/LoginProfissionalScreen";
import LoginClientesScreen from "./src/login/LoginClientesScreen";
import LoginServicoScreen from "./src/login/LoginServicoScreen";
import CadastroClientesScreen from "./src/cadastro/CadastroClienteScreen";
import CadastroProfissionalScreen from "./src/cadastro/CadastroProfissionalScreen";
import CadastroServicoScreen from "./src/cadastro/CadastroSevicoScreen";



function App(): JSX.Element{
  
  return (
     <CadastroServicoScreen></CadastroServicoScreen>
  );
}

export default App;