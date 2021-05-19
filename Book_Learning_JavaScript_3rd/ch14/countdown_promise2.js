function countdown(seconds){
    return new Promise(function(reject, resolve){
        for(let i=seconds; i>=0; i--){
            setTimeout(function(){
                if(i===13)
                    console.log("woowoo!!!, it's 13")
                    return reject(new Error("DEFINITELY NOT COUNTING THAT"))
                if(i>0)
                    console.log(i+"...")
                else
                    resolve(console.log("GO"))
            }, (seconds-i)*1000);
        }
    });
}

// countdown(5)

// countdown(5).then(
//     function() {
//         console.log("countdown complete successfully")
//     },
//     function(err) {
//         console.log("countdown experience an error:" + err)
//         // err.message打印不出来
//         // console.log("countdown experience an error:" + err.message)
//     }
// )


// 分开调用
// p = countdown(13)
p = countdown(14)
p.then(function() {
    console.log("countdown complete successfully")
});
p.catch(function(err) {
    console.log("countdown experience an error:" + err)
    // err.message打印不出来
    // console.log("countdown experience an error:" + err.message)
});