var outputEl = document.getElementById('output');

module.exports = function (that, outputEl) {
	var btnVal = that.value,
			val = outputEl.value;

	if(btnVal == 0 && val == 0) {
		console.log('zero');
		return;
	} else if (val == 0) {
		console.log('btnVal = ' + btnVal + ', val = zero')
		return btnVal;
	} else {
		console.log('val = ' + val +' btnVal = ' + btnVal);
		return val + btnVal;
	}
};