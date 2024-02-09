const {readFile,writeFile} = require('fs')

readFile('./content/sub/first.txt','utf-8',(err,result) => {
    if(err){
        console.log('error')
        return
    }
    const first = result
    readFile('./content/sub/sec.txt','utf-8',(err,result) =>{
    if(err){
        console.log('error')
        return
    }
    const second =result 
    writeFile('./content/sub/res.txt',`Here is the result :  ${first} ,${second}`,(err,result) => {
        if(err){
            console.log('wruite error')
            return
        }
        console.log(result)
    })
})
})