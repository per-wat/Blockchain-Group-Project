// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

//data structure for Wagyu Cow Care Information
struct Wagyu {
  uint256 age;
  string breed;
  string grade;
  string farmerName;
  string farmLoc;
  string halalCareMethod;
  }

//data structure for Wagyu Meat Processing Information
struct Manufacturer {
  string butcherName;
  string butcherLoc;
  string halalslaughterMethod;
  string imgRef;
  string dateDistribute;
  bool availability;
}

//Contract to create, update and store the information of wagyu into struct datastructure
contract WagyuInfo {

  //array of ID of all wagyu
  string[] wID;

  //mapping the struct datastructure to one string reference
  mapping(string => Wagyu) public wagyu;
  mapping(string => Manufacturer) public manufacturer;

  //Check either the meat has reach the manufacturing process or not
  modifier isDistribute(string memory wagyuID) {
    require (!manufacturer[wagyuID].availability, "The meat is not manufactured yet");
    _;
  }

  //this function is to add information Wagyu Cow Care into struct Wagyu
  function addWagyu (string memory wagyuID, uint256 age, string memory breed, string memory grade, string memory farmerName,  string memory farmLoc, 
  string memory halalCareMethod) public {
    wID.push(wagyuID);
    Wagyu memory newWagyu;
    newWagyu.age = age;
    newWagyu.breed = breed;
    newWagyu.grade = grade;
    newWagyu.farmerName = farmerName;
    newWagyu.farmLoc = farmLoc;
    newWagyu.halalCareMethod = halalCareMethod;
    wagyu[wagyuID] = newWagyu;
  }

  //Declare a function to change the availability of wagyu
  function wagyuAvailability (string memory wagyuID) public isDistribute(wagyuID){
    manufacturer[wagyuID].availability = true;
  }

  //Declare a function to add information of Wagyu Meat Processing into struct Manufacturer
  function addManufacturer (string memory wagyuID, string memory butcherName, string memory halalslaughterMethod, string memory imgRef, string memory dateDistribute) public {
    Manufacturer memory newManufacturer;
    wagyuAvailability(wagyuID);
    newManufacturer.butcherName = butcherName;
    newManufacturer.halalslaughterMethod = halalslaughterMethod;
    newManufacturer.dateDistribute = dateDistribute;
    newManufacturer.imgRef = imgRef;
    manufacturer[wagyuID] = newManufacturer;
  } 

  //Function to retrieve information of Wagyu Cow Care phases
  function getWagyuInfo(string memory wagyuID) public view returns(Wagyu memory){
    return wagyu[wagyuID];
  }

  //Function to retrieve information of Wagyu Meat Processing phases
  function getDetailedWagyuInfo(string memory wagyuID) public view returns(Manufacturer memory){
    return manufacturer[wagyuID];
  }
  
  //Declare initial value of WagyuInfo block
  constructor(){
    addWagyu("CowA101", 12, "A1", "Japanese Black", "Ahmad","Japan","halal");
    addManufacturer("CowA101", "Rahim", "Haram","A1refpic","12 Dec 2020");
  }
}