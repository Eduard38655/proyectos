// App.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../src/Pages/MainPage.jsx"; // Correcta ruta al componente
function App() {
  return (
<BrowserRouter basename="/proyectos"  >
<Routes>
  <Route path="/"element={<MainPage/> }   />
</Routes>
</BrowserRouter>

  
  );
}

export default App;
