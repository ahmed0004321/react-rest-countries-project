import { use, useState } from 'react';
import Country from '../Country/Country';

const Countries = ({countriesPromise}) => {
    const [visitedFlag, setVisitedFlag] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([])//je hutu ami show korbo je kon kon deshe geci oigular nam array te jehutu show korbo tai default akta empty array nici
    const handleVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const gettingVisitedFlag = (flag) => {
        const newVisitedFlag = [...visitedFlag, flag];
        setVisitedFlag(newVisitedFlag);
    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    return (
        <div className='space-y-5'>
            <h1 className='text-4xl font-bold'>Total Countries: {countries.length}</h1>
            <h2 className='text-4xl'>Total Visited Countries: {visitedCountries.length}</h2>
            <ol>
                {
                    visitedFlag.map((flags, index) => <li key={index} className='inline-block m-2'>
                        <img className='w-[150px]' src={flags} alt="" />
                    </li>)
                }
            </ol>
            <ol>
                {
                    visitedCountries.map(country => <li className='text-2xl text-black font-bold inline-block m-2 bg-green-200 rounded-lg p-2' key={country.cca3.cca3}>{country.name.common} <img className='w-90 h-40 object-cover rounded-md' src={country.flags.flags.png} alt="" /></li>)
                }
            </ol>

            <div className='grid grid-cols-3 gap-x-4'>
            {
                countries.map(country => <Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries} gettingVisitedFlag={gettingVisitedFlag}></Country>)
            }
        </div>
        </div>
    );
};

export default Countries;