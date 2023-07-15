// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Lock {
    struct Memo {
        string name; 
        string message; 
        uint timestamp;
        address from;
    }

    Memo[] memos; 
    address payable owner;

    constructor(){
        owner = payable(msg.sender);
    }

    function buyShake(string calldata name, string calldata message) external payable{
        require(msg.value > 0, "Amount should be above 0"); 
        owner.transfer(msg.value);
        memos.push(Memo(name, message,block.timestamp,msg.sender));
    }

    function getMemos() public view returns (Memo[] memory) {
        return memos;
    }
}
