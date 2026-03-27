import { Suspense } from "react";
import "./App.css";
import DaisyNav from './component/daisyui/DaisyNav'
import NavBer from './component/NavBer/NavBer'
import PricingOptions from "./component/PricingOptions/PricingOptions";
import ResultChart from "./component/ResultChart/ResultChart";
import axios from "axios";
import MarksChart from "./component/marksData/MarksChart";


const pricingPromice = fetch('../public/pricingData.json').then(res => res.json());

const marksPromice = axios('../public/marksData.json')  
function App() {
  return (
    <>
    <header className="">
      
      <NavBer></NavBer>
      
    </header>
    <main>

    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>
    }>
      <PricingOptions pricingPromice={pricingPromice}></PricingOptions>
    </Suspense>

    <ResultChart></ResultChart>

    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>
}>
      <MarksChart marksPromice={marksPromice}></MarksChart>
    </Suspense>
      
    </main>
    </>
  );
}

export default App;
