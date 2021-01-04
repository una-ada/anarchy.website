/**
 *  Detect iOS devices
 *  January 3, 2021
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
    // iPad on iOS 13 detection
    || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
)();

if(iOS) document.getElementsByTagName('html')[0].classList['add']('iOS');
