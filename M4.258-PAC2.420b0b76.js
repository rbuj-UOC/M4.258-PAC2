
function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
/**
 * Import dependencies from node_modules
 * see commented examples below
 */ // import 'some-node-module';
// import SomeModule from 'some-node-module';
/*!
  * Bootstrap v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */ var $de43c17a09f8c36d$exports = {};

$parcel$export($de43c17a09f8c36d$exports, "popperGenerator", function () { return $6eb52281d0622213$export$ed5e13716264f202; });
$parcel$export($de43c17a09f8c36d$exports, "detectOverflow", function () { return $6ce29ffeb36bc599$export$2e2bcd8739ae039; });
$parcel$export($de43c17a09f8c36d$exports, "createPopperBase", function () { return $6eb52281d0622213$export$8f7491d57c8f97a9; });
$parcel$export($de43c17a09f8c36d$exports, "createPopper", function () { return $43c7d70a42a93654$export$8f7491d57c8f97a9; });
$parcel$export($de43c17a09f8c36d$exports, "createPopperLite", function () { return $a717f98bc5121608$export$8f7491d57c8f97a9; });
var $423bdd644b535e0f$exports = {};

$parcel$export($423bdd644b535e0f$exports, "top", function () { return $423bdd644b535e0f$export$1e95b668f3b82d; });
$parcel$export($423bdd644b535e0f$exports, "bottom", function () { return $423bdd644b535e0f$export$40e543e69a8b3fbb; });
$parcel$export($423bdd644b535e0f$exports, "right", function () { return $423bdd644b535e0f$export$79ffe56a765070d2; });
$parcel$export($423bdd644b535e0f$exports, "left", function () { return $423bdd644b535e0f$export$eabcd2c8791e7bf4; });
$parcel$export($423bdd644b535e0f$exports, "auto", function () { return $423bdd644b535e0f$export$dfb5619354ba860; });
$parcel$export($423bdd644b535e0f$exports, "basePlacements", function () { return $423bdd644b535e0f$export$aec2ce47c367b8c3; });
$parcel$export($423bdd644b535e0f$exports, "start", function () { return $423bdd644b535e0f$export$b3571188c770cc5a; });
$parcel$export($423bdd644b535e0f$exports, "end", function () { return $423bdd644b535e0f$export$bd5df0f255a350f8; });
$parcel$export($423bdd644b535e0f$exports, "clippingParents", function () { return $423bdd644b535e0f$export$390fd549c5303b4d; });
$parcel$export($423bdd644b535e0f$exports, "viewport", function () { return $423bdd644b535e0f$export$d7b7311ec04a3e8f; });
$parcel$export($423bdd644b535e0f$exports, "popper", function () { return $423bdd644b535e0f$export$ae5ab1c730825774; });
$parcel$export($423bdd644b535e0f$exports, "reference", function () { return $423bdd644b535e0f$export$ca50aac9f3ba507f; });
$parcel$export($423bdd644b535e0f$exports, "variationPlacements", function () { return $423bdd644b535e0f$export$368f9a87e87fa4e1; });
$parcel$export($423bdd644b535e0f$exports, "placements", function () { return $423bdd644b535e0f$export$803cd8101b6c182b; });
$parcel$export($423bdd644b535e0f$exports, "beforeRead", function () { return $423bdd644b535e0f$export$421679a7c3d56e; });
$parcel$export($423bdd644b535e0f$exports, "read", function () { return $423bdd644b535e0f$export$aafa59e2e03f2942; });
$parcel$export($423bdd644b535e0f$exports, "afterRead", function () { return $423bdd644b535e0f$export$6964f6c886723980; });
$parcel$export($423bdd644b535e0f$exports, "beforeMain", function () { return $423bdd644b535e0f$export$c65e99957a05207c; });
$parcel$export($423bdd644b535e0f$exports, "main", function () { return $423bdd644b535e0f$export$f22da7240b7add18; });
$parcel$export($423bdd644b535e0f$exports, "afterMain", function () { return $423bdd644b535e0f$export$bab79516f2d662fe; });
$parcel$export($423bdd644b535e0f$exports, "beforeWrite", function () { return $423bdd644b535e0f$export$8d4d2d70e7d46032; });
$parcel$export($423bdd644b535e0f$exports, "write", function () { return $423bdd644b535e0f$export$68d8715fc104d294; });
$parcel$export($423bdd644b535e0f$exports, "afterWrite", function () { return $423bdd644b535e0f$export$70a6e5159acce2e6; });
$parcel$export($423bdd644b535e0f$exports, "modifierPhases", function () { return $423bdd644b535e0f$export$d087d3878fdf71d5; });
var $423bdd644b535e0f$export$1e95b668f3b82d = 'top';
var $423bdd644b535e0f$export$40e543e69a8b3fbb = 'bottom';
var $423bdd644b535e0f$export$79ffe56a765070d2 = 'right';
var $423bdd644b535e0f$export$eabcd2c8791e7bf4 = 'left';
var $423bdd644b535e0f$export$dfb5619354ba860 = 'auto';
var $423bdd644b535e0f$export$aec2ce47c367b8c3 = [
    $423bdd644b535e0f$export$1e95b668f3b82d,
    $423bdd644b535e0f$export$40e543e69a8b3fbb,
    $423bdd644b535e0f$export$79ffe56a765070d2,
    $423bdd644b535e0f$export$eabcd2c8791e7bf4
];
var $423bdd644b535e0f$export$b3571188c770cc5a = 'start';
var $423bdd644b535e0f$export$bd5df0f255a350f8 = 'end';
var $423bdd644b535e0f$export$390fd549c5303b4d = 'clippingParents';
var $423bdd644b535e0f$export$d7b7311ec04a3e8f = 'viewport';
var $423bdd644b535e0f$export$ae5ab1c730825774 = 'popper';
var $423bdd644b535e0f$export$ca50aac9f3ba507f = 'reference';
var $423bdd644b535e0f$export$368f9a87e87fa4e1 = /*#__PURE__*/ $423bdd644b535e0f$export$aec2ce47c367b8c3.reduce(function(acc, placement) {
    return acc.concat([
        placement + "-" + $423bdd644b535e0f$export$b3571188c770cc5a,
        placement + "-" + $423bdd644b535e0f$export$bd5df0f255a350f8
    ]);
}, []);
var $423bdd644b535e0f$export$803cd8101b6c182b = /*#__PURE__*/ [].concat($423bdd644b535e0f$export$aec2ce47c367b8c3, [
    $423bdd644b535e0f$export$dfb5619354ba860
]).reduce(function(acc, placement) {
    return acc.concat([
        placement,
        placement + "-" + $423bdd644b535e0f$export$b3571188c770cc5a,
        placement + "-" + $423bdd644b535e0f$export$bd5df0f255a350f8
    ]);
}, []); // modifiers that need to read the DOM
var $423bdd644b535e0f$export$421679a7c3d56e = 'beforeRead';
var $423bdd644b535e0f$export$aafa59e2e03f2942 = 'read';
var $423bdd644b535e0f$export$6964f6c886723980 = 'afterRead'; // pure-logic modifiers
var $423bdd644b535e0f$export$c65e99957a05207c = 'beforeMain';
var $423bdd644b535e0f$export$f22da7240b7add18 = 'main';
var $423bdd644b535e0f$export$bab79516f2d662fe = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)
var $423bdd644b535e0f$export$8d4d2d70e7d46032 = 'beforeWrite';
var $423bdd644b535e0f$export$68d8715fc104d294 = 'write';
var $423bdd644b535e0f$export$70a6e5159acce2e6 = 'afterWrite';
var $423bdd644b535e0f$export$d087d3878fdf71d5 = [
    $423bdd644b535e0f$export$421679a7c3d56e,
    $423bdd644b535e0f$export$aafa59e2e03f2942,
    $423bdd644b535e0f$export$6964f6c886723980,
    $423bdd644b535e0f$export$c65e99957a05207c,
    $423bdd644b535e0f$export$f22da7240b7add18,
    $423bdd644b535e0f$export$bab79516f2d662fe,
    $423bdd644b535e0f$export$8d4d2d70e7d46032,
    $423bdd644b535e0f$export$68d8715fc104d294,
    $423bdd644b535e0f$export$70a6e5159acce2e6
];


var $77ee2077df6bbda6$exports = {};

$parcel$export($77ee2077df6bbda6$exports, "applyStyles", function () { return $0e520b713f1e2834$export$2e2bcd8739ae039; });
$parcel$export($77ee2077df6bbda6$exports, "arrow", function () { return $b5781fe86974338e$export$2e2bcd8739ae039; });
$parcel$export($77ee2077df6bbda6$exports, "computeStyles", function () { return $50ee181f55ecb479$export$2e2bcd8739ae039; });
$parcel$export($77ee2077df6bbda6$exports, "eventListeners", function () { return $1a2350542d198432$export$2e2bcd8739ae039; });
$parcel$export($77ee2077df6bbda6$exports, "flip", function () { return $cf762459b7247830$export$2e2bcd8739ae039; });
$parcel$export($77ee2077df6bbda6$exports, "hide", function () { return $82a65a0487cc5376$export$2e2bcd8739ae039; });
$parcel$export($77ee2077df6bbda6$exports, "offset", function () { return $22574cd1b2b1c558$export$2e2bcd8739ae039; });
$parcel$export($77ee2077df6bbda6$exports, "popperOffsets", function () { return $7c0ac8322ba1df3d$export$2e2bcd8739ae039; });
$parcel$export($77ee2077df6bbda6$exports, "preventOverflow", function () { return $e66cc85369cc22d9$export$2e2bcd8739ae039; });
function $0f1dba1dcb7727ff$export$2e2bcd8739ae039(element) {
    return element ? (element.nodeName || '').toLowerCase() : null;
}


function $d5a1bbb9087fcac1$export$2e2bcd8739ae039(node) {
    if (node == null) return window;
    if (node.toString() !== '[object Window]') {
        var ownerDocument = node.ownerDocument;
        return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
}


function $332a6f89887671e3$export$45a5e7f76e0caa8d(node) {
    var OwnElement = (0, $d5a1bbb9087fcac1$export$2e2bcd8739ae039)(node).Element;
    return node instanceof OwnElement || node instanceof Element;
}
function $332a6f89887671e3$export$1b3bfaa9684536aa(node) {
    var OwnElement = (0, $d5a1bbb9087fcac1$export$2e2bcd8739ae039)(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
}
function $332a6f89887671e3$export$af51f0f06c0f328a(node) {
    // IE 11 has no ShadowRoot
    if (typeof ShadowRoot === 'undefined') return false;
    var OwnElement = (0, $d5a1bbb9087fcac1$export$2e2bcd8739ae039)(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
}


// and applies them to the HTMLElements such as popper and arrow
function $0e520b713f1e2834$var$applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name) {
        var style = state.styles[name] || {};
        var attributes = state.attributes[name] || {};
        var element = state.elements[name]; // arrow is optional + virtual elements
        if (!(0, $332a6f89887671e3$export$1b3bfaa9684536aa)(element) || !(0, $0f1dba1dcb7727ff$export$2e2bcd8739ae039)(element)) return;
         // Flow doesn't support to extend this property, but it's the most
        // effective way to apply styles to an HTMLElement
        // $FlowFixMe[cannot-write]
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(name) {
            var value = attributes[name];
            if (value === false) element.removeAttribute(name);
            else element.setAttribute(name, value === true ? '' : value);
        });
    });
}
function $0e520b713f1e2834$var$effect(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
        popper: {
            position: state.options.strategy,
            left: '0',
            top: '0',
            margin: '0'
        },
        arrow: {
            position: 'absolute'
        },
        reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
    return function() {
        Object.keys(state.elements).forEach(function(name) {
            var element = state.elements[name];
            var attributes = state.attributes[name] || {};
            var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them
            var style = styleProperties.reduce(function(style, property) {
                style[property] = '';
                return style;
            }, {}); // arrow is optional + virtual elements
            if (!(0, $332a6f89887671e3$export$1b3bfaa9684536aa)(element) || !(0, $0f1dba1dcb7727ff$export$2e2bcd8739ae039)(element)) return;
            Object.assign(element.style, style);
            Object.keys(attributes).forEach(function(attribute) {
                element.removeAttribute(attribute);
            });
        });
    };
} // eslint-disable-next-line import/no-unused-modules
var $0e520b713f1e2834$export$2e2bcd8739ae039 = {
    name: 'applyStyles',
    enabled: true,
    phase: 'write',
    fn: $0e520b713f1e2834$var$applyStyles,
    effect: $0e520b713f1e2834$var$effect,
    requires: [
        'computeStyles'
    ]
};



function $4612505f88dd8941$export$2e2bcd8739ae039(placement) {
    return placement.split('-')[0];
}



var $d3ec5d77057b61b0$export$8960430cfd85939f = Math.max;
var $d3ec5d77057b61b0$export$96ec731ed4dcb222 = Math.min;
var $d3ec5d77057b61b0$export$2077e0241d6afd3c = Math.round;



function $a93e5d45492e5b87$export$2e2bcd8739ae039() {
    var uaData = navigator.userAgentData;
    if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) return uaData.brands.map(function(item) {
        return item.brand + "/" + item.version;
    }).join(' ');
    return navigator.userAgent;
}


function $bb520666b78c0672$export$2e2bcd8739ae039() {
    return !/^((?!chrome|android).)*safari/i.test((0, $a93e5d45492e5b87$export$2e2bcd8739ae039)());
}


function $5408570c23808628$export$2e2bcd8739ae039(element, includeScale, isFixedStrategy) {
    if (includeScale === void 0) includeScale = false;
    if (isFixedStrategy === void 0) isFixedStrategy = false;
    var clientRect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if (includeScale && (0, $332a6f89887671e3$export$1b3bfaa9684536aa)(element)) {
        scaleX = element.offsetWidth > 0 ? (0, $d3ec5d77057b61b0$export$2077e0241d6afd3c)(clientRect.width) / element.offsetWidth || 1 : 1;
        scaleY = element.offsetHeight > 0 ? (0, $d3ec5d77057b61b0$export$2077e0241d6afd3c)(clientRect.height) / element.offsetHeight || 1 : 1;
    }
    var _ref = (0, $332a6f89887671e3$export$45a5e7f76e0caa8d)(element) ? (0, $d5a1bbb9087fcac1$export$2e2bcd8739ae039)(element) : window, visualViewport = _ref.visualViewport;
    var addVisualOffsets = !(0, $bb520666b78c0672$export$2e2bcd8739ae039)() && isFixedStrategy;
    var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
    var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
    var width = clientRect.width / scaleX;
    var height = clientRect.height / scaleY;
    return {
        width: width,
        height: height,
        top: y,
        right: x + width,
        bottom: y + height,
        left: x,
        x: x,
        y: y
    };
}


function $d32bd2e1f6d6bfae$export$2e2bcd8739ae039(element) {
    var clientRect = (0, $5408570c23808628$export$2e2bcd8739ae039)(element); // Use the clientRect sizes if it's not been transformed.
    // Fixes https://github.com/popperjs/popper-core/issues/1223
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) width = clientRect.width;
    if (Math.abs(clientRect.height - height) <= 1) height = clientRect.height;
    return {
        x: element.offsetLeft,
        y: element.offsetTop,
        width: width,
        height: height
    };
}



function $0296611b7b78542e$export$2e2bcd8739ae039(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method
    if (parent.contains(child)) return true;
    else if (rootNode && (0, $332a6f89887671e3$export$af51f0f06c0f328a)(rootNode)) {
        var next = child;
        do {
            if (next && parent.isSameNode(next)) return true;
             // $FlowFixMe[prop-missing]: need a better way to handle this...
            next = next.parentNode || next.host;
        }while (next);
    } // Give up, the result is false
    return false;
}





function $1f9397c4df39fad4$export$2e2bcd8739ae039(element) {
    return (0, $d5a1bbb9087fcac1$export$2e2bcd8739ae039)(element).getComputedStyle(element);
}




function $e9fa7b88f5e1c626$export$2e2bcd8739ae039(element) {
    return [
        'table',
        'td',
        'th'
    ].indexOf((0, $0f1dba1dcb7727ff$export$2e2bcd8739ae039)(element)) >= 0;
}




function $5f2de5be46793950$export$2e2bcd8739ae039(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return (((0, $332a6f89887671e3$export$45a5e7f76e0caa8d)(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}



function $c4465c340f68a11e$export$2e2bcd8739ae039(element) {
    if ((0, $0f1dba1dcb7727ff$export$2e2bcd8739ae039)(element) === 'html') return element;
    return(// $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ((0, $332a6f89887671e3$export$af51f0f06c0f328a)(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    (0, $5f2de5be46793950$export$2e2bcd8739ae039)(element) // fallback
    );
}



function $a7f98735d791c805$var$getTrueOffsetParent(element) {
    if (!(0, $332a6f89887671e3$export$1b3bfaa9684536aa)(element) || // https://github.com/popperjs/popper-core/issues/837
    (0, $1f9397c4df39fad4$export$2e2bcd8739ae039)(element).position === 'fixed') return null;
    return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block
function $a7f98735d791c805$var$getContainingBlock(element) {
    var isFirefox = /firefox/i.test((0, $a93e5d45492e5b87$export$2e2bcd8739ae039)());
    var isIE = /Trident/i.test((0, $a93e5d45492e5b87$export$2e2bcd8739ae039)());
    if (isIE && (0, $332a6f89887671e3$export$1b3bfaa9684536aa)(element)) {
        // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
        var elementCss = (0, $1f9397c4df39fad4$export$2e2bcd8739ae039)(element);
        if (elementCss.position === 'fixed') return null;
    }
    var currentNode = (0, $c4465c340f68a11e$export$2e2bcd8739ae039)(element);
    if ((0, $332a6f89887671e3$export$af51f0f06c0f328a)(currentNode)) currentNode = currentNode.host;
    while((0, $332a6f89887671e3$export$1b3bfaa9684536aa)(currentNode) && [
        'html',
        'body'
    ].indexOf((0, $0f1dba1dcb7727ff$export$2e2bcd8739ae039)(currentNode)) < 0){
        var css = (0, $1f9397c4df39fad4$export$2e2bcd8739ae039)(currentNode); // This is non-exhaustive but covers the most common CSS properties that
        // create a containing block.
        // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
        if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || [
            'transform',
            'perspective'
        ].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') return currentNode;
        else currentNode = currentNode.parentNode;
    }
    return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
function $a7f98735d791c805$export$2e2bcd8739ae039(element) {
    var window = (0, $d5a1bbb9087fcac1$export$2e2bcd8739ae039)(element);
    var offsetParent = $a7f98735d791c805$var$getTrueOffsetParent(element);
    while(offsetParent && (0, $e9fa7b88f5e1c626$export$2e2bcd8739ae039)(offsetParent) && (0, $1f9397c4df39fad4$export$2e2bcd8739ae039)(offsetParent).position === 'static')offsetParent = $a7f98735d791c805$var$getTrueOffsetParent(offsetParent);
    if (offsetParent && ((0, $0f1dba1dcb7727ff$export$2e2bcd8739ae039)(offsetParent) === 'html' || (0, $0f1dba1dcb7727ff$export$2e2bcd8739ae039)(offsetParent) === 'body' && (0, $1f9397c4df39fad4$export$2e2bcd8739ae039)(offsetParent).position === 'static')) return window;
    return offsetParent || $a7f98735d791c805$var$getContainingBlock(element) || window;
}


function $19093fb6f3953b68$export$2e2bcd8739ae039(placement) {
    return [
        'top',
        'bottom'
    ].indexOf(placement) >= 0 ? 'x' : 'y';
}



function $7a6bbf3241b423cd$export$f28d906d67a997f3(min, value, max) {
    return (0, $d3ec5d77057b61b0$export$8960430cfd85939f)(min, (0, $d3ec5d77057b61b0$export$96ec731ed4dcb222)(value, max));
}
function $7a6bbf3241b423cd$export$86c8af6d3ef0b4a(min, value, max) {
    var v = $7a6bbf3241b423cd$export$f28d906d67a997f3(min, value, max);
    return v > max ? max : v;
}


function $34e29bca709be508$export$2e2bcd8739ae039() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
}


function $fdffcc1c2623bf3d$export$2e2bcd8739ae039(paddingObject) {
    return Object.assign({}, (0, $34e29bca709be508$export$2e2bcd8739ae039)(), paddingObject);
}


function $adfe47529c64c85e$export$2e2bcd8739ae039(value, keys) {
    return keys.reduce(function(hashMap, key) {
        hashMap[key] = value;
        return hashMap;
    }, {});
}



var $b5781fe86974338e$var$toPaddingObject = function toPaddingObject(padding, state) {
    padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
        placement: state.placement
    })) : padding;
    return (0, $fdffcc1c2623bf3d$export$2e2bcd8739ae039)(typeof padding !== 'number' ? padding : (0, $adfe47529c64c85e$export$2e2bcd8739ae039)(padding, (0, $423bdd644b535e0f$export$aec2ce47c367b8c3)));
};
function $b5781fe86974338e$var$arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state, name = _ref.name, options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets = state.modifiersData.popperOffsets;
    var basePlacement = (0, $4612505f88dd8941$export$2e2bcd8739ae039)(state.placement);
    var axis = (0, $19093fb6f3953b68$export$2e2bcd8739ae039)(basePlacement);
    var isVertical = [
        (0, $423bdd644b535e0f$export$eabcd2c8791e7bf4),
        (0, $423bdd644b535e0f$export$79ffe56a765070d2)
    ].indexOf(basePlacement) >= 0;
    var len = isVertical ? 'height' : 'width';
    if (!arrowElement || !popperOffsets) return;
    var paddingObject = $b5781fe86974338e$var$toPaddingObject(options.padding, state);
    var arrowRect = (0, $d32bd2e1f6d6bfae$export$2e2bcd8739ae039)(arrowElement);
    var minProp = axis === 'y' ? (0, $423bdd644b535e0f$export$1e95b668f3b82d) : (0, $423bdd644b535e0f$export$eabcd2c8791e7bf4);
    var maxProp = axis === 'y' ? (0, $423bdd644b535e0f$export$40e543e69a8b3fbb) : (0, $423bdd644b535e0f$export$79ffe56a765070d2);
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
    var startDiff = popperOffsets[axis] - state.rects.reference[axis];
    var arrowOffsetParent = (0, $a7f98735d791c805$export$2e2bcd8739ae039)(arrowElement);
    var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds
    var min = paddingObject[minProp];
    var max = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset = (0, $7a6bbf3241b423cd$export$f28d906d67a997f3)(min, center, max); // Prevents breaking syntax highlighting...
    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}
function $b5781fe86974338e$var$effect(_ref2) {
    var state = _ref2.state, options = _ref2.options;
    var _options$element = options.element, arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;
    if (arrowElement == null) return;
     // CSS selector
    if (typeof arrowElement === 'string') {
        arrowElement = state.elements.popper.querySelector(arrowElement);
        if (!arrowElement) return;
    }
    if (!(0, $0296611b7b78542e$export$2e2bcd8739ae039)(state.elements.popper, arrowElement)) return;
    state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules
var $b5781fe86974338e$export$2e2bcd8739ae039 = {
    name: 'arrow',
    enabled: true,
    phase: 'main',
    fn: $b5781fe86974338e$var$arrow,
    effect: $b5781fe86974338e$var$effect,
    requires: [
        'popperOffsets'
    ],
    requiresIfExists: [
        'preventOverflow'
    ]
};








function $b2b859ce2d7d5a34$export$2e2bcd8739ae039(placement) {
    return placement.split('-')[1];
}



var $50ee181f55ecb479$var$unsetSides = {
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
function $50ee181f55ecb479$var$roundOffsetsByDPR(_ref, win) {
    var x = _ref.x, y = _ref.y;
    var dpr = win.devicePixelRatio || 1;
    return {
        x: (0, $d3ec5d77057b61b0$export$2077e0241d6afd3c)(x * dpr) / dpr || 0,
        y: (0, $d3ec5d77057b61b0$export$2077e0241d6afd3c)(y * dpr) / dpr || 0
    };
}
function $50ee181f55ecb479$export$378fa78a8fea596f(_ref2) {
    var _Object$assign2;
    var popper = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
    var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
        x: x,
        y: y
    }) : {
        x: x,
        y: y
    };
    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty('x');
    var hasY = offsets.hasOwnProperty('y');
    var sideX = (0, $423bdd644b535e0f$export$eabcd2c8791e7bf4);
    var sideY = (0, $423bdd644b535e0f$export$1e95b668f3b82d);
    var win = window;
    if (adaptive) {
        var offsetParent = (0, $a7f98735d791c805$export$2e2bcd8739ae039)(popper);
        var heightProp = 'clientHeight';
        var widthProp = 'clientWidth';
        if (offsetParent === (0, $d5a1bbb9087fcac1$export$2e2bcd8739ae039)(popper)) {
            offsetParent = (0, $5f2de5be46793950$export$2e2bcd8739ae039)(popper);
            if ((0, $1f9397c4df39fad4$export$2e2bcd8739ae039)(offsetParent).position !== 'static' && position === 'absolute') {
                heightProp = 'scrollHeight';
                widthProp = 'scrollWidth';
            }
        } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
        offsetParent;
        if (placement === (0, $423bdd644b535e0f$export$1e95b668f3b82d) || (placement === (0, $423bdd644b535e0f$export$eabcd2c8791e7bf4) || placement === (0, $423bdd644b535e0f$export$79ffe56a765070d2)) && variation === (0, $423bdd644b535e0f$export$bd5df0f255a350f8)) {
            sideY = (0, $423bdd644b535e0f$export$40e543e69a8b3fbb);
            var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
            y -= offsetY - popperRect.height;
            y *= gpuAcceleration ? 1 : -1;
        }
        if (placement === (0, $423bdd644b535e0f$export$eabcd2c8791e7bf4) || (placement === (0, $423bdd644b535e0f$export$1e95b668f3b82d) || placement === (0, $423bdd644b535e0f$export$40e543e69a8b3fbb)) && variation === (0, $423bdd644b535e0f$export$bd5df0f255a350f8)) {
            sideX = (0, $423bdd644b535e0f$export$79ffe56a765070d2);
            var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
            x -= offsetX - popperRect.width;
            x *= gpuAcceleration ? 1 : -1;
        }
    }
    var commonStyles = Object.assign({
        position: position
    }, adaptive && $50ee181f55ecb479$var$unsetSides);
    var _ref4 = roundOffsets === true ? $50ee181f55ecb479$var$roundOffsetsByDPR({
        x: x,
        y: y
    }, (0, $d5a1bbb9087fcac1$export$2e2bcd8739ae039)(popper)) : {
        x: x,
        y: y
    };
    x = _ref4.x;
    y = _ref4.y;
    if (gpuAcceleration) {
        var _Object$assign;
        return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}
function $50ee181f55ecb479$var$computeStyles(_ref5) {
    var state = _ref5.state, options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var commonStyles = {
        placement: (0, $4612505f88dd8941$export$2e2bcd8739ae039)(state.placement),
        variation: (0, $b2b859ce2d7d5a34$export$2e2bcd8739ae039)(state.placement),
        popper: state.elements.popper,
        popperRect: state.rects.popper,
        gpuAcceleration: gpuAcceleration,
        isFixed: state.options.strategy === 'fixed'
    };
    if (state.modifiersData.popperOffsets != null) state.styles.popper = Object.assign({}, state.styles.popper, $50ee181f55ecb479$export$378fa78a8fea596f(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive: adaptive,
        roundOffsets: roundOffsets
    })));
    if (state.modifiersData.arrow != null) state.styles.arrow = Object.assign({}, state.styles.arrow, $50ee181f55ecb479$export$378fa78a8fea596f(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: 'absolute',
        adaptive: false,
        roundOffsets: roundOffsets
    })));
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
        'data-popper-placement': state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
var $50ee181f55ecb479$export$2e2bcd8739ae039 = {
    name: 'computeStyles',
    enabled: true,
    phase: 'beforeWrite',
    fn: $50ee181f55ecb479$var$computeStyles,
    data: {}
};



var $1a2350542d198432$var$passive = {
    passive: true
};
function $1a2350542d198432$var$effect(_ref) {
    var state = _ref.state, instance = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window = (0, $d5a1bbb9087fcac1$export$2e2bcd8739ae039)(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener('scroll', instance.update, $1a2350542d198432$var$passive);
    });
    if (resize) window.addEventListener('resize', instance.update, $1a2350542d198432$var$passive);
    return function() {
        if (scroll) scrollParents.forEach(function(scrollParent) {
            scrollParent.removeEventListener('scroll', instance.update, $1a2350542d198432$var$passive);
        });
        if (resize) window.removeEventListener('resize', instance.update, $1a2350542d198432$var$passive);
    };
} // eslint-disable-next-line import/no-unused-modules
var $1a2350542d198432$export$2e2bcd8739ae039 = {
    name: 'eventListeners',
    enabled: true,
    phase: 'write',
    fn: function fn() {},
    effect: $1a2350542d198432$var$effect,
    data: {}
};


var $07e852461fec201a$var$hash = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
};
function $07e852461fec201a$export$2e2bcd8739ae039(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
        return $07e852461fec201a$var$hash[matched];
    });
}



var $6b3c104a4ffc255c$var$hash = {
    start: 'end',
    end: 'start'
};
function $6b3c104a4ffc255c$export$2e2bcd8739ae039(placement) {
    return placement.replace(/start|end/g, function(matched) {
        return $6b3c104a4ffc255c$var$hash[matched];
    });
}








function $e1eca3f4f8b23c60$export$2e2bcd8739ae039(node) {
    var win = (0, $d5a1bbb9087fcac1$export$2e2bcd8739ae039)(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
    };
}


function $8a1ae2d02e98f266$export$2e2bcd8739ae039(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return (0, $5408570c23808628$export$2e2bcd8739ae039)((0, $5f2de5be46793950$export$2e2bcd8739ae039)(element)).left + (0, $e1eca3f4f8b23c60$export$2e2bcd8739ae039)(element).scrollLeft;
}



