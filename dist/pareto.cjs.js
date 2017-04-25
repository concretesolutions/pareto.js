'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function chunks(array, len) {
    var chunks = [], n = array.length;
    var i = 0;
    while (i < n) {
        chunks.push(array.slice(i, i += len));
    }
    return chunks;
}

function compose() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i - 0] = arguments[_i];
    }
    return fns.reduce(function (f, g) { return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return f(g.apply(void 0, args));
    }; });
}

function curry(fn) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (args.length === fn.length) {
        return fn.apply(void 0, args);
    }
    return curry.bind.apply(curry, [this, fn].concat(args));
}

var _this = undefined;
var debounce = function (fn, wait, immediate) {
    if (wait === void 0) { wait = 100; }
    if (immediate === void 0) { immediate = false; }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var obj = _this;
        var timeout;
        var delayed = function () {
            if (!immediate)
                fn.apply(obj, args);
            timeout = null;
        };
        if (timeout)
            clearTimeout(timeout);
        else if (immediate)
            fn.apply(obj, args);
        timeout = setTimeout(delayed, wait);
    };
};

function flatten(array) {
    return array.reduce(function (a, b) { return a.concat(Array.isArray(b) ? flatten(b) : b); }, []);
}

var pipe = function () {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i - 0] = arguments[_i];
    }
    return function (initial) { return fns.reduce(function (acc, fn) { return fn(acc); }, initial); };
};

function tail(array) {
    return array.slice(1, array.length);
}

exports.chunk = chunks;
exports.compose = compose;
exports.curry = curry;
exports.debounce = debounce;
exports.flatten = flatten;
exports.pipe = pipe;
exports.tail = tail;