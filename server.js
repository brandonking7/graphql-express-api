const express = require("express");
const bodyParser = require("body-parser");
const graphqlHTTP = require("express-graphql");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const { makeExecutableSchema } = require("graphql-tools");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");
const { zombie } = require("./models/model");
const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const app = express();
app.use(morgan("dev"));
app.use(cors("*"));
app.use(bodyParser.json());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: executableSchema,
    graphiql: true
  })
);

// mongoose
//   .connect(
//     "mongodb://localhost/27017",
//     { useNewUrlParser: true, useFindAndModify: false }
//   )
//   .then(() => console.log("mongoose.connect: We got something"));
//
// mongoose.connection.on("error", err => {
//   console.error(`ERROR → ${err}`);
// });
// mongoose.connection.once("open", function() {
//   // we're connected!
// });
//
// const Zombie = mongoose.model("Zombie", zombie);

app.listen(4000);
console.log("App listening on port 4000");
