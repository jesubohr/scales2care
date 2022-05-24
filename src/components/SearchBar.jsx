import { useState, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { Combobox, Transition } from "@headlessui/react";

import { nameScales } from '../utils/scales';
import fuzzysearch from '../utils/search';

export default function SearchBar ({ className = "" }) {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState("");
    const [query, setQuery] = useState('');

    function handleSearch (query) {
        return nameScales.map((name, index) => {
            if (fuzzysearch(query.toLowerCase(), name.toLowerCase())) return { id: index, name };
        }).filter(Boolean);
    };
    function onSelect (option) {
        setSelectedOption(option);
        const optionId = nameScales.findIndex(name => name === option);
        navigate(`/app/scales/${optionId + 1}`);
    };
    const filteredOptions = query !== '' ? handleSearch(query) : [];

    return (
        <section id="search" className={ `relative ${className}` }>
            <Combobox value={ selectedOption } onChange={ onSelect }>
                <Combobox.Input
                    title="Search"
                    placeholder="Buscar una escala"
                    onChange={ ({ target }) => setQuery(target.value) }
                    className="grow py-2 px-3 w-full md:w-auto dark:bg-[#182d51] border-2 border-med-blue rounded-lg focus:border-transparent dark:border-med-sky placeholder:text-med-blue/60 dark:placeholder:text-med-sky/80 caret-med-blue dark:caret-med-sky outline-med-blue dark:outline-med-sky dark:text-med-sky font-medium"
                />
                <Transition
                    as={ Fragment }
                    enter="transition ease-out duration-100"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    beforeLeave={ () => { setSelectedOption(''); } }
                >
                    <Combobox.Options className="absolute top-12 left-0 flex flex-col w-full max-h-80 bg-white dark:bg-[#001B2E] border-2 border-med-blue/50 dark:border-med-sky/80 dark:text-gray-50 overflow-auto">
                        {
                            (filteredOptions.length === 0)
                                ? (
                                    <div className="py-2 px-3 text-center text-med-blue/60 dark:text-med-sky/80 cursor-default">
                                        Sin resultados
                                    </div>
                                ) : (
                                    filteredOptions.map((scale, index) => (
                                        <Combobox.Option
                                            key={ index }
                                            value={ scale.name }
                                            onClick={ () => navigate(`/app/scales/${scale.id + 1}`) }
                                            className={ ({ active }) => `py-2 px-3 border-b border-med-blue/50 dark:border-med-sky/80 dark:text-gray-50 hover:bg-med-sky/50 focus:bg-med-sky/50 cursor-pointer ${active ? 'bg-med-sky/50' : ''}
                                            `}
                                        >{ scale.name }</Combobox.Option>
                                    ))
                                )
                        }
                    </Combobox.Options>
                </Transition>
            </Combobox>
        </section>
    );
}
