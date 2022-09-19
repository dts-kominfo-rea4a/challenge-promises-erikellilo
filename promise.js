const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async emosi => {
	try {
		let count = [];
		const theaterIXX = await promiseTheaterIXX();
		const theaterVGC = await promiseTheaterVGC();
		if (!emosi) return;
		theaterIXX.forEach(({ hasil }) => emosi === hasil && count.push(hasil));
		theaterVGC.forEach(({ hasil }) => emosi === hasil && count.push(hasil));
		return count.length;
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	promiseOutput,
};
