"use strict";

var handler = {
    get: function get(target, name) {
        return name in target ? target[name] : function () {
            var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            var data = arguments[1];

            var method = name.toUpperCase();
            return new Promise(function (res, rej) {
                var xhr = new XMLHttpRequest();
                xhr.open(method, url, true);
                xhr.send(data);
                xhr.onload = function () {
                    res({
                        status: xhr.status,
                        response: xhr.response
                    });
                };
                xhr.onerror = function (e) {
                    rej(new Error(e));
                };
            });
        };
    }
};

var Request = new Proxy({}, handler);

module.exports = { Request: Request };

