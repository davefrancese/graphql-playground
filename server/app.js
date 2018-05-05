const express = require('express');
const graphqlHTTP = require('express-graphql')

const app = express();
const port = 3000;

app.use('/graphql', graphqlHTTP({
  
}))

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
