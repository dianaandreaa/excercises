"use strict";
let y = 14;

const bool = true;
const num = 41;
const str = "Peter";
const obj = {
    cats: 2,
    cars: 1
};
const nothing = null;
let undf;
const symbol = Symbol("symbol");

const n1 = 1;
const n2 = 2;

const s1 = "a";
const s2 = "2";

n1 + n2;
s1 + s2;

n1 + s2;
s1 + n2;

const value = "";
if (value){
    console.log("Value is truthy");
} else {
    console.log("Value is falsey")
}
