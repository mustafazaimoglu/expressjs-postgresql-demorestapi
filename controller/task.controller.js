var taskService = require("../service/task.service")

exports.getTasks = async () => {
    console.log('Controller: getTasks')
    return await taskService.getTasks();
};

exports.addTask = async (task) => {
    console.log('Controller: addTask', task);
    return await taskService.addTask(task);
};

exports.updateTask = async (task) => {
    console.log('Controller: updateTask', task);
    return await taskService.updateTask(task);
};

exports.deleteTask = async (taskId) => {
    console.log('Controller: deleteTask', taskId);
    return await taskService.deleteTask(taskId);
};
