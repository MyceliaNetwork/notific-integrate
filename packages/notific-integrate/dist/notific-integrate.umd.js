(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["notific-integrate"] = {}));
})(this, (function (exports) { 'use strict';

    /**
     * integrate - create a deeplink URL to the Notific Integrate page
     */
    function createUrl(config) {
        const integrator = window.btoa(JSON.stringify(config));
        const url = new URL(`https://notific.ooo/`);
        url.searchParams.set("integrator", integrator);
        return url.toString();
    }

    exports.createUrl = createUrl;

}));
//# sourceMappingURL=notific-integrate.umd.js.map
