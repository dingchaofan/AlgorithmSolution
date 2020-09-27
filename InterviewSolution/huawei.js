// 1. 发传单
// 输入
// performance
// Adam,125
// Andy,110
// Bill,92
// Evan,154

// organization
// Aaron,Abel,Adam
// Aaron,Abel,Andy
// Aaron,Jone,Bill
// Aaron,Jone,Evan
// eof

// 输出
// Aaron<481>
// -Jone<246>
// --Evan<154>
// --Bill<92>
// -Abel<235>
// --Adam<125>
// --Andy<110>

let inputsLines = []
let performanceIndex = 0
let organizationIndex = 0
while(1){
    let inputLine = readline()
    if(inputLine == 'eof') break
    inputsLines.push(inputLine)
    if(inputLine == 'performance'){
        performanceIndex = inputsLines.length-1
    }
    if(inputLine == 'organization'){
        organizationIndex = inputsLines.length-1
    }
}
let performance = []
let organization = {}
for (let index = performanceIndex+1; index < organizationIndex-1; index++) {
    let templine = inputsLines[index].split(',')
    let tempNode = {}
    tempNode.name = templine[0]
    tempNode.value = parseInt(templine[1])
    performance.push(tempNode)
}
let res = {}
for (let index = organizationIndex+1; index < inputsLines.length; index++) {
    let templine = inputsLines[index].split(',');
    let leader = templine[0]
    let team = '-'+templine[1]
    let person = '--'+templine[2]
    let personNum = 0
    for (let i = 0; i < performance.length; i++) {
        const personPerformance = performance[i];
        if(personPerformance.name == person){
            personNum = personPerformance.value
            break
        }
    }
    
}


// 2. 基因测序
// b:[a]:2;c:[a]:3;a:[]:1/1

let input = readline().split('/')
let maxTaskNum = parseInt(input[1])
let tasks = input[0].split(';')
tasks.forEach((element,index) => {
    let tempElement = {}
    let ele = element.split(':')
    tempElement.name = ele[0]
    tempElement.pre = ele[1].length >= 3 ? ele[1][1] : null
    tempElement.time = parseInt(ele[2])
    tasks[index] = tempElement
});
let totalTime = 0
if(maxTaskNum == 1){
    for (let index = 0; index < tasks.length; index++) {
        const element = tasks[index];
        totalTime += element.time
    }
    console.log(totalTime)
}
else{
    let timers = []
    for (let i = 0; i < maxTaskNum; i++) {
        timers[i] = 0
    }
    for (let index = 0; index < tasks.length; index++) {
        const element = tasks[index];
        if(element.rely == null){
            let temptime = element.time
            let rely = element.rely
            for (let j = 0; j < tasks.length; j++) {
                const tempchangenode = array[j];
                if(tempchangenode.rely == element.name){
                    tempchangenode.rely = null
                }
            }
            let minIndex = 0
            for (let x = 0; x < timers.length; x++) {
                if()
                
            }
            tasks.splice(index,1)
            index = 0
        }
        
    }

}