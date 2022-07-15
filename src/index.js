
// You should implement your task here. //Ok

module.exports = function towelSort (matrix) {
    if (towelSort.arguments.length == 0) return [];
    for (let i = 1; i < matrix.length; i += 2) {
        matrix[i].sort((a, b) => b - a);
    }
    return [].concat(...matrix);
}
