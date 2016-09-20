var reg_1 = require('./reg');
var _ = new reg_1.Reg();
var Store = (function () {
    function Store(win, doc) {
        if (win === void 0) { win = window || undefined; }
        if (doc === void 0) { doc = document || undefined; }
        if (win)
            this.storage = win.localStorage;
        if (doc)
            this.document = doc;
    }
    Store.prototype.getCookie = function (name) {
        var cname = name + "=";
        var cookieVal = '';
        if (this.document.cookie) {
            var ca = this.document.cookie.split(';');
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
        this.document.cookie = name + "=" + value + ";" + expires;
    };
    Store.prototype.clearCookie = function (name) {
        this.setCookie(name, '', -1);
    };
    Store.prototype.getStoreItem = function (name) {
        if (!_.isNull(this.storage)) {
            return this.storage.getItem(name);
        }
    };
    Store.prototype.setStoreItem = function (name, val) {
        if (!_.isNull(this.storage)) {
            return this.storage.setItem(name, val);
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
        var len = this.storage.length, obj = {};
        for (var i = 0; i < len; i++) {
            var key = this.storage.key(i), val = this.getStoreItem(key);
            obj[key] = val;
        }
        return obj;
    };
    Store.prototype.removeStoreItem = function (name) {
        this.storage.removeItem(name);
        return this.getStoreItem(name) === null ? true : false;
    };
    Store.prototype.clearStore = function () {
        this.storage.clear();
    };
    return Store;
}());
exports.Store = Store;
