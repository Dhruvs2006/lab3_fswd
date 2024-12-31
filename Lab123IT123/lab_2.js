const tasks = [
    {title:"Running",due_time:60,priority:1},
    {title:"Yoga",due_time:1,priority:3},
    {title:"Dancing",due_time:0.1,priority:3},
    {title:"Eating",due_time:30,priority:2}
];

const addtask = (collections,task)=>{
    collections.push(task);
};

addtask(tasks,{title:"Sleeping",due_time:120,priority:1});

 function sortTask(){
    tasks.sort((a,b) => a.priority-b.priority);
    console.log("sorted Tasks");
}


sortTask();
console.log(tasks);

function getTasksDueWithin(minutes) {
    const now = 0;
    const dueTasks = tasks.filter(tasks => tasks.due_time <= now + minutes);
    console.log("Tasks due within ${minutes} minutes:", dueTasks);
    return dueTasks;
};

getTasksDueWithin(30);

function scheduleReminders() {
    tasks.forEach(tasks => {
        setTimeout(() => {
            console.log(`Reminder: Task "${tasks.title}" is due now!`);
        }, tasks.due_time * 60000);
    });
};

scheduleReminders();

