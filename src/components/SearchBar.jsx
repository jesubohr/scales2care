import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { nameScales } from '../utils/scales';
import debounce from '../utils/debounce';
import fuzzysearch from '../utils/search';

export default function SearchBar ({ className = "" }) {
    const navigate = useNavigate();
    const searchResults = useRef(null);
    const searchInput = useRef(null);
    const [results, setResults] = useState([]);

    const handleSearch = debounce(({ target }) => {
        const { value } = target;
        const scales = nameScales.map((name, index) => {
            if (fuzzysearch(value, name)) return {
                id: index,
                name,
            };
        }).filter(Boolean);
        setResults(scales);
        
        if(value === '' || scales.length === 0) searchResults.current.classList.add('hidden');
        else searchResults.current.classList.remove('hidden');
    }, 500);

    return (
        <section id="search" className={ `relative ${className}` }>
            <input
                ref={ searchInput }
                type="search"
                title="Search"
                placeholder="Buscar una escala"
                onChange={ handleSearch }
                className="
                    grow
                    py-2
                    px-3
                    dark:bg-[#182d51]
                    border-b-2
                    focus:border-transparent
                    border-med-blue
                    dark:border-med-sky
                    placeholder:text-med-blue/60
                    dark:placeholder:text-med-sky/80
                    caret-med-blue
                    dark:caret-med-sky
                    outline-med-blue
                    dark:outline-med-sky
                    dark:text-med-sky
                    font-medium
                    w-full md:w-auto
                    rounded-lg
                "
            />
            <ul id="search-results" ref={ searchResults } className={
                "hidden absolute top-12 left-0 " +
                "flex flex-col " +
                "max-h-80 " +
                "bg-white dark:bg-[#001B2E] " +
                "border-2 border-med-blue/50 dark:border-med-sky/80 " +
                "dark:text-gray-50 " +
                "overflow-auto"
            }>
                { results.map(({ id, name }, index) => (
                    <li
                        key={ index }
                        onClick={ () => {
                            navigate(`/app/scales/${id + 1}`);
                            searchResults.current.classList.add('hidden');
                            searchInput.current.value = '';
                        } }
                        className="px-4 py-3 hover:bg-med-sky/20 dark:hover:bg-[#002f50] cursor-pointer">
                        { name }
                    </li>
                )) }
            </ul>
        </section>
    );
}
