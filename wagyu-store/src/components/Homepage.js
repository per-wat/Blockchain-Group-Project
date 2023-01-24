import "../styles/Homepage.css"
import NavBar from "./NavBar"
import ItemCard from "./Item Card"
import data from "./Data Sample.json";

const Homepage = () => {

    function buyWagyu(key) {
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