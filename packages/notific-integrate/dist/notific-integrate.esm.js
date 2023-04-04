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

export { createUrl };
//# sourceMappingURL=notific-integrate.esm.js.map