function $28cc8ea4a5d85e2d$export$2e2bcd8739ae039(element, strategy) {
    var win = (0, $d5a1bbb9087fcac1$export$2e2bcd8739ae039)(element);
    var html = (0, $5f2de5be46793950$export$2e2bcd8739ae039)(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0;
    if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height;
        var layoutViewport = (0, $bb520666b78c0672$export$2e2bcd8739ae039)();
        if (layoutViewport || !layoutViewport && strategy === 'fixed') {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
        }
    }
    return {
        width: width,
        height: height,
        x: x + (0, $8a1ae2d02e98f266$export$2e2bcd8739ae039)(element),
        y: y
    };
}







function $ae32ac44fc9ac57a$export$2e2bcd8739ae039(element) {
    var _element$ownerDocumen;
    var html = (0, $5f2de5be46793950$export$2e2bcd8739ae039)(element);
    var winScroll = (0, $e1eca3f4f8b23c60$export$2e2bcd8739ae039)(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = (0, $d3ec5d77057b61b0$export$8960430cfd85939f)(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = (0, $d3ec5d77057b61b0$export$8960430cfd85939f)(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + (0, $8a1ae2d02e98f266$export$2e2bcd8739ae039)(element);
    var y = -winScroll.scrollTop;
    if ((0, $1f9397c4df39fad4$export$2e2bcd8739ae039)(body || html).direction === 'rtl') x += (0, $d3ec5d77057b61b0$export$8960430cfd85939f)(html.clientWidth, body ? body.clientWidth : 0) - width;
    return {
        width: width,
        height: height,
        x: x,
        y: y
    };
}




function $5919a6cd387b5445$export$2e2bcd8739ae039(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = (0, $1f9397c4df39fad4$export$2e2bcd8739ae039)(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}




function $8d0c49921407956f$export$2e2bcd8739ae039(node) {
    if ([
        'html',
        'body',
        '#document'
    ].indexOf((0, $0f1dba1dcb7727ff$export$2e2bcd8739ae039)(node)) >= 0) // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
    if ((0, $332a6f89887671e3$export$1b3bfaa9684536aa)(node) && (0, $5919a6cd387b5445$export$2e2bcd8739ae039)(node)) return node;
    return $8d0c49921407956f$export$2e2bcd8739ae039((0, $c4465c340f68a11e$export$2e2bcd8739ae039)(node));
}





function $203aaac2a2853a69$export$2e2bcd8739ae039(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) list = [];
    var scrollParent = (0, $8d0c49921407956f$export$2e2bcd8739ae039)(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = (0, $d5a1bbb9087fcac1$export$2e2bcd8739ae039)(scrollParent);
    var target = isBody ? [
        win
    ].concat(win.visualViewport || [], (0, $5919a6cd387b5445$export$2e2bcd8739ae039)(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : updatedList.concat($203aaac2a2853a69$export$2e2bcd8739ae039((0, $c4465c340f68a11e$export$2e2bcd8739ae039)(target)));
}










function $ad94531a0ddf886f$export$2e2bcd8739ae039(rect) {
    return Object.assign({}, rect, {
        left: rect.x,
        top: rect.y,
        right: rect.x + rect.width,
        bottom: rect.y + rect.height
    });
}



function $0ea73150dd2974b7$var$getInnerBoundingClientRect(element, strategy) {
    var rect = (0, $5408570c23808628$export$2e2bcd8739ae039)(element, false, strategy === 'fixed');
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
}
function $0ea73150dd2974b7$var$getClientRectFromMixedType(element, clippingParent, strategy) {
    return clippingParent === (0, $423bdd644b535e0f$export$d7b7311ec04a3e8f) ? (0, $ad94531a0ddf886f$export$2e2bcd8739ae039)((0, $28cc8ea4a5d85e2d$export$2e2bcd8739ae039)(element, strategy)) : (0, $332a6f89887671e3$export$45a5e7f76e0caa8d)(clippingParent) ? $0ea73150dd2974b7$var$getInnerBoundingClientRect(clippingParent, strategy) : (0, $ad94531a0ddf886f$export$2e2bcd8739ae039)((0, $ae32ac44fc9ac57a$export$2e2bcd8739ae039)((0, $5f2de5be46793950$export$2e2bcd8739ae039)(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`
function $0ea73150dd2974b7$var$getClippingParents(element) {
    var clippingParents = (0, $203aaac2a2853a69$export$2e2bcd8739ae039)((0, $c4465c340f68a11e$export$2e2bcd8739ae039)(element));
    var canEscapeClipping = [
        'absolute',
        'fixed'
    ].indexOf((0, $1f9397c4df39fad4$export$2e2bcd8739ae039)(element).position) >= 0;
    var clipperElement = canEscapeClipping && (0, $332a6f89887671e3$export$1b3bfaa9684536aa)(element) ? (0, $a7f98735d791c805$export$2e2bcd8739ae039)(element) : element;
    if (!(0, $332a6f89887671e3$export$45a5e7f76e0caa8d)(clipperElement)) return [];
     // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414
    return clippingParents.filter(function(clippingParent) {
        return (0, $332a6f89887671e3$export$45a5e7f76e0caa8d)(clippingParent) && (0, $0296611b7b78542e$export$2e2bcd8739ae039)(clippingParent, clipperElement) && (0, $0f1dba1dcb7727ff$export$2e2bcd8739ae039)(clippingParent) !== 'body';
    });
} // Gets the maximum area that the element is visible in due to any number of
function $0ea73150dd2974b7$export$2e2bcd8739ae039(element, boundary, rootBoundary, strategy) {
    var mainClippingParents = boundary === 'clippingParents' ? $0ea73150dd2974b7$var$getClippingParents(element) : [].concat(boundary);
    var clippingParents = [].concat(mainClippingParents, [
        rootBoundary
    ]);
    var firstClippingParent = clippingParents[0];
    var clippingRect = clippingParents.reduce(function(accRect, clippingParent) {
        var rect = $0ea73150dd2974b7$var$getClientRectFromMixedType(element, clippingParent, strategy);
        accRect.top = (0, $d3ec5d77057b61b0$export$8960430cfd85939f)(rect.top, accRect.top);
        accRect.right = (0, $d3ec5d77057b61b0$export$96ec731ed4dcb222)(rect.right, accRect.right);
        accRect.bottom = (0, $d3ec5d77057b61b0$export$96ec731ed4dcb222)(rect.bottom, accRect.bottom);
        accRect.left = (0, $d3ec5d77057b61b0$export$8960430cfd85939f)(rect.left, accRect.left);
        return accRect;
    }, $0ea73150dd2974b7$var$getClientRectFromMixedType(element, firstClippingParent, strategy));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
}








function $82ca26068ab7a5f6$export$2e2bcd8739ae039(_ref) {
    var reference = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? (0, $4612505f88dd8941$export$2e2bcd8739ae039)(placement) : null;
    var variation = placement ? (0, $b2b859ce2d7d5a34$export$2e2bcd8739ae039)(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;
    switch(basePlacement){
        case 0, $423bdd644b535e0f$export$1e95b668f3b82d:
            offsets = {
                x: commonX,
                y: reference.y - element.height
            };
            break;
        case 0, $423bdd644b535e0f$export$40e543e69a8b3fbb:
            offsets = {
                x: commonX,
                y: reference.y + reference.height
            };
            break;
        case 0, $423bdd644b535e0f$export$79ffe56a765070d2:
            offsets = {
                x: reference.x + reference.width,
                y: commonY
            };
            break;
        case 0, $423bdd644b535e0f$export$eabcd2c8791e7bf4:
            offsets = {
                x: reference.x - element.width,
                y: commonY
            };
            break;
        default:
            offsets = {
                x: reference.x,
                y: reference.y
            };
    }
    var mainAxis = basePlacement ? (0, $19093fb6f3953b68$export$2e2bcd8739ae039)(basePlacement) : null;
    if (mainAxis != null) {
        var len = mainAxis === 'y' ? 'height' : 'width';
        switch(variation){
            case 0, $423bdd644b535e0f$export$b3571188c770cc5a:
                offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
                break;
            case 0, $423bdd644b535e0f$export$bd5df0f255a350f8:
                offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
                break;
            default:
        }
    }
    return offsets;
}







function $6ce29ffeb36bc599$export$2e2bcd8739ae039(state, options) {
    if (options === void 0) options = {};
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? (0, $423bdd644b535e0f$export$390fd549c5303b4d) : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? (0, $423bdd644b535e0f$export$d7b7311ec04a3e8f) : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? (0, $423bdd644b535e0f$export$ae5ab1c730825774) : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = (0, $fdffcc1c2623bf3d$export$2e2bcd8739ae039)(typeof padding !== 'number' ? padding : (0, $adfe47529c64c85e$export$2e2bcd8739ae039)(padding, (0, $423bdd644b535e0f$export$aec2ce47c367b8c3)));
    var altContext = elementContext === (0, $423bdd644b535e0f$export$ae5ab1c730825774) ? (0, $423bdd644b535e0f$export$ca50aac9f3ba507f) : (0, $423bdd644b535e0f$export$ae5ab1c730825774);
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = (0, $0ea73150dd2974b7$export$2e2bcd8739ae039)((0, $332a6f89887671e3$export$45a5e7f76e0caa8d)(element) ? element : element.contextElement || (0, $5f2de5be46793950$export$2e2bcd8739ae039)(state.elements.popper), boundary, rootBoundary, strategy);
    var referenceClientRect = (0, $5408570c23808628$export$2e2bcd8739ae039)(state.elements.reference);
    var popperOffsets = (0, $82ca26068ab7a5f6$export$2e2bcd8739ae039)({
        reference: referenceClientRect,
        element: popperRect,
        strategy: 'absolute',
        placement: placement
    });
    var popperClientRect = (0, $ad94531a0ddf886f$export$2e2bcd8739ae039)(Object.assign({}, popperRect, popperOffsets));
    var elementClientRect = elementContext === (0, $423bdd644b535e0f$export$ae5ab1c730825774) ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect
    var overflowOffsets = {
        top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
        bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
        left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
        right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element
    if (elementContext === (0, $423bdd644b535e0f$export$ae5ab1c730825774) && offsetData) {
        var offset = offsetData[placement];
        Object.keys(overflowOffsets).forEach(function(key) {
            var multiply = [
                (0, $423bdd644b535e0f$export$79ffe56a765070d2),
                (0, $423bdd644b535e0f$export$40e543e69a8b3fbb)
            ].indexOf(key) >= 0 ? 1 : -1;
            var axis = [
                (0, $423bdd644b535e0f$export$1e95b668f3b82d),
                (0, $423bdd644b535e0f$export$40e543e69a8b3fbb)
            ].indexOf(key) >= 0 ? 'y' : 'x';
            overflowOffsets[key] += offset[axis] * multiply;
        });
    }
    return overflowOffsets;
}






function $a0fdf9e30ea3dbbc$export$2e2bcd8739ae039(state, options) {
    if (options === void 0) options = {};
    var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? (0, $423bdd644b535e0f$export$803cd8101b6c182b) : _options$allowedAutoP;
    var variation = (0, $b2b859ce2d7d5a34$export$2e2bcd8739ae039)(placement);
    var placements = variation ? flipVariations ? (0, $423bdd644b535e0f$export$368f9a87e87fa4e1) : (0, $423bdd644b535e0f$export$368f9a87e87fa4e1).filter(function(placement) {
        return (0, $b2b859ce2d7d5a34$export$2e2bcd8739ae039)(placement) === variation;
    }) : (0, $423bdd644b535e0f$export$aec2ce47c367b8c3);
    var allowedPlacements = placements.filter(function(placement) {
        return allowedAutoPlacements.indexOf(placement) >= 0;
    });
    if (allowedPlacements.length === 0) allowedPlacements = placements;
     // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...
    var overflows = allowedPlacements.reduce(function(acc, placement) {
        acc[placement] = (0, $6ce29ffeb36bc599$export$2e2bcd8739ae039)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding
        })[(0, $4612505f88dd8941$export$2e2bcd8739ae039)(placement)];
        return acc;
    }, {});
    return Object.keys(overflows).sort(function(a, b) {
        return overflows[a] - overflows[b];
    });
}




function $cf762459b7247830$var$getExpandedFallbackPlacements(placement) {
    if ((0, $4612505f88dd8941$export$2e2bcd8739ae039)(placement) === (0, $423bdd644b535e0f$export$dfb5619354ba860)) return [];
    var oppositePlacement = (0, $07e852461fec201a$export$2e2bcd8739ae039)(placement);
    return [
        (0, $6b3c104a4ffc255c$export$2e2bcd8739ae039)(placement),
        oppositePlacement,
        (0, $6b3c104a4ffc255c$export$2e2bcd8739ae039)(oppositePlacement)
    ];
}
function $cf762459b7247830$var$flip(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) return;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = (0, $4612505f88dd8941$export$2e2bcd8739ae039)(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [
        (0, $07e852461fec201a$export$2e2bcd8739ae039)(preferredPlacement)
    ] : $cf762459b7247830$var$getExpandedFallbackPlacements(preferredPlacement));
    var placements = [
        preferredPlacement
    ].concat(fallbackPlacements).reduce(function(acc, placement) {
        return acc.concat((0, $4612505f88dd8941$export$2e2bcd8739ae039)(placement) === (0, $423bdd644b535e0f$export$dfb5619354ba860) ? (0, $a0fdf9e30ea3dbbc$export$2e2bcd8739ae039)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding,
            flipVariations: flipVariations,
            allowedAutoPlacements: allowedAutoPlacements
        }) : placement);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements[0];
    for(var i = 0; i < placements.length; i++){
        var placement = placements[i];
        var _basePlacement = (0, $4612505f88dd8941$export$2e2bcd8739ae039)(placement);
        var isStartVariation = (0, $b2b859ce2d7d5a34$export$2e2bcd8739ae039)(placement) === (0, $423bdd644b535e0f$export$b3571188c770cc5a);
        var isVertical = [
            (0, $423bdd644b535e0f$export$1e95b668f3b82d),
            (0, $423bdd644b535e0f$export$40e543e69a8b3fbb)
        ].indexOf(_basePlacement) >= 0;
        var len = isVertical ? 'width' : 'height';
        var overflow = (0, $6ce29ffeb36bc599$export$2e2bcd8739ae039)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            altBoundary: altBoundary,
            padding: padding
        });
        var mainVariationSide = isVertical ? isStartVariation ? (0, $423bdd644b535e0f$export$79ffe56a765070d2) : (0, $423bdd644b535e0f$export$eabcd2c8791e7bf4) : isStartVariation ? (0, $423bdd644b535e0f$export$40e543e69a8b3fbb) : (0, $423bdd644b535e0f$export$1e95b668f3b82d);
        if (referenceRect[len] > popperRect[len]) mainVariationSide = (0, $07e852461fec201a$export$2e2bcd8739ae039)(mainVariationSide);
        var altVariationSide = (0, $07e852461fec201a$export$2e2bcd8739ae039)(mainVariationSide);
        var checks = [];
        if (checkMainAxis) checks.push(overflow[_basePlacement] <= 0);
        if (checkAltAxis) checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
        if (checks.every(function(check) {
            return check;
        })) {
            firstFittingPlacement = placement;
            makeFallbackChecks = false;
            break;
        }
        checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) {
        // `2` may be desired in some cases – research later
        var numberOfChecks = flipVariations ? 3 : 1;
        var _loop = function _loop(_i) {
            var fittingPlacement = placements.find(function(placement) {
                var checks = checksMap.get(placement);
                if (checks) return checks.slice(0, _i).every(function(check) {
                    return check;
                });
            });
            if (fittingPlacement) {
                firstFittingPlacement = fittingPlacement;
                return "break";
            }
        };
        for(var _i = numberOfChecks; _i > 0; _i--){
            var _ret = _loop(_i);
            if (_ret === "break") break;
        }
    }
    if (state.placement !== firstFittingPlacement) {
        state.modifiersData[name]._skip = true;
        state.placement = firstFittingPlacement;
        state.reset = true;
    }
} // eslint-disable-next-line import/no-unused-modules
var $cf762459b7247830$export$2e2bcd8739ae039 = {
    name: 'flip',
    enabled: true,
    phase: 'main',
    fn: $cf762459b7247830$var$flip,
    requiresIfExists: [
        'offset'
    ],
    data: {
        _skip: false
    }
};




function $82a65a0487cc5376$var$getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) preventedOffsets = {
        x: 0,
        y: 0
    };
    return {
        top: overflow.top - rect.height - preventedOffsets.y,
        right: overflow.right - rect.width + preventedOffsets.x,
        bottom: overflow.bottom - rect.height + preventedOffsets.y,
        left: overflow.left - rect.width - preventedOffsets.x
    };
}
function $82a65a0487cc5376$var$isAnySideFullyClipped(overflow) {
    return [
        (0, $423bdd644b535e0f$export$1e95b668f3b82d),
        (0, $423bdd644b535e0f$export$79ffe56a765070d2),
        (0, $423bdd644b535e0f$export$40e543e69a8b3fbb),
        (0, $423bdd644b535e0f$export$eabcd2c8791e7bf4)
    ].some(function(side) {
        return overflow[side] >= 0;
    });
}
function $82a65a0487cc5376$var$hide(_ref) {
    var state = _ref.state, name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = (0, $6ce29ffeb36bc599$export$2e2bcd8739ae039)(state, {
        elementContext: 'reference'
    });
    var popperAltOverflow = (0, $6ce29ffeb36bc599$export$2e2bcd8739ae039)(state, {
        altBoundary: true
    });
    var referenceClippingOffsets = $82a65a0487cc5376$var$getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = $82a65a0487cc5376$var$getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = $82a65a0487cc5376$var$isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = $82a65a0487cc5376$var$isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
        referenceClippingOffsets: referenceClippingOffsets,
        popperEscapeOffsets: popperEscapeOffsets,
        isReferenceHidden: isReferenceHidden,
        hasPopperEscaped: hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
        'data-popper-reference-hidden': isReferenceHidden,
        'data-popper-escaped': hasPopperEscaped
    });
} // eslint-disable-next-line import/no-unused-modules
var $82a65a0487cc5376$export$2e2bcd8739ae039 = {
    name: 'hide',
    enabled: true,
    phase: 'main',
    requiresIfExists: [
        'preventOverflow'
    ],
    fn: $82a65a0487cc5376$var$hide
};




function $22574cd1b2b1c558$export$7fa02d8595b015ed(placement, rects, offset) {
    var basePlacement = (0, $4612505f88dd8941$export$2e2bcd8739ae039)(placement);
    var invertDistance = [
        (0, $423bdd644b535e0f$export$eabcd2c8791e7bf4),
        (0, $423bdd644b535e0f$export$1e95b668f3b82d)
    ].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
        placement: placement
    })) : offset, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [
        (0, $423bdd644b535e0f$export$eabcd2c8791e7bf4),
        (0, $423bdd644b535e0f$export$79ffe56a765070d2)
    ].indexOf(basePlacement) >= 0 ? {
        x: distance,
        y: skidding
    } : {
        x: skidding,
        y: distance
    };
}
function $22574cd1b2b1c558$var$offset(_ref2) {
    var state = _ref2.state, options = _ref2.options, name = _ref2.name;
    var _options$offset = options.offset, offset = _options$offset === void 0 ? [
        0,
        0
    ] : _options$offset;
    var data = (0, $423bdd644b535e0f$export$803cd8101b6c182b).reduce(function(acc, placement) {
        acc[placement] = $22574cd1b2b1c558$export$7fa02d8595b015ed(placement, state.rects, offset);
        return acc;
    }, {});
    var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
        state.modifiersData.popperOffsets.x += x;
        state.modifiersData.popperOffsets.y += y;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
var $22574cd1b2b1c558$export$2e2bcd8739ae039 = {
    name: 'offset',
    enabled: true,
    phase: 'main',
    requires: [
        'popperOffsets'
    ],
    fn: $22574cd1b2b1c558$var$offset
};



function $7c0ac8322ba1df3d$var$popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step
    state.modifiersData[name] = (0, $82ca26068ab7a5f6$export$2e2bcd8739ae039)({
        reference: state.rects.reference,
        element: state.rects.popper,
        strategy: 'absolute',
        placement: state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
var $7c0ac8322ba1df3d$export$2e2bcd8739ae039 = {
    name: 'popperOffsets',
    enabled: true,
    phase: 'read',
    fn: $7c0ac8322ba1df3d$var$popperOffsets,
    data: {}
};





function $7b170c32dea2ca0d$export$2e2bcd8739ae039(axis) {
    return axis === 'x' ? 'y' : 'x';
}









function $e66cc85369cc22d9$var$preventOverflow(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = (0, $6ce29ffeb36bc599$export$2e2bcd8739ae039)(state, {
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        altBoundary: altBoundary
    });
    var basePlacement = (0, $4612505f88dd8941$export$2e2bcd8739ae039)(state.placement);
    var variation = (0, $b2b859ce2d7d5a34$export$2e2bcd8739ae039)(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = (0, $19093fb6f3953b68$export$2e2bcd8739ae039)(basePlacement);
    var altAxis = (0, $7b170c32dea2ca0d$export$2e2bcd8739ae039)(mainAxis);
    var popperOffsets = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
        placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
        mainAxis: tetherOffsetValue,
        altAxis: tetherOffsetValue
    } : Object.assign({
        mainAxis: 0,
        altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data = {
        x: 0,
        y: 0
    };
    if (!popperOffsets) return;
    if (checkMainAxis) {
        var _offsetModifierState$;
        var mainSide = mainAxis === 'y' ? (0, $423bdd644b535e0f$export$1e95b668f3b82d) : (0, $423bdd644b535e0f$export$eabcd2c8791e7bf4);
        var altSide = mainAxis === 'y' ? (0, $423bdd644b535e0f$export$40e543e69a8b3fbb) : (0, $423bdd644b535e0f$export$79ffe56a765070d2);
        var len = mainAxis === 'y' ? 'height' : 'width';
        var offset = popperOffsets[mainAxis];
        var min = offset + overflow[mainSide];
        var max = offset - overflow[altSide];
        var additive = tether ? -popperRect[len] / 2 : 0;
        var minLen = variation === (0, $423bdd644b535e0f$export$b3571188c770cc5a) ? referenceRect[len] : popperRect[len];
        var maxLen = variation === (0, $423bdd644b535e0f$export$b3571188c770cc5a) ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
        // outside the reference bounds
        var arrowElement = state.elements.arrow;
        var arrowRect = tether && arrowElement ? (0, $d32bd2e1f6d6bfae$export$2e2bcd8739ae039)(arrowElement) : {
            width: 0,
            height: 0
        };
        var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : (0, $34e29bca709be508$export$2e2bcd8739ae039)();
        var arrowPaddingMin = arrowPaddingObject[mainSide];
        var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
        // to include its full size in the calculation. If the reference is small
        // and near the edge of a boundary, the popper can overflow even if the
        // reference is not overflowing as well (e.g. virtual elements with no
        // width or height)
        var arrowLen = (0, $7a6bbf3241b423cd$export$f28d906d67a997f3)(0, referenceRect[len], arrowRect[len]);
        var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
        var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
        var arrowOffsetParent = state.elements.arrow && (0, $a7f98735d791c805$export$2e2bcd8739ae039)(state.elements.arrow);
        var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
        var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
        var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
        var tetherMax = offset + maxOffset - offsetModifierValue;
        var preventedOffset = (0, $7a6bbf3241b423cd$export$f28d906d67a997f3)(tether ? (0, $d3ec5d77057b61b0$export$96ec731ed4dcb222)(min, tetherMin) : min, offset, tether ? (0, $d3ec5d77057b61b0$export$8960430cfd85939f)(max, tetherMax) : max);
        popperOffsets[mainAxis] = preventedOffset;
        data[mainAxis] = preventedOffset - offset;
    }
    if (checkAltAxis) {
        var _offsetModifierState$2;
        var _mainSide = mainAxis === 'x' ? (0, $423bdd644b535e0f$export$1e95b668f3b82d) : (0, $423bdd644b535e0f$export$eabcd2c8791e7bf4);
        var _altSide = mainAxis === 'x' ? (0, $423bdd644b535e0f$export$40e543e69a8b3fbb) : (0, $423bdd644b535e0f$export$79ffe56a765070d2);
        var _offset = popperOffsets[altAxis];
        var _len = altAxis === 'y' ? 'height' : 'width';
        var _min = _offset + overflow[_mainSide];
        var _max = _offset - overflow[_altSide];
        var isOriginSide = [
            (0, $423bdd644b535e0f$export$1e95b668f3b82d),
            (0, $423bdd644b535e0f$export$eabcd2c8791e7bf4)
        ].indexOf(basePlacement) !== -1;
        var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
        var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
        var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
        var _preventedOffset = tether && isOriginSide ? (0, $7a6bbf3241b423cd$export$86c8af6d3ef0b4a)(_tetherMin, _offset, _tetherMax) : (0, $7a6bbf3241b423cd$export$f28d906d67a997f3)(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
        popperOffsets[altAxis] = _preventedOffset;
        data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
var $e66cc85369cc22d9$export$2e2bcd8739ae039 = {
    name: 'preventOverflow',
    enabled: true,
    phase: 'main',
    fn: $e66cc85369cc22d9$var$preventOverflow,
    requiresIfExists: [
        'offset'
    ]
};








function $09d280cbff918423$export$2e2bcd8739ae039(element) {
    return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
    };
}


function $d90aa04561352ad0$export$2e2bcd8739ae039(node) {
    if (node === (0, $d5a1bbb9087fcac1$export$2e2bcd8739ae039)(node) || !(0, $332a6f89887671e3$export$1b3bfaa9684536aa)(node)) return (0, $e1eca3f4f8b23c60$export$2e2bcd8739ae039)(node);
    else return (0, $09d280cbff918423$export$2e2bcd8739ae039)(node);
}








function $5c991201e150fa18$var$isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = (0, $d3ec5d77057b61b0$export$2077e0241d6afd3c)(rect.width) / element.offsetWidth || 1;
    var scaleY = (0, $d3ec5d77057b61b0$export$2077e0241d6afd3c)(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
function $5c991201e150fa18$export$2e2bcd8739ae039(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) isFixed = false;
    var isOffsetParentAnElement = (0, $332a6f89887671e3$export$1b3bfaa9684536aa)(offsetParent);
    var offsetParentIsScaled = (0, $332a6f89887671e3$export$1b3bfaa9684536aa)(offsetParent) && $5c991201e150fa18$var$isElementScaled(offsetParent);
    var documentElement = (0, $5f2de5be46793950$export$2e2bcd8739ae039)(offsetParent);
    var rect = (0, $5408570c23808628$export$2e2bcd8739ae039)(elementOrVirtualElement, offsetParentIsScaled, isFixed);
    var scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    var offsets = {
        x: 0,
        y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if ((0, $0f1dba1dcb7727ff$export$2e2bcd8739ae039)(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
        (0, $5919a6cd387b5445$export$2e2bcd8739ae039)(documentElement)) scroll = (0, $d90aa04561352ad0$export$2e2bcd8739ae039)(offsetParent);
        if ((0, $332a6f89887671e3$export$1b3bfaa9684536aa)(offsetParent)) {
            offsets = (0, $5408570c23808628$export$2e2bcd8739ae039)(offsetParent, true);
            offsets.x += offsetParent.clientLeft;
            offsets.y += offsetParent.clientTop;
        } else if (documentElement) offsets.x = (0, $8a1ae2d02e98f266$export$2e2bcd8739ae039)(documentElement);
    }
    return {
        x: rect.left + scroll.scrollLeft - offsets.x,
        y: rect.top + scroll.scrollTop - offsets.y,
        width: rect.width,
        height: rect.height
    };
}






function $dbe797f9eca29b1a$var$order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
        map.set(modifier.name, modifier);
    }); // On visiting object, check for its dependencies and visit them recursively
    function sort(modifier) {
        visited.add(modifier.name);
        var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
        requires.forEach(function(dep) {
            if (!visited.has(dep)) {
                var depModifier = map.get(dep);
                if (depModifier) sort(depModifier);
            }
        });
        result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
        if (!visited.has(modifier.name)) // check for visited object
        sort(modifier);
    });
    return result;
}
function $dbe797f9eca29b1a$export$2e2bcd8739ae039(modifiers) {
    // order based on dependencies
    var orderedModifiers = $dbe797f9eca29b1a$var$order(modifiers); // order based on phase
    return (0, $423bdd644b535e0f$export$d087d3878fdf71d5).reduce(function(acc, phase) {
        return acc.concat(orderedModifiers.filter(function(modifier) {
            return modifier.phase === phase;
        }));
    }, []);
}


function $ef52634ce55384db$export$2e2bcd8739ae039(fn) {
    var pending;
    return function() {
        if (!pending) pending = new Promise(function(resolve) {
            Promise.resolve().then(function() {
                pending = undefined;
                resolve(fn());
            });
        });
        return pending;
    };
}


function $5d4b85936816b636$export$2e2bcd8739ae039(modifiers) {
    var merged = modifiers.reduce(function(merged, current) {
        var existing = merged[current.name];
        merged[current.name] = existing ? Object.assign({}, existing, current, {
            options: Object.assign({}, existing.options, current.options),
            data: Object.assign({}, existing.data, current.data)
        }) : current;
        return merged;
    }, {}); // IE11 does not support Object.values
    return Object.keys(merged).map(function(key) {
        return merged[key];
    });
}




var $6eb52281d0622213$var$DEFAULT_OPTIONS = {
    placement: 'bottom',
    modifiers: [],
    strategy: 'absolute'
};
function $6eb52281d0622213$var$areValidElements() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    return !args.some(function(element) {
        return !(element && typeof element.getBoundingClientRect === 'function');
    });
}
function $6eb52281d0622213$export$ed5e13716264f202(generatorOptions) {
    if (generatorOptions === void 0) generatorOptions = {};
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? $6eb52281d0622213$var$DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper(reference, popper, options) {
        if (options === void 0) options = defaultOptions;
        var state = {
            placement: 'bottom',
            orderedModifiers: [],
            options: Object.assign({}, $6eb52281d0622213$var$DEFAULT_OPTIONS, defaultOptions),
            modifiersData: {},
            elements: {
                reference: reference,
                popper: popper
            },
            attributes: {},
            styles: {}
        };
        var effectCleanupFns = [];
        var isDestroyed = false;
        var instance = {
            state: state,
            setOptions: function setOptions(setOptionsAction) {
                var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
                cleanupModifierEffects();
                state.options = Object.assign({}, defaultOptions, state.options, options);
                state.scrollParents = {
                    reference: (0, $332a6f89887671e3$export$45a5e7f76e0caa8d)(reference) ? (0, $203aaac2a2853a69$export$2e2bcd8739ae039)(reference) : reference.contextElement ? (0, $203aaac2a2853a69$export$2e2bcd8739ae039)(reference.contextElement) : [],
                    popper: (0, $203aaac2a2853a69$export$2e2bcd8739ae039)(popper)
                }; // Orders the modifiers based on their dependencies and `phase`
                // properties
                var orderedModifiers = (0, $dbe797f9eca29b1a$export$2e2bcd8739ae039)((0, $5d4b85936816b636$export$2e2bcd8739ae039)([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers
                state.orderedModifiers = orderedModifiers.filter(function(m) {
                    return m.enabled;
                });
                runModifierEffects();
                return instance.update();
            },
            // Sync update – it will always be executed, even if not necessary. This
            // is useful for low frequency updates where sync behavior simplifies the
            // logic.
            // For high frequency updates (e.g. `resize` and `scroll` events), always
            // prefer the async Popper#update method
            forceUpdate: function forceUpdate() {
                if (isDestroyed) return;
                var _state$elements = state.elements, reference = _state$elements.reference, popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
                // anymore
                if (!$6eb52281d0622213$var$areValidElements(reference, popper)) return;
                 // Store the reference and popper rects to be read by modifiers
                state.rects = {
                    reference: (0, $5c991201e150fa18$export$2e2bcd8739ae039)(reference, (0, $a7f98735d791c805$export$2e2bcd8739ae039)(popper), state.options.strategy === 'fixed'),
                    popper: (0, $d32bd2e1f6d6bfae$export$2e2bcd8739ae039)(popper)
                }; // Modifiers have the ability to reset the current update cycle. The
                // most common use case for this is the `flip` modifier changing the
                // placement, which then needs to re-run all the modifiers, because the
                // logic was previously ran for the previous placement and is therefore
                // stale/incorrect
                state.reset = false;
                state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
                // is filled with the initial data specified by the modifier. This means
                // it doesn't persist and is fresh on each update.
                // To ensure persistent data, use `${name}#persistent`
                state.orderedModifiers.forEach(function(modifier) {
                    return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
                });
                for(var index = 0; index < state.orderedModifiers.length; index++){
                    if (state.reset === true) {
                        state.reset = false;
                        index = -1;
                        continue;
                    }
                    var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
                    if (typeof fn === 'function') state = fn({
                        state: state,
                        options: _options,
                        name: name,
                        instance: instance
                    }) || state;
                }
            },
            // Async and optimistically optimized update – it will not be executed if
            // not necessary (debounced to run at most once-per-tick)
            update: (0, $ef52634ce55384db$export$2e2bcd8739ae039)(function() {
                return new Promise(function(resolve) {
                    instance.forceUpdate();
                    resolve(state);
                });
            }),
            destroy: function destroy() {
                cleanupModifierEffects();
                isDestroyed = true;
            }
        };
        if (!$6eb52281d0622213$var$areValidElements(reference, popper)) return instance;
        instance.setOptions(options).then(function(state) {
            if (!isDestroyed && options.onFirstUpdate) options.onFirstUpdate(state);
        }); // Modifiers have the ability to execute arbitrary code before the first
        // update cycle runs. They will be executed in the same order as the update
        // cycle. This is useful when a modifier adds some persistent data that
        // other modifiers need to use, but the modifier is run after the dependent
        // one.
        function runModifierEffects() {
            state.orderedModifiers.forEach(function(_ref) {
                var name = _ref.name, _ref$options = _ref.options, options = _ref$options === void 0 ? {} : _ref$options, effect = _ref.effect;
                if (typeof effect === 'function') {
                    var cleanupFn = effect({
                        state: state,
                        name: name,
                        instance: instance,
                        options: options
                    });
                    var noopFn = function noopFn() {};
                    effectCleanupFns.push(cleanupFn || noopFn);
                }
            });
        }
        function cleanupModifierEffects() {
            effectCleanupFns.forEach(function(fn) {
                return fn();
            });
            effectCleanupFns = [];
        }
        return instance;
    };
}
var $6eb52281d0622213$export$8f7491d57c8f97a9 = /*#__PURE__*/ $6eb52281d0622213$export$ed5e13716264f202(); // eslint-disable-next-line import/no-unused-modules














var $43c7d70a42a93654$export$d34966752335dd47 = [
    (0, $1a2350542d198432$export$2e2bcd8739ae039),
    (0, $7c0ac8322ba1df3d$export$2e2bcd8739ae039),
    (0, $50ee181f55ecb479$export$2e2bcd8739ae039),
    (0, $0e520b713f1e2834$export$2e2bcd8739ae039),
    (0, $22574cd1b2b1c558$export$2e2bcd8739ae039),
    (0, $cf762459b7247830$export$2e2bcd8739ae039),
    (0, $e66cc85369cc22d9$export$2e2bcd8739ae039),
    (0, $b5781fe86974338e$export$2e2bcd8739ae039),
    (0, $82a65a0487cc5376$export$2e2bcd8739ae039)
];
var $43c7d70a42a93654$export$8f7491d57c8f97a9 = /*#__PURE__*/ (0, $6eb52281d0622213$export$ed5e13716264f202)({
    defaultModifiers: $43c7d70a42a93654$export$d34966752335dd47
}); // eslint-disable-next-line import/no-unused-modules







var $a717f98bc5121608$export$d34966752335dd47 = [
    (0, $1a2350542d198432$export$2e2bcd8739ae039),
    (0, $7c0ac8322ba1df3d$export$2e2bcd8739ae039),
    (0, $50ee181f55ecb479$export$2e2bcd8739ae039),
    (0, $0e520b713f1e2834$export$2e2bcd8739ae039)
];
var $a717f98bc5121608$export$8f7491d57c8f97a9 = /*#__PURE__*/ (0, $6eb52281d0622213$export$ed5e13716264f202)({
    defaultModifiers: $a717f98bc5121608$export$d34966752335dd47
}); // eslint-disable-next-line import/no-unused-modules


$parcel$exportWildcard($de43c17a09f8c36d$exports, $423bdd644b535e0f$exports);
$parcel$exportWildcard($de43c17a09f8c36d$exports, $77ee2077df6bbda6$exports);


/**
 * --------------------------------------------------------------------------
 * Bootstrap dom/data.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const $fa8cf754a473f9f4$var$elementMap = new Map();
const $fa8cf754a473f9f4$var$Data = {
    set (element, key, instance) {
        if (!$fa8cf754a473f9f4$var$elementMap.has(element)) $fa8cf754a473f9f4$var$elementMap.set(element, new Map());
        const instanceMap = $fa8cf754a473f9f4$var$elementMap.get(element);
        // make it clear we only want one instance per element
        // can be removed later when multiple key/instances are fine to be used
        if (!instanceMap.has(key) && instanceMap.size !== 0) {
            // eslint-disable-next-line no-console
            console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
            return;
        }
        instanceMap.set(key, instance);
    },
    get (element, key) {
        if ($fa8cf754a473f9f4$var$elementMap.has(element)) return $fa8cf754a473f9f4$var$elementMap.get(element).get(key) || null;
        return null;
    },
    remove (element, key) {
        if (!$fa8cf754a473f9f4$var$elementMap.has(element)) return;
        const instanceMap = $fa8cf754a473f9f4$var$elementMap.get(element);
        instanceMap.delete(key);
        // free up element references if there are no instances left for an element
        if (instanceMap.size === 0) $fa8cf754a473f9f4$var$elementMap.delete(element);
    }
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap util/index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ const $fa8cf754a473f9f4$var$MAX_UID = 1000000;
const $fa8cf754a473f9f4$var$MILLISECONDS_MULTIPLIER = 1000;
const $fa8cf754a473f9f4$var$TRANSITION_END = 'transitionend';
/**
 * Properly escape IDs selectors to handle weird IDs
 * @param {string} selector
 * @returns {string}
 */ const $fa8cf754a473f9f4$var$parseSelector = (selector)=>{
    if (selector && window.CSS && window.CSS.escape) // document.querySelector needs escaping to handle IDs (html5+) containing for instance /
    selector = selector.replace(/#([^\s"#']+)/g, (match, id)=>`#${CSS.escape(id)}`);
    return selector;
};
// Shout-out Angus Croll (https://goo.gl/pxwQGp)
const $fa8cf754a473f9f4$var$toType = (object)=>{
    if (object === null || object === undefined) return `${object}`;
    return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
};
/**
 * Public Util API
 */ const $fa8cf754a473f9f4$var$getUID = (prefix)=>{
    do prefix += Math.floor(Math.random() * $fa8cf754a473f9f4$var$MAX_UID);
    while (document.getElementById(prefix));
    return prefix;
};
const $fa8cf754a473f9f4$var$getTransitionDurationFromElement = (element)=>{
    if (!element) return 0;
    // Get transition-duration of the element
    let { transitionDuration: transitionDuration, transitionDelay: transitionDelay } = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay);
    // Return 0 if element or transition duration is not found
    if (!floatTransitionDuration && !floatTransitionDelay) return 0;
    // If multiple durations are defined, take the first
    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * $fa8cf754a473f9f4$var$MILLISECONDS_MULTIPLIER;
};
const $fa8cf754a473f9f4$var$triggerTransitionEnd = (element)=>{
    element.dispatchEvent(new Event($fa8cf754a473f9f4$var$TRANSITION_END));
};
const $fa8cf754a473f9f4$var$isElement = (object)=>{
    if (!object || typeof object !== 'object') return false;
    if (typeof object.jquery !== 'undefined') object = object[0];
    return typeof object.nodeType !== 'undefined';
};
const $fa8cf754a473f9f4$var$getElement = (object)=>{
    // it's a jQuery object or a node element
    if ($fa8cf754a473f9f4$var$isElement(object)) return object.jquery ? object[0] : object;
    if (typeof object === 'string' && object.length > 0) return document.querySelector($fa8cf754a473f9f4$var$parseSelector(object));
    return null;
};
const $fa8cf754a473f9f4$var$isVisible = (element)=>{
    if (!$fa8cf754a473f9f4$var$isElement(element) || element.getClientRects().length === 0) return false;
    const elementIsVisible = getComputedStyle(element).getPropertyValue('visibility') === 'visible';
    // Handle `details` element as its content may falsie appear visible when it is closed
    const closedDetails = element.closest('details:not([open])');
    if (!closedDetails) return elementIsVisible;
    if (closedDetails !== element) {
        const summary = element.closest('summary');
        if (summary && summary.parentNode !== closedDetails) return false;
        if (summary === null) return false;
    }
    return elementIsVisible;
};
const $fa8cf754a473f9f4$var$isDisabled = (element)=>{
    if (!element || element.nodeType !== Node.ELEMENT_NODE) return true;
    if (element.classList.contains('disabled')) return true;
    if (typeof element.disabled !== 'undefined') return element.disabled;
    return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
};
const $fa8cf754a473f9f4$var$findShadowRoot = (element)=>{
    if (!document.documentElement.attachShadow) return null;
    // Can find the shadow root otherwise it'll return the document
    if (typeof element.getRootNode === 'function') {
        const root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
    }
    if (element instanceof ShadowRoot) return element;
    // when we don't find a shadow root
    if (!element.parentNode) return null;
    return $fa8cf754a473f9f4$var$findShadowRoot(element.parentNode);
};
const $fa8cf754a473f9f4$var$noop = ()=>{};
/**
 * Trick to restart an element's animation
 *
 * @param {HTMLElement} element
 * @return void
 *
 * @see https://www.harrytheo.com/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
 */ const $fa8cf754a473f9f4$var$reflow = (element)=>{
    element.offsetHeight; // eslint-disable-line no-unused-expressions
};
const $fa8cf754a473f9f4$var$getjQuery = ()=>{
    if (window.jQuery && !document.body.hasAttribute('data-bs-no-jquery')) return window.jQuery;
    return null;
};
const $fa8cf754a473f9f4$var$DOMContentLoadedCallbacks = [];
const $fa8cf754a473f9f4$var$onDOMContentLoaded = (callback)=>{
    if (document.readyState === 'loading') {
        // add listener on the first call when the document is in loading state
        if (!$fa8cf754a473f9f4$var$DOMContentLoadedCallbacks.length) document.addEventListener('DOMContentLoaded', ()=>{
            for (const callback of $fa8cf754a473f9f4$var$DOMContentLoadedCallbacks)callback();
        });
        $fa8cf754a473f9f4$var$DOMContentLoadedCallbacks.push(callback);
    } else callback();
};
const $fa8cf754a473f9f4$var$isRTL = ()=>document.documentElement.dir === 'rtl';
const $fa8cf754a473f9f4$var$defineJQueryPlugin = (plugin)=>{
    $fa8cf754a473f9f4$var$onDOMContentLoaded(()=>{
        const $ = $fa8cf754a473f9f4$var$getjQuery();
        /* istanbul ignore if */ if ($) {
            const name = plugin.NAME;
            const JQUERY_NO_CONFLICT = $.fn[name];
            $.fn[name] = plugin.jQueryInterface;
            $.fn[name].Constructor = plugin;
            $.fn[name].noConflict = ()=>{
                $.fn[name] = JQUERY_NO_CONFLICT;
                return plugin.jQueryInterface;
            };
        }
    });
};
const $fa8cf754a473f9f4$var$execute = (possibleCallback, args = [], defaultValue = possibleCallback)=>{
    return typeof possibleCallback === 'function' ? possibleCallback.call(...args) : defaultValue;
};
const $fa8cf754a473f9f4$var$executeAfterTransition = (callback, transitionElement, waitForTransition = true)=>{
    if (!waitForTransition) {
        $fa8cf754a473f9f4$var$execute(callback);
        return;
    }
    const durationPadding = 5;
    const emulatedDuration = $fa8cf754a473f9f4$var$getTransitionDurationFromElement(transitionElement) + durationPadding;
    let called = false;
    const handler = ({ target: target })=>{
        if (target !== transitionElement) return;
        called = true;
        transitionElement.removeEventListener($fa8cf754a473f9f4$var$TRANSITION_END, handler);
        $fa8cf754a473f9f4$var$execute(callback);
    };
    transitionElement.addEventListener($fa8cf754a473f9f4$var$TRANSITION_END, handler);
    setTimeout(()=>{
        if (!called) $fa8cf754a473f9f4$var$triggerTransitionEnd(transitionElement);
    }, emulatedDuration);
};
/**
 * Return the previous/next element of a list.
 *
 * @param {array} list    The list of elements
 * @param activeElement   The active element
 * @param shouldGetNext   Choose to get next or previous element
 * @param isCycleAllowed
 * @return {Element|elem} The proper element
 */ const $fa8cf754a473f9f4$var$getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed)=>{
    const listLength = list.length;
    let index = list.indexOf(activeElement);
    // if the element does not exist in the list return an element
    // depending on the direction and if cycle is allowed
    if (index === -1) return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
    index += shouldGetNext ? 1 : -1;
    if (isCycleAllowed) index = (index + listLength) % listLength;
    return list[Math.max(0, Math.min(index, listLength - 1))];
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap dom/event-handler.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const $fa8cf754a473f9f4$var$namespaceRegex = /[^.]*(?=\..*)\.|.*/;
const $fa8cf754a473f9f4$var$stripNameRegex = /\..*/;
const $fa8cf754a473f9f4$var$stripUidRegex = /::\d+$/;
const $fa8cf754a473f9f4$var$eventRegistry = {}; // Events storage
let $fa8cf754a473f9f4$var$uidEvent = 1;
const $fa8cf754a473f9f4$var$customEvents = {
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
};
const $fa8cf754a473f9f4$var$nativeEvents = new Set([
    'click',
    'dblclick',
    'mouseup',
    'mousedown',
    'contextmenu',
    'mousewheel',
    'DOMMouseScroll',
    'mouseover',
    'mouseout',
    'mousemove',
    'selectstart',
    'selectend',
    'keydown',
    'keypress',
    'keyup',
    'orientationchange',
    'touchstart',
    'touchmove',
    'touchend',
    'touchcancel',
    'pointerdown',
    'pointermove',
    'pointerup',
    'pointerleave',
    'pointercancel',
    'gesturestart',
    'gesturechange',
    'gestureend',
    'focus',
    'blur',
    'change',
    'reset',
    'select',
    'submit',
    'focusin',
    'focusout',
    'load',
    'unload',
    'beforeunload',
    'resize',
    'move',
    'DOMContentLoaded',
    'readystatechange',
    'error',
    'abort',
    'scroll'
]);
/**
 * Private methods
 */ function $fa8cf754a473f9f4$var$makeEventUid(element, uid) {
    return uid && `${uid}::${$fa8cf754a473f9f4$var$uidEvent++}` || element.uidEvent || $fa8cf754a473f9f4$var$uidEvent++;
}
function $fa8cf754a473f9f4$var$getElementEvents(element) {
    const uid = $fa8cf754a473f9f4$var$makeEventUid(element);
    element.uidEvent = uid;
    $fa8cf754a473f9f4$var$eventRegistry[uid] = $fa8cf754a473f9f4$var$eventRegistry[uid] || {};
    return $fa8cf754a473f9f4$var$eventRegistry[uid];
}
function $fa8cf754a473f9f4$var$bootstrapHandler(element, fn) {
    return function handler(event) {
        $fa8cf754a473f9f4$var$hydrateObj(event, {
            delegateTarget: element
        });
        if (handler.oneOff) $fa8cf754a473f9f4$var$EventHandler.off(element, event.type, fn);
        return fn.apply(element, [
            event
        ]);
    };
}
function $fa8cf754a473f9f4$var$bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
        const domElements = element.querySelectorAll(selector);
        for(let { target: target } = event; target && target !== this; target = target.parentNode)for (const domElement of domElements){
            if (domElement !== target) continue;
            $fa8cf754a473f9f4$var$hydrateObj(event, {
                delegateTarget: target
            });
            if (handler.oneOff) $fa8cf754a473f9f4$var$EventHandler.off(element, event.type, selector, fn);
            return fn.apply(target, [
                event
            ]);
        }
    };
}
function $fa8cf754a473f9f4$var$findHandler(events, callable, delegationSelector = null) {
    return Object.values(events).find((event)=>event.callable === callable && event.delegationSelector === delegationSelector);
}
function $fa8cf754a473f9f4$var$normalizeParameters(originalTypeEvent, handler, delegationFunction) {
    const isDelegated = typeof handler === 'string';
    // TODO: tooltip passes `false` instead of selector, so we need to check
    const callable = isDelegated ? delegationFunction : handler || delegationFunction;
    let typeEvent = $fa8cf754a473f9f4$var$getTypeEvent(originalTypeEvent);
    if (!$fa8cf754a473f9f4$var$nativeEvents.has(typeEvent)) typeEvent = originalTypeEvent;
    return [
        isDelegated,
        callable,
        typeEvent
    ];
}
function $fa8cf754a473f9f4$var$addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
    if (typeof originalTypeEvent !== 'string' || !element) return;
    let [isDelegated, callable, typeEvent] = $fa8cf754a473f9f4$var$normalizeParameters(originalTypeEvent, handler, delegationFunction);
    // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
    // this prevents the handler from being dispatched the same way as mouseover or mouseout does
    if (originalTypeEvent in $fa8cf754a473f9f4$var$customEvents) {
        const wrapFunction = (fn)=>{
            return function(event) {
                if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) return fn.call(this, event);
            };
        };
        callable = wrapFunction(callable);
    }
    const events = $fa8cf754a473f9f4$var$getElementEvents(element);
    const handlers = events[typeEvent] || (events[typeEvent] = {});
    const previousFunction = $fa8cf754a473f9f4$var$findHandler(handlers, callable, isDelegated ? handler : null);
    if (previousFunction) {
        previousFunction.oneOff = previousFunction.oneOff && oneOff;
        return;
    }
    const uid = $fa8cf754a473f9f4$var$makeEventUid(callable, originalTypeEvent.replace($fa8cf754a473f9f4$var$namespaceRegex, ''));
    const fn = isDelegated ? $fa8cf754a473f9f4$var$bootstrapDelegationHandler(element, handler, callable) : $fa8cf754a473f9f4$var$bootstrapHandler(element, callable);
    fn.delegationSelector = isDelegated ? handler : null;
    fn.callable = callable;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
    element.addEventListener(typeEvent, fn, isDelegated);
}
function $fa8cf754a473f9f4$var$removeHandler(element, events, typeEvent, handler, delegationSelector) {
    const fn = $fa8cf754a473f9f4$var$findHandler(events[typeEvent], handler, delegationSelector);
    if (!fn) return;
    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
}
function $fa8cf754a473f9f4$var$removeNamespacedHandlers(element, events, typeEvent, namespace) {
    const storeElementEvent = events[typeEvent] || {};
    for (const [handlerKey, event] of Object.entries(storeElementEvent))if (handlerKey.includes(namespace)) $fa8cf754a473f9f4$var$removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
}
function $fa8cf754a473f9f4$var$getTypeEvent(event) {
    // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
    event = event.replace($fa8cf754a473f9f4$var$stripNameRegex, '');
    return $fa8cf754a473f9f4$var$customEvents[event] || event;
}
const $fa8cf754a473f9f4$var$EventHandler = {
    on (element, event, handler, delegationFunction) {
        $fa8cf754a473f9f4$var$addHandler(element, event, handler, delegationFunction, false);
    },
    one (element, event, handler, delegationFunction) {
        $fa8cf754a473f9f4$var$addHandler(element, event, handler, delegationFunction, true);
    },
    off (element, originalTypeEvent, handler, delegationFunction) {
        if (typeof originalTypeEvent !== 'string' || !element) return;
        const [isDelegated, callable, typeEvent] = $fa8cf754a473f9f4$var$normalizeParameters(originalTypeEvent, handler, delegationFunction);
        const inNamespace = typeEvent !== originalTypeEvent;
        const events = $fa8cf754a473f9f4$var$getElementEvents(element);
        const storeElementEvent = events[typeEvent] || {};
        const isNamespace = originalTypeEvent.startsWith('.');
        if (typeof callable !== 'undefined') {
            // Simplest case: handler is passed, remove that listener ONLY.
            if (!Object.keys(storeElementEvent).length) return;
            $fa8cf754a473f9f4$var$removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
            return;
        }
        if (isNamespace) for (const elementEvent of Object.keys(events))$fa8cf754a473f9f4$var$removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        for (const [keyHandlers, event] of Object.entries(storeElementEvent)){
            const handlerKey = keyHandlers.replace($fa8cf754a473f9f4$var$stripUidRegex, '');
            if (!inNamespace || originalTypeEvent.includes(handlerKey)) $fa8cf754a473f9f4$var$removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
        }
    },
    trigger (element, event, args) {
        if (typeof event !== 'string' || !element) return null;
        const $ = $fa8cf754a473f9f4$var$getjQuery();
        const typeEvent = $fa8cf754a473f9f4$var$getTypeEvent(event);
        const inNamespace = event !== typeEvent;
        let jQueryEvent = null;
        let bubbles = true;
        let nativeDispatch = true;
        let defaultPrevented = false;
        if (inNamespace && $) {
            jQueryEvent = $.Event(event, args);
            $(element).trigger(jQueryEvent);
            bubbles = !jQueryEvent.isPropagationStopped();
            nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
            defaultPrevented = jQueryEvent.isDefaultPrevented();
        }
        const evt = $fa8cf754a473f9f4$var$hydrateObj(new Event(event, {
            bubbles: bubbles,
            cancelable: true
        }), args);
        if (defaultPrevented) evt.preventDefault();
        if (nativeDispatch) element.dispatchEvent(evt);
        if (evt.defaultPrevented && jQueryEvent) jQueryEvent.preventDefault();
        return evt;
    }
};
function $fa8cf754a473f9f4$var$hydrateObj(obj, meta = {}) {
    for (const [key, value] of Object.entries(meta))try {
        obj[key] = value;
    } catch (_unused) {
        Object.defineProperty(obj, key, {
            configurable: true,
            get () {
                return value;
            }
        });
    }
    return obj;
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap dom/manipulator.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ function $fa8cf754a473f9f4$var$normalizeData(value) {
    if (value === 'true') return true;
    if (value === 'false') return false;
    if (value === Number(value).toString()) return Number(value);
    if (value === '' || value === 'null') return null;
    if (typeof value !== 'string') return value;
    try {
        return JSON.parse(decodeURIComponent(value));
    } catch (_unused) {
        return value;
    }
}
function $fa8cf754a473f9f4$var$normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, (chr)=>`-${chr.toLowerCase()}`);
}
const $fa8cf754a473f9f4$var$Manipulator = {
    setDataAttribute (element, key, value) {
        element.setAttribute(`data-bs-${$fa8cf754a473f9f4$var$normalizeDataKey(key)}`, value);
    },
    removeDataAttribute (element, key) {
        element.removeAttribute(`data-bs-${$fa8cf754a473f9f4$var$normalizeDataKey(key)}`);
    },
    getDataAttributes (element) {
        if (!element) return {};
        const attributes = {};
        const bsKeys = Object.keys(element.dataset).filter((key)=>key.startsWith('bs') && !key.startsWith('bsConfig'));
        for (const key of bsKeys){
            let pureKey = key.replace(/^bs/, '');
            pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1);
            attributes[pureKey] = $fa8cf754a473f9f4$var$normalizeData(element.dataset[key]);
        }
        return attributes;
    },
    getDataAttribute (element, key) {
        return $fa8cf754a473f9f4$var$normalizeData(element.getAttribute(`data-bs-${$fa8cf754a473f9f4$var$normalizeDataKey(key)}`));
    }
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap util/config.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Class definition
 */ class $fa8cf754a473f9f4$var$Config {
    // Getters
    static get Default() {
        return {};
    }
    static get DefaultType() {
        return {};
    }
    static get NAME() {
        throw new Error('You have to implement the static method "NAME", for each component!');
    }
    _getConfig(config) {
        config = this._mergeConfigObj(config);
        config = this._configAfterMerge(config);
        this._typeCheckConfig(config);
        return config;
    }
    _configAfterMerge(config) {
        return config;
    }
    _mergeConfigObj(config, element) {
        const jsonConfig = $fa8cf754a473f9f4$var$isElement(element) ? $fa8cf754a473f9f4$var$Manipulator.getDataAttribute(element, 'config') : {}; // try to parse
        return {
            ...this.constructor.Default,
            ...typeof jsonConfig === 'object' ? jsonConfig : {},
            ...$fa8cf754a473f9f4$var$isElement(element) ? $fa8cf754a473f9f4$var$Manipulator.getDataAttributes(element) : {},
            ...typeof config === 'object' ? config : {}
        };
    }
    _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
        for (const [property, expectedTypes] of Object.entries(configTypes)){
            const value = config[property];
            const valueType = $fa8cf754a473f9f4$var$isElement(value) ? 'element' : $fa8cf754a473f9f4$var$toType(value);
            if (!new RegExp(expectedTypes).test(valueType)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
        }
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap base-component.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const $fa8cf754a473f9f4$var$VERSION = '5.3.8';
/**
 * Class definition
 */ class $fa8cf754a473f9f4$var$BaseComponent extends $fa8cf754a473f9f4$var$Config {
    constructor(element, config){
        super();
        element = $fa8cf754a473f9f4$var$getElement(element);
        if (!element) return;
        this._element = element;
        this._config = this._getConfig(config);
        $fa8cf754a473f9f4$var$Data.set(this._element, this.constructor.DATA_KEY, this);
    }
    // Public
    dispose() {
        $fa8cf754a473f9f4$var$Data.remove(this._element, this.constructor.DATA_KEY);
        $fa8cf754a473f9f4$var$EventHandler.off(this._element, this.constructor.EVENT_KEY);
        for (const propertyName of Object.getOwnPropertyNames(this))this[propertyName] = null;
    }
    // Private
    _queueCallback(callback, element, isAnimated = true) {
        $fa8cf754a473f9f4$var$executeAfterTransition(callback, element, isAnimated);
    }
    _getConfig(config) {
        config = this._mergeConfigObj(config, this._element);
        config = this._configAfterMerge(config);
        this._typeCheckConfig(config);
        return config;
    }
    // Static
    static getInstance(element) {
        return $fa8cf754a473f9f4$var$Data.get($fa8cf754a473f9f4$var$getElement(element), this.DATA_KEY);
    }
    static getOrCreateInstance(element, config = {}) {
        return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null);
    }
    static get VERSION() {
        return $fa8cf754a473f9f4$var$VERSION;
    }
    static get DATA_KEY() {
        return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
        return `.${this.DATA_KEY}`;
    }
    static eventName(name) {
        return `${name}${this.EVENT_KEY}`;
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap dom/selector-engine.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ const $fa8cf754a473f9f4$var$getSelector = (element)=>{
    let selector = element.getAttribute('data-bs-target');
    if (!selector || selector === '#') {
        let hrefAttribute = element.getAttribute('href');
        // The only valid content that could double as a selector are IDs or classes,
        // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
        // `document.querySelector` will rightfully complain it is invalid.
        // See https://github.com/twbs/bootstrap/issues/32273
        if (!hrefAttribute || !hrefAttribute.includes('#') && !hrefAttribute.startsWith('.')) return null;
        // Just in case some CMS puts out a full URL with the anchor appended
        if (hrefAttribute.includes('#') && !hrefAttribute.startsWith('#')) hrefAttribute = `#${hrefAttribute.split('#')[1]}`;
        selector = hrefAttribute && hrefAttribute !== '#' ? hrefAttribute.trim() : null;
    }
    return selector ? selector.split(',').map((sel)=>$fa8cf754a473f9f4$var$parseSelector(sel)).join(',') : null;
};
const $fa8cf754a473f9f4$var$SelectorEngine = {
    find (selector, element = document.documentElement) {
        return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
    },
    findOne (selector, element = document.documentElement) {
        return Element.prototype.querySelector.call(element, selector);
    },
    children (element, selector) {
        return [].concat(...element.children).filter((child)=>child.matches(selector));
    },
    parents (element, selector) {
        const parents = [];
        let ancestor = element.parentNode.closest(selector);
        while(ancestor){
            parents.push(ancestor);
            ancestor = ancestor.parentNode.closest(selector);
        }
        return parents;
    },
    prev (element, selector) {
        let previous = element.previousElementSibling;
        while(previous){
            if (previous.matches(selector)) return [
                previous
            ];
            previous = previous.previousElementSibling;
        }
        return [];
    },
    // TODO: this is now unused; remove later along with prev()
    next (element, selector) {
        let next = element.nextElementSibling;
        while(next){
            if (next.matches(selector)) return [
                next
            ];
            next = next.nextElementSibling;
        }
        return [];
    },
    focusableChildren (element) {
        const focusables = [
            'a',
            'button',
            'input',
            'textarea',
            'select',
            'details',
            '[tabindex]',
            '[contenteditable="true"]'
        ].map((selector)=>`${selector}:not([tabindex^="-"])`).join(',');
        return this.find(focusables, element).filter((el)=>!$fa8cf754a473f9f4$var$isDisabled(el) && $fa8cf754a473f9f4$var$isVisible(el));
    },
    getSelectorFromElement (element) {
        const selector = $fa8cf754a473f9f4$var$getSelector(element);
        if (selector) return $fa8cf754a473f9f4$var$SelectorEngine.findOne(selector) ? selector : null;
        return null;
    },
    getElementFromSelector (element) {
        const selector = $fa8cf754a473f9f4$var$getSelector(element);
        return selector ? $fa8cf754a473f9f4$var$SelectorEngine.findOne(selector) : null;
    },
    getMultipleElementsFromSelector (element) {
        const selector = $fa8cf754a473f9f4$var$getSelector(element);
        return selector ? $fa8cf754a473f9f4$var$SelectorEngine.find(selector) : [];
    }
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap util/component-functions.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ const $fa8cf754a473f9f4$var$enableDismissTrigger = (component, method = 'hide')=>{
    const clickEvent = `click.dismiss${component.EVENT_KEY}`;
    const name = component.NAME;
    $fa8cf754a473f9f4$var$EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function(event) {
        if ([
            'A',
            'AREA'
        ].includes(this.tagName)) event.preventDefault();
        if ($fa8cf754a473f9f4$var$isDisabled(this)) return;
        const target = $fa8cf754a473f9f4$var$SelectorEngine.getElementFromSelector(this) || this.closest(`.${name}`);
        const instance = component.getOrCreateInstance(target);
        // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method
        instance[method]();
    });
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const $fa8cf754a473f9f4$var$NAME$f = 'alert';
const $fa8cf754a473f9f4$var$DATA_KEY$a = 'bs.alert';
const $fa8cf754a473f9f4$var$EVENT_KEY$b = `.${$fa8cf754a473f9f4$var$DATA_KEY$a}`;
const $fa8cf754a473f9f4$var$EVENT_CLOSE = `close${$fa8cf754a473f9f4$var$EVENT_KEY$b}`;
const $fa8cf754a473f9f4$var$EVENT_CLOSED = `closed${$fa8cf754a473f9f4$var$EVENT_KEY$b}`;
const $fa8cf754a473f9f4$var$CLASS_NAME_FADE$5 = 'fade';
const $fa8cf754a473f9f4$var$CLASS_NAME_SHOW$8 = 'show';
/**
 * Class definition
 */ class $fa8cf754a473f9f4$export$caec2af78bcc877f extends $fa8cf754a473f9f4$var$BaseComponent {
    // Getters
    static get NAME() {
        return $fa8cf754a473f9f4$var$NAME$f;
    }
    // Public
    close() {
        const closeEvent = $fa8cf754a473f9f4$var$EventHandler.trigger(this._element, $fa8cf754a473f9f4$var$EVENT_CLOSE);
        if (closeEvent.defaultPrevented) return;
        this._element.classList.remove($fa8cf754a473f9f4$var$CLASS_NAME_SHOW$8);
        const isAnimated = this._element.classList.contains($fa8cf754a473f9f4$var$CLASS_NAME_FADE$5);
        this._queueCallback(()=>this._destroyElement(), this._element, isAnimated);
    }
    // Private
    _destroyElement() {
        this._element.remove();
        $fa8cf754a473f9f4$var$EventHandler.trigger(this._element, $fa8cf754a473f9f4$var$EVENT_CLOSED);
        this.dispose();
    }
    // Static
    static jQueryInterface(config) {
        return this.each(function() {
            const data = $fa8cf754a473f9f4$export$caec2af78bcc877f.getOrCreateInstance(this);
            if (typeof config !== 'string') return;
            if (data[config] === undefined || config.startsWith('_') || config === 'constructor') throw new TypeError(`No method named "${config}"`);
            data[config](this);
        });
    }
}
/**
 * Data API implementation
 */ $fa8cf754a473f9f4$var$enableDismissTrigger($fa8cf754a473f9f4$export$caec2af78bcc877f, 'close');
/**
 * jQuery
 */ $fa8cf754a473f9f4$var$defineJQueryPlugin($fa8cf754a473f9f4$export$caec2af78bcc877f);
/**
 * --------------------------------------------------------------------------
 * Bootstrap button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const $fa8cf754a473f9f4$var$NAME$e = 'button';
const $fa8cf754a473f9f4$var$DATA_KEY$9 = 'bs.button';
const $fa8cf754a473f9f4$var$EVENT_KEY$a = `.${$fa8cf754a473f9f4$var$DATA_KEY$9}`;
const $fa8cf754a473f9f4$var$DATA_API_KEY$6 = '.data-api';
const $fa8cf754a473f9f4$var$CLASS_NAME_ACTIVE$3 = 'active';
const $fa8cf754a473f9f4$var$SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
const $fa8cf754a473f9f4$var$EVENT_CLICK_DATA_API$6 = `click${$fa8cf754a473f9f4$var$EVENT_KEY$a}${$fa8cf754a473f9f4$var$DATA_API_KEY$6}`;
/**
 * Class definition
 */ class $fa8cf754a473f9f4$export$353f5b6fc5456de1 extends $fa8cf754a473f9f4$var$BaseComponent {
    // Getters
    static get NAME() {
        return $fa8cf754a473f9f4$var$NAME$e;
    }
    // Public
    toggle() {
        // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
        this._element.setAttribute('aria-pressed', this._element.classList.toggle($fa8cf754a473f9f4$var$CLASS_NAME_ACTIVE$3));
    }
    // Static
    static jQueryInterface(config) {
        return this.each(function() {
            const data = $fa8cf754a473f9f4$export$353f5b6fc5456de1.getOrCreateInstance(this);
            if (config === 'toggle') data[config]();
        });
    }
}
/**
 * Data API implementation
 */ $fa8cf754a473f9f4$var$EventHandler.on(document, $fa8cf754a473f9f4$var$EVENT_CLICK_DATA_API$6, $fa8cf754a473f9f4$var$SELECTOR_DATA_TOGGLE$5, (event)=>{
    event.preventDefault();
    const button = event.target.closest($fa8cf754a473f9f4$var$SELECTOR_DATA_TOGGLE$5);
    const data = $fa8cf754a473f9f4$export$353f5b6fc5456de1.getOrCreateInstance(button);
    data.toggle();
});
/**
 * jQuery
 */ $fa8cf754a473f9f4$var$defineJQueryPlugin($fa8cf754a473f9f4$export$353f5b6fc5456de1);
/**
 * --------------------------------------------------------------------------
 * Bootstrap util/swipe.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const $fa8cf754a473f9f4$var$NAME$d = 'swipe';
const $fa8cf754a473f9f4$var$EVENT_KEY$9 = '.bs.swipe';
const $fa8cf754a473f9f4$var$EVENT_TOUCHSTART = `touchstart${$fa8cf754a473f9f4$var$EVENT_KEY$9}`;
const $fa8cf754a473f9f4$var$EVENT_TOUCHMOVE = `touchmove${$fa8cf754a473f9f4$var$EVENT_KEY$9}`;
const $fa8cf754a473f9f4$var$EVENT_TOUCHEND = `touchend${$fa8cf754a473f9f4$var$EVENT_KEY$9}`;
const $fa8cf754a473f9f4$var$EVENT_POINTERDOWN = `pointerdown${$fa8cf754a473f9f4$var$EVENT_KEY$9}`;
const $fa8cf754a473f9f4$var$EVENT_POINTERUP = `pointerup${$fa8cf754a473f9f4$var$EVENT_KEY$9}`;
const $fa8cf754a473f9f4$var$POINTER_TYPE_TOUCH = 'touch';
const $fa8cf754a473f9f4$var$POINTER_TYPE_PEN = 'pen';
const $fa8cf754a473f9f4$var$CLASS_NAME_POINTER_EVENT = 'pointer-event';
const $fa8cf754a473f9f4$var$SWIPE_THRESHOLD = 40;
const $fa8cf754a473f9f4$var$Default$c = {
    endCallback: null,
    leftCallback: null,
    rightCallback: null
};
const $fa8cf754a473f9f4$var$DefaultType$c = {
    endCallback: '(function|null)',
    leftCallback: '(function|null)',
    rightCallback: '(function|null)'
};
/**
 * Class definition
 */ class $fa8cf754a473f9f4$var$Swipe extends $fa8cf754a473f9f4$var$Config {
    constructor(element, config){
        super();
        this._element = element;
        if (!element || !$fa8cf754a473f9f4$var$Swipe.isSupported()) return;
        this._config = this._getConfig(config);
        this._deltaX = 0;
        this._supportPointerEvents = Boolean(window.PointerEvent);
        this._initEvents();
    }
    // Getters
    static get Default() {
        return $fa8cf754a473f9f4$var$Default$c;
    }
    static get DefaultType() {
        return $fa8cf754a473f9f4$var$DefaultType$c;
    }
    static get NAME() {
        return $fa8cf754a473f9f4$var$NAME$d;
    }
    // Public
    dispose() {
        $fa8cf754a473f9f4$var$EventHandler.off(this._element, $fa8cf754a473f9f4$var$EVENT_KEY$9);
    }
    // Private
    _start(event) {
        if (!this._supportPointerEvents) {
            this._deltaX = event.touches[0].clientX;
            return;
        }
        if (this._eventIsPointerPenTouch(event)) this._deltaX = event.clientX;
    }
    _end(event) {
        if (this._eventIsPointerPenTouch(event)) this._deltaX = event.clientX - this._deltaX;
        this._handleSwipe();
        $fa8cf754a473f9f4$var$execute(this._config.endCallback);
    }
    _move(event) {
        this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
        const absDeltaX = Math.abs(this._deltaX);
        if (absDeltaX <= $fa8cf754a473f9f4$var$SWIPE_THRESHOLD) return;
        const direction = absDeltaX / this._deltaX;
        this._deltaX = 0;
        if (!direction) return;
        $fa8cf754a473f9f4$var$execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
        if (this._supportPointerEvents) {
            $fa8cf754a473f9f4$var$EventHandler.on(this._element, $fa8cf754a473f9f4$var$EVENT_POINTERDOWN, (event)=>this._start(event));
            $fa8cf754a473f9f4$var$EventHandler.on(this._element, $fa8cf754a473f9f4$var$EVENT_POINTERUP, (event)=>this._end(event));
            this._element.classList.add($fa8cf754a473f9f4$var$CLASS_NAME_POINTER_EVENT);
        } else {
            $fa8cf754a473f9f4$var$EventHandler.on(this._element, $fa8cf754a473f9f4$var$EVENT_TOUCHSTART, (event)=>this._start(event));
            $fa8cf754a473f9f4$var$EventHandler.on(this._element, $fa8cf754a473f9f4$var$EVENT_TOUCHMOVE, (event)=>this._move(event));
            $fa8cf754a473f9f4$var$EventHandler.on(this._element, $fa8cf754a473f9f4$var$EVENT_TOUCHEND, (event)=>this._end(event));
        }
    }
    _eventIsPointerPenTouch(event) {
        return this._supportPointerEvents && (event.pointerType === $fa8cf754a473f9f4$var$POINTER_TYPE_PEN || event.pointerType === $fa8cf754a473f9f4$var$POINTER_TYPE_TOUCH);
    }
    // Static
    static isSupported() {
        return 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const $fa8cf754a473f9f4$var$NAME$c = 'carousel';
const $fa8cf754a473f9f4$var$DATA_KEY$8 = 'bs.carousel';
const $fa8cf754a473f9f4$var$EVENT_KEY$8 = `.${$fa8cf754a473f9f4$var$DATA_KEY$8}`;
const $fa8cf754a473f9f4$var$DATA_API_KEY$5 = '.data-api';
const $fa8cf754a473f9f4$var$ARROW_LEFT_KEY$1 = 'ArrowLeft';
const $fa8cf754a473f9f4$var$ARROW_RIGHT_KEY$1 = 'ArrowRight';
const $fa8cf754a473f9f4$var$TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch
const $fa8cf754a473f9f4$var$ORDER_NEXT = 'next';
const $fa8cf754a473f9f4$var$ORDER_PREV = 'prev';
const $fa8cf754a473f9f4$var$DIRECTION_LEFT = 'left';
const $fa8cf754a473f9f4$var$DIRECTION_RIGHT = 'right';
const $fa8cf754a473f9f4$var$EVENT_SLIDE = `slide${$fa8cf754a473f9f4$var$EVENT_KEY$8}`;
const $fa8cf754a473f9f4$var$EVENT_SLID = `slid${$fa8cf754a473f9f4$var$EVENT_KEY$8}`;
const $fa8cf754a473f9f4$var$EVENT_KEYDOWN$1 = `keydown${$fa8cf754a473f9f4$var$EVENT_KEY$8}`;
const $fa8cf754a473f9f4$var$EVENT_MOUSEENTER$1 = `mouseenter${$fa8cf754a473f9f4$var$EVENT_KEY$8}`;
const $fa8cf754a473f9f4$var$EVENT_MOUSELEAVE$1 = `mouseleave${$fa8cf754a473f9f4$var$EVENT_KEY$8}`;
const $fa8cf754a473f9f4$var$EVENT_DRAG_START = `dragstart${$fa8cf754a473f9f4$var$EVENT_KEY$8}`;
const $fa8cf754a473f9f4$var$EVENT_LOAD_DATA_API$3 = `load${$fa8cf754a473f9f4$var$EVENT_KEY$8}${$fa8cf754a473f9f4$var$DATA_API_KEY$5}`;
const $fa8cf754a473f9f4$var$EVENT_CLICK_DATA_API$5 = `click${$fa8cf754a473f9f4$var$EVENT_KEY$8}${$fa8cf754a473f9f4$var$DATA_API_KEY$5}`;
const $fa8cf754a473f9f4$var$CLASS_NAME_CAROUSEL = 'carousel';
const $fa8cf754a473f9f4$var$CLASS_NAME_ACTIVE$2 = 'active';
const $fa8cf754a473f9f4$var$CLASS_NAME_SLIDE = 'slide';
const $fa8cf754a473f9f4$var$CLASS_NAME_END = 'carousel-item-end';
const $fa8cf754a473f9f4$var$CLASS_NAME_START = 'carousel-item-start';
const $fa8cf754a473f9f4$var$CLASS_NAME_NEXT = 'carousel-item-next';
const $fa8cf754a473f9f4$var$CLASS_NAME_PREV = 'carousel-item-prev';
const $fa8cf754a473f9f4$var$SELECTOR_ACTIVE = '.active';
const $fa8cf754a473f9f4$var$SELECTOR_ITEM = '.carousel-item';
const $fa8cf754a473f9f4$var$SELECTOR_ACTIVE_ITEM = $fa8cf754a473f9f4$var$SELECTOR_ACTIVE + $fa8cf754a473f9f4$var$SELECTOR_ITEM;
const $fa8cf754a473f9f4$var$SELECTOR_ITEM_IMG = '.carousel-item img';
const $fa8cf754a473f9f4$var$SELECTOR_INDICATORS = '.carousel-indicators';
const $fa8cf754a473f9f4$var$SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
const $fa8cf754a473f9f4$var$SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
const $fa8cf754a473f9f4$var$KEY_TO_DIRECTION = {
    [$fa8cf754a473f9f4$var$ARROW_LEFT_KEY$1]: $fa8cf754a473f9f4$var$DIRECTION_RIGHT,
    [$fa8cf754a473f9f4$var$ARROW_RIGHT_KEY$1]: $fa8cf754a473f9f4$var$DIRECTION_LEFT
};
const $fa8cf754a473f9f4$var$Default$b = {
    interval: 5000,
    keyboard: true,
    pause: 'hover',
    ride: false,
    touch: true,
    wrap: true
};
const $fa8cf754a473f9f4$var$DefaultType$b = {
    interval: '(number|boolean)',
    // TODO:v6 remove boolean support
    keyboard: 'boolean',
    pause: '(string|boolean)',
    ride: '(boolean|string)',
    touch: 'boolean',
    wrap: 'boolean'
};
/**
 * Class definition
 */ class $fa8cf754a473f9f4$export$144901db2ea8e967 extends $fa8cf754a473f9f4$var$BaseComponent {
    constructor(element, config){
        super(element, config);
        this._interval = null;
        this._activeElement = null;
        this._isSliding = false;
        this.touchTimeout = null;
        this._swipeHelper = null;
        this._indicatorsElement = $fa8cf754a473f9f4$var$SelectorEngine.findOne($fa8cf754a473f9f4$var$SELECTOR_INDICATORS, this._element);
        this._addEventListeners();
        if (this._config.ride === $fa8cf754a473f9f4$var$CLASS_NAME_CAROUSEL) this.cycle();
    }
    // Getters
    static get Default() {
        return $fa8cf754a473f9f4$var$Default$b;
    }
    static get DefaultType() {
        return $fa8cf754a473f9f4$var$DefaultType$b;
    }
    static get NAME() {
        return $fa8cf754a473f9f4$var$NAME$c;
    }
    // Public
    next() {
        this._slide($fa8cf754a473f9f4$var$ORDER_NEXT);
    }
    nextWhenVisible() {
        // FIXME TODO use `document.visibilityState`
        // Don't call next when the page isn't visible
        // or the carousel or its parent isn't visible
        if (!document.hidden && $fa8cf754a473f9f4$var$isVisible(this._element)) this.next();
    }
    prev() {
        this._slide($fa8cf754a473f9f4$var$ORDER_PREV);
    }
    pause() {
        if (this._isSliding) $fa8cf754a473f9f4$var$triggerTransitionEnd(this._element);
        this._clearInterval();
    }
    cycle() {
        this._clearInterval();
        this._updateInterval();
        this._interval = setInterval(()=>this.nextWhenVisible(), this._config.interval);
    }
    _maybeEnableCycle() {
        if (!this._config.ride) return;
        if (this._isSliding) {
            $fa8cf754a473f9f4$var$EventHandler.one(this._element, $fa8cf754a473f9f4$var$EVENT_SLID, ()=>this.cycle());
            return;
        }
        this.cycle();
    }
    to(index) {
        const items = this._getItems();
        if (index > items.length - 1 || index < 0) return;
        if (this._isSliding) {
            $fa8cf754a473f9f4$var$EventHandler.one(this._element, $fa8cf754a473f9f4$var$EVENT_SLID, ()=>this.to(index));
            return;
        }
        const activeIndex = this._getItemIndex(this._getActive());
        if (activeIndex === index) return;
        const order = index > activeIndex ? $fa8cf754a473f9f4$var$ORDER_NEXT : $fa8cf754a473f9f4$var$ORDER_PREV;
        this._slide(order, items[index]);
    }
    dispose() {
        if (this._swipeHelper) this._swipeHelper.dispose();
        super.dispose();
    }
    // Private
    _configAfterMerge(config) {
        config.defaultInterval = config.interval;
        return config;
    }
    _addEventListeners() {
        if (this._config.keyboard) $fa8cf754a473f9f4$var$EventHandler.on(this._element, $fa8cf754a473f9f4$var$EVENT_KEYDOWN$1, (event)=>this._keydown(event));
        if (this._config.pause === 'hover') {
            $fa8cf754a473f9f4$var$EventHandler.on(this._element, $fa8cf754a473f9f4$var$EVENT_MOUSEENTER$1, ()=>this.pause());
            $fa8cf754a473f9f4$var$EventHandler.on(this._element, $fa8cf754a473f9f4$var$EVENT_MOUSELEAVE$1, ()=>this._maybeEnableCycle());
        }
        if (this._config.touch && $fa8cf754a473f9f4$var$Swipe.isSupported()) this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
        for (const img of $fa8cf754a473f9f4$var$SelectorEngine.find($fa8cf754a473f9f4$var$SELECTOR_ITEM_IMG, this._element))$fa8cf754a473f9f4$var$EventHandler.on(img, $fa8cf754a473f9f4$var$EVENT_DRAG_START, (event)=>event.preventDefault());
        const endCallBack = ()=>{
            if (this._config.pause !== 'hover') return;
            // If it's a touch-enabled device, mouseenter/leave are fired as
            // part of the mouse compatibility events on first tap - the carousel
            // would stop cycling until user tapped out of it;
            // here, we listen for touchend, explicitly pause the carousel
            // (as if it's the second time we tap on it, mouseenter compat event
            // is NOT fired) and after a timeout (to allow for mouse compatibility
            // events to fire) we explicitly restart cycling
            this.pause();
            if (this.touchTimeout) clearTimeout(this.touchTimeout);
            this.touchTimeout = setTimeout(()=>this._maybeEnableCycle(), $fa8cf754a473f9f4$var$TOUCHEVENT_COMPAT_WAIT + this._config.interval);
        };
        const swipeConfig = {
            leftCallback: ()=>this._slide(this._directionToOrder($fa8cf754a473f9f4$var$DIRECTION_LEFT)),
            rightCallback: ()=>this._slide(this._directionToOrder($fa8cf754a473f9f4$var$DIRECTION_RIGHT)),
            endCallback: endCallBack
        };
        this._swipeHelper = new $fa8cf754a473f9f4$var$Swipe(this._element, swipeConfig);
    }
    _keydown(event) {
        if (/input|textarea/i.test(event.target.tagName)) return;
        const direction = $fa8cf754a473f9f4$var$KEY_TO_DIRECTION[event.key];
        if (direction) {
            event.preventDefault();
            this._slide(this._directionToOrder(direction));
        }
    }
    _getItemIndex(element) {
        return this._getItems().indexOf(element);
    }
    _setActiveIndicatorElement(index) {
        if (!this._indicatorsElement) return;
        const activeIndicator = $fa8cf754a473f9f4$var$SelectorEngine.findOne($fa8cf754a473f9f4$var$SELECTOR_ACTIVE, this._indicatorsElement);
        activeIndicator.classList.remove($fa8cf754a473f9f4$var$CLASS_NAME_ACTIVE$2);
        activeIndicator.removeAttribute('aria-current');
        const newActiveIndicator = $fa8cf754a473f9f4$var$SelectorEngine.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);
        if (newActiveIndicator) {
            newActiveIndicator.classList.add($fa8cf754a473f9f4$var$CLASS_NAME_ACTIVE$2);
            newActiveIndicator.setAttribute('aria-current', 'true');
        }
    }
    _updateInterval() {
        const element = this._activeElement || this._getActive();
        if (!element) return;
        const elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);
        this._config.interval = elementInterval || this._config.defaultInterval;
    }
    _slide(order, element = null) {
        if (this._isSliding) return;
        const activeElement = this._getActive();
        const isNext = order === $fa8cf754a473f9f4$var$ORDER_NEXT;
        const nextElement = element || $fa8cf754a473f9f4$var$getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);
        if (nextElement === activeElement) return;
        const nextElementIndex = this._getItemIndex(nextElement);
        const triggerEvent = (eventName)=>{
            return $fa8cf754a473f9f4$var$EventHandler.trigger(this._element, eventName, {
                relatedTarget: nextElement,
                direction: this._orderToDirection(order),
                from: this._getItemIndex(activeElement),
                to: nextElementIndex
            });
        };
        const slideEvent = triggerEvent($fa8cf754a473f9f4$var$EVENT_SLIDE);
        if (slideEvent.defaultPrevented) return;
        if (!activeElement || !nextElement) // Some weirdness is happening, so we bail
        // TODO: change tests that use empty divs to avoid this check
        return;
        const isCycling = Boolean(this._interval);
        this.pause();
        this._isSliding = true;
        this._setActiveIndicatorElement(nextElementIndex);
        this._activeElement = nextElement;
        const directionalClassName = isNext ? $fa8cf754a473f9f4$var$CLASS_NAME_START : $fa8cf754a473f9f4$var$CLASS_NAME_END;
        const orderClassName = isNext ? $fa8cf754a473f9f4$var$CLASS_NAME_NEXT : $fa8cf754a473f9f4$var$CLASS_NAME_PREV;
        nextElement.classList.add(orderClassName);
        $fa8cf754a473f9f4$var$reflow(nextElement);
        activeElement.classList.add(directionalClassName);
        nextElement.classList.add(directionalClassName);
        const completeCallBack = ()=>{
            nextElement.classList.remove(directionalClassName, orderClassName);
            nextElement.classList.add($fa8cf754a473f9f4$var$CLASS_NAME_ACTIVE$2);
            activeElement.classList.remove($fa8cf754a473f9f4$var$CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
            this._isSliding = false;
            triggerEvent($fa8cf754a473f9f4$var$EVENT_SLID);
        };
        this._queueCallback(completeCallBack, activeElement, this._isAnimated());
        if (isCycling) this.cycle();
    }
    _isAnimated() {
        return this._element.classList.contains($fa8cf754a473f9f4$var$CLASS_NAME_SLIDE);
    }
    _getActive() {
        return $fa8cf754a473f9f4$var$SelectorEngine.findOne($fa8cf754a473f9f4$var$SELECTOR_ACTIVE_ITEM, this._element);
    }
    _getItems() {
        return $fa8cf754a473f9f4$var$SelectorEngine.find($fa8cf754a473f9f4$var$SELECTOR_ITEM, this._element);
    }
    _clearInterval() {
        if (this._interval) {
            clearInterval(this._interval);
            this._interval = null;
        }
    }
    _directionToOrder(direction) {
        if ($fa8cf754a473f9f4$var$isRTL()) return direction === $fa8cf754a473f9f4$var$DIRECTION_LEFT ? $fa8cf754a473f9f4$var$ORDER_PREV : $fa8cf754a473f9f4$var$ORDER_NEXT;
        return direction === $fa8cf754a473f9f4$var$DIRECTION_LEFT ? $fa8cf754a473f9f4$var$ORDER_NEXT : $fa8cf754a473f9f4$var$ORDER_PREV;
    }
    _orderToDirection(order) {
        if ($fa8cf754a473f9f4$var$isRTL()) return order === $fa8cf754a473f9f4$var$ORDER_PREV ? $fa8cf754a473f9f4$var$DIRECTION_LEFT : $fa8cf754a473f9f4$var$DIRECTION_RIGHT;
        return order === $fa8cf754a473f9f4$var$ORDER_PREV ? $fa8cf754a473f9f4$var$DIRECTION_RIGHT : $fa8cf754a473f9f4$var$DIRECTION_LEFT;
    }
    // Static
    static jQueryInterface(config) {
        return this.each(function() {
            const data = $fa8cf754a473f9f4$export$144901db2ea8e967.getOrCreateInstance(this, config);
            if (typeof config === 'number') {
                data.to(config);
                return;
            }
            if (typeof config === 'string') {
                if (data[config] === undefined || config.startsWith('_') || config === 'constructor') throw new TypeError(`No method named "${config}"`);
                data[config]();
            }
        });
    }
}
/**
 * Data API implementation
 */ $fa8cf754a473f9f4$var$EventHandler.on(document, $fa8cf754a473f9f4$var$EVENT_CLICK_DATA_API$5, $fa8cf754a473f9f4$var$SELECTOR_DATA_SLIDE, function(event) {
    const target = $fa8cf754a473f9f4$var$SelectorEngine.getElementFromSelector(this);
    if (!target || !target.classList.contains($fa8cf754a473f9f4$var$CLASS_NAME_CAROUSEL)) return;
    event.preventDefault();
    const carousel = $fa8cf754a473f9f4$export$144901db2ea8e967.getOrCreateInstance(target);
    const slideIndex = this.getAttribute('data-bs-slide-to');
    if (slideIndex) {
        carousel.to(slideIndex);
        carousel._maybeEnableCycle();
        return;
    }
    if ($fa8cf754a473f9f4$var$Manipulator.getDataAttribute(this, 'slide') === 'next') {
        carousel.next();
        carousel._maybeEnableCycle();
        return;
    }
    carousel.prev();
    carousel._maybeEnableCycle();
});
$fa8cf754a473f9f4$var$EventHandler.on(window, $fa8cf754a473f9f4$var$EVENT_LOAD_DATA_API$3, ()=>{
    const carousels = $fa8cf754a473f9f4$var$SelectorEngine.find($fa8cf754a473f9f4$var$SELECTOR_DATA_RIDE);
    for (const carousel of carousels)$fa8cf754a473f9f4$export$144901db2ea8e967.getOrCreateInstance(carousel);
});
/**
 * jQuery
 */ $fa8cf754a473f9f4$var$defineJQueryPlugin($fa8cf754a473f9f4$export$144901db2ea8e967);
/**
 * --------------------------------------------------------------------------
 * Bootstrap collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const $fa8cf754a473f9f4$var$NAME$b = 'collapse';
const $fa8cf754a473f9f4$var$DATA_KEY$7 = 'bs.collapse';
const $fa8cf754a473f9f4$var$EVENT_KEY$7 = `.${$fa8cf754a473f9f4$var$DATA_KEY$7}`;
const $fa8cf754a473f9f4$var$DATA_API_KEY$4 = '.data-api';
const $fa8cf754a473f9f4$var$EVENT_SHOW$6 = `show${$fa8cf754a473f9f4$var$EVENT_KEY$7}`;
const $fa8cf754a473f9f4$var$EVENT_SHOWN$6 = `shown${$fa8cf754a473f9f4$var$EVENT_KEY$7}`;
const $fa8cf754a473f9f4$var$EVENT_HIDE$6 = `hide${$fa8cf754a473f9f4$var$EVENT_KEY$7}`;
const $fa8cf754a473f9f4$var$EVENT_HIDDEN$6 = `hidden${$fa8cf754a473f9f4$var$EVENT_KEY$7}`;
const $fa8cf754a473f9f4$var$EVENT_CLICK_DATA_API$4 = `click${$fa8cf754a473f9f4$var$EVENT_KEY$7}${$fa8cf754a473f9f4$var$DATA_API_KEY$4}`;
const $fa8cf754a473f9f4$var$CLASS_NAME_SHOW$7 = 'show';
const $fa8cf754a473f9f4$var$CLASS_NAME_COLLAPSE = 'collapse';
const $fa8cf754a473f9f4$var$CLASS_NAME_COLLAPSING = 'collapsing';
const $fa8cf754a473f9f4$var$CLASS_NAME_COLLAPSED = 'collapsed';
const $fa8cf754a473f9f4$var$CLASS_NAME_DEEPER_CHILDREN = `:scope .${$fa8cf754a473f9f4$var$CLASS_NAME_COLLAPSE} .${$fa8cf754a473f9f4$var$CLASS_NAME_COLLAPSE}`;
const $fa8cf754a473f9f4$var$CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
const $fa8cf754a473f9f4$var$WIDTH = 'width';
const $fa8cf754a473f9f4$var$HEIGHT = 'height';
const $fa8cf754a473f9f4$var$SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing';
const $fa8cf754a473f9f4$var$SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
const $fa8cf754a473f9f4$var$Default$a = {
    parent: null,
    toggle: true
};
const $fa8cf754a473f9f4$var$DefaultType$a = {
    parent: '(null|element)',
    toggle: 'boolean'
};
/**
 * Class definition
 */ class $fa8cf754a473f9f4$export$78768a9af065a7b extends $fa8cf754a473f9f4$var$BaseComponent {
    constructor(element, config){
        super(element, config);
        this._isTransitioning = false;
        this._triggerArray = [];
        const toggleList = $fa8cf754a473f9f4$var$SelectorEngine.find($fa8cf754a473f9f4$var$SELECTOR_DATA_TOGGLE$4);
        for (const elem of toggleList){
            const selector = $fa8cf754a473f9f4$var$SelectorEngine.getSelectorFromElement(elem);
            const filterElement = $fa8cf754a473f9f4$var$SelectorEngine.find(selector).filter((foundElement)=>foundElement === this._element);
            if (selector !== null && filterElement.length) this._triggerArray.push(elem);
        }
        this._initializeChildren();
        if (!this._config.parent) this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
        if (this._config.toggle) this.toggle();
    }
    // Getters
    static get Default() {
        return $fa8cf754a473f9f4$var$Default$a;
    }
    static get DefaultType() {
        return $fa8cf754a473f9f4$var$DefaultType$a;
    }
    static get NAME() {
        return $fa8cf754a473f9f4$var$NAME$b;
    }
    // Public
    toggle() {
        if (this._isShown()) this.hide();
        else this.show();
    }
    show() {
        if (this._isTransitioning || this._isShown()) return;
        let activeChildren = [];
        // find active children
        if (this._config.parent) activeChildren = this._getFirstLevelChildren($fa8cf754a473f9f4$var$SELECTOR_ACTIVES).filter((element)=>element !== this._element).map((element)=>$fa8cf754a473f9f4$export$78768a9af065a7b.getOrCreateInstance(element, {
                toggle: false
            }));
        if (activeChildren.length && activeChildren[0]._isTransitioning) return;
        const startEvent = $fa8cf754a473f9f4$var$EventHandler.trigger(this._element, $fa8cf754a473f9f4$var$EVENT_SHOW$6);
        if (startEvent.defaultPrevented) return;
        for (const activeInstance of activeChildren)activeInstance.hide();
        const dimension = this._getDimension();
        this._element.classList.remove($fa8cf754a473f9f4$var$CLASS_NAME_COLLAPSE);
        this._element.classList.add($fa8cf754a473f9f4$var$CLASS_NAME_COLLAPSING);
        this._element.style[dimension] = 0;
        this._addAriaAndCollapsedClass(this._triggerArray, true);
        this._isTransitioning = true;
        const complete = ()=>{
            this._isTransitioning = false;
            this._element.classList.remove($fa8cf754a473f9f4$var$CLASS_NAME_COLLAPSING);
            this._element.classList.add($fa8cf754a473f9f4$var$CLASS_NAME_COLLAPSE, $fa8cf754a473f9f4$var$CLASS_NAME_SHOW$7);
            this._element.style[dimension] = '';
            $fa8cf754a473f9f4$var$EventHandler.trigger(this._element, $fa8cf754a473f9f4$var$EVENT_SHOWN$6);
        };
        const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
        const scrollSize = `scroll${capitalizedDimension}`;
        this._queueCallback(complete, this._element, true);
        this._element.style[dimension] = `${this._element[scrollSize]}px`;
    }
    hide() {
        if (this._isTransitioning || !this._isShown()) return;
        const startEvent = $fa8cf754a473f9f4$var$EventHandler.trigger(this._element, $fa8cf754a473f9f4$var$EVENT_HIDE$6);
        if (startEvent.defaultPrevented) return;
        const dimension = this._getDimension();
        this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
        $fa8cf754a473f9f4$var$reflow(this._element);
        this._element.classList.add($fa8cf754a473f9f4$var$CLASS_NAME_COLLAPSING);
        this._element.classList.remove($fa8cf754a473f9f4$var$CLASS_NAME_COLLAPSE, $fa8cf754a473f9f4$var$CLASS_NAME_SHOW$7);
        for (const trigger of this._triggerArray){
            const element = $fa8cf754a473f9f4$var$SelectorEngine.getElementFromSelector(trigger);
            if (element && !this._isShown(element)) this._addAriaAndCollapsedClass([
                trigger
            ], false);
        }
        this._isTransitioning = true;
        const complete = ()=>{
            this._isTransitioning = false;
            this._element.classList.remove($fa8cf754a473f9f4$var$CLASS_NAME_COLLAPSING);
            this._element.classList.add($fa8cf754a473f9f4$var$CLASS_NAME_COLLAPSE);
            $fa8cf754a473f9f4$var$EventHandler.trigger(this._element, $fa8cf754a473f9f4$var$EVENT_HIDDEN$6);
        };
        this._element.style[dimension] = '';
        this._queueCallback(complete, this._element, true);
    }
    // Private
    _isShown(element = this._element) {
        return element.classList.contains($fa8cf754a473f9f4$var$CLASS_NAME_SHOW$7);
    }
    _configAfterMerge(config) {
        config.toggle = Boolean(config.toggle); // Coerce string values
        config.parent = $fa8cf754a473f9f4$var$getElement(config.parent);
        return config;
    }
    _getDimension() {
        return this._element.classList.contains($fa8cf754a473f9f4$var$CLASS_NAME_HORIZONTAL) ? $fa8cf754a473f9f4$var$WIDTH : $fa8cf754a473f9f4$var$HEIGHT;
    }
    _initializeChildren() {
        if (!this._config.parent) return;
        const children = this._getFirstLevelChildren($fa8cf754a473f9f4$var$SELECTOR_DATA_TOGGLE$4);
        for (const element of children){
            const selected = $fa8cf754a473f9f4$var$SelectorEngine.getElementFromSelector(element);
            if (selected) this._addAriaAndCollapsedClass([
                element
            ], this._isShown(selected));
        }
    }
    _getFirstLevelChildren(selector) {
        const children = $fa8cf754a473f9f4$var$SelectorEngine.find($fa8cf754a473f9f4$var$CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
        // remove children if greater depth
        return $fa8cf754a473f9f4$var$SelectorEngine.find(selector, this._config.parent).filter((element)=>!children.includes(element));
    }
    _addAriaAndCollapsedClass(triggerArray, isOpen) {
        if (!triggerArray.length) return;
        for (const element of triggerArray){
            element.classList.toggle($fa8cf754a473f9f4$var$CLASS_NAME_COLLAPSED, !isOpen);
            element.setAttribute('aria-expanded', isOpen);
        }
    }
    // Static
    static jQueryInterface(config) {
        const _config = {};
        if (typeof config === 'string' && /show|hide/.test(config)) _config.toggle = false;
        return this.each(function() {
            const data = $fa8cf754a473f9f4$export$78768a9af065a7b.getOrCreateInstance(this, _config);
            if (typeof config === 'string') {
                if (typeof data[config] === 'undefined') throw new TypeError(`No method named "${config}"`);
                data[config]();
            }
        });
    }
}
/**
 * Data API implementation
 */ $fa8cf754a473f9f4$var$EventHandler.on(document, $fa8cf754a473f9f4$var$EVENT_CLICK_DATA_API$4, $fa8cf754a473f9f4$var$SELECTOR_DATA_TOGGLE$4, function(event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') event.preventDefault();
    for (const element of $fa8cf754a473f9f4$var$SelectorEngine.getMultipleElementsFromSelector(this))$fa8cf754a473f9f4$export$78768a9af065a7b.getOrCreateInstance(element, {
        toggle: false
    }).toggle();
});
/**
 * jQuery
 */ $fa8cf754a473f9f4$var$defineJQueryPlugin($fa8cf754a473f9f4$export$78768a9af065a7b);
/**
 * --------------------------------------------------------------------------
 * Bootstrap dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const $fa8cf754a473f9f4$var$NAME$a = 'dropdown';
const $fa8cf754a473f9f4$var$DATA_KEY$6 = 'bs.dropdown';
const $fa8cf754a473f9f4$var$EVENT_KEY$6 = `.${$fa8cf754a473f9f4$var$DATA_KEY$6}`;
const $fa8cf754a473f9f4$var$DATA_API_KEY$3 = '.data-api';
const $fa8cf754a473f9f4$var$ESCAPE_KEY$2 = 'Escape';
const $fa8cf754a473f9f4$var$TAB_KEY$1 = 'Tab';
const $fa8cf754a473f9f4$var$ARROW_UP_KEY$1 = 'ArrowUp';
const $fa8cf754a473f9f4$var$ARROW_DOWN_KEY$1 = 'ArrowDown';
const $fa8cf754a473f9f4$var$RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button
const $fa8cf754a473f9f4$var$EVENT_HIDE$5 = `hide${$fa8cf754a473f9f4$var$EVENT_KEY$6}`;
const $fa8cf754a473f9f4$var$EVENT_HIDDEN$5 = `hidden${$fa8cf754a473f9f4$var$EVENT_KEY$6}`;
const $fa8cf754a473f9f4$var$EVENT_SHOW$5 = `show${$fa8cf754a473f9f4$var$EVENT_KEY$6}`;
const $fa8cf754a473f9f4$var$EVENT_SHOWN$5 = `shown${$fa8cf754a473f9f4$var$EVENT_KEY$6}`;
const $fa8cf754a473f9f4$var$EVENT_CLICK_DATA_API$3 = `click${$fa8cf754a473f9f4$var$EVENT_KEY$6}${$fa8cf754a473f9f4$var$DATA_API_KEY$3}`;
const $fa8cf754a473f9f4$var$EVENT_KEYDOWN_DATA_API = `keydown${$fa8cf754a473f9f4$var$EVENT_KEY$6}${$fa8cf754a473f9f4$var$DATA_API_KEY$3}`;
const $fa8cf754a473f9f4$var$EVENT_KEYUP_DATA_API = `keyup${$fa8cf754a473f9f4$var$EVENT_KEY$6}${$fa8cf754a473f9f4$var$DATA_API_KEY$3}`;
const $fa8cf754a473f9f4$var$CLASS_NAME_SHOW$6 = 'show';
const $fa8cf754a473f9f4$var$CLASS_NAME_DROPUP = 'dropup';
const $fa8cf754a473f9f4$var$CLASS_NAME_DROPEND = 'dropend';
const $fa8cf754a473f9f4$var$CLASS_NAME_DROPSTART = 'dropstart';
const $fa8cf754a473f9f4$var$CLASS_NAME_DROPUP_CENTER = 'dropup-center';
const $fa8cf754a473f9f4$var$CLASS_NAME_DROPDOWN_CENTER = 'dropdown-center';
const $fa8cf754a473f9f4$var$SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
const $fa8cf754a473f9f4$var$SELECTOR_DATA_TOGGLE_SHOWN = `${$fa8cf754a473f9f4$var$SELECTOR_DATA_TOGGLE$3}.${$fa8cf754a473f9f4$var$CLASS_NAME_SHOW$6}`;
const $fa8cf754a473f9f4$var$SELECTOR_MENU = '.dropdown-menu';
const $fa8cf754a473f9f4$var$SELECTOR_NAVBAR = '.navbar';
const $fa8cf754a473f9f4$var$SELECTOR_NAVBAR_NAV = '.navbar-nav';
const $fa8cf754a473f9f4$var$SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
const $fa8cf754a473f9f4$var$PLACEMENT_TOP = $fa8cf754a473f9f4$var$isRTL() ? 'top-end' : 'top-start';
const $fa8cf754a473f9f4$var$PLACEMENT_TOPEND = $fa8cf754a473f9f4$var$isRTL() ? 'top-start' : 'top-end';
const $fa8cf754a473f9f4$var$PLACEMENT_BOTTOM = $fa8cf754a473f9f4$var$isRTL() ? 'bottom-end' : 'bottom-start';
const $fa8cf754a473f9f4$var$PLACEMENT_BOTTOMEND = $fa8cf754a473f9f4$var$isRTL() ? 'bottom-start' : 'bottom-end';
const $fa8cf754a473f9f4$var$PLACEMENT_RIGHT = $fa8cf754a473f9f4$var$isRTL() ? 'left-start' : 'right-start';
const $fa8cf754a473f9f4$var$PLACEMENT_LEFT = $fa8cf754a473f9f4$var$isRTL() ? 'right-start' : 'left-start';
const $fa8cf754a473f9f4$var$PLACEMENT_TOPCENTER = 'top';
const $fa8cf754a473f9f4$var$PLACEMENT_BOTTOMCENTER = 'bottom';
const $fa8cf754a473f9f4$var$Default$9 = {
    autoClose: true,
    boundary: 'clippingParents',
    display: 'dynamic',
    offset: [
        0,
        2
    ],
    popperConfig: null,
    reference: 'toggle'
};
const $fa8cf754a473f9f4$var$DefaultType$9 = {
    autoClose: '(boolean|string)',
    boundary: '(string|element)',
    display: 'string',
    offset: '(array|string|function)',
    popperConfig: '(null|object|function)',
    reference: '(string|element|object)'
};
/**
 * Class definition
 */ class $fa8cf754a473f9f4$export$931cbfb6bfb85fc extends $fa8cf754a473f9f4$var$BaseComponent {
    constructor(element, config){
        super(element, config);
        this._popper = null;
        this._parent = this._element.parentNode; // dropdown wrapper
        // TODO: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.3/forms/input-group/
        this._menu = $fa8cf754a473f9f4$var$SelectorEngine.next(this._element, $fa8cf754a473f9f4$var$SELECTOR_MENU)[0] || $fa8cf754a473f9f4$var$SelectorEngine.prev(this._element, $fa8cf754a473f9f4$var$SELECTOR_MENU)[0] || $fa8cf754a473f9f4$var$SelectorEngine.findOne($fa8cf754a473f9f4$var$SELECTOR_MENU, this._parent);
        this._inNavbar = this._detectNavbar();
    }
    // Getters
    static get Default() {
        return $fa8cf754a473f9f4$var$Default$9;
    }
    static get DefaultType() {
        return $fa8cf754a473f9f4$var$DefaultType$9;
    }
    static get NAME() {
        return $fa8cf754a473f9f4$var$NAME$a;
    }
    // Public
    toggle() {
        return this._isShown() ? this.hide() : this.show();
    }
    show() {
        if ($fa8cf754a473f9f4$var$isDisabled(this._element) || this._isShown()) return;
        const relatedTarget = {
            relatedTarget: this._element
        };
        const showEvent = $fa8cf754a473f9f4$var$EventHandler.trigger(this._element, $fa8cf754a473f9f4$var$EVENT_SHOW$5, relatedTarget);
        if (showEvent.defaultPrevented) return;
        this._createPopper();
        // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
        if ('ontouchstart' in document.documentElement && !this._parent.closest($fa8cf754a473f9f4$var$SELECTOR_NAVBAR_NAV)) for (const element of [].concat(...document.body.children))$fa8cf754a473f9f4$var$EventHandler.on(element, 'mouseover', $fa8cf754a473f9f4$var$noop);
        this._element.focus();
        this._element.setAttribute('aria-expanded', true);
        this._menu.classList.add($fa8cf754a473f9f4$var$CLASS_NAME_SHOW$6);
        this._element.classList.add($fa8cf754a473f9f4$var$CLASS_NAME_SHOW$6);
        $fa8cf754a473f9f4$var$EventHandler.trigger(this._element, $fa8cf754a473f9f4$var$EVENT_SHOWN$5, relatedTarget);
    }
    hide() {
        if ($fa8cf754a473f9f4$var$isDisabled(this._element) || !this._isShown()) return;
        const relatedTarget = {
            relatedTarget: this._element
        };
        this._completeHide(relatedTarget);
    }
    dispose() {
        if (this._popper) this._popper.destroy();
        super.dispose();
    }
    update() {
        this._inNavbar = this._detectNavbar();
        if (this._popper) this._popper.update();
    }
    // Private
    _completeHide(relatedTarget) {
        const hideEvent = $fa8cf754a473f9f4$var$EventHandler.trigger(this._element, $fa8cf754a473f9f4$var$EVENT_HIDE$5, relatedTarget);
        if (hideEvent.defaultPrevented) return;
        // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support
        if ('ontouchstart' in document.documentElement) for (const element of [].concat(...document.body.children))$fa8cf754a473f9f4$var$EventHandler.off(element, 'mouseover', $fa8cf754a473f9f4$var$noop);
        if (this._popper) this._popper.destroy();
        this._menu.classList.remove($fa8cf754a473f9f4$var$CLASS_NAME_SHOW$6);
        this._element.classList.remove($fa8cf754a473f9f4$var$CLASS_NAME_SHOW$6);
        this._element.setAttribute('aria-expanded', 'false');
        $fa8cf754a473f9f4$var$Manipulator.removeDataAttribute(this._menu, 'popper');
        $fa8cf754a473f9f4$var$EventHandler.trigger(this._element, $fa8cf754a473f9f4$var$EVENT_HIDDEN$5, relatedTarget);
    }
    _getConfig(config) {
        config = super._getConfig(config);
        if (typeof config.reference === 'object' && !$fa8cf754a473f9f4$var$isElement(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') // Popper virtual elements require a getBoundingClientRect method
        throw new TypeError(`${$fa8cf754a473f9f4$var$NAME$a.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
        return config;
    }
    _createPopper() {
        if (typeof $de43c17a09f8c36d$exports === 'undefined') throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org/docs/v2/)');
        let referenceElement = this._element;
        if (this._config.reference === 'parent') referenceElement = this._parent;
        else if ($fa8cf754a473f9f4$var$isElement(this._config.reference)) referenceElement = $fa8cf754a473f9f4$var$getElement(this._config.reference);
        else if (typeof this._config.reference === 'object') referenceElement = this._config.reference;
        const popperConfig = this._getPopperConfig();
        this._popper = $de43c17a09f8c36d$exports.createPopper(referenceElement, this._menu, popperConfig);
    }
    _isShown() {
        return this._menu.classList.contains($fa8cf754a473f9f4$var$CLASS_NAME_SHOW$6);
    }
    _getPlacement() {
        const parentDropdown = this._parent;
        if (parentDropdown.classList.contains($fa8cf754a473f9f4$var$CLASS_NAME_DROPEND)) return $fa8cf754a473f9f4$var$PLACEMENT_RIGHT;
        if (parentDropdown.classList.contains($fa8cf754a473f9f4$var$CLASS_NAME_DROPSTART)) return $fa8cf754a473f9f4$var$PLACEMENT_LEFT;
        if (parentDropdown.classList.contains($fa8cf754a473f9f4$var$CLASS_NAME_DROPUP_CENTER)) return $fa8cf754a473f9f4$var$PLACEMENT_TOPCENTER;
        if (parentDropdown.classList.contains($fa8cf754a473f9f4$var$CLASS_NAME_DROPDOWN_CENTER)) return $fa8cf754a473f9f4$var$PLACEMENT_BOTTOMCENTER;
        // We need to trim the value because custom properties can also include spaces
        const isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';
        if (parentDropdown.classList.contains($fa8cf754a473f9f4$var$CLASS_NAME_DROPUP)) return isEnd ? $fa8cf754a473f9f4$var$PLACEMENT_TOPEND : $fa8cf754a473f9f4$var$PLACEMENT_TOP;
        return isEnd ? $fa8cf754a473f9f4$var$PLACEMENT_BOTTOMEND : $fa8cf754a473f9f4$var$PLACEMENT_BOTTOM;
    }
    _detectNavbar() {
        return this._element.closest($fa8cf754a473f9f4$var$SELECTOR_NAVBAR) !== null;
    }
    _getOffset() {
        const { offset: offset } = this._config;
        if (typeof offset === 'string') return offset.split(',').map((value)=>Number.parseInt(value, 10));
        if (typeof offset === 'function') return (popperData)=>offset(popperData, this._element);
        return offset;
    }
    _getPopperConfig() {
        const defaultBsPopperConfig = {
            placement: this._getPlacement(),
            modifiers: [
                {
                    name: 'preventOverflow',
                    options: {
                        boundary: this._config.boundary
                    }
                },
                {
                    name: 'offset',
                    options: {
                        offset: this._getOffset()
                    }
                }
            ]
        };
        // Disable Popper if we have a static display or Dropdown is in Navbar
        if (this._inNavbar || this._config.display === 'static') {
            $fa8cf754a473f9f4$var$Manipulator.setDataAttribute(this._menu, 'popper', 'static'); // TODO: v6 remove
            defaultBsPopperConfig.modifiers = [
                {
                    name: 'applyStyles',
                    enabled: false
                }
            ];
        }
        return {
            ...defaultBsPopperConfig,
            ...$fa8cf754a473f9f4$var$execute(this._config.popperConfig, [
                undefined,
                defaultBsPopperConfig
            ])
        };
    }
    _selectMenuItem({ key: key, target: target }) {
        const items = $fa8cf754a473f9f4$var$SelectorEngine.find($fa8cf754a473f9f4$var$SELECTOR_VISIBLE_ITEMS, this._menu).filter((element)=>$fa8cf754a473f9f4$var$isVisible(element));
        if (!items.length) return;
        // if target isn't included in items (e.g. when expanding the dropdown)
        // allow cycling to get the last item in case key equals ARROW_UP_KEY
        $fa8cf754a473f9f4$var$getNextActiveElement(items, target, key === $fa8cf754a473f9f4$var$ARROW_DOWN_KEY$1, !items.includes(target)).focus();
    }
    // Static
    static jQueryInterface(config) {
        return this.each(function() {
            const data = $fa8cf754a473f9f4$export$931cbfb6bfb85fc.getOrCreateInstance(this, config);
            if (typeof config !== 'string') return;
            if (typeof data[config] === 'undefined') throw new TypeError(`No method named "${config}"`);
            data[config]();
        });
    }
    static clearMenus(event) {
        if (event.button === $fa8cf754a473f9f4$var$RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== $fa8cf754a473f9f4$var$TAB_KEY$1) return;
        const openToggles = $fa8cf754a473f9f4$var$SelectorEngine.find($fa8cf754a473f9f4$var$SELECTOR_DATA_TOGGLE_SHOWN);
        for (const toggle of openToggles){
            const context = $fa8cf754a473f9f4$export$931cbfb6bfb85fc.getInstance(toggle);
            if (!context || context._config.autoClose === false) continue;
            const composedPath = event.composedPath();
            const isMenuTarget = composedPath.includes(context._menu);
            if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) continue;
            // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu
            if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === $fa8cf754a473f9f4$var$TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) continue;
            const relatedTarget = {
                relatedTarget: context._element
            };
            if (event.type === 'click') relatedTarget.clickEvent = event;
            context._completeHide(relatedTarget);
        }
    }
    static dataApiKeydownHandler(event) {
        // If not an UP | DOWN | ESCAPE key => not a dropdown command
        // If input/textarea && if key is other than ESCAPE => not a dropdown command
        const isInput = /input|textarea/i.test(event.target.tagName);
        const isEscapeEvent = event.key === $fa8cf754a473f9f4$var$ESCAPE_KEY$2;
        const isUpOrDownEvent = [
            $fa8cf754a473f9f4$var$ARROW_UP_KEY$1,
            $fa8cf754a473f9f4$var$ARROW_DOWN_KEY$1
        ].includes(event.key);
        if (!isUpOrDownEvent && !isEscapeEvent) return;
        if (isInput && !isEscapeEvent) return;
        event.preventDefault();
        // TODO: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.3/forms/input-group/
        const getToggleButton = this.matches($fa8cf754a473f9f4$var$SELECTOR_DATA_TOGGLE$3) ? this : $fa8cf754a473f9f4$var$SelectorEngine.prev(this, $fa8cf754a473f9f4$var$SELECTOR_DATA_TOGGLE$3)[0] || $fa8cf754a473f9f4$var$SelectorEngine.next(this, $fa8cf754a473f9f4$var$SELECTOR_DATA_TOGGLE$3)[0] || $fa8cf754a473f9f4$var$SelectorEngine.findOne($fa8cf754a473f9f4$var$SELECTOR_DATA_TOGGLE$3, event.delegateTarget.parentNode);
        const instance = $fa8cf754a473f9f4$export$931cbfb6bfb85fc.getOrCreateInstance(getToggleButton);
        if (isUpOrDownEvent) {
            event.stopPropagation();
            instance.show();
            instance._selectMenuItem(event);
            return;
        }
        if (instance._isShown()) {
            // else is escape and we check if it is shown
            event.stopPropagation();
            instance.hide();
            getToggleButton.focus();
        }
    }
}
/**
 * Data API implementation
 */ $fa8cf754a473f9f4$var$EventHandler.on(document, $fa8cf754a473f9f4$var$EVENT_KEYDOWN_DATA_API, $fa8cf754a473f9f4$var$SELECTOR_DATA_TOGGLE$3, $fa8cf754a473f9f4$export$931cbfb6bfb85fc.dataApiKeydownHandler);
$fa8cf754a473f9f4$var$EventHandler.on(document, $fa8cf754a473f9f4$var$EVENT_KEYDOWN_DATA_API, $fa8cf754a473f9f4$var$SELECTOR_MENU, $fa8cf754a473f9f4$export$931cbfb6bfb85fc.dataApiKeydownHandler);
$fa8cf754a473f9f4$var$EventHandler.on(document, $fa8cf754a473f9f4$var$EVENT_CLICK_DATA_API$3, $fa8cf754a473f9f4$export$931cbfb6bfb85fc.clearMenus);
$fa8cf754a473f9f4$var$EventHandler.on(document, $fa8cf754a473f9f4$var$EVENT_KEYUP_DATA_API, $fa8cf754a473f9f4$export$931cbfb6bfb85fc.clearMenus);
$fa8cf754a473f9f4$var$EventHandler.on(document, $fa8cf754a473f9f4$var$EVENT_CLICK_DATA_API$3, $fa8cf754a473f9f4$var$SELECTOR_DATA_TOGGLE$3, function(event) {
    event.preventDefault();
    $fa8cf754a473f9f4$export$931cbfb6bfb85fc.getOrCreateInstance(this).toggle();
});
/**
 * jQuery
 */ $fa8cf754a473f9f4$var$defineJQueryPlugin($fa8cf754a473f9f4$export$931cbfb6bfb85fc);
/**
 * --------------------------------------------------------------------------
 * Bootstrap util/backdrop.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const $fa8cf754a473f9f4$var$NAME$9 = 'backdrop';
const $fa8cf754a473f9f4$var$CLASS_NAME_FADE$4 = 'fade';
const $fa8cf754a473f9f4$var$CLASS_NAME_SHOW$5 = 'show';
const $fa8cf754a473f9f4$var$EVENT_MOUSEDOWN = `mousedown.bs.${$fa8cf754a473f9f4$var$NAME$9}`;
const $fa8cf754a473f9f4$var$Default$8 = {
    className: 'modal-backdrop',
    clickCallback: null,
    isAnimated: false,
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    rootElement: 'body' // give the choice to place backdrop under different elements
};
const $fa8cf754a473f9f4$var$DefaultType$8 = {
    className: 'string',
    clickCallback: '(function|null)',
    isAnimated: 'boolean',
    isVisible: 'boolean',
    rootElement: '(element|string)'
};
/**
 * Class definition
 */ class $fa8cf754a473f9f4$var$Backdrop extends $fa8cf754a473f9f4$var$Config {
    constructor(config){
        super();
        this._config = this._getConfig(config);
        this._isAppended = false;
        this._element = null;
    }
    // Getters
    static get Default() {
        return $fa8cf754a473f9f4$var$Default$8;
    }
    static get DefaultType() {
        return $fa8cf754a473f9f4$var$DefaultType$8;
    }
    static get NAME() {
        return $fa8cf754a473f9f4$var$NAME$9;
    }
    // Public
    show(callback) {
        if (!this._config.isVisible) {
            $fa8cf754a473f9f4$var$execute(callback);
            return;
        }
        this._append();
        const element = this._getElement();
        if (this._config.isAnimated) $fa8cf754a473f9f4$var$reflow(element);
        element.classList.add($fa8cf754a473f9f4$var$CLASS_NAME_SHOW$5);
        this._emulateAnimation(()=>{
            $fa8cf754a473f9f4$var$execute(callback);
        });
    }
    hide(callback) {
        if (!this._config.isVisible) {
            $fa8cf754a473f9f4$var$execute(callback);
            return;
        }
        this._getElement().classList.remove($fa8cf754a473f9f4$var$CLASS_NAME_SHOW$5);
        this._emulateAnimation(()=>{
            this.dispose();
            $fa8cf754a473f9f4$var$execute(callback);
        });
    }
    dispose() {
        if (!this._isAppended) return;
        $fa8cf754a473f9f4$var$EventHandler.off(this._element, $fa8cf754a473f9f4$var$EVENT_MOUSEDOWN);
        this._element.remove();
        this._isAppended = false;
    }
    // Private
    _getElement() {
        if (!this._element) {
            const backdrop = document.createElement('div');
            backdrop.className = this._config.className;
            if (this._config.isAnimated) backdrop.classList.add($fa8cf754a473f9f4$var$CLASS_NAME_FADE$4);
            this._element = backdrop;
        }
        return this._element;
    }
    _configAfterMerge(config) {
        // use getElement() with the default "body" to get a fresh Element on each instantiation
        config.rootElement = $fa8cf754a473f9f4$var$getElement(config.rootElement);
        return config;
    }
    _append() {
        if (this._isAppended) return;
        const element = this._getElement();
        this._config.rootElement.append(element);
        $fa8cf754a473f9f4$var$EventHandler.on(element, $fa8cf754a473f9f4$var$EVENT_MOUSEDOWN, ()=>{
            $fa8cf754a473f9f4$var$execute(this._config.clickCallback);
        });
        this._isAppended = true;
    }
    _emulateAnimation(callback) {
        $fa8cf754a473f9f4$var$executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap util/focustrap.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const $fa8cf754a473f9f4$var$NAME$8 = 'focustrap';
const $fa8cf754a473f9f4$var$DATA_KEY$5 = 'bs.focustrap';
const $fa8cf754a473f9f4$var$EVENT_KEY$5 = `.${$fa8cf754a473f9f4$var$DATA_KEY$5}`;
const $fa8cf754a473f9f4$var$EVENT_FOCUSIN$2 = `focusin${$fa8cf754a473f9f4$var$EVENT_KEY$5}`;
const $fa8cf754a473f9f4$var$EVENT_KEYDOWN_TAB = `keydown.tab${$fa8cf754a473f9f4$var$EVENT_KEY$5}`;
const $fa8cf754a473f9f4$var$TAB_KEY = 'Tab';
const $fa8cf754a473f9f4$var$TAB_NAV_FORWARD = 'forward';
const $fa8cf754a473f9f4$var$TAB_NAV_BACKWARD = 'backward';
const $fa8cf754a473f9f4$var$Default$7 = {
    autofocus: true,
    trapElement: null // The element to trap focus inside of
};
const $fa8cf754a473f9f4$var$DefaultType$7 = {
    autofocus: 'boolean',
    trapElement: 'element'
};
/**
 * Class definition
 */ class $fa8cf754a473f9f4$var$FocusTrap extends $fa8cf754a473f9f4$var$Config {
    constructor(config){
        super();
        this._config = this._getConfig(config);
        this._isActive = false;
        this._lastTabNavDirection = null;
    }
    // Getters
    static get Default() {
        return $fa8cf754a473f9f4$var$Default$7;
    }
    static get DefaultType() {
        return $fa8cf754a473f9f4$var$DefaultType$7;
    }
    static get NAME() {
        return $fa8cf754a473f9f4$var$NAME$8;
    }
    // Public
    activate() {
        if (this._isActive) return;
        if (this._config.autofocus) this._config.trapElement.focus();
        $fa8cf754a473f9f4$var$EventHandler.off(document, $fa8cf754a473f9f4$var$EVENT_KEY$5); // guard against infinite focus loop
        $fa8cf754a473f9f4$var$EventHandler.on(document, $fa8cf754a473f9f4$var$EVENT_FOCUSIN$2, (event)=>this._handleFocusin(event));
        $fa8cf754a473f9f4$var$EventHandler.on(document, $fa8cf754a473f9f4$var$EVENT_KEYDOWN_TAB, (event)=>this._handleKeydown(event));
        this._isActive = true;
    }
    deactivate() {
        if (!this._isActive) return;
        this._isActive = false;
        $fa8cf754a473f9f4$var$EventHandler.off(document, $fa8cf754a473f9f4$var$EVENT_KEY$5);
    }
    // Private
    _handleFocusin(event) {
        const { trapElement: trapElement } = this._config;
        if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) return;
        const elements = $fa8cf754a473f9f4$var$SelectorEngine.focusableChildren(trapElement);
        if (elements.length === 0) trapElement.focus();
        else if (this._lastTabNavDirection === $fa8cf754a473f9f4$var$TAB_NAV_BACKWARD) elements[elements.length - 1].focus();
        else elements[0].focus();
    }
    _handleKeydown(event) {
        if (event.key !== $fa8cf754a473f9f4$var$TAB_KEY) return;
        this._lastTabNavDirection = event.shiftKey ? $fa8cf754a473f9f4$var$TAB_NAV_BACKWARD : $fa8cf754a473f9f4$var$TAB_NAV_FORWARD;
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap util/scrollBar.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const $fa8cf754a473f9f4$var$SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
const $fa8cf754a473f9f4$var$SELECTOR_STICKY_CONTENT = '.sticky-top';
const $fa8cf754a473f9f4$var$PROPERTY_PADDING = 'padding-right';
const $fa8cf754a473f9f4$var$PROPERTY_MARGIN = 'margin-right';
/**
 * Class definition
 */ class $fa8cf754a473f9f4$var$ScrollBarHelper {
    constructor(){
        this._element = document.body;
    }
    // Public
    getWidth() {
        // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
        const documentWidth = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - documentWidth);
    }
    hide() {
        const width = this.getWidth();
        this._disableOverFlow();
        // give padding to element to balance the hidden scrollbar width
        this._setElementAttributes(this._element, $fa8cf754a473f9f4$var$PROPERTY_PADDING, (calculatedValue)=>calculatedValue + width);
        // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth
        this._setElementAttributes($fa8cf754a473f9f4$var$SELECTOR_FIXED_CONTENT, $fa8cf754a473f9f4$var$PROPERTY_PADDING, (calculatedValue)=>calculatedValue + width);
        this._setElementAttributes($fa8cf754a473f9f4$var$SELECTOR_STICKY_CONTENT, $fa8cf754a473f9f4$var$PROPERTY_MARGIN, (calculatedValue)=>calculatedValue - width);
    }
    reset() {
        this._resetElementAttributes(this._element, 'overflow');
        this._resetElementAttributes(this._element, $fa8cf754a473f9f4$var$PROPERTY_PADDING);
        this._resetElementAttributes($fa8cf754a473f9f4$var$SELECTOR_FIXED_CONTENT, $fa8cf754a473f9f4$var$PROPERTY_PADDING);
        this._resetElementAttributes($fa8cf754a473f9f4$var$SELECTOR_STICKY_CONTENT, $fa8cf754a473f9f4$var$PROPERTY_MARGIN);
    }
    isOverflowing() {
        return this.getWidth() > 0;
    }
    // Private
    _disableOverFlow() {
        this._saveInitialAttribute(this._element, 'overflow');
        this._element.style.overflow = 'hidden';
    }
    _setElementAttributes(selector, styleProperty, callback) {
        const scrollbarWidth = this.getWidth();
        const manipulationCallBack = (element)=>{
            if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) return;
            this._saveInitialAttribute(element, styleProperty);
            const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
            element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
        };
        this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _saveInitialAttribute(element, styleProperty) {
        const actualValue = element.style.getPropertyValue(styleProperty);
        if (actualValue) $fa8cf754a473f9f4$var$Manipulator.setDataAttribute(element, styleProperty, actualValue);
    }
    _resetElementAttributes(selector, styleProperty) {
        const manipulationCallBack = (element)=>{
            const value = $fa8cf754a473f9f4$var$Manipulator.getDataAttribute(element, styleProperty);
            // We only want to remove the property if the value is `null`; the value can also be zero
            if (value === null) {
                element.style.removeProperty(styleProperty);
                return;
            }
            $fa8cf754a473f9f4$var$Manipulator.removeDataAttribute(element, styleProperty);
            element.style.setProperty(styleProperty, value);
        };
        this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _applyManipulationCallback(selector, callBack) {
        if ($fa8cf754a473f9f4$var$isElement(selector)) {
            callBack(selector);
            return;
        }
        for (const sel of $fa8cf754a473f9f4$var$SelectorEngine.find(selector, this._element))callBack(sel);
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const $fa8cf754a473f9f4$var$NAME$7 = 'modal';
const $fa8cf754a473f9f4$var$DATA_KEY$4 = 'bs.modal';
const $fa8cf754a473f9f4$var$EVENT_KEY$4 = `.${$fa8cf754a473f9f4$var$DATA_KEY$4}`;
const $fa8cf754a473f9f4$var$DATA_API_KEY$2 = '.data-api';
const $fa8cf754a473f9f4$var$ESCAPE_KEY$1 = 'Escape';
const $fa8cf754a473f9f4$var$EVENT_HIDE$4 = `hide${$fa8cf754a473f9f4$var$EVENT_KEY$4}`;
const $fa8cf754a473f9f4$var$EVENT_HIDE_PREVENTED$1 = `hidePrevented${$fa8cf754a473f9f4$var$EVENT_KEY$4}`;
const $fa8cf754a473f9f4$var$EVENT_HIDDEN$4 = `hidden${$fa8cf754a473f9f4$var$EVENT_KEY$4}`;
const $fa8cf754a473f9f4$var$EVENT_SHOW$4 = `show${$fa8cf754a473f9f4$var$EVENT_KEY$4}`;
const $fa8cf754a473f9f4$var$EVENT_SHOWN$4 = `shown${$fa8cf754a473f9f4$var$EVENT_KEY$4}`;
const $fa8cf754a473f9f4$var$EVENT_RESIZE$1 = `resize${$fa8cf754a473f9f4$var$EVENT_KEY$4}`;
const $fa8cf754a473f9f4$var$EVENT_CLICK_DISMISS = `click.dismiss${$fa8cf754a473f9f4$var$EVENT_KEY$4}`;
const $fa8cf754a473f9f4$var$EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${$fa8cf754a473f9f4$var$EVENT_KEY$4}`;
const $fa8cf754a473f9f4$var$EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${$fa8cf754a473f9f4$var$EVENT_KEY$4}`;
const $fa8cf754a473f9f4$var$EVENT_CLICK_DATA_API$2 = `click${$fa8cf754a473f9f4$var$EVENT_KEY$4}${$fa8cf754a473f9f4$var$DATA_API_KEY$2}`;
const $fa8cf754a473f9f4$var$CLASS_NAME_OPEN = 'modal-open';
const $fa8cf754a473f9f4$var$CLASS_NAME_FADE$3 = 'fade';
const $fa8cf754a473f9f4$var$CLASS_NAME_SHOW$4 = 'show';
const $fa8cf754a473f9f4$var$CLASS_NAME_STATIC = 'modal-static';
const $fa8cf754a473f9f4$var$OPEN_SELECTOR$1 = '.modal.show';
const $fa8cf754a473f9f4$var$SELECTOR_DIALOG = '.modal-dialog';
const $fa8cf754a473f9f4$var$SELECTOR_MODAL_BODY = '.modal-body';
const $fa8cf754a473f9f4$var$SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
const $fa8cf754a473f9f4$var$Default$6 = {
    backdrop: true,
    focus: true,
    keyboard: true
};
const $fa8cf754a473f9f4$var$DefaultType$6 = {
    backdrop: '(boolean|string)',
    focus: 'boolean',
    keyboard: 'boolean'
};
/**
 * Class definition
 */ class $fa8cf754a473f9f4$export$2b77a92f1a5ad772 extends $fa8cf754a473f9f4$var$BaseComponent {
    constructor(element, config){
        super(element, config);
        this._dialog = $fa8cf754a473f9f4$var$SelectorEngine.findOne($fa8cf754a473f9f4$var$SELECTOR_DIALOG, this._element);
        this._backdrop = this._initializeBackDrop();
        this._focustrap = this._initializeFocusTrap();
        this._isShown = false;
        this._isTransitioning = false;
        this._scrollBar = new $fa8cf754a473f9f4$var$ScrollBarHelper();
        this._addEventListeners();
    }
    // Getters
    static get Default() {
        return $fa8cf754a473f9f4$var$Default$6;
    }
    static get DefaultType() {
        return $fa8cf754a473f9f4$var$DefaultType$6;
    }
    static get NAME() {
        return $fa8cf754a473f9f4$var$NAME$7;
    }
    // Public
    toggle(relatedTarget) {
        return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
        if (this._isShown || this._isTransitioning) return;
        const showEvent = $fa8cf754a473f9f4$var$EventHandler.trigger(this._element, $fa8cf754a473f9f4$var$EVENT_SHOW$4, {
            relatedTarget: relatedTarget
        });
        if (showEvent.defaultPrevented) return;
        this._isShown = true;
        this._isTransitioning = true;
        this._scrollBar.hide();
        document.body.classList.add($fa8cf754a473f9f4$var$CLASS_NAME_OPEN);
        this._adjustDialog();
        this._backdrop.show(()=>this._showElement(relatedTarget));
    }
    hide() {
        if (!this._isShown || this._isTransitioning) return;
        const hideEvent = $fa8cf754a473f9f4$var$EventHandler.trigger(this._element, $fa8cf754a473f9f4$var$EVENT_HIDE$4);
        if (hideEvent.defaultPrevented) return;
        this._isShown = false;
        this._isTransitioning = true;
        this._focustrap.deactivate();
        this._element.classList.remove($fa8cf754a473f9f4$var$CLASS_NAME_SHOW$4);
        this._queueCallback(()=>this._hideModal(), this._element, this._isAnimated());
    }
    dispose() {
        $fa8cf754a473f9f4$var$EventHandler.off(window, $fa8cf754a473f9f4$var$EVENT_KEY$4);
        $fa8cf754a473f9f4$var$EventHandler.off(this._dialog, $fa8cf754a473f9f4$var$EVENT_KEY$4);
        this._backdrop.dispose();
        this._focustrap.deactivate();
        super.dispose();
    }
    handleUpdate() {
        this._adjustDialog();
    }
    // Private
    _initializeBackDrop() {
        return new $fa8cf754a473f9f4$var$Backdrop({
            isVisible: Boolean(this._config.backdrop),
            // 'static' option will be translated to true, and booleans will keep their value,
            isAnimated: this._isAnimated()
        });
    }
    _initializeFocusTrap() {
        return new $fa8cf754a473f9f4$var$FocusTrap({
            trapElement: this._element
        });
    }
    _showElement(relatedTarget) {
        // try to append dynamic modal
        if (!document.body.contains(this._element)) document.body.append(this._element);
        this._element.style.display = 'block';
        this._element.removeAttribute('aria-hidden');
        this._element.setAttribute('aria-modal', true);
        this._element.setAttribute('role', 'dialog');
        this._element.scrollTop = 0;
        const modalBody = $fa8cf754a473f9f4$var$SelectorEngine.findOne($fa8cf754a473f9f4$var$SELECTOR_MODAL_BODY, this._dialog);
        if (modalBody) modalBody.scrollTop = 0;
        $fa8cf754a473f9f4$var$reflow(this._element);
        this._element.classList.add($fa8cf754a473f9f4$var$CLASS_NAME_SHOW$4);
        const transitionComplete = ()=>{
            if (this._config.focus) this._focustrap.activate();
            this._isTransitioning = false;
            $fa8cf754a473f9f4$var$EventHandler.trigger(this._element, $fa8cf754a473f9f4$var$EVENT_SHOWN$4, {
                relatedTarget: relatedTarget
            });
        };
        this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
    }
    _addEventListeners() {
        $fa8cf754a473f9f4$var$EventHandler.on(this._element, $fa8cf754a473f9f4$var$EVENT_KEYDOWN_DISMISS$1, (event)=>{
            if (event.key !== $fa8cf754a473f9f4$var$ESCAPE_KEY$1) return;
            if (this._config.keyboard) {
                this.hide();
                return;
            }
            this._triggerBackdropTransition();
        });
        $fa8cf754a473f9f4$var$EventHandler.on(window, $fa8cf754a473f9f4$var$EVENT_RESIZE$1, ()=>{
            if (this._isShown && !this._isTransitioning) this._adjustDialog();
        });
        $fa8cf754a473f9f4$var$EventHandler.on(this._element, $fa8cf754a473f9f4$var$EVENT_MOUSEDOWN_DISMISS, (event)=>{
            // a bad trick to segregate clicks that may start inside dialog but end outside, and avoid listen to scrollbar clicks
            $fa8cf754a473f9f4$var$EventHandler.one(this._element, $fa8cf754a473f9f4$var$EVENT_CLICK_DISMISS, (event2)=>{
                if (this._element !== event.target || this._element !== event2.target) return;
                if (this._config.backdrop === 'static') {
                    this._triggerBackdropTransition();
                    return;
                }
                if (this._config.backdrop) this.hide();
            });
        });
    }
    _hideModal() {
        this._element.style.display = 'none';
        this._element.setAttribute('aria-hidden', true);
        this._element.removeAttribute('aria-modal');
        this._element.removeAttribute('role');
        this._isTransitioning = false;
        this._backdrop.hide(()=>{
            document.body.classList.remove($fa8cf754a473f9f4$var$CLASS_NAME_OPEN);
            this._resetAdjustments();
            this._scrollBar.reset();
            $fa8cf754a473f9f4$var$EventHandler.trigger(this._element, $fa8cf754a473f9f4$var$EVENT_HIDDEN$4);
        });
    }
    _isAnimated() {
        return this._element.classList.contains($fa8cf754a473f9f4$var$CLASS_NAME_FADE$3);
    }
    _triggerBackdropTransition() {
        const hideEvent = $fa8cf754a473f9f4$var$EventHandler.trigger(this._element, $fa8cf754a473f9f4$var$EVENT_HIDE_PREVENTED$1);
        if (hideEvent.defaultPrevented) return;
        const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
        const initialOverflowY = this._element.style.overflowY;
        // return if the following background transition hasn't yet completed
        if (initialOverflowY === 'hidden' || this._element.classList.contains($fa8cf754a473f9f4$var$CLASS_NAME_STATIC)) return;
        if (!isModalOverflowing) this._element.style.overflowY = 'hidden';
        this._element.classList.add($fa8cf754a473f9f4$var$CLASS_NAME_STATIC);
        this._queueCallback(()=>{
            this._element.classList.remove($fa8cf754a473f9f4$var$CLASS_NAME_STATIC);
            this._queueCallback(()=>{
                this._element.style.overflowY = initialOverflowY;
            }, this._dialog);
        }, this._dialog);
        this._element.focus();
    }
    /**
   * The following methods are used to handle overflowing modals
   */ _adjustDialog() {
        const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
        const scrollbarWidth = this._scrollBar.getWidth();
        const isBodyOverflowing = scrollbarWidth > 0;
        if (isBodyOverflowing && !isModalOverflowing) {
            const property = $fa8cf754a473f9f4$var$isRTL() ? 'paddingLeft' : 'paddingRight';
            this._element.style[property] = `${scrollbarWidth}px`;
        }
        if (!isBodyOverflowing && isModalOverflowing) {
            const property = $fa8cf754a473f9f4$var$isRTL() ? 'paddingRight' : 'paddingLeft';
            this._element.style[property] = `${scrollbarWidth}px`;
        }
    }
    _resetAdjustments() {
        this._element.style.paddingLeft = '';
        this._element.style.paddingRight = '';
    }
    // Static
    static jQueryInterface(config, relatedTarget) {
        return this.each(function() {
            const data = $fa8cf754a473f9f4$export$2b77a92f1a5ad772.getOrCreateInstance(this, config);
            if (typeof config !== 'string') return;
            if (typeof data[config] === 'undefined') throw new TypeError(`No method named "${config}"`);
            data[config](relatedTarget);
        });
    }
}
/**
 * Data API implementation
 */ $fa8cf754a473f9f4$var$EventHandler.on(document, $fa8cf754a473f9f4$var$EVENT_CLICK_DATA_API$2, $fa8cf754a473f9f4$var$SELECTOR_DATA_TOGGLE$2, function(event) {
    const target = $fa8cf754a473f9f4$var$SelectorEngine.getElementFromSelector(this);
    if ([
        'A',
        'AREA'
    ].includes(this.tagName)) event.preventDefault();
    $fa8cf754a473f9f4$var$EventHandler.one(target, $fa8cf754a473f9f4$var$EVENT_SHOW$4, (showEvent)=>{
        if (showEvent.defaultPrevented) // only register focus restorer if modal will actually get shown
        return;
        $fa8cf754a473f9f4$var$EventHandler.one(target, $fa8cf754a473f9f4$var$EVENT_HIDDEN$4, ()=>{
            if ($fa8cf754a473f9f4$var$isVisible(this)) this.focus();
        });
    });
    // avoid conflict when clicking modal toggler while another one is open
    const alreadyOpen = $fa8cf754a473f9f4$var$SelectorEngine.findOne($fa8cf754a473f9f4$var$OPEN_SELECTOR$1);
    if (alreadyOpen) $fa8cf754a473f9f4$export$2b77a92f1a5ad772.getInstance(alreadyOpen).hide();
    const data = $fa8cf754a473f9f4$export$2b77a92f1a5ad772.getOrCreateInstance(target);
    data.toggle(this);
});
$fa8cf754a473f9f4$var$enableDismissTrigger($fa8cf754a473f9f4$export$2b77a92f1a5ad772);
/**
 * jQuery
 */ $fa8cf754a473f9f4$var$defineJQueryPlugin($fa8cf754a473f9f4$export$2b77a92f1a5ad772);
/**
 * --------------------------------------------------------------------------
 * Bootstrap offcanvas.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const $fa8cf754a473f9f4$var$NAME$6 = 'offcanvas';
const $fa8cf754a473f9f4$var$DATA_KEY$3 = 'bs.offcanvas';
const $fa8cf754a473f9f4$var$EVENT_KEY$3 = `.${$fa8cf754a473f9f4$var$DATA_KEY$3}`;
const $fa8cf754a473f9f4$var$DATA_API_KEY$1 = '.data-api';
const $fa8cf754a473f9f4$var$EVENT_LOAD_DATA_API$2 = `load${$fa8cf754a473f9f4$var$EVENT_KEY$3}${$fa8cf754a473f9f4$var$DATA_API_KEY$1}`;
const $fa8cf754a473f9f4$var$ESCAPE_KEY = 'Escape';
const $fa8cf754a473f9f4$var$CLASS_NAME_SHOW$3 = 'show';
const $fa8cf754a473f9f4$var$CLASS_NAME_SHOWING$1 = 'showing';
const $fa8cf754a473f9f4$var$CLASS_NAME_HIDING = 'hiding';
const $fa8cf754a473f9f4$var$CLASS_NAME_BACKDROP = 'offcanvas-backdrop';
const $fa8cf754a473f9f4$var$OPEN_SELECTOR = '.offcanvas.show';
const $fa8cf754a473f9f4$var$EVENT_SHOW$3 = `show${$fa8cf754a473f9f4$var$EVENT_KEY$3}`;
const $fa8cf754a473f9f4$var$EVENT_SHOWN$3 = `shown${$fa8cf754a473f9f4$var$EVENT_KEY$3}`;
const $fa8cf754a473f9f4$var$EVENT_HIDE$3 = `hide${$fa8cf754a473f9f4$var$EVENT_KEY$3}`;
const $fa8cf754a473f9f4$var$EVENT_HIDE_PREVENTED = `hidePrevented${$fa8cf754a473f9f4$var$EVENT_KEY$3}`;
const $fa8cf754a473f9f4$var$EVENT_HIDDEN$3 = `hidden${$fa8cf754a473f9f4$var$EVENT_KEY$3}`;
const $fa8cf754a473f9f4$var$EVENT_RESIZE = `resize${$fa8cf754a473f9f4$var$EVENT_KEY$3}`;
const $fa8cf754a473f9f4$var$EVENT_CLICK_DATA_API$1 = `click${$fa8cf754a473f9f4$var$EVENT_KEY$3}${$fa8cf754a473f9f4$var$DATA_API_KEY$1}`;
const $fa8cf754a473f9f4$var$EVENT_KEYDOWN_DISMISS = `keydown.dismiss${$fa8cf754a473f9f4$var$EVENT_KEY$3}`;
const $fa8cf754a473f9f4$var$SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
const $fa8cf754a473f9f4$var$Default$5 = {
    backdrop: true,
    keyboard: true,
    scroll: false
};
const $fa8cf754a473f9f4$var$DefaultType$5 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    scroll: 'boolean'
};
/**
 * Class definition
 */ class $fa8cf754a473f9f4$export$591ca0244c9dfcd4 extends $fa8cf754a473f9f4$var$BaseComponent {
    constructor(element, config){
        super(element, config);
        this._isShown = false;
        this._backdrop = this._initializeBackDrop();
        this._focustrap = this._initializeFocusTrap();
        this._addEventListeners();
    }
    // Getters
    static get Default() {
        return $fa8cf754a473f9f4$var$Default$5;
    }
    static get DefaultType() {
        return $fa8cf754a473f9f4$var$DefaultType$5;
    }
    static get NAME() {
        return $fa8cf754a473f9f4$var$NAME$6;
    }
    // Public
    toggle(relatedTarget) {
        return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
        if (this._isShown) return;
        const showEvent = $fa8cf754a473f9f4$var$EventHandler.trigger(this._element, $fa8cf754a473f9f4$var$EVENT_SHOW$3, {
            relatedTarget: relatedTarget
        });
        if (showEvent.defaultPrevented) return;
        this._isShown = true;
        this._backdrop.show();
        if (!this._config.scroll) new $fa8cf754a473f9f4$var$ScrollBarHelper().hide();
        this._element.setAttribute('aria-modal', true);
        this._element.setAttribute('role', 'dialog');
        this._element.classList.add($fa8cf754a473f9f4$var$CLASS_NAME_SHOWING$1);
        const completeCallBack = ()=>{
            if (!this._config.scroll || this._config.backdrop) this._focustrap.activate();
            this._element.classList.add($fa8cf754a473f9f4$var$CLASS_NAME_SHOW$3);
            this._element.classList.remove($fa8cf754a473f9f4$var$CLASS_NAME_SHOWING$1);
            $fa8cf754a473f9f4$var$EventHandler.trigger(this._element, $fa8cf754a473f9f4$var$EVENT_SHOWN$3, {
                relatedTarget: relatedTarget
            });
        };
        this._queueCallback(completeCallBack, this._element, true);
    }
    hide() {
        if (!this._isShown) return;
        const hideEvent = $fa8cf754a473f9f4$var$EventHandler.trigger(this._element, $fa8cf754a473f9f4$var$EVENT_HIDE$3);
        if (hideEvent.defaultPrevented) return;
        this._focustrap.deactivate();
        this._element.blur();
        this._isShown = false;
        this._element.classList.add($fa8cf754a473f9f4$var$CLASS_NAME_HIDING);
        this._backdrop.hide();
        const completeCallback = ()=>{
            this._element.classList.remove($fa8cf754a473f9f4$var$CLASS_NAME_SHOW$3, $fa8cf754a473f9f4$var$CLASS_NAME_HIDING);
            this._element.removeAttribute('aria-modal');
            this._element.removeAttribute('role');
            if (!this._config.scroll) new $fa8cf754a473f9f4$var$ScrollBarHelper().reset();
            $fa8cf754a473f9f4$var$EventHandler.trigger(this._element, $fa8cf754a473f9f4$var$EVENT_HIDDEN$3);
        };
        this._queueCallback(completeCallback, this._element, true);
    }
    dispose() {
        this._backdrop.dispose();
        this._focustrap.deactivate();
        super.dispose();
    }
    // Private
    _initializeBackDrop() {
        const clickCallback = ()=>{
            if (this._config.backdrop === 'static') {
                $fa8cf754a473f9f4$var$EventHandler.trigger(this._element, $fa8cf754a473f9f4$var$EVENT_HIDE_PREVENTED);
                return;
            }
            this.hide();
        };
        // 'static' option will be translated to true, and booleans will keep their value
        const isVisible = Boolean(this._config.backdrop);
        return new $fa8cf754a473f9f4$var$Backdrop({
            className: $fa8cf754a473f9f4$var$CLASS_NAME_BACKDROP,
            isVisible: isVisible,
            isAnimated: true,
            rootElement: this._element.parentNode,
            clickCallback: isVisible ? clickCallback : null
        });
    }
    _initializeFocusTrap() {
        return new $fa8cf754a473f9f4$var$FocusTrap({
            trapElement: this._element
        });
    }
    _addEventListeners() {
        $fa8cf754a473f9f4$var$EventHandler.on(this._element, $fa8cf754a473f9f4$var$EVENT_KEYDOWN_DISMISS, (event)=>{
            if (event.key !== $fa8cf754a473f9f4$var$ESCAPE_KEY) return;
            if (this._config.keyboard) {
                this.hide();
                return;
            }
            $fa8cf754a473f9f4$var$EventHandler.trigger(this._element, $fa8cf754a473f9f4$var$EVENT_HIDE_PREVENTED);
        });
    }
    // Static
    static jQueryInterface(config) {
        return this.each(function() {
            const data = $fa8cf754a473f9f4$export$591ca0244c9dfcd4.getOrCreateInstance(this, config);
            if (typeof config !== 'string') return;
            if (data[config] === undefined || config.startsWith('_') || config === 'constructor') throw new TypeError(`No method named "${config}"`);
            data[config](this);
        });
    }
}
/**
 * Data API implementation
 */ $fa8cf754a473f9f4$var$EventHandler.on(document, $fa8cf754a473f9f4$var$EVENT_CLICK_DATA_API$1, $fa8cf754a473f9f4$var$SELECTOR_DATA_TOGGLE$1, function(event) {
    const target = $fa8cf754a473f9f4$var$SelectorEngine.getElementFromSelector(this);
    if ([
        'A',
        'AREA'
    ].includes(this.tagName)) event.preventDefault();
    if ($fa8cf754a473f9f4$var$isDisabled(this)) return;
    $fa8cf754a473f9f4$var$EventHandler.one(target, $fa8cf754a473f9f4$var$EVENT_HIDDEN$3, ()=>{
        // focus on trigger when it is closed
        if ($fa8cf754a473f9f4$var$isVisible(this)) this.focus();
    });
    // avoid conflict when clicking a toggler of an offcanvas, while another is open
    const alreadyOpen = $fa8cf754a473f9f4$var$SelectorEngine.findOne($fa8cf754a473f9f4$var$OPEN_SELECTOR);
    if (alreadyOpen && alreadyOpen !== target) $fa8cf754a473f9f4$export$591ca0244c9dfcd4.getInstance(alreadyOpen).hide();
    const data = $fa8cf754a473f9f4$export$591ca0244c9dfcd4.getOrCreateInstance(target);
    data.toggle(this);
});
$fa8cf754a473f9f4$var$EventHandler.on(window, $fa8cf754a473f9f4$var$EVENT_LOAD_DATA_API$2, ()=>{
    for (const selector of $fa8cf754a473f9f4$var$SelectorEngine.find($fa8cf754a473f9f4$var$OPEN_SELECTOR))$fa8cf754a473f9f4$export$591ca0244c9dfcd4.getOrCreateInstance(selector).show();
});
$fa8cf754a473f9f4$var$EventHandler.on(window, $fa8cf754a473f9f4$var$EVENT_RESIZE, ()=>{
    for (const element of $fa8cf754a473f9f4$var$SelectorEngine.find('[aria-modal][class*=show][class*=offcanvas-]'))if (getComputedStyle(element).position !== 'fixed') $fa8cf754a473f9f4$export$591ca0244c9dfcd4.getOrCreateInstance(element).hide();
});
$fa8cf754a473f9f4$var$enableDismissTrigger($fa8cf754a473f9f4$export$591ca0244c9dfcd4);
/**
 * jQuery
 */ $fa8cf754a473f9f4$var$defineJQueryPlugin($fa8cf754a473f9f4$export$591ca0244c9dfcd4);
/**
 * --------------------------------------------------------------------------
 * Bootstrap util/sanitizer.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ // js-docs-start allow-list
const $fa8cf754a473f9f4$var$ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
const $fa8cf754a473f9f4$var$DefaultAllowlist = {
    // Global attributes allowed on any supplied element below.
    '*': [
        'class',
        'dir',
        'id',
        'lang',
        'role',
        $fa8cf754a473f9f4$var$ARIA_ATTRIBUTE_PATTERN
    ],
    a: [
        'target',
        'href',
        'title',
        'rel'
    ],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    dd: [],
    div: [],
    dl: [],
    dt: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: [
        'src',
        'srcset',
        'alt',
        'title',
        'width',
        'height'
    ],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
};
// js-docs-end allow-list
const $fa8cf754a473f9f4$var$uriAttributes = new Set([
    'background',
    'cite',
    'href',
    'itemtype',
    'longdesc',
    'poster',
    'src',
    'xlink:href'
]);
/**
 * A pattern that recognizes URLs that are safe wrt. XSS in URL navigation
 * contexts.
 *
 * Shout-out to Angular https://github.com/angular/angular/blob/15.2.8/packages/core/src/sanitization/url_sanitizer.ts#L38
 */ const $fa8cf754a473f9f4$var$SAFE_URL_PATTERN = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i;
const $fa8cf754a473f9f4$var$allowedAttribute = (attribute, allowedAttributeList)=>{
    const attributeName = attribute.nodeName.toLowerCase();
    if (allowedAttributeList.includes(attributeName)) {
        if ($fa8cf754a473f9f4$var$uriAttributes.has(attributeName)) return Boolean($fa8cf754a473f9f4$var$SAFE_URL_PATTERN.test(attribute.nodeValue));
        return true;
    }
    // Check if a regular expression validates the attribute.
    return allowedAttributeList.filter((attributeRegex)=>attributeRegex instanceof RegExp).some((regex)=>regex.test(attributeName));
};
function $fa8cf754a473f9f4$var$sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
    if (!unsafeHtml.length) return unsafeHtml;
    if (sanitizeFunction && typeof sanitizeFunction === 'function') return sanitizeFunction(unsafeHtml);
    const domParser = new window.DOMParser();
    const createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    const elements = [].concat(...createdDocument.body.querySelectorAll('*'));
    for (const element of elements){
        const elementName = element.nodeName.toLowerCase();
        if (!Object.keys(allowList).includes(elementName)) {
            element.remove();
            continue;
        }
        const attributeList = [].concat(...element.attributes);
        const allowedAttributes = [].concat(allowList['*'] || [], allowList[elementName] || []);
        for (const attribute of attributeList)if (!$fa8cf754a473f9f4$var$allowedAttribute(attribute, allowedAttributes)) element.removeAttribute(attribute.nodeName);
    }
    return createdDocument.body.innerHTML;
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap util/template-factory.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const $fa8cf754a473f9f4$var$NAME$5 = 'TemplateFactory';
const $fa8cf754a473f9f4$var$Default$4 = {
    allowList: $fa8cf754a473f9f4$var$DefaultAllowlist,
    content: {},
    // { selector : text ,  selector2 : text2 , }
    extraClass: '',
    html: false,
    sanitize: true,
    sanitizeFn: null,
    template: '<div></div>'
};
const $fa8cf754a473f9f4$var$DefaultType$4 = {
    allowList: 'object',
    content: 'object',
    extraClass: '(string|function)',
    html: 'boolean',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    template: 'string'
};
const $fa8cf754a473f9f4$var$DefaultContentType = {
    entry: '(string|element|function|null)',
    selector: '(string|element)'
};
/**
 * Class definition
 */ class $fa8cf754a473f9f4$var$TemplateFactory extends $fa8cf754a473f9f4$var$Config {
    constructor(config){
        super();
        this._config = this._getConfig(config);
    }
    // Getters
    static get Default() {
        return $fa8cf754a473f9f4$var$Default$4;
    }
    static get DefaultType() {
        return $fa8cf754a473f9f4$var$DefaultType$4;
    }
    static get NAME() {
        return $fa8cf754a473f9f4$var$NAME$5;
    }
    // Public
    getContent() {
        return Object.values(this._config.content).map((config)=>this._resolvePossibleFunction(config)).filter(Boolean);
    }
    hasContent() {
        return this.getContent().length > 0;
    }
    changeContent(content) {
        this._checkContent(content);
        this._config.content = {
            ...this._config.content,
            ...content
        };
        return this;
    }
    toHtml() {
        const templateWrapper = document.createElement('div');
        templateWrapper.innerHTML = this._maybeSanitize(this._config.template);
        for (const [selector, text] of Object.entries(this._config.content))this._setContent(templateWrapper, text, selector);
        const template = templateWrapper.children[0];
        const extraClass = this._resolvePossibleFunction(this._config.extraClass);
        if (extraClass) template.classList.add(...extraClass.split(' '));
        return template;
    }
    // Private
    _typeCheckConfig(config) {
        super._typeCheckConfig(config);
        this._checkContent(config.content);
    }
    _checkContent(arg) {
        for (const [selector, content] of Object.entries(arg))super._typeCheckConfig({
            selector: selector,
            entry: content
        }, $fa8cf754a473f9f4$var$DefaultContentType);
    }
    _setContent(template, content, selector) {
        const templateElement = $fa8cf754a473f9f4$var$SelectorEngine.findOne(selector, template);
        if (!templateElement) return;
        content = this._resolvePossibleFunction(content);
        if (!content) {
            templateElement.remove();
            return;
        }
        if ($fa8cf754a473f9f4$var$isElement(content)) {
            this._putElementInTemplate($fa8cf754a473f9f4$var$getElement(content), templateElement);
            return;
        }
        if (this._config.html) {
            templateElement.innerHTML = this._maybeSanitize(content);
            return;
        }
        templateElement.textContent = content;
    }
    _maybeSanitize(arg) {
        return this._config.sanitize ? $fa8cf754a473f9f4$var$sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
    }
    _resolvePossibleFunction(arg) {
        return $fa8cf754a473f9f4$var$execute(arg, [
            undefined,
            this
        ]);
    }
    _putElementInTemplate(element, templateElement) {
        if (this._config.html) {
            templateElement.innerHTML = '';
            templateElement.append(element);
            return;
        }
        templateElement.textContent = element.textContent;
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const $fa8cf754a473f9f4$var$NAME$4 = 'tooltip';
const $fa8cf754a473f9f4$var$DISALLOWED_ATTRIBUTES = new Set([
    'sanitize',
    'allowList',
    'sanitizeFn'
]);
const $fa8cf754a473f9f4$var$CLASS_NAME_FADE$2 = 'fade';
const $fa8cf754a473f9f4$var$CLASS_NAME_MODAL = 'modal';
const $fa8cf754a473f9f4$var$CLASS_NAME_SHOW$2 = 'show';
const $fa8cf754a473f9f4$var$SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
const $fa8cf754a473f9f4$var$SELECTOR_MODAL = `.${$fa8cf754a473f9f4$var$CLASS_NAME_MODAL}`;
const $fa8cf754a473f9f4$var$EVENT_MODAL_HIDE = 'hide.bs.modal';
const $fa8cf754a473f9f4$var$TRIGGER_HOVER = 'hover';
const $fa8cf754a473f9f4$var$TRIGGER_FOCUS = 'focus';
const $fa8cf754a473f9f4$var$TRIGGER_CLICK = 'click';
const $fa8cf754a473f9f4$var$TRIGGER_MANUAL = 'manual';
const $fa8cf754a473f9f4$var$EVENT_HIDE$2 = 'hide';
const $fa8cf754a473f9f4$var$EVENT_HIDDEN$2 = 'hidden';
const $fa8cf754a473f9f4$var$EVENT_SHOW$2 = 'show';
const $fa8cf754a473f9f4$var$EVENT_SHOWN$2 = 'shown';
const $fa8cf754a473f9f4$var$EVENT_INSERTED = 'inserted';
const $fa8cf754a473f9f4$var$EVENT_CLICK$1 = 'click';
const $fa8cf754a473f9f4$var$EVENT_FOCUSIN$1 = 'focusin';
const $fa8cf754a473f9f4$var$EVENT_FOCUSOUT$1 = 'focusout';
const $fa8cf754a473f9f4$var$EVENT_MOUSEENTER = 'mouseenter';
const $fa8cf754a473f9f4$var$EVENT_MOUSELEAVE = 'mouseleave';
const $fa8cf754a473f9f4$var$AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: $fa8cf754a473f9f4$var$isRTL() ? 'left' : 'right',
    BOTTOM: 'bottom',
    LEFT: $fa8cf754a473f9f4$var$isRTL() ? 'right' : 'left'
};
const $fa8cf754a473f9f4$var$Default$3 = {
    allowList: $fa8cf754a473f9f4$var$DefaultAllowlist,
    animation: true,
    boundary: 'clippingParents',
    container: false,
    customClass: '',
    delay: 0,
    fallbackPlacements: [
        'top',
        'right',
        'bottom',
        'left'
    ],
    html: false,
    offset: [
        0,
        6
    ],
    placement: 'top',
    popperConfig: null,
    sanitize: true,
    sanitizeFn: null,
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    title: '',
    trigger: 'hover focus'
};
const $fa8cf754a473f9f4$var$DefaultType$3 = {
    allowList: 'object',
    animation: 'boolean',
    boundary: '(string|element)',
    container: '(string|element|boolean)',
    customClass: '(string|function)',
    delay: '(number|object)',
    fallbackPlacements: 'array',
    html: 'boolean',
    offset: '(array|string|function)',
    placement: '(string|function)',
    popperConfig: '(null|object|function)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    selector: '(string|boolean)',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string'
};
/**
 * Class definition
 */ class $fa8cf754a473f9f4$export$28c660c63b792dea extends $fa8cf754a473f9f4$var$BaseComponent {
    constructor(element, config){
        if (typeof $de43c17a09f8c36d$exports === 'undefined') throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org/docs/v2/)');
        super(element, config);
        // Private
        this._isEnabled = true;
        this._timeout = 0;
        this._isHovered = null;
        this._activeTrigger = {};
        this._popper = null;
        this._templateFactory = null;
        this._newContent = null;
        // Protected
        this.tip = null;
        this._setListeners();
        if (!this._config.selector) this._fixTitle();
    }
    // Getters
    static get Default() {
        return $fa8cf754a473f9f4$var$Default$3;
    }
    static get DefaultType() {
        return $fa8cf754a473f9f4$var$DefaultType$3;
    }
    static get NAME() {
        return $fa8cf754a473f9f4$var$NAME$4;
    }
    // Public
    enable() {
        this._isEnabled = true;
    }
    disable() {
        this._isEnabled = false;
    }
    toggleEnabled() {
        this._isEnabled = !this._isEnabled;
    }
    toggle() {
        if (!this._isEnabled) return;
        if (this._isShown()) {
            this._leave();
            return;
        }
        this._enter();
    }
    dispose() {
        clearTimeout(this._timeout);
        $fa8cf754a473f9f4$var$EventHandler.off(this._element.closest($fa8cf754a473f9f4$var$SELECTOR_MODAL), $fa8cf754a473f9f4$var$EVENT_MODAL_HIDE, this._hideModalHandler);
        if (this._element.getAttribute('data-bs-original-title')) this._element.setAttribute('title', this._element.getAttribute('data-bs-original-title'));
        this._disposePopper();
        super.dispose();
    }
    show() {
        if (this._element.style.display === 'none') throw new Error('Please use show on visible elements');
        if (!(this._isWithContent() && this._isEnabled)) return;
        const showEvent = $fa8cf754a473f9f4$var$EventHandler.trigger(this._element, this.constructor.eventName($fa8cf754a473f9f4$var$EVENT_SHOW$2));
        const shadowRoot = $fa8cf754a473f9f4$var$findShadowRoot(this._element);
        const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);
        if (showEvent.defaultPrevented || !isInTheDom) return;
        // TODO: v6 remove this or make it optional
        this._disposePopper();
        const tip = this._getTipElement();
        this._element.setAttribute('aria-describedby', tip.getAttribute('id'));
        const { container: container } = this._config;
        if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
            container.append(tip);
            $fa8cf754a473f9f4$var$EventHandler.trigger(this._element, this.constructor.eventName($fa8cf754a473f9f4$var$EVENT_INSERTED));
        }
        this._popper = this._createPopper(tip);
        tip.classList.add($fa8cf754a473f9f4$var$CLASS_NAME_SHOW$2);
        // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
        if ('ontouchstart' in document.documentElement) for (const element of [].concat(...document.body.children))$fa8cf754a473f9f4$var$EventHandler.on(element, 'mouseover', $fa8cf754a473f9f4$var$noop);
        const complete = ()=>{
            $fa8cf754a473f9f4$var$EventHandler.trigger(this._element, this.constructor.eventName($fa8cf754a473f9f4$var$EVENT_SHOWN$2));
            if (this._isHovered === false) this._leave();
            this._isHovered = false;
        };
        this._queueCallback(complete, this.tip, this._isAnimated());
    }
    hide() {
        if (!this._isShown()) return;
        const hideEvent = $fa8cf754a473f9f4$var$EventHandler.trigger(this._element, this.constructor.eventName($fa8cf754a473f9f4$var$EVENT_HIDE$2));
        if (hideEvent.defaultPrevented) return;
        const tip = this._getTipElement();
        tip.classList.remove($fa8cf754a473f9f4$var$CLASS_NAME_SHOW$2);
        // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support
        if ('ontouchstart' in document.documentElement) for (const element of [].concat(...document.body.children))$fa8cf754a473f9f4$var$EventHandler.off(element, 'mouseover', $fa8cf754a473f9f4$var$noop);
        this._activeTrigger[$fa8cf754a473f9f4$var$TRIGGER_CLICK] = false;
        this._activeTrigger[$fa8cf754a473f9f4$var$TRIGGER_FOCUS] = false;
        this._activeTrigger[$fa8cf754a473f9f4$var$TRIGGER_HOVER] = false;
        this._isHovered = null; // it is a trick to support manual triggering
        const complete = ()=>{
            if (this._isWithActiveTrigger()) return;
            if (!this._isHovered) this._disposePopper();
            this._element.removeAttribute('aria-describedby');
            $fa8cf754a473f9f4$var$EventHandler.trigger(this._element, this.constructor.eventName($fa8cf754a473f9f4$var$EVENT_HIDDEN$2));
        };
        this._queueCallback(complete, this.tip, this._isAnimated());
    }
    update() {
        if (this._popper) this._popper.update();
    }
    // Protected
    _isWithContent() {
        return Boolean(this._getTitle());
    }
    _getTipElement() {
        if (!this.tip) this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
        return this.tip;
    }
    _createTipElement(content) {
        const tip = this._getTemplateFactory(content).toHtml();
        // TODO: remove this check in v6
        if (!tip) return null;
        tip.classList.remove($fa8cf754a473f9f4$var$CLASS_NAME_FADE$2, $fa8cf754a473f9f4$var$CLASS_NAME_SHOW$2);
        // TODO: v6 the following can be achieved with CSS only
        tip.classList.add(`bs-${this.constructor.NAME}-auto`);
        const tipId = $fa8cf754a473f9f4$var$getUID(this.constructor.NAME).toString();
        tip.setAttribute('id', tipId);
        if (this._isAnimated()) tip.classList.add($fa8cf754a473f9f4$var$CLASS_NAME_FADE$2);
        return tip;
    }
    setContent(content) {
        this._newContent = content;
        if (this._isShown()) {
            this._disposePopper();
            this.show();
        }
    }
    _getTemplateFactory(content) {
        if (this._templateFactory) this._templateFactory.changeContent(content);
        else this._templateFactory = new $fa8cf754a473f9f4$var$TemplateFactory({
            ...this._config,
            content: // the `content` var has to be after `this._config`
            // to override config.content in case of popover
            content,
            extraClass: this._resolvePossibleFunction(this._config.customClass)
        });
        return this._templateFactory;
    }
    _getContentForTemplate() {
        return {
            [$fa8cf754a473f9f4$var$SELECTOR_TOOLTIP_INNER]: this._getTitle()
        };
    }
    _getTitle() {
        return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute('data-bs-original-title');
    }
    // Private
    _initializeOnDelegatedTarget(event) {
        return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
    }
    _isAnimated() {
        return this._config.animation || this.tip && this.tip.classList.contains($fa8cf754a473f9f4$var$CLASS_NAME_FADE$2);
    }
    _isShown() {
        return this.tip && this.tip.classList.contains($fa8cf754a473f9f4$var$CLASS_NAME_SHOW$2);
    }
    _createPopper(tip) {
        const placement = $fa8cf754a473f9f4$var$execute(this._config.placement, [
            this,
            tip,
            this._element
        ]);
        const attachment = $fa8cf754a473f9f4$var$AttachmentMap[placement.toUpperCase()];
        return $de43c17a09f8c36d$exports.createPopper(this._element, tip, this._getPopperConfig(attachment));
    }
    _getOffset() {
        const { offset: offset } = this._config;
        if (typeof offset === 'string') return offset.split(',').map((value)=>Number.parseInt(value, 10));
        if (typeof offset === 'function') return (popperData)=>offset(popperData, this._element);
        return offset;
    }
    _resolvePossibleFunction(arg) {
        return $fa8cf754a473f9f4$var$execute(arg, [
            this._element,
            this._element
        ]);
    }
    _getPopperConfig(attachment) {
        const defaultBsPopperConfig = {
            placement: attachment,
            modifiers: [
                {
                    name: 'flip',
                    options: {
                        fallbackPlacements: this._config.fallbackPlacements
                    }
                },
                {
                    name: 'offset',
                    options: {
                        offset: this._getOffset()
                    }
                },
                {
                    name: 'preventOverflow',
                    options: {
                        boundary: this._config.boundary
                    }
                },
                {
                    name: 'arrow',
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                },
                {
                    name: 'preSetPlacement',
                    enabled: true,
                    phase: 'beforeMain',
                    fn: (data)=>{
                        // Pre-set Popper's placement attribute in order to read the arrow sizes properly.
                        // Otherwise, Popper mixes up the width and height dimensions since the initial arrow style is for top placement
                        this._getTipElement().setAttribute('data-popper-placement', data.state.placement);
                    }
                }
            ]
        };
        return {
            ...defaultBsPopperConfig,
            ...$fa8cf754a473f9f4$var$execute(this._config.popperConfig, [
                undefined,
                defaultBsPopperConfig
            ])
        };
    }
    _setListeners() {
        const triggers = this._config.trigger.split(' ');
        for (const trigger of triggers){
            if (trigger === 'click') $fa8cf754a473f9f4$var$EventHandler.on(this._element, this.constructor.eventName($fa8cf754a473f9f4$var$EVENT_CLICK$1), this._config.selector, (event)=>{
                const context = this._initializeOnDelegatedTarget(event);
                context._activeTrigger[$fa8cf754a473f9f4$var$TRIGGER_CLICK] = !(context._isShown() && context._activeTrigger[$fa8cf754a473f9f4$var$TRIGGER_CLICK]);
                context.toggle();
            });
            else if (trigger !== $fa8cf754a473f9f4$var$TRIGGER_MANUAL) {
                const eventIn = trigger === $fa8cf754a473f9f4$var$TRIGGER_HOVER ? this.constructor.eventName($fa8cf754a473f9f4$var$EVENT_MOUSEENTER) : this.constructor.eventName($fa8cf754a473f9f4$var$EVENT_FOCUSIN$1);
                const eventOut = trigger === $fa8cf754a473f9f4$var$TRIGGER_HOVER ? this.constructor.eventName($fa8cf754a473f9f4$var$EVENT_MOUSELEAVE) : this.constructor.eventName($fa8cf754a473f9f4$var$EVENT_FOCUSOUT$1);
                $fa8cf754a473f9f4$var$EventHandler.on(this._element, eventIn, this._config.selector, (event)=>{
                    const context = this._initializeOnDelegatedTarget(event);
                    context._activeTrigger[event.type === 'focusin' ? $fa8cf754a473f9f4$var$TRIGGER_FOCUS : $fa8cf754a473f9f4$var$TRIGGER_HOVER] = true;
                    context._enter();
                });
                $fa8cf754a473f9f4$var$EventHandler.on(this._element, eventOut, this._config.selector, (event)=>{
                    const context = this._initializeOnDelegatedTarget(event);
                    context._activeTrigger[event.type === 'focusout' ? $fa8cf754a473f9f4$var$TRIGGER_FOCUS : $fa8cf754a473f9f4$var$TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
                    context._leave();
                });
            }
        }
        this._hideModalHandler = ()=>{
            if (this._element) this.hide();
        };
        $fa8cf754a473f9f4$var$EventHandler.on(this._element.closest($fa8cf754a473f9f4$var$SELECTOR_MODAL), $fa8cf754a473f9f4$var$EVENT_MODAL_HIDE, this._hideModalHandler);
    }
    _fixTitle() {
        const title = this._element.getAttribute('title');
        if (!title) return;
        if (!this._element.getAttribute('aria-label') && !this._element.textContent.trim()) this._element.setAttribute('aria-label', title);
        this._element.setAttribute('data-bs-original-title', title); // DO NOT USE IT. Is only for backwards compatibility
        this._element.removeAttribute('title');
    }
    _enter() {
        if (this._isShown() || this._isHovered) {
            this._isHovered = true;
            return;
        }
        this._isHovered = true;
        this._setTimeout(()=>{
            if (this._isHovered) this.show();
        }, this._config.delay.show);
    }
    _leave() {
        if (this._isWithActiveTrigger()) return;
        this._isHovered = false;
        this._setTimeout(()=>{
            if (!this._isHovered) this.hide();
        }, this._config.delay.hide);
    }
    _setTimeout(handler, timeout) {
        clearTimeout(this._timeout);
        this._timeout = setTimeout(handler, timeout);
    }
    _isWithActiveTrigger() {
        return Object.values(this._activeTrigger).includes(true);
    }
    _getConfig(config) {
        const dataAttributes = $fa8cf754a473f9f4$var$Manipulator.getDataAttributes(this._element);
        for (const dataAttribute of Object.keys(dataAttributes))if ($fa8cf754a473f9f4$var$DISALLOWED_ATTRIBUTES.has(dataAttribute)) delete dataAttributes[dataAttribute];
        config = {
            ...dataAttributes,
            ...typeof config === 'object' && config ? config : {}
        };
        config = this._mergeConfigObj(config);
        config = this._configAfterMerge(config);
        this._typeCheckConfig(config);
        return config;
    }
    _configAfterMerge(config) {
        config.container = config.container === false ? document.body : $fa8cf754a473f9f4$var$getElement(config.container);
        if (typeof config.delay === 'number') config.delay = {
            show: config.delay,
            hide: config.delay
        };
        if (typeof config.title === 'number') config.title = config.title.toString();
        if (typeof config.content === 'number') config.content = config.content.toString();
        return config;
    }
    _getDelegateConfig() {
        const config = {};
        for (const [key, value] of Object.entries(this._config))if (this.constructor.Default[key] !== value) config[key] = value;
        config.selector = false;
        config.trigger = 'manual';
        // In the future can be replaced with:
        // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
        // `Object.fromEntries(keysWithDifferentValues)`
        return config;
    }
    _disposePopper() {
        if (this._popper) {
            this._popper.destroy();
            this._popper = null;
        }
        if (this.tip) {
            this.tip.remove();
            this.tip = null;
        }
    }
    // Static
    static jQueryInterface(config) {
        return this.each(function() {
            const data = $fa8cf754a473f9f4$export$28c660c63b792dea.getOrCreateInstance(this, config);
            if (typeof config !== 'string') return;
            if (typeof data[config] === 'undefined') throw new TypeError(`No method named "${config}"`);
            data[config]();
        });
    }
}
/**
 * jQuery
 */ $fa8cf754a473f9f4$var$defineJQueryPlugin($fa8cf754a473f9f4$export$28c660c63b792dea);
/**
 * --------------------------------------------------------------------------
 * Bootstrap popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const $fa8cf754a473f9f4$var$NAME$3 = 'popover';
const $fa8cf754a473f9f4$var$SELECTOR_TITLE = '.popover-header';
const $fa8cf754a473f9f4$var$SELECTOR_CONTENT = '.popover-body';
const $fa8cf754a473f9f4$var$Default$2 = {
    ...$fa8cf754a473f9f4$export$28c660c63b792dea.Default,
    content: '',
    offset: [
        0,
        8
    ],
    placement: 'right',
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    trigger: 'click'
};
const $fa8cf754a473f9f4$var$DefaultType$2 = {
    ...$fa8cf754a473f9f4$export$28c660c63b792dea.DefaultType,
    content: '(null|string|element|function)'
};
/**
 * Class definition
 */ class $fa8cf754a473f9f4$export$5b6b19405a83ff9d extends $fa8cf754a473f9f4$export$28c660c63b792dea {
    // Getters
    static get Default() {
        return $fa8cf754a473f9f4$var$Default$2;
    }
    static get DefaultType() {
        return $fa8cf754a473f9f4$var$DefaultType$2;
    }
    static get NAME() {
        return $fa8cf754a473f9f4$var$NAME$3;
    }
    // Overrides
    _isWithContent() {
        return this._getTitle() || this._getContent();
    }
    // Private
    _getContentForTemplate() {
        return {
            [$fa8cf754a473f9f4$var$SELECTOR_TITLE]: this._getTitle(),
            [$fa8cf754a473f9f4$var$SELECTOR_CONTENT]: this._getContent()
        };
    }
    _getContent() {
        return this._resolvePossibleFunction(this._config.content);
    }
    // Static
    static jQueryInterface(config) {
        return this.each(function() {
            const data = $fa8cf754a473f9f4$export$5b6b19405a83ff9d.getOrCreateInstance(this, config);
            if (typeof config !== 'string') return;
            if (typeof data[config] === 'undefined') throw new TypeError(`No method named "${config}"`);
            data[config]();
        });
    }
}
/**
 * jQuery
 */ $fa8cf754a473f9f4$var$defineJQueryPlugin($fa8cf754a473f9f4$export$5b6b19405a83ff9d);
/**
 * --------------------------------------------------------------------------
 * Bootstrap scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const $fa8cf754a473f9f4$var$NAME$2 = 'scrollspy';
const $fa8cf754a473f9f4$var$DATA_KEY$2 = 'bs.scrollspy';
const $fa8cf754a473f9f4$var$EVENT_KEY$2 = `.${$fa8cf754a473f9f4$var$DATA_KEY$2}`;
const $fa8cf754a473f9f4$var$DATA_API_KEY = '.data-api';
const $fa8cf754a473f9f4$var$EVENT_ACTIVATE = `activate${$fa8cf754a473f9f4$var$EVENT_KEY$2}`;
const $fa8cf754a473f9f4$var$EVENT_CLICK = `click${$fa8cf754a473f9f4$var$EVENT_KEY$2}`;
const $fa8cf754a473f9f4$var$EVENT_LOAD_DATA_API$1 = `load${$fa8cf754a473f9f4$var$EVENT_KEY$2}${$fa8cf754a473f9f4$var$DATA_API_KEY}`;
const $fa8cf754a473f9f4$var$CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
const $fa8cf754a473f9f4$var$CLASS_NAME_ACTIVE$1 = 'active';
const $fa8cf754a473f9f4$var$SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
const $fa8cf754a473f9f4$var$SELECTOR_TARGET_LINKS = '[href]';
const $fa8cf754a473f9f4$var$SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
const $fa8cf754a473f9f4$var$SELECTOR_NAV_LINKS = '.nav-link';
const $fa8cf754a473f9f4$var$SELECTOR_NAV_ITEMS = '.nav-item';
const $fa8cf754a473f9f4$var$SELECTOR_LIST_ITEMS = '.list-group-item';
const $fa8cf754a473f9f4$var$SELECTOR_LINK_ITEMS = `${$fa8cf754a473f9f4$var$SELECTOR_NAV_LINKS}, ${$fa8cf754a473f9f4$var$SELECTOR_NAV_ITEMS} > ${$fa8cf754a473f9f4$var$SELECTOR_NAV_LINKS}, ${$fa8cf754a473f9f4$var$SELECTOR_LIST_ITEMS}`;
const $fa8cf754a473f9f4$var$SELECTOR_DROPDOWN = '.dropdown';
const $fa8cf754a473f9f4$var$SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
const $fa8cf754a473f9f4$var$Default$1 = {
    offset: null,
    // TODO: v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: '0px 0px -25%',
    smoothScroll: false,
    target: null,
    threshold: [
        0.1,
        0.5,
        1
    ]
};
const $fa8cf754a473f9f4$var$DefaultType$1 = {
    offset: '(number|null)',
    // TODO v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: 'string',
    smoothScroll: 'boolean',
    target: 'element',
    threshold: 'array'
};
/**
 * Class definition
 */ class $fa8cf754a473f9f4$export$a6472a5298a374be extends $fa8cf754a473f9f4$var$BaseComponent {
    constructor(element, config){
        super(element, config);
        // this._element is the observablesContainer and config.target the menu links wrapper
        this._targetLinks = new Map();
        this._observableSections = new Map();
        this._rootElement = getComputedStyle(this._element).overflowY === 'visible' ? null : this._element;
        this._activeTarget = null;
        this._observer = null;
        this._previousScrollData = {
            visibleEntryTop: 0,
            parentScrollTop: 0
        };
        this.refresh(); // initialize
    }
    // Getters
    static get Default() {
        return $fa8cf754a473f9f4$var$Default$1;
    }
    static get DefaultType() {
        return $fa8cf754a473f9f4$var$DefaultType$1;
    }
    static get NAME() {
        return $fa8cf754a473f9f4$var$NAME$2;
    }
    // Public
    refresh() {
        this._initializeTargetsAndObservables();
        this._maybeEnableSmoothScroll();
        if (this._observer) this._observer.disconnect();
        else this._observer = this._getNewObserver();
        for (const section of this._observableSections.values())this._observer.observe(section);
    }
    dispose() {
        this._observer.disconnect();
        super.dispose();
    }
    // Private
    _configAfterMerge(config) {
        // TODO: on v6 target should be given explicitly & remove the {target: 'ss-target'} case
        config.target = $fa8cf754a473f9f4$var$getElement(config.target) || document.body;
        // TODO: v6 Only for backwards compatibility reasons. Use rootMargin only
        config.rootMargin = config.offset ? `${config.offset}px 0px -30%` : config.rootMargin;
        if (typeof config.threshold === 'string') config.threshold = config.threshold.split(',').map((value)=>Number.parseFloat(value));
        return config;
    }
    _maybeEnableSmoothScroll() {
        if (!this._config.smoothScroll) return;
        // unregister any previous listeners
        $fa8cf754a473f9f4$var$EventHandler.off(this._config.target, $fa8cf754a473f9f4$var$EVENT_CLICK);
        $fa8cf754a473f9f4$var$EventHandler.on(this._config.target, $fa8cf754a473f9f4$var$EVENT_CLICK, $fa8cf754a473f9f4$var$SELECTOR_TARGET_LINKS, (event)=>{
            const observableSection = this._observableSections.get(event.target.hash);
            if (observableSection) {
                event.preventDefault();
                const root = this._rootElement || window;
                const height = observableSection.offsetTop - this._element.offsetTop;
                if (root.scrollTo) {
                    root.scrollTo({
                        top: height,
                        behavior: 'smooth'
                    });
                    return;
                }
                // Chrome 60 doesn't support `scrollTo`
                root.scrollTop = height;
            }
        });
    }
    _getNewObserver() {
        const options = {
            root: this._rootElement,
            threshold: this._config.threshold,
            rootMargin: this._config.rootMargin
        };
        return new IntersectionObserver((entries)=>this._observerCallback(entries), options);
    }
    // The logic of selection
    _observerCallback(entries) {
        const targetElement = (entry)=>this._targetLinks.get(`#${entry.target.id}`);
        const activate = (entry)=>{
            this._previousScrollData.visibleEntryTop = entry.target.offsetTop;
            this._process(targetElement(entry));
        };
        const parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
        const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
        this._previousScrollData.parentScrollTop = parentScrollTop;
        for (const entry of entries){
            if (!entry.isIntersecting) {
                this._activeTarget = null;
                this._clearActiveClass(targetElement(entry));
                continue;
            }
            const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop;
            // if we are scrolling down, pick the bigger offsetTop
            if (userScrollsDown && entryIsLowerThanPrevious) {
                activate(entry);
                // if parent isn't scrolled, let's keep the first visible item, breaking the iteration
                if (!parentScrollTop) return;
                continue;
            }
            // if we are scrolling up, pick the smallest offsetTop
            if (!userScrollsDown && !entryIsLowerThanPrevious) activate(entry);
        }
    }
    _initializeTargetsAndObservables() {
        this._targetLinks = new Map();
        this._observableSections = new Map();
        const targetLinks = $fa8cf754a473f9f4$var$SelectorEngine.find($fa8cf754a473f9f4$var$SELECTOR_TARGET_LINKS, this._config.target);
        for (const anchor of targetLinks){
            // ensure that the anchor has an id and is not disabled
            if (!anchor.hash || $fa8cf754a473f9f4$var$isDisabled(anchor)) continue;
            const observableSection = $fa8cf754a473f9f4$var$SelectorEngine.findOne(decodeURI(anchor.hash), this._element);
            // ensure that the observableSection exists & is visible
            if ($fa8cf754a473f9f4$var$isVisible(observableSection)) {
                this._targetLinks.set(decodeURI(anchor.hash), anchor);
                this._observableSections.set(anchor.hash, observableSection);
            }
        }
    }
    _process(target) {
        if (this._activeTarget === target) return;
        this._clearActiveClass(this._config.target);
        this._activeTarget = target;
        target.classList.add($fa8cf754a473f9f4$var$CLASS_NAME_ACTIVE$1);
        this._activateParents(target);
        $fa8cf754a473f9f4$var$EventHandler.trigger(this._element, $fa8cf754a473f9f4$var$EVENT_ACTIVATE, {
            relatedTarget: target
        });
    }
    _activateParents(target) {
        // Activate dropdown parents
        if (target.classList.contains($fa8cf754a473f9f4$var$CLASS_NAME_DROPDOWN_ITEM)) {
            $fa8cf754a473f9f4$var$SelectorEngine.findOne($fa8cf754a473f9f4$var$SELECTOR_DROPDOWN_TOGGLE$1, target.closest($fa8cf754a473f9f4$var$SELECTOR_DROPDOWN)).classList.add($fa8cf754a473f9f4$var$CLASS_NAME_ACTIVE$1);
            return;
        }
        for (const listGroup of $fa8cf754a473f9f4$var$SelectorEngine.parents(target, $fa8cf754a473f9f4$var$SELECTOR_NAV_LIST_GROUP))// Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
        for (const item of $fa8cf754a473f9f4$var$SelectorEngine.prev(listGroup, $fa8cf754a473f9f4$var$SELECTOR_LINK_ITEMS))item.classList.add($fa8cf754a473f9f4$var$CLASS_NAME_ACTIVE$1);
    }
    _clearActiveClass(parent) {
        parent.classList.remove($fa8cf754a473f9f4$var$CLASS_NAME_ACTIVE$1);
        const activeNodes = $fa8cf754a473f9f4$var$SelectorEngine.find(`${$fa8cf754a473f9f4$var$SELECTOR_TARGET_LINKS}.${$fa8cf754a473f9f4$var$CLASS_NAME_ACTIVE$1}`, parent);
        for (const node of activeNodes)node.classList.remove($fa8cf754a473f9f4$var$CLASS_NAME_ACTIVE$1);
    }
    // Static
    static jQueryInterface(config) {
        return this.each(function() {
            const data = $fa8cf754a473f9f4$export$a6472a5298a374be.getOrCreateInstance(this, config);
            if (typeof config !== 'string') return;
            if (data[config] === undefined || config.startsWith('_') || config === 'constructor') throw new TypeError(`No method named "${config}"`);
            data[config]();
        });
    }
}
/**
 * Data API implementation
 */ $fa8cf754a473f9f4$var$EventHandler.on(window, $fa8cf754a473f9f4$var$EVENT_LOAD_DATA_API$1, ()=>{
    for (const spy of $fa8cf754a473f9f4$var$SelectorEngine.find($fa8cf754a473f9f4$var$SELECTOR_DATA_SPY))$fa8cf754a473f9f4$export$a6472a5298a374be.getOrCreateInstance(spy);
});
/**
 * jQuery
 */ $fa8cf754a473f9f4$var$defineJQueryPlugin($fa8cf754a473f9f4$export$a6472a5298a374be);
/**
 * --------------------------------------------------------------------------
 * Bootstrap tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const $fa8cf754a473f9f4$var$NAME$1 = 'tab';
const $fa8cf754a473f9f4$var$DATA_KEY$1 = 'bs.tab';
const $fa8cf754a473f9f4$var$EVENT_KEY$1 = `.${$fa8cf754a473f9f4$var$DATA_KEY$1}`;
const $fa8cf754a473f9f4$var$EVENT_HIDE$1 = `hide${$fa8cf754a473f9f4$var$EVENT_KEY$1}`;
const $fa8cf754a473f9f4$var$EVENT_HIDDEN$1 = `hidden${$fa8cf754a473f9f4$var$EVENT_KEY$1}`;
const $fa8cf754a473f9f4$var$EVENT_SHOW$1 = `show${$fa8cf754a473f9f4$var$EVENT_KEY$1}`;
const $fa8cf754a473f9f4$var$EVENT_SHOWN$1 = `shown${$fa8cf754a473f9f4$var$EVENT_KEY$1}`;
const $fa8cf754a473f9f4$var$EVENT_CLICK_DATA_API = `click${$fa8cf754a473f9f4$var$EVENT_KEY$1}`;
const $fa8cf754a473f9f4$var$EVENT_KEYDOWN = `keydown${$fa8cf754a473f9f4$var$EVENT_KEY$1}`;
const $fa8cf754a473f9f4$var$EVENT_LOAD_DATA_API = `load${$fa8cf754a473f9f4$var$EVENT_KEY$1}`;
const $fa8cf754a473f9f4$var$ARROW_LEFT_KEY = 'ArrowLeft';
const $fa8cf754a473f9f4$var$ARROW_RIGHT_KEY = 'ArrowRight';
const $fa8cf754a473f9f4$var$ARROW_UP_KEY = 'ArrowUp';
const $fa8cf754a473f9f4$var$ARROW_DOWN_KEY = 'ArrowDown';
const $fa8cf754a473f9f4$var$HOME_KEY = 'Home';
const $fa8cf754a473f9f4$var$END_KEY = 'End';
const $fa8cf754a473f9f4$var$CLASS_NAME_ACTIVE = 'active';
const $fa8cf754a473f9f4$var$CLASS_NAME_FADE$1 = 'fade';
const $fa8cf754a473f9f4$var$CLASS_NAME_SHOW$1 = 'show';
const $fa8cf754a473f9f4$var$CLASS_DROPDOWN = 'dropdown';
const $fa8cf754a473f9f4$var$SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
const $fa8cf754a473f9f4$var$SELECTOR_DROPDOWN_MENU = '.dropdown-menu';
const $fa8cf754a473f9f4$var$NOT_SELECTOR_DROPDOWN_TOGGLE = `:not(${$fa8cf754a473f9f4$var$SELECTOR_DROPDOWN_TOGGLE})`;
const $fa8cf754a473f9f4$var$SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
const $fa8cf754a473f9f4$var$SELECTOR_OUTER = '.nav-item, .list-group-item';
const $fa8cf754a473f9f4$var$SELECTOR_INNER = `.nav-link${$fa8cf754a473f9f4$var$NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${$fa8cf754a473f9f4$var$NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${$fa8cf754a473f9f4$var$NOT_SELECTOR_DROPDOWN_TOGGLE}`;
const $fa8cf754a473f9f4$var$SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]'; // TODO: could only be `tab` in v6
const $fa8cf754a473f9f4$var$SELECTOR_INNER_ELEM = `${$fa8cf754a473f9f4$var$SELECTOR_INNER}, ${$fa8cf754a473f9f4$var$SELECTOR_DATA_TOGGLE}`;
const $fa8cf754a473f9f4$var$SELECTOR_DATA_TOGGLE_ACTIVE = `.${$fa8cf754a473f9f4$var$CLASS_NAME_ACTIVE}[data-bs-toggle="tab"], .${$fa8cf754a473f9f4$var$CLASS_NAME_ACTIVE}[data-bs-toggle="pill"], .${$fa8cf754a473f9f4$var$CLASS_NAME_ACTIVE}[data-bs-toggle="list"]`;
/**
 * Class definition
 */ class $fa8cf754a473f9f4$export$3e41faf802a29e71 extends $fa8cf754a473f9f4$var$BaseComponent {
    constructor(element){
        super(element);
        this._parent = this._element.closest($fa8cf754a473f9f4$var$SELECTOR_TAB_PANEL);
        if (!this._parent) return;
        // Set up initial aria attributes
        this._setInitialAttributes(this._parent, this._getChildren());
        $fa8cf754a473f9f4$var$EventHandler.on(this._element, $fa8cf754a473f9f4$var$EVENT_KEYDOWN, (event)=>this._keydown(event));
    }
    // Getters
    static get NAME() {
        return $fa8cf754a473f9f4$var$NAME$1;
    }
    // Public
    show() {
        // Shows this elem and deactivate the active sibling if exists
        const innerElem = this._element;
        if (this._elemIsActive(innerElem)) return;
        // Search for active tab on same parent to deactivate it
        const active = this._getActiveElem();
        const hideEvent = active ? $fa8cf754a473f9f4$var$EventHandler.trigger(active, $fa8cf754a473f9f4$var$EVENT_HIDE$1, {
            relatedTarget: innerElem
        }) : null;
        const showEvent = $fa8cf754a473f9f4$var$EventHandler.trigger(innerElem, $fa8cf754a473f9f4$var$EVENT_SHOW$1, {
            relatedTarget: active
        });
        if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) return;
        this._deactivate(active, innerElem);
        this._activate(innerElem, active);
    }
    // Private
    _activate(element, relatedElem) {
        if (!element) return;
        element.classList.add($fa8cf754a473f9f4$var$CLASS_NAME_ACTIVE);
        this._activate($fa8cf754a473f9f4$var$SelectorEngine.getElementFromSelector(element)); // Search and activate/show the proper section
        const complete = ()=>{
            if (element.getAttribute('role') !== 'tab') {
                element.classList.add($fa8cf754a473f9f4$var$CLASS_NAME_SHOW$1);
                return;
            }
            element.removeAttribute('tabindex');
            element.setAttribute('aria-selected', true);
            this._toggleDropDown(element, true);
            $fa8cf754a473f9f4$var$EventHandler.trigger(element, $fa8cf754a473f9f4$var$EVENT_SHOWN$1, {
                relatedTarget: relatedElem
            });
        };
        this._queueCallback(complete, element, element.classList.contains($fa8cf754a473f9f4$var$CLASS_NAME_FADE$1));
    }
    _deactivate(element, relatedElem) {
        if (!element) return;
        element.classList.remove($fa8cf754a473f9f4$var$CLASS_NAME_ACTIVE);
        element.blur();
        this._deactivate($fa8cf754a473f9f4$var$SelectorEngine.getElementFromSelector(element)); // Search and deactivate the shown section too
        const complete = ()=>{
            if (element.getAttribute('role') !== 'tab') {
                element.classList.remove($fa8cf754a473f9f4$var$CLASS_NAME_SHOW$1);
                return;
            }
            element.setAttribute('aria-selected', false);
            element.setAttribute('tabindex', '-1');
            this._toggleDropDown(element, false);
            $fa8cf754a473f9f4$var$EventHandler.trigger(element, $fa8cf754a473f9f4$var$EVENT_HIDDEN$1, {
                relatedTarget: relatedElem
            });
        };
        this._queueCallback(complete, element, element.classList.contains($fa8cf754a473f9f4$var$CLASS_NAME_FADE$1));
    }
    _keydown(event) {
        if (![
            $fa8cf754a473f9f4$var$ARROW_LEFT_KEY,
            $fa8cf754a473f9f4$var$ARROW_RIGHT_KEY,
            $fa8cf754a473f9f4$var$ARROW_UP_KEY,
            $fa8cf754a473f9f4$var$ARROW_DOWN_KEY,
            $fa8cf754a473f9f4$var$HOME_KEY,
            $fa8cf754a473f9f4$var$END_KEY
        ].includes(event.key)) return;
        event.stopPropagation(); // stopPropagation/preventDefault both added to support up/down keys without scrolling the page
        event.preventDefault();
        const children = this._getChildren().filter((element)=>!$fa8cf754a473f9f4$var$isDisabled(element));
        let nextActiveElement;
        if ([
            $fa8cf754a473f9f4$var$HOME_KEY,
            $fa8cf754a473f9f4$var$END_KEY
        ].includes(event.key)) nextActiveElement = children[event.key === $fa8cf754a473f9f4$var$HOME_KEY ? 0 : children.length - 1];
        else {
            const isNext = [
                $fa8cf754a473f9f4$var$ARROW_RIGHT_KEY,
                $fa8cf754a473f9f4$var$ARROW_DOWN_KEY
            ].includes(event.key);
            nextActiveElement = $fa8cf754a473f9f4$var$getNextActiveElement(children, event.target, isNext, true);
        }
        if (nextActiveElement) {
            nextActiveElement.focus({
                preventScroll: true
            });
            $fa8cf754a473f9f4$export$3e41faf802a29e71.getOrCreateInstance(nextActiveElement).show();
        }
    }
    _getChildren() {
        // collection of inner elements
        return $fa8cf754a473f9f4$var$SelectorEngine.find($fa8cf754a473f9f4$var$SELECTOR_INNER_ELEM, this._parent);
    }
    _getActiveElem() {
        return this._getChildren().find((child)=>this._elemIsActive(child)) || null;
    }
    _setInitialAttributes(parent, children) {
        this._setAttributeIfNotExists(parent, 'role', 'tablist');
        for (const child of children)this._setInitialAttributesOnChild(child);
    }
    _setInitialAttributesOnChild(child) {
        child = this._getInnerElement(child);
        const isActive = this._elemIsActive(child);
        const outerElem = this._getOuterElement(child);
        child.setAttribute('aria-selected', isActive);
        if (outerElem !== child) this._setAttributeIfNotExists(outerElem, 'role', 'presentation');
        if (!isActive) child.setAttribute('tabindex', '-1');
        this._setAttributeIfNotExists(child, 'role', 'tab');
        // set attributes to the related panel too
        this._setInitialAttributesOnTargetPanel(child);
    }
    _setInitialAttributesOnTargetPanel(child) {
        const target = $fa8cf754a473f9f4$var$SelectorEngine.getElementFromSelector(child);
        if (!target) return;
        this._setAttributeIfNotExists(target, 'role', 'tabpanel');
        if (child.id) this._setAttributeIfNotExists(target, 'aria-labelledby', `${child.id}`);
    }
    _toggleDropDown(element, open) {
        const outerElem = this._getOuterElement(element);
        if (!outerElem.classList.contains($fa8cf754a473f9f4$var$CLASS_DROPDOWN)) return;
        const toggle = (selector, className)=>{
            const element = $fa8cf754a473f9f4$var$SelectorEngine.findOne(selector, outerElem);
            if (element) element.classList.toggle(className, open);
        };
        toggle($fa8cf754a473f9f4$var$SELECTOR_DROPDOWN_TOGGLE, $fa8cf754a473f9f4$var$CLASS_NAME_ACTIVE);
        toggle($fa8cf754a473f9f4$var$SELECTOR_DROPDOWN_MENU, $fa8cf754a473f9f4$var$CLASS_NAME_SHOW$1);
        outerElem.setAttribute('aria-expanded', open);
    }
    _setAttributeIfNotExists(element, attribute, value) {
        if (!element.hasAttribute(attribute)) element.setAttribute(attribute, value);
    }
    _elemIsActive(elem) {
        return elem.classList.contains($fa8cf754a473f9f4$var$CLASS_NAME_ACTIVE);
    }
    // Try to get the inner element (usually the .nav-link)
    _getInnerElement(elem) {
        return elem.matches($fa8cf754a473f9f4$var$SELECTOR_INNER_ELEM) ? elem : $fa8cf754a473f9f4$var$SelectorEngine.findOne($fa8cf754a473f9f4$var$SELECTOR_INNER_ELEM, elem);
    }
    // Try to get the outer element (usually the .nav-item)
    _getOuterElement(elem) {
        return elem.closest($fa8cf754a473f9f4$var$SELECTOR_OUTER) || elem;
    }
    // Static
    static jQueryInterface(config) {
        return this.each(function() {
            const data = $fa8cf754a473f9f4$export$3e41faf802a29e71.getOrCreateInstance(this);
            if (typeof config !== 'string') return;
            if (data[config] === undefined || config.startsWith('_') || config === 'constructor') throw new TypeError(`No method named "${config}"`);
            data[config]();
        });
    }
}
/**
 * Data API implementation
 */ $fa8cf754a473f9f4$var$EventHandler.on(document, $fa8cf754a473f9f4$var$EVENT_CLICK_DATA_API, $fa8cf754a473f9f4$var$SELECTOR_DATA_TOGGLE, function(event) {
    if ([
        'A',
        'AREA'
    ].includes(this.tagName)) event.preventDefault();
    if ($fa8cf754a473f9f4$var$isDisabled(this)) return;
    $fa8cf754a473f9f4$export$3e41faf802a29e71.getOrCreateInstance(this).show();
});
/**
 * Initialize on focus
 */ $fa8cf754a473f9f4$var$EventHandler.on(window, $fa8cf754a473f9f4$var$EVENT_LOAD_DATA_API, ()=>{
    for (const element of $fa8cf754a473f9f4$var$SelectorEngine.find($fa8cf754a473f9f4$var$SELECTOR_DATA_TOGGLE_ACTIVE))$fa8cf754a473f9f4$export$3e41faf802a29e71.getOrCreateInstance(element);
});
/**
 * jQuery
 */ $fa8cf754a473f9f4$var$defineJQueryPlugin($fa8cf754a473f9f4$export$3e41faf802a29e71);
/**
 * --------------------------------------------------------------------------
 * Bootstrap toast.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const $fa8cf754a473f9f4$var$NAME = 'toast';
const $fa8cf754a473f9f4$var$DATA_KEY = 'bs.toast';
const $fa8cf754a473f9f4$var$EVENT_KEY = `.${$fa8cf754a473f9f4$var$DATA_KEY}`;
const $fa8cf754a473f9f4$var$EVENT_MOUSEOVER = `mouseover${$fa8cf754a473f9f4$var$EVENT_KEY}`;
const $fa8cf754a473f9f4$var$EVENT_MOUSEOUT = `mouseout${$fa8cf754a473f9f4$var$EVENT_KEY}`;
const $fa8cf754a473f9f4$var$EVENT_FOCUSIN = `focusin${$fa8cf754a473f9f4$var$EVENT_KEY}`;
const $fa8cf754a473f9f4$var$EVENT_FOCUSOUT = `focusout${$fa8cf754a473f9f4$var$EVENT_KEY}`;
const $fa8cf754a473f9f4$var$EVENT_HIDE = `hide${$fa8cf754a473f9f4$var$EVENT_KEY}`;
const $fa8cf754a473f9f4$var$EVENT_HIDDEN = `hidden${$fa8cf754a473f9f4$var$EVENT_KEY}`;
const $fa8cf754a473f9f4$var$EVENT_SHOW = `show${$fa8cf754a473f9f4$var$EVENT_KEY}`;
const $fa8cf754a473f9f4$var$EVENT_SHOWN = `shown${$fa8cf754a473f9f4$var$EVENT_KEY}`;
const $fa8cf754a473f9f4$var$CLASS_NAME_FADE = 'fade';
const $fa8cf754a473f9f4$var$CLASS_NAME_HIDE = 'hide'; // @deprecated - kept here only for backwards compatibility
const $fa8cf754a473f9f4$var$CLASS_NAME_SHOW = 'show';
const $fa8cf754a473f9f4$var$CLASS_NAME_SHOWING = 'showing';
const $fa8cf754a473f9f4$var$DefaultType = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
};
const $fa8cf754a473f9f4$var$Default = {
    animation: true,
    autohide: true,
    delay: 5000
};
/**
 * Class definition
 */ class $fa8cf754a473f9f4$export$8d8dc7d5f743331b extends $fa8cf754a473f9f4$var$BaseComponent {
    constructor(element, config){
        super(element, config);
        this._timeout = null;
        this._hasMouseInteraction = false;
        this._hasKeyboardInteraction = false;
        this._setListeners();
    }
    // Getters
    static get Default() {
        return $fa8cf754a473f9f4$var$Default;
    }
    static get DefaultType() {
        return $fa8cf754a473f9f4$var$DefaultType;
    }
    static get NAME() {
        return $fa8cf754a473f9f4$var$NAME;
    }
    // Public
    show() {
        const showEvent = $fa8cf754a473f9f4$var$EventHandler.trigger(this._element, $fa8cf754a473f9f4$var$EVENT_SHOW);
        if (showEvent.defaultPrevented) return;
        this._clearTimeout();
        if (this._config.animation) this._element.classList.add($fa8cf754a473f9f4$var$CLASS_NAME_FADE);
        const complete = ()=>{
            this._element.classList.remove($fa8cf754a473f9f4$var$CLASS_NAME_SHOWING);
            $fa8cf754a473f9f4$var$EventHandler.trigger(this._element, $fa8cf754a473f9f4$var$EVENT_SHOWN);
            this._maybeScheduleHide();
        };
        this._element.classList.remove($fa8cf754a473f9f4$var$CLASS_NAME_HIDE); // @deprecated
        $fa8cf754a473f9f4$var$reflow(this._element);
        this._element.classList.add($fa8cf754a473f9f4$var$CLASS_NAME_SHOW, $fa8cf754a473f9f4$var$CLASS_NAME_SHOWING);
        this._queueCallback(complete, this._element, this._config.animation);
    }
    hide() {
        if (!this.isShown()) return;
        const hideEvent = $fa8cf754a473f9f4$var$EventHandler.trigger(this._element, $fa8cf754a473f9f4$var$EVENT_HIDE);
        if (hideEvent.defaultPrevented) return;
        const complete = ()=>{
            this._element.classList.add($fa8cf754a473f9f4$var$CLASS_NAME_HIDE); // @deprecated
            this._element.classList.remove($fa8cf754a473f9f4$var$CLASS_NAME_SHOWING, $fa8cf754a473f9f4$var$CLASS_NAME_SHOW);
            $fa8cf754a473f9f4$var$EventHandler.trigger(this._element, $fa8cf754a473f9f4$var$EVENT_HIDDEN);
        };
        this._element.classList.add($fa8cf754a473f9f4$var$CLASS_NAME_SHOWING);
        this._queueCallback(complete, this._element, this._config.animation);
    }
    dispose() {
        this._clearTimeout();
        if (this.isShown()) this._element.classList.remove($fa8cf754a473f9f4$var$CLASS_NAME_SHOW);
        super.dispose();
    }
    isShown() {
        return this._element.classList.contains($fa8cf754a473f9f4$var$CLASS_NAME_SHOW);
    }
    // Private
    _maybeScheduleHide() {
        if (!this._config.autohide) return;
        if (this._hasMouseInteraction || this._hasKeyboardInteraction) return;
        this._timeout = setTimeout(()=>{
            this.hide();
        }, this._config.delay);
    }
    _onInteraction(event, isInteracting) {
        switch(event.type){
            case 'mouseover':
            case 'mouseout':
                this._hasMouseInteraction = isInteracting;
                break;
            case 'focusin':
            case 'focusout':
                this._hasKeyboardInteraction = isInteracting;
                break;
        }
        if (isInteracting) {
            this._clearTimeout();
            return;
        }
        const nextElement = event.relatedTarget;
        if (this._element === nextElement || this._element.contains(nextElement)) return;
        this._maybeScheduleHide();
    }
    _setListeners() {
        $fa8cf754a473f9f4$var$EventHandler.on(this._element, $fa8cf754a473f9f4$var$EVENT_MOUSEOVER, (event)=>this._onInteraction(event, true));
        $fa8cf754a473f9f4$var$EventHandler.on(this._element, $fa8cf754a473f9f4$var$EVENT_MOUSEOUT, (event)=>this._onInteraction(event, false));
        $fa8cf754a473f9f4$var$EventHandler.on(this._element, $fa8cf754a473f9f4$var$EVENT_FOCUSIN, (event)=>this._onInteraction(event, true));
        $fa8cf754a473f9f4$var$EventHandler.on(this._element, $fa8cf754a473f9f4$var$EVENT_FOCUSOUT, (event)=>this._onInteraction(event, false));
    }
    _clearTimeout() {
        clearTimeout(this._timeout);
        this._timeout = null;
    }
    // Static
    static jQueryInterface(config) {
        return this.each(function() {
            const data = $fa8cf754a473f9f4$export$8d8dc7d5f743331b.getOrCreateInstance(this, config);
            if (typeof config === 'string') {
                if (typeof data[config] === 'undefined') throw new TypeError(`No method named "${config}"`);
                data[config](this);
            }
        });
    }
}
/**
 * Data API implementation
 */ $fa8cf754a473f9f4$var$enableDismissTrigger($fa8cf754a473f9f4$export$8d8dc7d5f743331b);
/**
 * jQuery
 */ $fa8cf754a473f9f4$var$defineJQueryPlugin($fa8cf754a473f9f4$export$8d8dc7d5f743331b);


/**
 * Write any other JavaScript below
 */ (function() {
    const university = "UOC";
    console.log(`Hello, ${university}!`);
})();
function $07be2b7eac32e62c$var$activateNavLink(id) {
    let container = document.querySelector(id);
    let links = container.querySelectorAll('.nav-link');
    links.forEach((link)=>{
        if (link.href === window.location.href) link.classList.add("active");
        else link.classList.remove('active');
    });
}
document.addEventListener("DOMContentLoaded", (event)=>{
    $07be2b7eac32e62c$var$activateNavLink('#header-navbar');
    $07be2b7eac32e62c$var$activateNavLink('#footer-navbar');
});


