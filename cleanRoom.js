let cleanRoom = function() {
    return new Promise( (resolve, reject) => {
        let isClean = true;
        if(isClean)
            resolve('Clean');
        else
            reject('Not Clean');
    });
};
let removeGarbage = new Promise( (resolve, reject) => {
    let isRemoved = false;
    if(isRemoved)
        resolve('Removed');
    else
        reject('Not Removed');
});

cleanRoom().then( (fromClean) => {
    console.log(`0 ${fromClean}`);
    return removeGarbage;
}).catch( (fromClean) => {
    console.log(`1 ${fromClean}`);
    return removeGarbage;
}).then( (fromRemoved) => {
    console.log(`2 ${fromRemoved}`); 
}).catch( (fromRemoved) => {
    console.log(`3 ${fromRemoved}`);
});


let write = function(){
    return false;
}
let abc = (async function writeHW(){
    let isWrote = await write();
    console.log(isWrote);
    return new Promise((resolve, reject) => {
        resolve('Its true');
    })
}());
abc;
console.log(abc);
abc.then( (rlt) => {
    console.log(rlt);
});