const express = require("express");
const projectsModel = require("./projects-model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  projectsModel
    .find()
    .then((projects) => res.status(200).json(projects))
    .catch((err) => next(err));
});

router.get("/:id", async (req, res, next) => {
  projectsModel.findById(req.params.id).then((project) => {
    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  });
});

router.get("/:id/tasks", (req, res) => {
  projectsModel
    .findTasks(req.params.id)
    .then((tasks) => {
      if (tasks.length) {
        res.json(tasks);
      } else {
        res
          .status(404)
          .json({ message: "Could not find steps for given project" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Failed to get steps" });
    });
});

router.post("/", (req, res) => {
  const projectData = req.body;

  projectsModel
    .addProject(projectData)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create a new project" });
    });
});

router.post("/resource", (req, res) => {
  const resourceData = req.body;

  projectsModel
    .addResource(resourceData)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to add the new resource" });
    });
});

router.post("/:id", (req, res) => {
  const taskData = {
    project_id: req.params.id,
    description: req.body.description,
    notes: req.body.description,
  };
  console.log(taskData);

  projectsModel
    .addTask(taskData)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to add the new task" });
    });
});

router.get("/:id/details", async (req, res, next) => {
  projectsModel
    .findTasks(req.params.id)
    .then((tasks) => {
      if (tasks.length) {
        res.json(tasks);
      } else {
        res
          .status(404)
          .json({ message: "Could not find steps for given project" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Failed to get steps" });
    });
});

module.exports = router;
