import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { BrowserRouter } from 'react-router-dom'

import "./index.css";
import Rotas from "./Rotas";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-stone-200 h-screen flex flex-row-reverse overflow-y-hidden font-Roboto">
            <div className="flex-1">
              <div className="flex flex-col h-[100vh] justify-between">
                <div>
                  <Rotas />
                </div>
                <Footer />
              </div>
            </div>
            <Nav />
          </div>
    </BrowserRouter>
  );
}

export default App;
