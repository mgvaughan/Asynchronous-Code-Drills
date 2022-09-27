document.addEventListener('DOMContentLoaded', function() {
    // Steps 1-3 (Timing Out)
    function messagefunc(msg) {
        console.log(msg);
    };
    messagefunc('this is the message');

    setTimeout(() => {
        messagefunc('this is the new message')
    }, 2000);
    
    // Step 4 (Timing Out)
    function getWords(word) {
        console.log(`${word}`)
        setTimeout(() => {
            console.log('another word')
            setTimeout(() => {
                console.log('third word')
                setTimeout(() => {
                    console.log('final word')
                }, 1000)
            }, 2000)
        }, 3000);
    }
    getWords('cat')

    // Steps 1 - 3 (Callbacks and Recursion) 
    const done = () => {
        console.log("Job's Done!")
    }
    const countdown = (num, callback) => {    
        setTimeout(() => {
            if (num > 0) {
                console.log(num)
                countdown(num - 1, callback)
            } else {
                done()
            }
        }, 1000)       
    }
    countdown(5, done);

    // Steps 1 - 11 (Promises Promises) 
    const lunchTime = false;

    const orderMeSomeFood = () => {
        return new Promise((resolve, reject) => {
            if (lunchTime === true) {
                let meal = {
                    lunch: "Pizza",
                    drink: "Coke"
                }
                resolve(meal);
            } else {
                let err = new Error('Not resolved!')
                reject(err);
            }
        })
    }
    orderMeSomeFood()
    .then((response) => {
        console.log(response);
    }) .catch((error) => {
        console.log('An error occurred!')
        console.log(error);
    });

})