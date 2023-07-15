import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import abi from "../contracts/Lock.json";
import Memo from "../../components/Memo";
import Buy from "../../components/Buy";
import "./pages.css";

const Main = () => {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState("Not Connected Yet");
  useEffect(() => {
    const template = async () => {
      const contractAddress = "0x8f789106ef402B69D81589Ec791D0579F61bb59F";
      const contractABI = abi.abi;

      const { ethereum } = window;

      const account = await ethereum.request({
        method: "eth_requestAccounts",
      });
      window.ethereum.on("accountChanged", () => {
        window.location.reload();
      });
      setAccount(account);

      const provider = new ethers.BrowserProvider(ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
      console.log(contract);
      setState({ provider, signer, contract });
    };
    template();
  }, []);
  return (
    <div>
      <div className="banner">
        <h1>Buy Me A Shake 🤝</h1>
      </div>
      <div className="act-btn">
        <div className="account">Connected accounts : {account}</div>
        <Buy state={state} />
        <Memo state={state} />
      </div>
    </div>
  );
};

export default Main;
