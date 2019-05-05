const tasks = [
    {id: 234, title: 'Create user registration API', timeSpent: 4, category: 'Backend', type: 'task'},
    {id: 235, title: 'Create user registration UI', timeSpent: 8, category: 'Frontend', type: 'task'},
    {id: 237, title: 'User sign-in via Google UI', timeSpent: 3.5, category: 'Frontend', type: 'task'},
    {id: 238, title: 'User sign-in via Google API', timeSpent: 5, category: 'Backend', type: 'task'},
    {id: 241, title: 'Fix account linking', timeSpent: 5, category: 'Backend', type: 'bug'},
    {id: 250, title: 'Fix wrong time created on new record', timeSpent: 1, category: 'Backend', type: 'bug'},
    {id: 262, title: 'Fix sign-in failed messages', timeSpent: 2, category: 'Frontend', type: 'bug'},

];
//#1 Общее количество времени,
// затраченное на работу над
// задачами из категории 'Frontend'

let totalFrontentTimeCounter=tasks.reduce((sum,task)=>{
    if(task.category==='Frontend'){
        sum+=task.timeSpent;
    }
    return sum;
},0);

console.log("Total time for \'Frontend\': ",totalFrontentTimeCounter);
//#2 Общее количество времени, затраченное на работу над задачами типа 'bug'.
let totalBugTypeTimeCounter=tasks.reduce((sum,task)=>{
    if(task.type==='bug'){
        sum+=task.timeSpent;
    }
    return sum;
},0);
console.log("Total time for type \'bug\': ",totalBugTypeTimeCounter);

//#3 Количество задач, имеющих в названии слово "UI".

const Uincludes = tasks.filter(task => task.title.includes('UI')).length;
console.log('Количество задач, имеющих в названии слово \"UI\" ' +  Uincludes);

//#4 Получите количество задач каждой категории в объект вида: {Frontend: 3, Backend: 4}
let fcounter=0;
let bcounter=0;

tasks.map(task=>{
    if(task.category==='Frontend'){
        fcounter++;
    }
    else bcounter++;
});

let result={Frontend :fcounter, Backend: bcounter};

console.log(result);

