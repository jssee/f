/**
 * A simple linear interpolation function. Useful for making motion from on point to smoother.
 * @param {*} a Starting coordinates
 * @param {*} b Ending coordinates
 * @param {*} rate The rate of transition to and from point a to point b
 */
const lerp = (a, b, rate) => (b - a) * rate;

export default lerp;
