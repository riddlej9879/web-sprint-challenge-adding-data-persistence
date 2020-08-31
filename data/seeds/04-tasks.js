//    DATA SHAPE
// table.increments("id");
// table.text("description").notNull();
// table.text("notes");
// table.boolean("completed").notNull().defaultTo(false);
// table.integer("project_id").references("id").inTable("projects");

exports.seed = async function (knex) {
  console.log("tasks");
  await knex("tasks").insert([
    {
      description: "Get the ladder",
      notes: "",
      completed: false,
      project_id: 1,
    },
    {
      description: "Set ladder under the gutter",
      notes: "",
      completed: false,
      project_id: 1,
    },
    {
      description: "Remove debris from gutter",
      notes: "",
      completed: false,
      project_id: 1,
    },
    {
      description:
        "Move ladder down and repeat until entire gutter is complete",
      notes: "",
      completed: false,
      project_id: 1,
    },
    {
      description: "Brag to wife",
      notes: "",
      completed: false,
      project_id: 1,
    },
    {
      description: "Grab car washing supplies",
      notes: "",
      completed: false,
      project_id: 2,
    },
    {
      description: "Roll up car windows this time",
      notes: "",
      completed: false,
      project_id: 2,
    },
    {
      description: "Hose down car",
      notes: "",
      completed: false,
      project_id: 2,
    },
    {
      description: "Soap up sponges and scrub down car",
      notes: "",
      completed: false,
      project_id: 2,
    },
    {
      description: "Rinse car off",
      notes: "",
      completed: false,
      project_id: 2,
    },
    {
      description: "Brag to wife",
      notes: "",
      completed: false,
      project_id: 2,
    },
    {
      description: "Grab pole saw and ladder",
      notes: "",
      completed: false,
      project_id: 3,
    },
    {
      description: "Move cars out from under the tree",
      notes: "",
      completed: false,
      project_id: 3,
    },
    {
      description: "Climb ladder and use pole sawto cut off dead branches",
      notes: "",
      completed: false,
      project_id: 3,
    },
    {
      description: "Clean up mess",
      notes: "",
      completed: false,
      project_id: 3,
    },
    {
      description: "Brag to wife",
      notes: "",
      completed: false,
      project_id: 3,
    },
  ]);
};
