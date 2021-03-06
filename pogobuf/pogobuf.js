/**
 * Pogobuf Pokemón Go Client Library.
 * @module pogobuf
 * @namespace
 * @see {@link https://github.com/pogosandbox/pogobuf|GitHub repository}
 */
module.exports = {
    /* eslint-disable global-require */
    Client: require('./pogobuf.client.js'),
    PTCLogin: require('./pogobuf.ptclogin.js'),
    GoogleLogin: require('./pogobuf.googlelogin.js'),
    Utils: require('./pogobuf.utils.js')
};