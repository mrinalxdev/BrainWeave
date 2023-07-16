import React from "react";
import { ethers } from 'ethers'
import "./component.css"

const Buy = ({ state }) => {
  const buyShake = async (event) => {
    event.preventDefault()
    const { contract } = state
    const name = document.querySelector("#name").value
    const message = document.querySelector("#message").value
    const amount = { value : ethers.parseEther("0.0001")}
    const transaction = await contract.buyShake(name, message, amount)
    await transaction.wait()
    console.log("Transaction Successful")
    window.location.reload()
  };
  return (
     <div className="center">
    <h1>Thanks</h1>
     <form onSubmit={buyShake}>
       <div className="inputbox">
         <input type="text" required="required" id="name" />
         <span>Name</span>
       </div>
       <div className="inputbox">
         <input type="text" required="required" id="message" />
         <span>Thought</span>
       </div>
       <div className="inputbox">
         <input type="submit" value="Pay"  disabled={!state.contract}/>
       </div>
     </form>
       
     </div>
  );
};

export default Buy;
