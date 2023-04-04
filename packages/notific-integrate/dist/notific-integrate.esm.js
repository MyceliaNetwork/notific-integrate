/**
 * integrate - create a deeplink URL to the Notific Integrate page
 */
function createUrl(config) {
    const integrator = window.btoa(JSON.stringify(config));
    const url = new URL(`https://notific.ooo/`);
    url.searchParams.set("integrator", integrator);
    return url.toString();
}

export { createUrl };
//# sourceMappingURL=notific-integrate.esm.js.map
