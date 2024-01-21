// factory function 
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log("draw");
        }
    };
}

const circle1 = createCircle(1);

console.log(circle1.radius);
circle1.draw();