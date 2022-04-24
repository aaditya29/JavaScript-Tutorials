// PROMISES
/** We need to understand four more things to make promises:
 * Relation b/w time and work
 * Promise Chainings
 * Error Handling
 * The .finally header
 */

// Relation b/w time and work
let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

let is_shop_open = true;// Asking question if shop is opened or not. If true then serve, else don't serve

let order = ( time, work ) =>{
    return new Promise( ( resolve, reject )=>{ // PROMISE made and passed two arguments. resolve and reject.
        if( is_shop_open ){
            // Adding the time and work factors inside our promise using a setTimeout
            setTimeout(()=>{
                 // work is getting done here
                 resolve( work() )
                 // Setting time here for 1 work
                }, time)
            }
          else{
            reject( console.log("Our shop is closed") )
        }
    } )
  }

// Here, we're gonna use our newly created function to start ice-cream production.

// Set 👇 time here
order( 2000, ()=>console.log(`${stocks.Fruits[0]} was selected`))
//    pass a ☝️ function here to start working