    const React = require('react')
    const DefaultLayout = require('./layouts/default');

    class Home extends React.Component {
       render () {
        return (
          <DefaultLayout title={"Welcome to the Pokemon App!"}></DefaultLayout>
         );
        }
     }
     module.exports  = Home;
