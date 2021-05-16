/**
 *  Detect iOS devices
 *  January 3, 2021 - May 15, 2021
 *
 *  References
 *  -   https://stackoverflow.com/a/9039885
 */

window.iOS = (()=>
    [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
    ].includes(navigator.platform)
    // iPad on iOS 13 / Mac detection
    || navigator.userAgent.includes("Mac")
)();

if(iOS) document.getElementsByTagName('html')[0].classList['add']('iOS');
