let cleanRoom = function() {

    return new Promise( (resolve, reject) => {
        let isClean = false;
        if(isClean)
            resolve('Clean');
        else
            reject('Not Clean');
        });
};
let removeGarbage = function(){

    return new Promise( (resolve, reject) => {
        let isRemoved = false;
        if(isRemoved)
            resolve('Removed');
        else
            reject('Not removed');
        });
};

let sop = function (){
    return cleanRoom().then((fromClean)=>{
        console.log(`10 ${fromClean}`);
        return removeGarbage();
    }).then((fromRemove) =>{
        console.log(`11 ${fromRemove}`);
    });
}

sop().catch( (rlt) => {
    console.log(`12 ${rlt}`);
}).catch( (rlt2) => {
    console.log(`13 ${rlt2}`);
});
// cleanRoom(true).then( (fromClean) => {
//     console.log(`0 ${fromClean}`);
//     return removeGarbage;
// }).catch( (fromClean) => {
//     console.log(`1 ${fromClean}`);
//     return removeGarbage;
// }).then( (fromRemoved) => {
//     console.log(`2 ${fromRemoved}`); 
// }).catch( (fromRemoved) => {
//     console.log(`3 ${fromRemoved}`);
// });


// let write = function(){
//     return false;
// }
// let abc = (async function writeHW(){
//     let isWrote = await write();
//     console.log(isWrote);
//     return new Promise((resolve, reject) => {
//         resolve('Its true');
//     })
// }());
// abc;
// console.log(abc);
// abc.then( (rlt) => {
//     console.log(rlt);
// });