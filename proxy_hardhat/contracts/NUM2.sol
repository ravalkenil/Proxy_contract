// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract NUM2 {

        uint256 private num1;

        function update(uint256 _newum) public {
            num1 = _newum;
        }

        function get() public view returns(uint256){
             return num1;
        }

        function increment()  public{
            num1=num1+1;
        }
}