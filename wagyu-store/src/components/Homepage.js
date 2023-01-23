import "../styles/Homepage.css"
import NavBar from "./NavBar"
import ItemCard from "./Item Card"
import data from "./Data Sample.json";

const Homepage = () => {

    return (
        <div className="navbar-container">
            <NavBar/>
            <div className="card-container">
                {Object.values(data).map((item)=>{
                  return <ItemCard data={item} key={item.cowId}/>
                })}
            </div>
        </div>
    )

}

export default Homepage