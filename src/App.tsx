import React, { FunctionComponent } from 'react';
import PokemonList from './pages/pokemon-list';
import PokemonsDetail from './pages/pokemon-detail';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';

const App: FunctionComponent = () => {

    return (
        <Router>
            <div>
                <nav>
                    <div className='new-wrapper teal'>
                        <Link to="/" className='brand-logo center'>Pokédex</Link>
                    </div>
                </nav>

                <Routes>
                    <Route path="/" Component={PokemonList} />
                    <Route path="/pokemons" Component={PokemonList} />
                    <Route path="/pokemons/:id" Component={PokemonsDetail} />
                    <Route path="/pokemons/edit/:id" Component={PokemonEdit} />
                    <Route path='*' Component={PageNotFound} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;