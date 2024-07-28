"use strict";
// Ternary Operator, optional Chaining, nullish coalescing operator
var _a, _b;
{
    const age = 12;
    // if(age >= 18){
    //     console.log("You are an adult")
    // }
    // else{
    //     console.log("You are still a kid")
    // }
    // ternary operator
    const isAdult = age >= 18 ? "Adult" : "NOT Adult";
    // console.log(isAdult)
    // nullish coalescing = null and undefined
    // null & undefined --> decision making
    const isAuthenticated = "";
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
    const result2 = isAuthenticated ? isAuthenticated : "Guest";
    const user = {
        name: "Hasibur rahman Safin",
        email: "erewr@fgmail.com",
        address: {
            road: 14,
            block: "Block B",
            house: 13,
            presentAddress: "Jatrabari",
        }
    };
    const permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "No permanent address";
    console.log(permanentAddress);
}
