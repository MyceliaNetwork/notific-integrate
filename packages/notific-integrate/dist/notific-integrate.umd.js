(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["notific-integrate"] = {}));
})(this, (function (exports) { 'use strict';

    /**
     * integrate - create a deeplink URL to the Notific Integrate page
     */
    function createUrl(config) {
        var _a;
        const candidConfig = Object.assign(Object.assign({}, config), { allowed_callbacks: (_a = config.allowed_callbacks) !== null && _a !== void 0 ? _a : [], notify_callback: config.notify_callback ? [config.notify_callback] : [], secret: config.secret ? [config.secret] : [] });
        const integrator = window.btoa(JSON.stringify(candidConfig));
        const url = new URL(`https://notific.ooo/`);
        url.searchParams.set("integrator", integrator);
        return url.toString();
    }

    exports.createUrl = createUrl;

}));
//# sourceMappingURL=notific-integrate.umd.js.map
