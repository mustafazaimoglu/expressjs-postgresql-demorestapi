const taskRepository = require("../repository/task.repository");

exports.getTasks = async () => {
    return await taskRepository.getTasks();
};

exports.addTask = async (task) => {
    return await taskRepository.addTask(task);
};

exports.updateTask = async (task) => {
    return await taskRepository.updateTask(task);
};

exports.deleteTask = async (taskId) => {
    return await taskRepository.deleteTask(taskId);
};
