// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./Wagyu.sol";

contract WagyuTransaction{

  // Mapping of addresses to balance
  mapping(address => uint256) public balances;
  mapping(string => Manufacturer) public manufacturer;

  // Check either the Wagyu meat has been buy or not
  modifier isBought(string memory wagyuID) {
    require (!manufacturer[wagyuID].availability, "The meat has been bought");
    _;
  }

  // Event to be emitted when a transaction is made
  event WagyuBought(address from, address to, uint256 value);

  //Function to change the availability of Wagyu meat
  function wagyuUnavailability (string memory wagyuID) public{
    manufacturer[wagyuID].availability = false;
  }

  // Function to make a transaction from one address to another
  function requestBuy(string memory wagyuID, address payable _to, uint256 _value) public payable isBought(wagyuID){

    // Check that the sender has enough balance to make the transaction
    require(msg.value >= _value, "Insufficient balance");
    
    // Transfer the Ether from the sender to the recipient
    _to.transfer(_value);

    // Update the balances of the sender and recipient
    balances[msg.sender] -= _value;
    balances[_to] += _value;

    // Emit a WagyuBought event
    emit WagyuBought(msg.sender, _to, _value);
    wagyuUnavailability(wagyuID);
  }
}