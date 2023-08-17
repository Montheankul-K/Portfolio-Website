import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div>
      <div className="container align-item-center">
        <div className="row">
          <div className="col">
            <form>
              <label>Username</label>
              <input type="text" className="input-group-text"></input>
              <label>Password</label>
              <input type="password" className="input-group-text"></input>
            </form>
          </div>
          <div className="col">col 2</div>
        </div>
      </div>
    </div>
  );
}
