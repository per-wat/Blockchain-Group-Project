import { useEffect, useState } from "react";
import "../styles/Homepage.css"
import NavBar from "./NavBar"
import ItemCard from "./Item Card"
import data from "./Data Sample.json";
import Wagyu from '../truffle/build/contracts/WagyuInfo.json';
import { ethers } from "ethers";

//declare the Wagyu.sol contract address inside the variable
const wagyuinfoaddress = '0x285084B5b4c43f1d6E0E5cacCF2285B1d7689d04'

const Homepage = () => {
    const [wagyuData, setWagyuData] = useState({});

    useEffect(() => {
        buyWagyu();
    }, []);

    async function buyWagyu() {
        if (typeof window.ethereum !== "undefined") {
            await window.ethereum.send("eth_requestAccounts");
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(wagyuinfoaddress, Wagyu.abi, signer);
        try {
            const wagyuID = await contract.getwagyuID();
            const data = await Promise.all(wagyuID.map(async (id) => {
                const wagyudata = await contract.getWagyuInfo(id);
                const manudata = await contract.getDetailedWagyuInfo(id);
                return {
                    id,
                    age: wagyudata.age,
                    breed: wagyudata.breed,
                    grade: wagyudata.grade,
                    farmerName: wagyudata.farmerName,
                    farmLoc: wagyudata.farmLoc,
                    halalCareMethod: wagyudata.halalCareMethod,
                    butcherName: manudata.butcherName,
                    butcherLoc: manudata.butcherLoc,
                    halalslaughterMethod: manudata.halalslaughterMethod,
                    imgRef: manudata.imgRef,
                    dateDistribute: manudata.dateDistribute,
                    availability: manudata.availability
                }
            }));
            setWagyuData(data.reduce((acc,item) => ({...acc, [item.id]: item}), {}));
        } catch(e) {
            console.error(e);
        }
    }
}

    return (
        <div className="navbar-container">
            <NavBar/>
            <div className="card-container">
            {Object.keys(data).map((key) => {
                return <ItemCard data={data[key]} key={key}/>
            })}
            </div>
        </div>
    )

}

export default Homepage