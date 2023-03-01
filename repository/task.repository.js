const db = require("../config/db.config");

const Tasks = db.tasks;

exports.getTasks = async () => {
    try {
        const tasks = await Tasks.findAll();
        // console.log('tasks -> ', tasks);
        return tasks;
    } catch (err) {
        console.log(err);
        return [];
    }
};

exports.addTask = async (task) => {
    let data = {};
    try {
        data = await Tasks.create(task);
    } catch (err) {
        console.log(err);
        return { success: false, message: "Error while adding new task" };
    }
    return data;
};

exports.updateTask = async (task) => {
    let data = {};
    try {
        data = await Tasks.update(
            { ...task },
            {
                where: {
                    id: task.id,
                },
            }
        );
    } catch (err) {
        console.log(err);
        return { success: false, message: "Error while updating the task" };
    }
    return data;
};

exports.deleteTask = async (taskId) => {
    let data = {};
    try {
        data = await Tasks.destroy({
            where: {
                id: taskId,
            },
        });
    } catch (err) {
        console.log(err);
        return { success: false, message: "Error while deleting the task" };
    }
    return data;
};
