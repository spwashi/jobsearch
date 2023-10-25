const iterations = 1000000;

function runWithLog(count) {
	let sum = 0;
	for (let i = 0; i < count; i++) {
		console.log(i);
		sum += i;
	}
	return sum;
}

function runWithoutLog(count) {
	let sum = 0;
	for (let i = 0; i < count; i++) {
		sum += i;
	}
	return sum;
}

function time(fn) {
	const starttime = Date.now();
	const out = fn();
	const endtime = Date.now();
	return [ (endtime - starttime) / 1000, out];
}

const toRun1 = () => runWithLog(iterations);
const toRun2 = () => runWithoutLog(iterations);

console.log(time(toRun1));
console.log(time(toRun2));

