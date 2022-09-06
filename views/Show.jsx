const React = require('react');
const DefaultLayout = require('./layouts/default');

const img_Size = {width:'400px',height:'400px'}

class Show extends React.Component {
    render () {
      // Variables can be declared here!
    const pokemon = this.props.pokemon
      return (
        <div>
            <DefaultLayout title={"Gotta Catch 'Em All"}>
            <br />
            <h2>{pokemon.name}</h2>
            <br></br>
            <a  href={pokemon.img} ><img src={pokemon.img} alt={pokemon.name} style={img_Size}/></a>
            <nav>
                <a href="/pokemon">Back</a>
            </nav>
            </DefaultLayout>
        </div>
        );
      }
    }
    module.exports  = Show;

    
    
//NOTE: '{Insert_JS_Here}' is used to insert JS into HTML, in other words, JSX!