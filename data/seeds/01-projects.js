//    DATA SHAPE
// table.increments("id");
// table.text("name").notNull();
// table.text("description");
// table.boolean("completed").notNull().defaultTo(false);
// table.integer("resource_id").references("id").inTable("resources");

exports.seed = async function (knex) {
  console.log("projects");
  await knex("projects").insert([
    {
      name: "Clean gutters",
      description: "Remove all the debris from the gutter",
      completed: false,
    },
    {
      name: "Wash car",
      description: "Wash the car",
      completed: false,
    },
    {
      name: "Trim trees",
      description: "Remove the dead branches from the tree",
      completed: false,
    },
  ]);
};
