import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUSer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
    const navigate = useNavigate();
    
    const saveUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/users", {
                name,
                email,
                gender,
                address,
                phone
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
        
    };

  return (
    <div className="columns">
      <div className="column is-half">
        <form onSubmit={saveUser}>
          <div className="field">
            <lable className="label">Name</lable>
            <div className="control">
              <input
                type="text"
                className="input"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <lable className="label">Email</lable>
            <div className="control">
              <input
                type="text"
                className="input"
                placeholder="Enter Your Name"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <lable className="label">Gender</lable>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Select Your Gender"></option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <lable className="label">Address</lable>
            <div className="control">
              <input
                type="text"
                className="input"
                placeholder="Enter Your Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <lable className="label">Phone</lable>
            <div className="control">
              <input
                type="text"
                className="input"
                placeholder="Enter Your Mobile Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <lable className="label">Gender</lable>
            <div className="control">
              <button type="submit" className="button is-success">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUSer;
