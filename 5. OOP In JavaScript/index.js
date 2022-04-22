// Creating Object Literals

const circle = {
    // Object in JS are key value pairs
    radius: 1,
    location: {
        x:1,
        y:1
    }, 
    draw: function(){
        console.log('draw');
        /**
         * The circle object has three members: radius, location and draw function.
         * Here we are reffering draw as a method.
         */
    }
};// curly brackets refers to objects literals syntax
circle.draw();// calling the draw method

// Factories in JavaScript

/**
 * 
 */