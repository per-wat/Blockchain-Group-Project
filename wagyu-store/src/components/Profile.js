import { useState, useCallback } from "react";
import "../styles/Profile.css";
import NavBar from "./NavBar";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
<script src="https://cdn.lordicon.com/ritcuqlt.js"></script>

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

const Profile = () => {
    const [editing, setEditing] = useState(false);
    const [address, setAddress] = useState("5405 Jalan Lapangan Terbang Sura Hujung");
    const [postcode, setPostcode] = useState("23000");

    const handleEdit = useCallback(() => {
        setEditing(!editing);
    }, [editing])

    const handleChange = e => {
        if (e.target.name === "address") {
            setAddress(e.target.value);
        } else if (e.target.name === "postcode") {
            setPostcode(e.target.value);
        }
    };

    return (
        <div className="navbar-container profile-header">
        <NavBar />
        <div className="profile-container">
            <div className="profile-header">
                <h2>Profile</h2>
            </div>
            <br></br>
            <div className="profile-detail">
                <div className="detail-row">
                    <p className="detail-label">Full Name</p>
                    <p className="detail-colon">:</p>
                    <p className="detail-value">Ifwat Shamsuddin</p>
                </div>
                <div className="detail-row">
                    <p className="detail-label">Email</p>
                    <p className="detail-colon">:</p>
                    <p className="detail-value">superifwatman@gmail.com</p>
                </div>
                <div className="detail-row pad-top">
                    <p className="detail-label">Address</p>
                    <p className="detail-colon">:</p>
                    {editing ? (
                        <textarea
                            className="detail-value"
                            type="text"
                            name="address"
                            value={address}
                            onChange={handleChange}
                            rows="4"
                            cols="50"
                        />
                    ) : (
                        <p className="detail-value">{address}</p>
                    )}
                </div>
                <div className="detail-row">
                    <p className="detail-label">Postcode</p>
                    <p className="detail-colon">:</p>
                    {editing ? (
                        <input
                            className="detail-value"
                            type="text"
                            name="postcode"
                            value={postcode}
                            onChange={handleChange}
                        />
                    ) : (
                        <p className="detail-value">{postcode}</p>
                    )}
                </div>
                <div className="detail-row">
                    <div onClick={handleEdit} className="profile-edit">
                        <p>{editing ? "Save" : "Edit"}</p>
                        <lord-icon
                            src="https://cdn.lordicon.com/wloilxuq.json"
                            trigger="hover"
                            colors="primary:#d3d3d3,secondary:#f5f5f5"
                            state="hover-2"
                            class="lord-size"
                            >
                        </lord-icon>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Profile;
