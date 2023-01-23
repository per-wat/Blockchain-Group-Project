import { useState } from "react";
import "../styles/Add Manu.css";
import NavBar from "./NavBar";

const AddManu = () => {
    const [wagyuId, setWagyuId] = useState("");
    const [butcherName, setButcherName] = useState("");
    const [butcherLoc, setButcherLoc] = useState("");
    const [isHalal, setIsHalal] = useState("");
    const [imgRef, setImgRef] = useState("");
    const [dateDis, setDateDis] = useState("");

    const handleChange = (e) => {
        if (e.target.name === "wagyuId") {
            setWagyuId(e.target.value);
        } else if (e.target.name === "butcherName") {
            setButcherName(e.target.value);
        } else if (e.target.name === "butcherLoc") {
            setButcherLoc(e.target.value);
        } else if (e.target.name === "isHalal") {
            setIsHalal(e.target.value);
        } else if (e.target.name === "imgRef") {
            setImgRef(e.target.value);
        } else if (e.target.name === "dateDis") {
            setDateDis(e.target.value);
        }
    };

    return (
        <div className="navbar-container farmer">
        <NavBar />
            <div className="farmer-container">
                <div className="farmer-header">
                <h1>Add Wagyu</h1>
                </div>
                <div className="farmer-body">
                    <div>
                        <label className="input-label">WagyuID </label>
                        <input
                        placeholder="Enter Cow's ID"
                        name="wagyuId"
                        value={wagyuId}
                        className="input"
                        type="text"
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="input-label">Butcher's Name </label>
                        <input
                        placeholder="Enter Your Name"
                        name="butcherName"
                        value={butcherName}
                        className="input"
                        type="text"
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="input-label">Butcher Location </label>
                        <input
                        placeholder="Enter Butcher's Location"
                        name="butcherLoc"
                        value={butcherLoc}
                        className="input"
                        type="text"
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="input-label">Halal Status </label>
                        <input
                        placeholder="Enter Halal Status"
                        name="isHalal"
                        value={isHalal}
                        className="input"
                        type="text"
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="input-label">Wagyu's Image </label>
                        <input
                        placeholder="Enter Halal Status"
                        name="imgRef"
                        value={imgRef}
                        className="input"
                        type="file"
                        accept="image/*"
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="input-label">Date Distributed </label>
                        <input
                        placeholder="Enter Date Distribution"
                        name="dateDis"
                        value={dateDis}
                        className="input"
                        type="date"
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <span className="farmer-btn">
                            <button class="btn">
                                <span class="btn-text-one">Add Wagyu</span>
                                <span class="btn-text-two">
                                    <svg
                                        width="140"
                                        height="40"
                                        viewBox="0 0 256 417"
                                        xmlns="http://www.w3.org/2000/svg"
                                        preserveAspectRatio="xMidYMid"
                                    >
                                        <path
                                        fill="#343434"
                                        d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z"
                                        />
                                        <path
                                        fill="#8C8C8C"
                                        d="M127.962 0L0 212.32l127.962 75.639V154.158z"
                                        />
                                        <path
                                        fill="#3C3C3B"
                                        d="M127.961 312.187l-1.575 1.92v98.199l1.575 4.6L256 236.587z"
                                        />
                                        <path
                                        fill="#8C8C8C"
                                        d="M127.962 416.905v-104.72L0 236.585z"
                                        />
                                        <path
                                        fill="#141414"
                                        d="M127.961 287.958l127.96-75.637-127.96-58.162z"
                                        />
                                        <path fill="#393939" d="M0 212.32l127.96 75.638v-133.8z" />
                                    </svg>
                                </span>
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddManu;
