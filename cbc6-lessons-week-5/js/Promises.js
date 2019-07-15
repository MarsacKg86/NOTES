var counterPromise = function () {

    return new Promise (function (resolve, reject) {
        setTimeout(function () {
            var i = 0;
        
            while (i < 10) {
                console.log(i);
                ++i;
                if(i === 6) {
                    reject("Error: Don't finish on 6");
                }
            }
            resolve("Done");

        }, 300)
    });
};

counterPromise()
    .then(function (value) {
        console.log(value);
    })
    .catch(function(value) {
        console.error(value);
    });
