
function __alert(msg)
{
	alert(msg);
}

function __confirm(msg)
{
	return confirm(msg);
}

function __encodeURI(msg)
{
	return encodeURI(msg);
}

function __parseInt(str)
{
	return parseInt(str);
}

//////////////////////////////////////////////////////////////////////////////////////////
// some utils extracted from https://github.com/SthephanShinkufag/Dollchan-Extension-Tools

var __ua = window.navigator.userAgent;
var nav = {
		Firefox: /firefox|minefield|icecat/i.test(__ua),
		Opera: /opera/i.test(__ua),
		Chrome: /chrome/i.test(__ua),
        IE: /MSIE/i.test(__ua)
	};
var doc = document;

/*=============================================================================
									UTILS
=============================================================================*/

function __X(path, root) {
	return doc.evaluate(path, root || doc, null, 6, null);
}
function __x(path, root) {
    if (nav.IE)
		return (root || doc).selectSingleNode(path);
	else	
		return doc.evaluate(path, root || doc, null, 8, null).singleNodeValue;
}
function __xb(path, root) {
	return doc.evaluate(path, root || doc, null, 3, null).booleanValue;
}
function __id(id) {
	return doc.getElementById(id);
}
function __t(id, root) {
	return (root || doc).getElementsByTagName(id)[0];
}
function __next(el) {
	do el = el.nextSibling;
	while(el && el.nodeType != 1);
	return el;
}
function __prev(el) {
	do el = el.previousSibling;
	while(el && el.nodeType != 1);
	return el;
}
function __up(el, i) {
	i = i || 1;
	while(i--) el = el.parentNode;
	return el;
}
function __1(el) {
	return el.firstChild;
}
function __each(list, fn, dir) {
	if(!list) return;
	var k = list.snapshotLength;
	if(dir) for(var i = 0; i < k; i++) fn(list.snapshotItem(i), i);
	else while(k--) fn(list.snapshotItem(k), k);
}
function __html(el, htm) {
	var cln = el.cloneNode(false);
	cln.innerHTML = htm;
	el.parentNode.replaceChild(cln, el);
	return cln;
}
function __attr(el, attr) {
	for(var key in attr) {
		if(key == 'text') { el.textContent = attr[key]; continue; }
		if(key == 'value') { el.value = attr[key]; continue; }
		el.setAttribute(key, attr[key]);
	}
	return el;
}
function __event(el, events) {
	for(var key in events)
		el.addEventListener(key, events[key], false);
}
function __rattr(el, attr) {
	if(el.getAttribute(attr)) el.removeAttribute(attr);
	if(nav.Opera && el[attr]) el[attr] = '';
}
function __revent(el, events) {
	for(var key in events)
		el.removeEventListener(key, events[key], false);
}
function __append(el, nodes) {
	for(var i = 0, len = nodes.length; i < len; i++)
		if(nodes[i]) el.appendChild(nodes[i]);
}
function __before(el, nodes) {
	for(var i = 0, len = nodes.length; i < len; i++)
		if(nodes[i]) el.parentNode.insertBefore(nodes[i], el);
}
function __after(el, nodes) {
	var i = nodes.length;
	while(i--) if(nodes[i]) el.parentNode.insertBefore(nodes[i], el.nextSibling);
}
function __add(htm, events) {
	dummy.innerHTML = htm;
	var el = dummy.firstChild;
	if(events) __event(el, events);
	return el;
}
function __new(tag, attr, events) {
	var el = doc.createElement(tag);
	if(attr) __attr(el, attr);
	if(events) __event(el, events);
	return el;
}
function __New(tag, nodes, attr, events) {
	var el = __new(tag, attr, events);
	__append(el, nodes);
	return el;
}
function __txt(el) {
	return doc.createTextNode(el);
}
function __btn(val, fn) {
	return __new('input', {'type': 'button', 'value': val}, {'click': fn});
};
function __if(cond, el) {
	return cond ? el : null;
}
function __disp(el) {
	el.style.display = el.style.display == 'none' ? '' : 'none';
}
function __del(el) {
	if(el) el.parentNode.removeChild(el);
}
function __Del(path, root) {
	__each(__X(path, root), function(el) { __del(el); });
}
function __delNx(el) {
	while(el.nextSibling) __del(el.nextSibling);
}
function __delCh(el) {
	while(el.hasChildNodes()) el.removeChild(el.firstChild);
}
function __case(arr, def) {
	for(var i = 0, len = arr.length/2; i < len; i++)
		if(arr[i*2]) return arr[i*2 + 1];
	return def;
}
function __offset(el, xy) {
	var c = 0;
	while(el) { c += el[xy]; el = el.offsetParent; }
	return c;
}
function getStyle(el, prop) {
	if(doc.defaultView && doc.defaultView.getComputedStyle)
		return doc.defaultView.getComputedStyle(el, '').getPropertyValue(prop);
	return '';
}
function __focus(el) {
	window.scrollTo(0, __offset(el, 'offsetTop'));
}
function __pD(e) {
	e.preventDefault();
}
function rand10() {
	return Math.floor(Math.random()*1e10).toString(10);
}
function insertInto(el, text) {
	var scrtop = el.scrollTop;
	var start = el.selectionStart;
	var end = el.selectionEnd;
	el.value = el.value.substr(0, start) + text + el.value.substr(end);
	el.setSelectionRange(start + text.length, start + text.length);
	el.focus();
	el.scrollTop = scrtop;
}
function strToRegexp(str) {
	var t = str.match(/\/.*?[^\\]\/[ig]*/)[0];
	var l = t.lastIndexOf('/');
	return new RegExp(t.substr(1, l - 1), t.substr(l + 1));
}
String.prototype.trim = function() {
    var str = (this || '').replace(/^\s\s*/, ''), s = /\s/, i = str.length;
    while(s.test(str.charAt(--i)));
    return str.slice(0, i + 1);
};
function txtSelection() {
	return nav.Opera ? doc.getSelection() : window.getSelection().toString();
}
function __close(el) {
	if(!el) return;
	if(Cfg.animp == 0) { __del(el); return; }
	var h = el.clientHeight - 18;
	el.style.height = h + 'px';
	var i = 8;
	var closing = setInterval(function() {
		if(!el || i-- < 0) { clearInterval(closing); __del(el); return; }
		var s = el.style;
		s.opacity = i/10;
		s.paddingTop = parseInt(s.paddingTop) - 1 + 'px';
		s.paddingBottom = parseInt(s.paddingBottom) - 1 + 'px';
		var hh = parseInt(s.height) - h/10;
		s.height = (hh < 0 ? 0 : hh) + 'px';
	}, 35);
}
function __show(el) {
	var i = 0;
	if(Cfg.animp == 0) { el.style.opacity = 1; el.style.padding = '10px'; return; }
	var showing = setInterval(function() {
		if(!el || i++ > 8) { clearInterval(showing); return; }
		var s = el.style;
		s.opacity = i/10;
		s.paddingTop = parseInt(s.paddingTop) + 1 + 'px';
		s.paddingBottom = parseInt(s.paddingBottom) + 1 + 'px';
	}, 35);
}

