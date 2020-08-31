const db = require("../data/config");

function find() {
  return db("projects");
}

function findById(id) {
  return db("projects").where({ id: id }).first();
}

function findTasks(id) {
  return db("tasks as task")
    .join("projects as project", "task.project_id", "project.id")
    .where("task.project_id", id)
    .select("project.name", "task.description")
    .orderBy("task.id");
}

function addProject(project) {
  return db("projects").insert(project);
}

function addResource(resource) {
  return db("resources").insert(resource);
}

function addTask(task) {
  return db("tasks").insert(task);
}

function fullProject(id) {
  return (
    db("tasks as task")
      .join("projects as project", "task.project_id", "project.id")
      // .join("", "")
      .where("task.project_id", id)
      .select("project.name as Project", "task.description as Task")
      .orderBy("task.id")
  );
}

module.exports = {
  find,
  findById,
  findTasks,
  addProject,
  addResource,
  addTask,
  fullProject,
};
