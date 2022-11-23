function  receivesAFunction(spy){
    spy();
}

function returnsANamedFunction(){
    return function secondName(){

    }
}

function returnsAnAnonymousFunction(){
    return ()=> console.log("adhiambo");
}