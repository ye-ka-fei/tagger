



function encode(plain) {
    return window.btoa(plain)
}


function decode(b64str) {
    return window.atob(b64str)
}


////////////////////////////////////////////////////////////////////////////////

export default {
    encode, decode,
}