/*-----------------------------Image view functions--------------------------*/

function makeMoveable(el) {
	var elMove = function(e) {
		el.style.left = e.clientX - el.curX  + 'px';
		el.style.top = e.clientY - el.curY + 'px';
		el.moved = true;
	};
	var elStop = function() { __revent(doc.body, {'mousemove': elMove, 'mouseup': elStop}); };
	__event(el, {'mousedown': function(e) {
		__pD(e);
		el.curX = e.clientX - parseInt(el.style.left);
		el.curY = e.clientY - parseInt(el.style.top);
		__event(doc.body, {'mousemove': elMove, 'mouseup': elStop});
	}});
}

function resizeImg(e) {
	__pD(e);
	var curX = e.clientX;
	var curY = e.clientY;
	var oldL = parseInt(this.style.left);
	var oldT = parseInt(this.style.top);
	var oldW = this.width;
	var oldH = this.height;
	var d = nav.Opera || nav.Chrome ? e.wheelDelta : -e.detail;
	var newW = parseInt(this.width*(d > 0 ? 1.25 : 0.8));
	var newH = parseInt(this.height*(d > 0 ? 1.25 : 0.8));
	this.width = newW;
	this.height = newH;
	this.style.left = parseInt(curX - (newW/oldW)*(curX - oldL)) + 'px';
	this.style.top = parseInt(curY - (newH/oldH)*(curY - oldT)) + 'px';
}

function expand_img(a, fullW, fullH) {
	var full = __x('.//img[@id="_fullimg"]', a);

	if(full) {
		if(!full.moved) { __disp(full); setTimeout(function() { __del(full); }, 0); }
		else full.moved = false;
		return false;
	}
	full = __new('img');

	__del(__id('_fullimg'));
	full.addEventListener(nav.Opera || nav.Chrome ? 'mousewheel' : 'DOMMouseScroll',
		resizeImg, false
	);
	makeMoveable(full);

	var scrW = doc.body.clientWidth, scrH = window.innerHeight;

	var newW = fullW < scrW ? fullW : scrW;
	var newH = newW*fullH/fullW;
	if(newH > scrH) { newH = scrH; newW = newH*fullW/fullH; }
	a.appendChild(__attr(full, {
		'id': '_fullimg',
		'src': a.href, 'title': a.href, 'alt': a.href, 'width': newW, 'height': newH,
		'style': 'display:block;' + (
			' position:fixed; z-index:5000; border:1px solid black; left:'
			+ parseInt((scrW - newW)/2) + 'px; top:' + parseInt((scrH - newH)/2) + 'px' )
	}));
	return false;
}
