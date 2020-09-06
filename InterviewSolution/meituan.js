//5. 点名排队
let resline = []
while(input = readInt()){
    if(input>n){
        continue
    }
    if(resline.indexOf(input) >= 0){
        resline.splice(resline.indexOf(input),1)
        resline.unshift(input)
    }
    else{
        resline.unshift(input)
    }
}
for(let i = 0;i<resline.length;i++){
    print(resline[i])
}