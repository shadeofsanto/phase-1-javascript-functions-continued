function saturdayFun(defaultActivity = "roller-skate"){
    return `This Saturday, I want to ${defaultActivity}!`
}

function mondayWork(workOffice = "go to the office"){
    return `This Monday, I will ${workOffice}.`
}

function wrapAdjective(initString = "*"){
    return function(workerString = "a hard worker") {
        return `You are ${initString}${workerString}${initString}!`
    }
}