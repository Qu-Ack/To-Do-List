const Task = (name , desc) => {
    const date = new Date(); 
    const priority = "boring"; 
    const Name = name;
    const Desc = desc;  


    return {date , priority, Name, Desc}
}
let container = document.querySelector('.main-container')
console.log(`${container} element is present`)
const TaskModule = (function() {
    const Tasks = []
    

    function render() {
        for(let i =0 ; i < Tasks.length ; i++) {
            console.log(main)
        }
    }

    function addTask(task) {
        Tasks.push(task);
        console.log(Tasks)
        render()
        
    }

    function removeTask(index) {
        Tasks.splice(index, 1);
        render()
    }

    function changePriority(value , task) {
        task.priority = value;
        render()
    }

    function changeDate(dateval , task) {
        task.date = dateval
        render()
    }

    return {Tasks , addTask , removeTask, changePriority , changeDate}
})()

const task1 = Task('daks' , 'sadf')
const task2 = Task("adsfasdf" , 'asdfasdfasdf')

TaskModule.addTask(task1)
TaskModule.addTask(task2)


