//    DATA SHAPE
// table.increments("id");
// table.text("name").notNull();
// table.text("description");

exports.seed = async function (knex) {
  console.log("resources");
  await knex("resources").insert([
    {
      name: "Ladder",
      description: "Used to reach high places",
    },
    {
      name: "Soap and sponge",
      description: "Vital to wasing the vehicles",
    },
    {
      name: "Pole saw",
      description: "Easier to use than levitation",
    },
  ]);
};
