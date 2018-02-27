/*
setTimeout(function (){
    console.log('I have waited two seconds!');
}, 2000);
*/

/*
let counter = 0;
function timeout() {
    setTimeout(function (){
        console.log('Count - ' + counter++);
        timeout();
    }, 2000);
}

timeout();
*/

// Immediately Invoked Function Expression (IIFE)
(function(){
    console.log('Immediately Invoked Function Expression');
})();