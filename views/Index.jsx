const React = require('react');
const DefaultLayout = require('./layouts/default');

const myStyle = {
    color: '#000000',
    backgroundColor: '#ffffff',
  };
const img_Size = {width:'128px',height:'128px'};

    class Index extends React.Component {
      render() {
          const pokemon  = this.props.pokemon
          return (
                  <div style={myStyle}>
                      <DefaultLayout title={"pokemon Index Page"}>
                      <ul>
                            {
                            pokemon.map((pokemon, i) => {
                                return (
                                    <li>
                                        <a href={`/pokemon/${pokemon.id}`}>{pokemon.name}</a>
                                        <br></br>
                                        <a href={`/pokemon/${pokemon.id}`} ><img src={pokemon.img} alt={pokemon.name} style={img_Size}/></a>
                                    </li>
                                );
                            })
                            }
                      </ul>
                      </DefaultLayout>
                    <nav>
                        <a href="/pokemon/new">Create a New pokemon</a>
                    </nav>
                  </div>
          );
      }
    }
    module.exports = Index;