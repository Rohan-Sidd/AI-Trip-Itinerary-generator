for (let i = 0; i < 3; i++) {
    (function (i) {
        setTimeout(() => {
            console.log(i);
        }, 100);
    })(i); //IIFE immediately invoked function syntax (function(params){...logic...}(param))
}