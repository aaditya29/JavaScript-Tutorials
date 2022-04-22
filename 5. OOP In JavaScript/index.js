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
 * A factory function is any function which is not a class or constructor that returns a (presumably new) object.In   JavaScript, any function can return an object. When it does so without the new keyword, it’s a factory function.
 * Factory functions have always been attractive in JavaScript because they offer the ability to easily produce object instances without diving into the complexities of classes and the new keyword.
 * If you need to create many objects, you’ll want to combine the power of object literals and factory functions.
 * With a factory function, you can create as many user objects as you want. If you’re building a chat app, for instance, you can have a user object representing the current user, and also a lot of other user objects representing all the other users who are currently signed in and chatting, so you can display their names and avatars, too.
 */