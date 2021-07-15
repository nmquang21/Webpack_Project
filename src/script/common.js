function div(a, b) {
    return b !== 0 ? a / b : 'infinity';
}
function sum(a, b) {
    return a + b;
}
module.exports = {div, sum};