import { Routes, Route } from "react-router-dom";
import LoginPage from "./screens/login";
import RenderData from "./screens/renderData";
import AddData from "./screens/addData";
import MaterialUi from "./screens/materialui";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="AddData" element={<AddData/>}/>
      <Route path="RenderData" element={<RenderData/>}/>
      <Route path="materialui" element={<MaterialUi/>}/>
    </Routes>
  );
}

export default App;