const React = require('react');
const DefaultLayout = require('./layouts/default');

class New extends React.Component {
  render() {
    return (//NOTE: <form action> will be the route, <form method> will be the HTTP verb
        <div>
            <DefaultLayout title={"Add New Pokemon"}>
            <form action="/pokemon" method="POST"> 
              Name: <input type="text" name="name" /><br/>
              Img: <input type="text" name="img" /><br/>
              <input type="submit" name="" value="Create Pokemon"/>
            </form>
            </DefaultLayout>
        </div>);
    }
  }// The /fruits route accesses the array stored inside of ./models/fruits_File_Name.jsx, using the ./views/Index.jsx file. However, you will need a route handler usind Middleware.

module.exports = New;