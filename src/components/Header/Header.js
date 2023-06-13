import React from 'react';
import { Container } from './styles';

const Header = ({
    setSearch,
    setIdFilter,
    idFilter,
    search,
    sortSearch,
    setSortSearch,
}) => {
    console.log(sortSearch);

    const pokemontypesArray = [
        'Normal',
        'Fire',
        'Water',
        'Grass',
        'Flying',
        'Fighting',
        'Poison',
        'Electric',
        'Ground',
        'Rock',
        'Psychic',
        'Ice',
        'Bug',
        'Ghost',
        'Steel',
        'Dragon',
        'Dark',
        'Fairy',
    ];

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleIdSearch = (e) => {
        setIdFilter(e.target.value);
    };

    return (
        <Container>
            <input
                type="number"
                placeholder="Buscar por id"
                onChange={handleIdSearch}
                value={idFilter}
            />
            <input
                type="text"
                placeholder="Buscar por nome"
                onChange={handleSearch}
                value={search}
            />
            <select
                value={sortSearch}
                onChange={(event) => {
                    setSortSearch(event.target.value);
                }}
            >
                <option>Ordenar</option>
                <option>Crescente</option>
                <option>Decrescente</option>
            </select>
            <select name="tipo" id="tipo">
                <option value="">Selecione um tipo</option>
                {pokemontypesArray.map((type) => {
                    return (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    );
                })}
            </select>
        </Container>
    );
};

export default Header;
