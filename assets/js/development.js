"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

!function (e) {
	var t = {};function i(n) {
		if (t[n]) return t[n].exports;var r = t[n] = { i: n, l: !1, exports: {} };return e[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
	}i.m = e, i.c = t, i.d = function (e, t, n) {
		i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
	}, i.r = function (e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
	}, i.t = function (e, t) {
		if (1 & t && (e = i(e)), 8 & t) return e;if (4 & t && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e && e.__esModule) return e;var n = Object.create(null);if (i.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var r in e) {
			i.d(n, r, function (t) {
				return e[t];
			}.bind(null, r));
		}return n;
	}, i.n = function (e) {
		var t = e && e.__esModule ? function () {
			return e.default;
		} : function () {
			return e;
		};return i.d(t, "a", t), t;
	}, i.o = function (e, t) {
		return Object.prototype.hasOwnProperty.call(e, t);
	}, i.p = "", i(i.s = 0);
}([function (e, t, i) {
	i(7), i(1), i(2), i(3), i(4), i(5), e.exports = i(6);
}, function (e, t) {
	var i = function () {
		function i() {
			_classCallCheck(this, i);

			this.prevScrollPos = window.pageYOffset, this.windowSize = window.innerWidth, this.nav = document.querySelector(".nav-wrapper"), this.navHeight = this.windowSize > 800 ? "-104px" : "-72px", this.onWindowScroll = this.onWindowScroll.bind(this), this.init();
		}

		_createClass(i, [{
			key: "init",
			value: function init() {
				window.onscroll = this.onWindowScroll;
			}
		}, {
			key: "onWindowScroll",
			value: function onWindowScroll() {
				var e = window.pageYOffset;e > 0 ? this.nav.classList.add("nav-wrapper--condensed") : this.nav.classList.remove("nav-wrapper--condensed"), this.prevScrollPos > e ? this.nav.style.top = "0" : this.nav.style.top = this.navHeight, this.prevScrollPos = e;
			}
		}]);

		return i;
	}();

	document.addEventListener("DOMContentLoaded", function () {
		new i();
	});
}, function (e, t) {
	var i = function () {
		function i(e) {
			_classCallCheck(this, i);

			this.element = e, this.hamburger = this.element.querySelector(".hamburger"), this.nav = this.element.querySelector(".nav-wrapper__nav"), this.handleBurgerClick = this.handleBurgerClick.bind(this), this.init();
		}

		_createClass(i, [{
			key: "init",
			value: function init() {
				this.hamburger.addEventListener("click", this.handleBurgerClick);
			}
		}, {
			key: "handleBurgerClick",
			value: function handleBurgerClick() {
				this.hamburger.classList.contains("is-active") ? (this.hamburger.classList.remove("is-active"), this.nav.classList.remove("nav-wrapper__nav--open"), document.body.classList.remove("no-scroll")) : (this.hamburger.classList.add("is-active"), this.nav.classList.add("nav-wrapper__nav--open"), document.body.classList.add("no-scroll"));
			}
		}]);

		return i;
	}();

	document.addEventListener("DOMContentLoaded", function () {
		new i(document.querySelector(".nav-wrapper"));
	});
}, function (e, t) {
	var i = function () {
		function i() {
			_classCallCheck(this, i);

			this.hero = document.querySelector(".hero--narrow"), this.gradientTarget = this.hero.nextElementSibling, this.setGradient = this.setGradient.bind(this), this.init();
		}

		_createClass(i, [{
			key: "init",
			value: function init() {
				$("body").prepend('\n      <div class="bg--gradient"></div>\n    '), window.addEventListener("resize", this.setGradient), this.setGradient();
			}
		}, {
			key: "setGradient",
			value: function setGradient() {
				var e = document.querySelector(".bg--gradient"),
				    t = window.pageYOffset + this.hero.getBoundingClientRect().top + this.hero.getBoundingClientRect().height / 2,
				    i = window.pageYOffset + this.gradientTarget.getBoundingClientRect().top + this.gradientTarget.getBoundingClientRect().height + 150;e.style.height = i - t + "px", e.style.top = t + "px";
			}
		}]);

		return i;
	}();

	document.addEventListener("DOMContentLoaded", function () {
		null !== document.querySelector(".hero--narrow") && new i();
	});
}, function (e, t) {
	var i = function () {
		function i(e) {
			_classCallCheck(this, i);

			this.element = e, this.image = { url: this.element.src, alt: this.element.alt, description: this.element.dataset.desc }, this.modal, this.modalOpen = !1, this.handleZoomClick = this.handleZoomClick.bind(this), this.injectModalData = this.injectModalData.bind(this), this.openModal = this.openModal.bind(this), this.closeModal = this.closeModal.bind(this), this.init();
		}

		_createClass(i, [{
			key: "init",
			value: function init() {
				this.element.addEventListener("click", this.handleZoomClick), document.querySelector(".modal--zoom") || this.injectModalHTML(), this.modal = document.querySelector(".modal--zoom");
			}
		}, {
			key: "handleZoomClick",
			value: function handleZoomClick(e) {
				this.injectModalData(), this.openModal();
			}
		}, {
			key: "injectModalData",
			value: function injectModalData() {
				var e = this.modal.querySelector(".modal__image");e.src = this.image.url, e.alt = this.image.alt;
			}
		}, {
			key: "openModal",
			value: function openModal() {
				this.modal.classList.remove("modal--hidden"), this.modal.addEventListener("click", this.closeModal);
			}
		}, {
			key: "closeModal",
			value: function closeModal() {
				this.modal.classList.add("modal--hidden"), this.modal.querySelector(".modal__close").removeEventListener("click", this.closeModal);
			}
		}, {
			key: "injectModalHTML",
			value: function injectModalHTML() {
				$("body").prepend('\n      <div class="modal modal--zoom modal--hidden">\n        <div class="modal__inner">\n          <img class="modal__image" src="" alt="" />\n          <button class="modal__close"></button>\n        </div>\n      <div>\n    ');
			}
		}]);

		return i;
	}();

	document.addEventListener("DOMContentLoaded", function () {
		Array.from(document.querySelectorAll("[zoomable]")).forEach(function (e) {
			new i(e);
		});
	});
}, function (e, t) {
	document.addEventListener("DOMContentLoaded", function () {
		document.body.classList.remove("site-hidden"), Array.from(document.querySelectorAll("a:not(.footer__link)")).forEach(function (e) {
			e.addEventListener("click", function (t) {
				e.dataset.noanimate || (t.preventDefault(), e.classList.contains("project-nav") && e.classList.add("animate"), document.body.classList.add("site-hidden"), setTimeout(function () {
					window.location = e.href;
				}, 800));
			});
		});
	});
}, function (e, t) {
	var i = function () {
		function i(e) {
			_classCallCheck(this, i);

			this.element = e, this.viewportWidth, this.slideWidth, this.drag = !1, this.dragged = !1, this.startx, this.starty, this.diffx = 0, this.diffy = 0, this.canHijackScroll = !0, this.isMobile = !1, this.mouseHoverTimer = null, this.gutter, this.transformAmount = 0, this.slides, this.track = this.element.querySelector(".scroll-carousel__track"), this.slidesContainer = this.element.querySelector(".scroll-carousel__slides"), this.trackWidth, this.setSliderWidth = this.setSliderWidth.bind(this), this.setSlideSize = this.setSlideSize.bind(this), this.handleVerticalScroll = this.handleVerticalScroll.bind(this), this.handleResize = this.handleResize.bind(this), this.handleMouseDown = this.handleMouseDown.bind(this), this.handleMouseUp = this.handleMouseUp.bind(this), this.handleMouseMove = this.handleMouseMove.bind(this), this.handleSlideClick = this.handleSlideClick.bind(this), this.init();
		}

		_createClass(i, [{
			key: "init",
			value: function init() {
				var _this = this;

				this.setSlideSize(), this.setSliderWidth(), this.track.addEventListener("wheel", this.handleVerticalScroll, { passive: !1 }), window.addEventListener("resize", this.handleResize), this.track.addEventListener("mousedown", this.handleMouseDown), this.track.addEventListener("mouseup", this.handleMouseUp), this.track.addEventListener("mousemove", this.handleMouseMove), Array.from(this.slides).forEach(function (e) {
					e.addEventListener("click", _this.handleSlideClick);
				});
			}
		}, {
			key: "setSlideSize",
			value: function setSlideSize() {
				var _this2 = this;

				var e = this.element.dataset.gutter ? this.element.dataset.gutter : 30;this.viewportWidth = window.innerWidth, this.isMobile = !(this.viewportWidth >= 800), this.slideWidth = this.viewportWidth >= 800 ? .3 * this.viewportWidth : .7 * this.viewportWidth, this.slides = Array.from(this.element.querySelectorAll(".scroll-carousel__slide")), this.gutter = this.viewportWidth >= 800 ? e : 20, this.element.dataset.dynamicimagesize ? this.trackWidth = this.slides.map(function (e) {
					return e.getBoundingClientRect().width;
				}).reduce(function (e, t) {
					return e + (t + parseInt(_this2.gutter));
				}) : this.trackWidth = (this.slideWidth + this.gutter) * this.slides.length, this.track.style.width = this.trackWidth + "px", this.slides.forEach(function (e) {
					_this2.element.dataset.dynamicimagesize || (e.style.width = _this2.slideWidth + "px"), e.style.marginRight = _this2.gutter + "px";
				});
			}
		}, {
			key: "setSliderWidth",
			value: function setSliderWidth() {
				var e = document.querySelector(".container:not(.container--wide").getBoundingClientRect().left;this.element.style.maxWidth = window.innerWidth - e + "px", this.element.style.marginLeft = e + "px";
			}
		}, {
			key: "handleSlideClick",
			value: function handleSlideClick(e) {
				this.dragged && (e.preventDefault(), this.dragged = !1, Array.from(this.track.querySelectorAll("a")).forEach(function (e) {
					e.setAttribute("data-noanimate", !1);
				}));
			}
		}, {
			key: "handleMouseDown",
			value: function handleMouseDown(e) {
				e || (e = window.event), e.target && "IMG" === e.target.nodeName ? e.preventDefault() : e.srcElement && "IMG" === e.srcElement.nodeName && (e.returnValue = !1), this.startx = e.clientX + this.slidesContainer.scrollLeft, this.starty = e.clientY + this.slidesContainer.scrollTop, this.diffx = 0, this.diffy = 0, this.drag = !0;
			}
		}, {
			key: "handleMouseUp",
			value: function handleMouseUp(e) {
				e || (e = window.event), this.drag = !1;
			}
		}, {
			key: "handleMouseMove",
			value: function handleMouseMove(e) {
				!0 === this.drag && (this.dragged = !0, Array.from(this.track.querySelectorAll("a")).forEach(function (e) {
					e.setAttribute("data-noanimate", !0);
				}), e || (e = window.event), this.diffx = this.startx - (e.clientX + this.slidesContainer.scrollLeft), this.diffy = this.starty - (e.clientY + this.slidesContainer.scrollTop), this.slidesContainer.scrollLeft += this.diffx, this.slidesContainer.scrollTop += this.diffy);
			}
		}, {
			key: "handleResize",
			value: function handleResize(e) {
				this.setSlideSize(), this.setSliderWidth();
			}
		}, {
			key: "handleVerticalScroll",
			value: function handleVerticalScroll(e) {
				if (!this.canHijackScroll || this.isMobile) return;var t = e.wheelDelta;this.slidesContainer.scrollLeft -= t, (t > 0 && this.slidesContainer.scrollLeft > 0 || t < 0 && this.slidesContainer.offsetWidth + this.slidesContainer.scrollLeft < this.slidesContainer.scrollWidth) && e.preventDefault();
			}
		}]);

		return i;
	}();

	document.addEventListener("DOMContentLoaded", function () {
		Array.from(document.querySelectorAll(".js-scroll-carousel")).forEach(function (e) {
			new i(e);
		});
	});
}, function (e, t, i) {
	"use strict";
	i.r(t);var n =
	/*! @license is-dom-node v1.0.4
 
 	Copyright 2018 Fisssion LLC.
 
 	Permission is hereby granted, free of charge, to any person obtaining a copy
 	of this software and associated documentation files (the "Software"), to deal
 	in the Software without restriction, including without limitation the rights
 	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 	copies of the Software, and to permit persons to whom the Software is
 	furnished to do so, subject to the following conditions:
 
 	The above copyright notice and this permission notice shall be included in all
 	copies or substantial portions of the Software.
 
 	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 	SOFTWARE.
 
 */
	function n(e) {
		return "object" == _typeof(window.Node) ? e instanceof window.Node : null !== e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "number" == typeof e.nodeType && "string" == typeof e.nodeName;
	};
	/*! @license is-dom-node-list v1.2.1
 
 	Copyright 2018 Fisssion LLC.
 
 	Permission is hereby granted, free of charge, to any person obtaining a copy
 	of this software and associated documentation files (the "Software"), to deal
 	in the Software without restriction, including without limitation the rights
 	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 	copies of the Software, and to permit persons to whom the Software is
 	furnished to do so, subject to the following conditions:
 
 	The above copyright notice and this permission notice shall be included in all
 	copies or substantial portions of the Software.
 
 	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 	SOFTWARE.
 
 */var r = function r(e) {
		var t = Object.prototype.toString.call(e);return "object" == _typeof(window.NodeList) ? e instanceof window.NodeList : null !== e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "number" == typeof e.length && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(t) && (0 === e.length || n(e[0]));
	};
	/*! @license Tealight v0.3.6
 
 	Copyright 2018 Fisssion LLC.
 
 	Permission is hereby granted, free of charge, to any person obtaining a copy
 	of this software and associated documentation files (the "Software"), to deal
 	in the Software without restriction, including without limitation the rights
 	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 	copies of the Software, and to permit persons to whom the Software is
 	furnished to do so, subject to the following conditions:
 
 	The above copyright notice and this permission notice shall be included in all
 	copies or substantial portions of the Software.
 
 	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 	SOFTWARE.
 
 */var o = function o(e, t) {
		if (void 0 === t && (t = document), e instanceof Array) return e.filter(n);if (n(e)) return [e];if (r(e)) return Array.prototype.slice.call(e);if ("string" == typeof e) try {
			var i = t.querySelectorAll(e);return Array.prototype.slice.call(i);
		} catch (e) {
			return [];
		}return [];
	};
	/*! @license Rematrix v0.3.0
 
 	Copyright 2018 Julian Lloyd.
 
 	Permission is hereby granted, free of charge, to any person obtaining a copy
 	of this software and associated documentation files (the "Software"), to deal
 	in the Software without restriction, including without limitation the rights
 	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 	copies of the Software, and to permit persons to whom the Software is
 	furnished to do so, subject to the following conditions:
 
 	The above copyright notice and this permission notice shall be included in
 	all copies or substantial portions of the Software.
 
 	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 	THE SOFTWARE.
 */function s(e) {
		if (e.constructor !== Array) throw new TypeError("Expected array.");if (16 === e.length) return e;if (6 === e.length) {
			var t = a();return t[0] = e[0], t[1] = e[1], t[4] = e[2], t[5] = e[3], t[12] = e[4], t[13] = e[5], t;
		}throw new RangeError("Expected array with either 6 or 16 values.");
	}function a() {
		for (var e = [], t = 0; t < 16; t++) {
			t % 5 == 0 ? e.push(1) : e.push(0);
		}return e;
	}function l(e, t) {
		for (var i = s(e), n = s(t), r = [], o = 0; o < 4; o++) {
			for (var a = [i[o], i[o + 4], i[o + 8], i[o + 12]], l = 0; l < 4; l++) {
				var d = 4 * l,
				    c = [n[d], n[d + 1], n[d + 2], n[d + 3]],
				    h = a[0] * c[0] + a[1] * c[1] + a[2] * c[2] + a[3] * c[3];r[o + d] = h;
			}
		}return r;
	}function d(e) {
		if ("string" == typeof e) {
			var t = e.match(/matrix(3d)?\(([^)]+)\)/);if (t) return s(t[2].split(", ").map(parseFloat));
		}return a();
	}function c(e) {
		var t = Math.PI / 180 * e,
		    i = a();return i[0] = i[5] = Math.cos(t), i[1] = i[4] = Math.sin(t), i[4] *= -1, i;
	}function h(e, t) {
		var i = a();return i[0] = e, i[5] = "number" == typeof t ? t : e, i;
	}
	/*! @license miniraf v1.0.0
 
 	Copyright 2018 Fisssion LLC.
 
 	Permission is hereby granted, free of charge, to any person obtaining a copy
 	of this software and associated documentation files (the "Software"), to deal
 	in the Software without restriction, including without limitation the rights
 	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 	copies of the Software, and to permit persons to whom the Software is
 	furnished to do so, subject to the following conditions:
 
 	The above copyright notice and this permission notice shall be included in all
 	copies or substantial portions of the Software.
 
 	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 	SOFTWARE.
 
 */
	var u,
	    f = (u = Date.now(), function (e) {
		var t = Date.now();t - u > 16 ? (u = t, e(t)) : setTimeout(function () {
			return f(e);
		}, 0);
	}),
	    m = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || f,
	    p = { delay: 0, distance: "0", duration: 600, easing: "cubic-bezier(0.5, 0, 0, 1)", interval: 0, opacity: 0, origin: "bottom", rotate: { x: 0, y: 0, z: 0 }, scale: 1, cleanup: !1, container: document.documentElement, desktop: !0, mobile: !0, reset: !1, useDelay: "always", viewFactor: 0, viewOffset: { top: 0, right: 0, bottom: 0, left: 0 }, afterReset: function afterReset() {}, afterReveal: function afterReveal() {}, beforeReset: function beforeReset() {}, beforeReveal: function beforeReveal() {} };var v = { success: function success() {
			document.documentElement.classList.add("sr"), document.body ? document.body.style.height = "100%" : document.addEventListener("DOMContentLoaded", function () {
				document.body.style.height = "100%";
			});
		}, failure: function failure() {
			return document.documentElement.classList.remove("sr"), { clean: function clean() {}, destroy: function destroy() {}, reveal: function reveal() {}, sync: function sync() {}, get noop() {
					return !0;
				} };
		} };function g(e) {
		return null !== e && e instanceof Object && (e.constructor === Object || "[object Object]" === Object.prototype.toString.call(e));
	}function y(e, t) {
		if (g(e)) return Object.keys(e).forEach(function (i) {
			return t(e[i], i, e);
		});if (e instanceof Array) return e.forEach(function (i, n) {
			return t(i, n, e);
		});throw new TypeError("Expected either an array or object literal.");
	}function b(e) {
		for (var t = [], i = arguments.length - 1; i-- > 0;) {
			t[i] = arguments[i + 1];
		}if (this.constructor.debug && console) {
			var n = "%cScrollReveal: " + e;t.forEach(function (e) {
				return n += "\n — " + e;
			}), console.log(n, "color: #ea654b;");
		}
	}function w() {
		var e = this,
		    t = { active: [], stale: [] },
		    i = { active: [], stale: [] },
		    n = { active: [], stale: [] };try {
			y(o("[data-sr-id]"), function (e) {
				var i = parseInt(e.getAttribute("data-sr-id"));t.active.push(i);
			});
		} catch (e) {
			throw e;
		}y(this.store.elements, function (e) {
			-1 === t.active.indexOf(e.id) && t.stale.push(e.id);
		}), y(t.stale, function (t) {
			return delete e.store.elements[t];
		}), y(this.store.elements, function (e) {
			-1 === n.active.indexOf(e.containerId) && n.active.push(e.containerId), e.hasOwnProperty("sequence") && -1 === i.active.indexOf(e.sequence.id) && i.active.push(e.sequence.id);
		}), y(this.store.containers, function (e) {
			-1 === n.active.indexOf(e.id) && n.stale.push(e.id);
		}), y(n.stale, function (t) {
			var i = e.store.containers[t].node;i.removeEventListener("scroll", e.delegate), i.removeEventListener("resize", e.delegate), delete e.store.containers[t];
		}), y(this.store.sequences, function (e) {
			-1 === i.active.indexOf(e.id) && i.stale.push(e.id);
		}), y(i.stale, function (t) {
			return delete e.store.sequences[t];
		});
	}function S(e) {
		var t,
		    i = this;try {
			y(o(e), function (e) {
				var n = e.getAttribute("data-sr-id");if (null !== n) {
					t = !0;var r = i.store.elements[n];r.callbackTimer && window.clearTimeout(r.callbackTimer.clock), e.setAttribute("style", r.styles.inline.generated), e.removeAttribute("data-sr-id"), delete i.store.elements[n];
				}
			});
		} catch (e) {
			return b.call(this, "Clean failed.", e.message);
		}if (t) try {
			w.call(this);
		} catch (e) {
			return b.call(this, "Clean failed.", e.message);
		}
	}function L() {
		var e = this;y(this.store.elements, function (e) {
			e.node.setAttribute("style", e.styles.inline.generated), e.node.removeAttribute("data-sr-id");
		}), y(this.store.containers, function (t) {
			var i = t.node === document.documentElement ? window : t.node;i.removeEventListener("scroll", e.delegate), i.removeEventListener("resize", e.delegate);
		}), this.store = { containers: {}, elements: {}, history: [], sequences: {} };
	}var M = function () {
		var e = {},
		    t = document.documentElement.style;function i(i, n) {
			if (void 0 === n && (n = t), i && "string" == typeof i) {
				if (e[i]) return e[i];if ("string" == typeof n[i]) return e[i] = i;if ("string" == typeof n["-webkit-" + i]) return e[i] = "-webkit-" + i;throw new RangeError('Unable to find "' + i + '" style property.');
			}throw new TypeError("Expected a string.");
		}return i.clearCache = function () {
			return e = {};
		}, i;
	}();function k(e) {
		var t = window.getComputedStyle(e.node),
		    i = t.position,
		    n = e.config,
		    r = {},
		    o = (e.node.getAttribute("style") || "").match(/[\w-]+\s*:\s*[^;]+\s*/gi) || [];r.computed = o ? o.map(function (e) {
			return e.trim();
		}).join("; ") + ";" : "", r.generated = o.some(function (e) {
			return e.match(/visibility\s?:\s?visible/i);
		}) ? r.computed : o.concat(["visibility: visible"]).map(function (e) {
			return e.trim();
		}).join("; ") + ";";var s,
		    u,
		    f,
		    m = parseFloat(t.opacity),
		    p = isNaN(parseFloat(n.opacity)) ? parseFloat(t.opacity) : parseFloat(n.opacity),
		    v = { computed: m !== p ? "opacity: " + m + ";" : "", generated: m !== p ? "opacity: " + p + ";" : "" },
		    g = [];if (parseFloat(n.distance)) {
			var y = "top" === n.origin || "bottom" === n.origin ? "Y" : "X",
			    b = n.distance;"top" !== n.origin && "left" !== n.origin || (b = /^-/.test(b) ? b.substr(1) : "-" + b);var w = b.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),
			    S = w[0];switch (w[1]) {case "em":
					b = parseInt(t.fontSize) * S;break;case "px":
					b = S;break;case "%":
					b = "Y" === y ? e.node.getBoundingClientRect().height * S / 100 : e.node.getBoundingClientRect().width * S / 100;break;default:
					throw new RangeError("Unrecognized or missing distance unit.");}"Y" === y ? g.push(function (e) {
				var t = a();return t[13] = e, t;
			}(b)) : g.push(function (e) {
				var t = a();return t[12] = e, t;
			}(b));
		}n.rotate.x && g.push((s = n.rotate.x, u = Math.PI / 180 * s, (f = a())[5] = f[10] = Math.cos(u), f[6] = f[9] = Math.sin(u), f[9] *= -1, f)), n.rotate.y && g.push(function (e) {
			var t = Math.PI / 180 * e,
			    i = a();return i[0] = i[10] = Math.cos(t), i[2] = i[8] = Math.sin(t), i[2] *= -1, i;
		}(n.rotate.y)), n.rotate.z && g.push(c(n.rotate.z)), 1 !== n.scale && (0 === n.scale ? g.push(h(2e-4)) : g.push(h(n.scale)));var L = {};if (g.length) {
			L.property = M("transform"), L.computed = { raw: t[L.property], matrix: d(t[L.property]) }, g.unshift(L.computed.matrix);var k = g.reduce(l);L.generated = { initial: L.property + ": matrix3d(" + k.join(", ") + ");", final: L.property + ": matrix3d(" + L.computed.matrix.join(", ") + ");" };
		} else L.generated = { initial: "", final: "" };var E = {};if (v.generated || L.generated.initial) {
			E.property = M("transition"), E.computed = t[E.property], E.fragments = [];var x = n.delay,
			    j = n.duration,
			    O = n.easing;v.generated && E.fragments.push({ delayed: "opacity " + j / 1e3 + "s " + O + " " + x / 1e3 + "s", instant: "opacity " + j / 1e3 + "s " + O + " 0s" }), L.generated.initial && E.fragments.push({ delayed: L.property + " " + j / 1e3 + "s " + O + " " + x / 1e3 + "s", instant: L.property + " " + j / 1e3 + "s " + O + " 0s" }), E.computed && !E.computed.match(/all 0s|none 0s/) && E.fragments.unshift({ delayed: E.computed, instant: E.computed });var C = E.fragments.reduce(function (e, t, i) {
				return e.delayed += 0 === i ? t.delayed : ", " + t.delayed, e.instant += 0 === i ? t.instant : ", " + t.instant, e;
			}, { delayed: "", instant: "" });E.generated = { delayed: E.property + ": " + C.delayed + ";", instant: E.property + ": " + C.instant + ";" };
		} else E.generated = { delayed: "", instant: "" };return { inline: r, opacity: v, position: i, transform: L, transition: E };
	}function E(e, t) {
		void 0 === t && (t = {});var i = t.pristine || this.pristine,
		    n = "always" === e.config.useDelay || "onload" === e.config.useDelay && i || "once" === e.config.useDelay && !e.seen,
		    r = e.visible && !e.revealed,
		    o = !e.visible && e.revealed && e.config.reset;return t.reveal || r ? x.call(this, e, n) : t.reset || o ? j.call(this, e) : void 0;
	}function x(e, t) {
		var i = [e.styles.inline.generated, e.styles.opacity.computed, e.styles.transform.generated.final];t ? i.push(e.styles.transition.generated.delayed) : i.push(e.styles.transition.generated.instant), e.revealed = e.seen = !0, e.node.setAttribute("style", i.filter(function (e) {
			return "" !== e;
		}).join(" ")), O.call(this, e, t);
	}function j(e) {
		var t = [e.styles.inline.generated, e.styles.opacity.generated, e.styles.transform.generated.initial, e.styles.transition.generated.instant];e.revealed = !1, e.node.setAttribute("style", t.filter(function (e) {
			return "" !== e;
		}).join(" ")), O.call(this, e);
	}function O(e, t) {
		var i = this,
		    n = t ? e.config.duration + e.config.delay : e.config.duration,
		    r = e.revealed ? e.config.beforeReveal : e.config.beforeReset,
		    o = e.revealed ? e.config.afterReveal : e.config.afterReset,
		    s = 0;e.callbackTimer && (s = Date.now() - e.callbackTimer.start, window.clearTimeout(e.callbackTimer.clock)), r(e.node), e.callbackTimer = { start: Date.now(), clock: window.setTimeout(function () {
				o(e.node), e.callbackTimer = null, e.revealed && !e.config.reset && e.config.cleanup && S.call(i, e.node);
			}, n - s) };
	}var C,
	    T = (C = 0, function () {
		return C++;
	});function A(e, t) {
		if (void 0 === t && (t = this.pristine), !e.visible && e.revealed && e.config.reset) return E.call(this, e, { reset: !0 });var i = this.store.sequences[e.sequence.id],
		    n = e.sequence.index;if (i) {
			var r = new W(i, "visible", this.store),
			    o = new W(i, "revealed", this.store);if (i.models = { visible: r, revealed: o }, !o.body.length) {
				var s = i.members[r.body[0]],
				    a = this.store.elements[s];if (a) return _.call(this, i, r.body[0], -1, t), _.call(this, i, r.body[0], 1, t), E.call(this, a, { reveal: !0, pristine: t });
			}if (!i.blocked.head && n === [].concat(o.head).pop() && n >= [].concat(r.body).shift()) return _.call(this, i, n, -1, t), E.call(this, e, { reveal: !0, pristine: t });if (!i.blocked.foot && n === [].concat(o.foot).shift() && n <= [].concat(r.body).pop()) return _.call(this, i, n, 1, t), E.call(this, e, { reveal: !0, pristine: t });
		}
	}function q(e) {
		var t = Math.abs(e);if (isNaN(t)) throw new RangeError("Invalid sequence interval.");this.id = T(), this.interval = Math.max(t, 16), this.members = [], this.models = {}, this.blocked = { head: !1, foot: !1 };
	}function W(e, t, i) {
		var n = this;this.head = [], this.body = [], this.foot = [], y(e.members, function (e, r) {
			var o = i.elements[e];o && o[t] && n.body.push(r);
		}), this.body.length && y(e.members, function (e, r) {
			var o = i.elements[e];o && !o[t] && (r < n.body[0] ? n.head.push(r) : n.foot.push(r));
		});
	}function _(e, t, i, n) {
		var r = this,
		    o = ["head", null, "foot"][1 + i],
		    s = e.members[t + i],
		    a = this.store.elements[s];e.blocked[o] = !0, setTimeout(function () {
			e.blocked[o] = !1, a && A.call(r, a, n);
		}, e.interval);
	}function z() {
		var e = this;w.call(this), y(this.store.elements, function (e) {
			var t = [e.styles.inline.generated];e.visible ? (t.push(e.styles.opacity.computed), t.push(e.styles.transform.generated.final), e.revealed = !0) : (t.push(e.styles.opacity.generated), t.push(e.styles.transform.generated.initial), e.revealed = !1), e.node.setAttribute("style", t.filter(function (e) {
				return "" !== e;
			}).join(" "));
		}), y(this.store.containers, function (t) {
			var i = t.node === document.documentElement ? window : t.node;i.addEventListener("scroll", e.delegate), i.addEventListener("resize", e.delegate);
		}), this.delegate(), this.initTimeout = null;
	}function D(e) {
		return void 0 === e && (e = navigator.userAgent), /Android|iPhone|iPad|iPod/i.test(e);
	}function R(e) {
		for (var t = [], i = arguments.length - 1; i-- > 0;) {
			t[i] = arguments[i + 1];
		}if (g(e)) return y(t, function (t) {
			y(t, function (t, i) {
				g(t) ? (e[i] && g(e[i]) || (e[i] = {}), R(e[i], t)) : e[i] = t;
			});
		}), e;throw new TypeError("Target must be an object literal.");
	}function P(e, t, i) {
		var n = this;void 0 === t && (t = {}), void 0 === i && (i = !1);var r,
		    s = [],
		    a = t.interval || p.interval;try {
			a && (r = new q(a));var l = o(e);if (!l.length) throw new Error("Invalid reveal target.");var d = l.reduce(function (e, i) {
				var a = {},
				    l = i.getAttribute("data-sr-id");l ? (R(a, n.store.elements[l]), a.node.setAttribute("style", a.styles.inline.computed)) : (a.id = T(), a.node = i, a.seen = !1, a.revealed = !1, a.visible = !1);var d = R({}, a.config || n.defaults, t);if (!d.mobile && D() || !d.desktop && !D()) return l && S.call(n, a), e;var c,
				    h = o(d.container)[0];if (!h) throw new Error("Invalid container.");return h.contains(i) ? (null === (c = function (e) {
					var t = [],
					    i = arguments.length - 1;for (; i-- > 0;) {
						t[i] = arguments[i + 1];
					}var n = null;return y(t, function (t) {
						y(t, function (t) {
							null === n && t.node === e && (n = t.id);
						});
					}), n;
				}(h, s, n.store.containers)) && (c = T(), s.push({ id: c, node: h })), a.config = d, a.containerId = c, a.styles = k(a), r && (a.sequence = { id: r.id, index: r.members.length }, r.members.push(a.id)), e.push(a), e) : e;
			}, []);y(d, function (e) {
				n.store.elements[e.id] = e, e.node.setAttribute("data-sr-id", e.id);
			});
		} catch (e) {
			return b.call(this, "Reveal failed.", e.message);
		}y(s, function (e) {
			n.store.containers[e.id] = { id: e.id, node: e.node };
		}), r && (this.store.sequences[r.id] = r), !0 !== i && (this.store.history.push({ target: e, options: t }), this.initTimeout && window.clearTimeout(this.initTimeout), this.initTimeout = window.setTimeout(z.bind(this), 0));
	}function I() {
		var e = this;y(this.store.history, function (t) {
			P.call(e, t.target, t.options, !0);
		}), z.call(this);
	}var N = Math.sign || function (e) {
		return (e > 0) - (e < 0) || +e;
	};function B(e, t) {
		var i = t ? e.node.clientHeight : e.node.offsetHeight,
		    n = t ? e.node.clientWidth : e.node.offsetWidth,
		    r = 0,
		    o = 0,
		    s = e.node;do {
			isNaN(s.offsetTop) || (r += s.offsetTop), isNaN(s.offsetLeft) || (o += s.offsetLeft), s = s.offsetParent;
		} while (s);return { bounds: { top: r, right: o + n, bottom: r + i, left: o }, height: i, width: n };
	}function F(e) {
		var t, i;return e.node === document.documentElement ? (t = window.pageYOffset, i = window.pageXOffset) : (t = e.node.scrollTop, i = e.node.scrollLeft), { top: t, left: i };
	}function H(e) {
		void 0 === e && (e = {});var t = this.store.containers[e.containerId];if (t) {
			var i = Math.max(0, Math.min(1, e.config.viewFactor)),
			    n = e.config.viewOffset,
			    r = e.geometry.bounds.top + e.geometry.height * i,
			    o = e.geometry.bounds.right - e.geometry.width * i,
			    s = e.geometry.bounds.bottom - e.geometry.height * i,
			    a = e.geometry.bounds.left + e.geometry.width * i,
			    l = t.geometry.bounds.top + t.scroll.top + n.top,
			    d = t.geometry.bounds.right + t.scroll.left - n.right,
			    c = t.geometry.bounds.bottom + t.scroll.top - n.bottom,
			    h = t.geometry.bounds.left + t.scroll.left + n.left;return r < c && o > h && s > l && a < d || "fixed" === e.styles.position;
		}
	}function Y(e, t) {
		var i = this;void 0 === e && (e = { type: "init" }), void 0 === t && (t = this.store.elements), m(function () {
			var n = "init" === e.type || "resize" === e.type;y(i.store.containers, function (e) {
				n && (e.geometry = B.call(i, e, !0));var t = F.call(i, e);e.scroll && (e.direction = { x: N(t.left - e.scroll.left), y: N(t.top - e.scroll.top) }), e.scroll = t;
			}), y(t, function (e) {
				n && (e.geometry = B.call(i, e)), e.visible = H.call(i, e);
			}), y(t, function (e) {
				e.sequence ? A.call(i, e) : E.call(i, e);
			}), i.pristine = !1;
		});
	}var $, G, U, V, X, Z, J, K;function Q(e) {
		var t;if (void 0 === e && (e = {}), void 0 === this || Object.getPrototypeOf(this) !== Q.prototype) return new Q(e);if (!Q.isSupported()) return b.call(this, "Instantiation failed.", "This browser is not supported."), v.failure();try {
			t = R({}, Z || p, e);
		} catch (e) {
			return b.call(this, "Invalid configuration.", e.message), v.failure();
		}try {
			if (!o(t.container)[0]) throw new Error("Invalid container.");
		} catch (e) {
			return b.call(this, e.message), v.failure();
		}return !(Z = t).mobile && D() || !Z.desktop && !D() ? (b.call(this, "This device is disabled.", "desktop: " + Z.desktop, "mobile: " + Z.mobile), v.failure()) : (v.success(), this.store = { containers: {}, elements: {}, history: [], sequences: {} }, this.pristine = !0, $ = $ || Y.bind(this), G = G || L.bind(this), U = U || P.bind(this), V = V || S.bind(this), X = X || I.bind(this), Object.defineProperty(this, "delegate", { get: function get() {
				return $;
			} }), Object.defineProperty(this, "destroy", { get: function get() {
				return G;
			} }), Object.defineProperty(this, "reveal", { get: function get() {
				return U;
			} }), Object.defineProperty(this, "clean", { get: function get() {
				return V;
			} }), Object.defineProperty(this, "sync", { get: function get() {
				return X;
			} }), Object.defineProperty(this, "defaults", { get: function get() {
				return Z;
			} }), Object.defineProperty(this, "version", { get: function get() {
				return "4.0.6";
			} }), Object.defineProperty(this, "noop", { get: function get() {
				return !1;
			} }), K || (K = this));
	}Q.isSupported = function () {
		return function () {
			var e = document.documentElement.style;return "transform" in e || "WebkitTransform" in e;
		}() && function () {
			var e = document.documentElement.style;return "transition" in e || "WebkitTransition" in e;
		}();
	}, Object.defineProperty(Q, "debug", { get: function get() {
			return J || !1;
		}, set: function set(e) {
			return J = "boolean" == typeof e ? e : J;
		} }), Q();var ee = Q;document.addEventListener("DOMContentLoaded", function () {
		ee().reveal(".animation--fade-in", { duration: 800 }), ee().reveal(".animation--fade-in-slow", { duration: 800, delay: 300, distance: "20px" }), ee().reveal(".blog-grid__tile", { duration: 900, interval: 100 });
	});
}]);