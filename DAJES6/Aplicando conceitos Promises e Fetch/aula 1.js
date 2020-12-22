// Promisses executando lado a lado
const doSomeThingPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(function() {
            // did something
            resolve('First data');
        }, 1000);
    });

const doOtherThingPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(function() {
            // did something
            resolve('Second data');
        }, 1000);
    });

// a promise que encerrar primeiro, retorna primeiro
Promise.race([doOtherThingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data);
})

Promise.all([doOtherThingPromise(), doOtherThingPromise()])
.then(data => {
    console.log(data[0].split(''));
    console.log(data[1].split(''));
})
.catch(err => {
    console.log(err);
});

// Promisses executando uma após a outra
const doSomeThingPromise = () => new Promise((resolved, reject) => {
    throw new Error('Someting went wrong');
    setTimeout(function() {
        resolve('First data');
    }, 1000); 
});

const doOtherThingPromise = () =>new Promise((resolved, reject) => {
    setTimeout(function() {
        resolve('Second data');
    }, 1000); 
});

doSomeThingPromise()
    .then(data => { 
        console.log(data); 
        return doOtherThingPromise();
    })
    .then(data2 => console.log(data2))
    .catch(error => console.log('Ops', error));

// Pending: ainda ta pendende
// Fulfilled: 
// Rejected: rejeitada

// funções de callbacks
function doSomeThing(callback) {
    setTimeout(function() {
        callback('First data');
    }, 1000);
}

function doOtherThing(callback){
    setTimeout(function() {
        callback('Second data');
    }, 1000);
}

function doAll() {
    try {
        doSomeThing(function(data) {
            var processedData = data.split('');
            
            try {
                doOtherThing(function(data2) {
                    var processedData2 = data2.split('');
                    
                    try {
                        setTimeout(function() {
                            console.log(processedData, processedData2);
                        }, 1000);
                    } catch(err) {
                        // handle error
                    }
                });
            } catch(err) {
                // handle error
            }
        });
    } catch(err) {
        // handle error
    }

};

doAll();