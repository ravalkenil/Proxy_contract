// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract NUM1 {

        uint256 private num1;

        function update(uint256 _newum) public {
            num1 = _newum;
        }

        function get() public view returns(uint256){
             return num1;
        }
}


// 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0