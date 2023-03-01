const db = require("../config/db.config");

const Tasks = db.tasks;

exports.getTasks = async () => {
    try {
        const data = await Tasks.findAll();
        return { success: true, data: data };
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
    return { success: true, data: data };
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
    
    if (data > 0) {
        return { success: true, message: `the task updated!`, data:task };
    } else {
        return { success: false, message: "Error while updating the task!" };
    }
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
        return { success: false, message: "Error while deleting the task!" };
    }
    if (data > 0) {
        return { success: true, message: `ID : ${taskId} deleted!` };
    } else {
        return { success: false, message: "Error while deleting the task!" };
    }
};
