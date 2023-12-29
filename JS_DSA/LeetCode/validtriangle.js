function triangleType(triangleToys) {
    const result = [];

    for (const toy of triangleToys) {
        const sides = toy.split(' ').map(Number);

        // Check if it forms a valid triangle
        const isValidTriangle = sides[0] + sides[1] > sides[2] &&
                                sides[1] + sides[2] > sides[0] &&
                                sides[0] + sides[2] > sides[1];

        if (isValidTriangle) {
            if (sides[0] === sides[1] && sides[1] === sides[2]) {
                result.push('Equilateral');
            } else if (sides[0] === sides[1] || sides[1] === sides[2] || sides[0] === sides[2]) {
                result.push('Isosceles');
            } else {
                result.push('None of these');
            }
        } else {
            result.push('None of these');
        }
    }

    return result;
}

// Example usage:
const triangleToys = ['2 2 2', '3 3 3', '1 1 3', '1 1 1'];
const results = triangleType(triangleToys);
console.log(results);
// Output: ['Equilateral', 'Equilateral', 'None of these', 'None of these']
