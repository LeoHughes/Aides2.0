Object.defineProperty(exports, "__esModule", { value: true });
var reg_1 = require("./reg");
var _ = new reg_1.default();
var storage;
if ((typeof Storage) !== 'undefined') {
    storage = window.localStorage;
}
var Store = (function () {
    function Store() {
    }
    Store.prototype.getCookie = function (name) {
        var cname = name + "=";
        var cookieVal = '';
        if (document.cookie) {
            var ca = document.cookie.split(';');
            for (var _i = 0, ca_1 = ca; _i < ca_1.length; _i++) {
                var key = ca_1[_i];
                var c = _.trim(key);
                if (c.indexOf(cname) === 0) {
                    cookieVal = c.substring(cname.length, c.length);
                }
            }
        }
        return cookieVal;
    };
    Store.prototype.setCookie = function (name, value, time) {
        var d = new Date(), expires;
        d.setTime(d.getTime() + (time * 1000));
        expires = "expires=" + d.toUTCString();
        document.cookie = name + "=" + value + ";" + expires;
    };
    Store.prototype.clearCookie = function (name) {
        this.setCookie(name, '', -1);
    };
    Store.prototype.getStoreItem = function (name) {
        if (!_.isNull(storage)) {
            return storage.getItem(name);
        }
    };
    Store.prototype.setStoreItem = function (name, val) {
        if (!_.isNull(storage)) {
            return storage.setItem(name, val);
        }
    };
    Store.prototype.setStoreObj = function (obj) {
        if (_.isObject(obj)) {
            for (var v in obj) {
                this.setStoreItem(v, obj[v]);
            }
        }
    };
    Store.prototype.getStoreObj = function () {
        var len = storage.length, obj = {};
        for (var i = 0; i < len; i++) {
            var key = storage.key(i), val = this.getStoreItem(key);
            obj[key] = val;
        }
        return obj;
    };
    Store.prototype.removeStoreItem = function (name) {
        storage.removeItem(name);
        return this.getStoreItem(name) === null ? true : false;
    };
    Store.prototype.clearStore = function () {
        storage.clear();
    };
    return Store;
}());
exports.default = Store;
