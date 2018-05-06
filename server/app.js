const express = require('express');
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')

const app = express();
const port = 3000;

mongoose.connect('mongodb://dave:test123@ds215380.mlab.com:15380/gql-playground');
mongoose.connection.once('open', () => {
  console.log('connected to database');
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
