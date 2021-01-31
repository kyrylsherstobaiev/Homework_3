"use strict";

function makeArray() {
	let nameOfArray = [];
	let n = 10;
	let min = -20;
	let max = 20;
	for (let i = 0; i < n; i++) {
		nameOfArray[i] = Math.floor(Math.random() * (max - min) + min);
	}
	return nameOfArray;
}

let arrayA = makeArray();
let arrayB = makeArray();

console.log(`ArrayA:`, arrayA);
console.log(`ArrayB:`, arrayB);

for (let i = 0; i < arrayA.length; i++) {
	for (let j = 0; j < arrayB.length; j++) {
		if (arrayA[i] == arrayB[j]) {
			console.log(`ArrayA index \"${i}\": `, arrayA[i], `;`, ` ArrayB index \"${j}\": `, arrayB[j], `;`);
		}
	}
}

console.log("------------");

////**********************************************************

let arrayC = makeArray();
let arrayD = [];

console.log(`ArrayC`, arrayC);

for (let i = 0; i < arrayC.length; i++) {
	let flag = true;
	let isPrime;
	let arValue = arrayC[i];
	for (let j = 2; j < arValue; j++) {
		isPrime = arValue % j;
		if (isPrime === 0) {
			flag = false;
			break;
		}
	}
	if (flag) {
		arrayD.push(arValue);
	}
}
console.log(`ArrayD Prime Numbers: `, arrayD);
console.log(`minNumber:`, Math.min(...arrayD));
console.log(`maxNumber:`, Math.max(...arrayD));
console.log("------------");

////**********************************************************

let max = 0, min = 0;

console.log(`ArrayD Prime Numbers min..max: (Second method): `, arrayD);

for (let i = 0; i < arrayD.length; i++) {
	if (arrayD[i] < arrayD[min]) {
		min = i;
	} else if (arrayD[i] > arrayD[max]) {
		max = i;
	}
}

console.log(`minNumber index\"${min}\":`, arrayD[min]);
console.log(`maxNumber index\"${max}\":`, arrayD[max]);
console.log("------------");

////**********************************************************

let arrayE = makeArray();
let arrayF = [];

console.log(`ArrayE:`, arrayE);

min = 2;
max = 8;

for (let i = min; i <= max; i++) {
	arrayF.push(arrayE[i]);
}
console.log(`New ArrayF:`, arrayF);
console.log("------------");

////**********************************************************

let arrayG = makeArray();

console.log(`arrayG:`, arrayG);

for (let i = 0, min = 0, max = 0; i < arrayG.length; i++) {
	if (arrayG[i] < arrayG[min]) {
		min = i;
	} else if (arrayG[i] > arrayG[max]) {
		max = i;
	}
}

console.log(`minNumber index\"${min}\":`, arrayG[min]);
console.log(`maxNumber index\"${max}\":`, arrayG[max]);

console.log(`-----------`);

let d = arrayG[max];
arrayG[max] = arrayG[min];
arrayG[min] = d;

console.log(`minNumber index\"${min}\":`, arrayG[min]);
console.log(`maxNumber index\"${max}\":`, arrayG[max]);

console.log(`arrayG:`, arrayG);


