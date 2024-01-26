import './App.css';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import {calculateSoldProducts} from "./helpers/calculateSoldProducts.js";
import {calculateAddToStock} from "./helpers/calculateAddToStock.js";
import {calculateInHouseProducts} from "./helpers/calculateInHouseProducts.js";
import {getTVName} from "./helpers/getTVName.js";
import {getTVPrice} from "./helpers/getTVPrice.js";
import {getTVSizes} from "./helpers/getTVSizes.js";
import minus from './assets/minus.png';
import check from './assets/check.png';

function App() {
    return (
        <>
            <h1>Tech it easy dashboard</h1>
            <h2>Verkoopoverzicht</h2>
            <div className="block block_1">
                <h3>Aantal verkochte producten</h3>
                <h2>{calculateSoldProducts(inventory)}</h2>
            </div>
            <div className="block block_2">
                <h3>Aantal ingekochte producten</h3>
                <h2>{calculateAddToStock(inventory)}</h2>
            </div>
            <div className="block block_3">
                <h3>Aantal te verkopen producten</h3>
                <h2>{calculateInHouseProducts(inventory)}</h2>
            </div>
            <h1>Beste verkochte tv</h1>
            <div>
            <div className="block">
                <img src={bestSellingTv.sourceImg} alt=""/>
            </div>
                <div className="block">
                    <h3>{getTVName(bestSellingTv)}</h3>
                    <h4>{getTVPrice(bestSellingTv)}</h4>
                    <h4>{getTVSizes(bestSellingTv)}</h4>
                    <p><img src={check} alt="" className="icon"/>wifi<img src={minus} alt="" className="icon"/>speech<img src={check} alt="" className="icon"/>hdr<img src={check} alt="" className="icon"/>bluetooth<img src={minus} alt="" className="icon"/>ambilight</p>
                </div>
            </div>
        </>
    )
}

export default App
