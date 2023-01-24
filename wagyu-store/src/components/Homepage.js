import "../styles/Homepage.css"
import NavBar from "./NavBar"
import ItemCard from "./Item Card"
import data from "./Data Sample.json";
import Wagyu from 'C:/Users/LeonyX/Documents/Blockchain/.vscode/GroupProject/mywagyu/src/truffle/build/contracts/WagyuInfo.json';
import { ethers } from "ethers";
import { networks } from "../truffle/truffle-config";

//declare the Wagyu.sol contract address inside the variable
const wagyuinfoaddress = '0x17095DfA4841a4d61Bbc0aACC915dc4e3868E02C'

const Homepage = () => {

    async function buyWagyu(key) {
        const provider = new ethers.providers.JsonRpcProvider(networks="http://localhost:7545");
        const signer = provider.getSigner();
        const contract = new ethers.Contract(wagyuinfoaddress, Wagyu.abi, signer);
        console.log(key);
        try {
            const wagyudata = await contract.getWagyuInfo(key);
            const manudata = await contract.getDetailedWagyuInfo(key);

            console.log(wagyudata);
            console.log(manudata)
        } catch(error){
            alert(error)
        }
        

        /*Buy you wagyu hear*/ 
    }

    return (
        <div className="navbar-container">
            <NavBar/>
            <div className="card-container">
                {Object.keys(data).map((key)=>{
                  return <ItemCard data={data[key]} key={key} buyWagyu={buyWagyu(key)}/>
                })}
            </div>
        </div>
    )

}

export default Homepage