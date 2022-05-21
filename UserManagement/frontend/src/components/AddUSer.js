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

  return (
    <div className="columns">
      <div className="column is-half">
        <form>
          <div className="field">
            <lable className="label">Name</lable>
            <div className="control">
              <input
                type="text"
                className="input"
                placeholder="Enter Your Name"
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
              />
            </div>
          </div>

          <div className="field">
            <lable className="label">Gender</lable>
            <div className="control">
              <div className="select is-fullwidth">
                <select>
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
              />
            </div>
          </div>

          <div className="field">
            <lable className="label">Gender</lable>
            <div className="control">
              <button className="button is-success">Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUSer;
