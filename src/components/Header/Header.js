import React from 'react';
import { Container, Select, Input, Button } from './styles';

const Header = ({
    setSearch,
    setIdFilter,
    idFilter,
    search,
    sortSearch,
    setSortSearch,
    searchByType,
    setSearchByType,
    clearFilters,
}) => {
    // console.log(sortSearch);
    // console.log(searchByType);

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
            <Input
                type="number"
                placeholder="Buscar por id"
                onChange={handleIdSearch}
                value={idFilter}
            />
            <Input
                type="text"
                placeholder="Buscar por nome"
                onChange={handleSearch}
                value={search}
            />
            <Select
                value={sortSearch}
                onChange={(event) => {
                    setSortSearch(event.target.value);
                }}
            >
                <option>Ordenar</option>
                <option>Crescente</option>
                <option>Decrescente</option>
            </Select>
            <Select
                name="tipo"
                id="tipo"
                value={searchByType}
                onChange={(event) => {
                    setSearchByType(event.target.value);
                }}
            >
                <option>Selecione um tipo</option>
                {pokemontypesArray.map((type) => {
                    return (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    );
                })}
            </Select>
            <Button
                onClick={(event) => {
                    clearFilters(event);
                }}
            >
                Limpar Filtros
            </Button>
        </Container>
    );
};

export default Header;
