/*! For license information please see main.js.LICENSE.txt */
(() => {
	var o = {
			157: o => {
				o.exports = function () {
					(this.hello = function () {
						console.log('Hello!');
					}),
						(this.goodbye = function () {
							console.log('Bye!');
						});
				};
			},
		},
		e = {};
	function n(t) {
		var r = e[t];
		if (void 0 !== r) return r.exports;
		var l = (e[t] = { exports: {} });
		return o[t](l, l.exports, n), l.exports;
	}
	(() => {
		const o = new (n(157))();
		o.hello(), o.goodbye();
	})();
})();
