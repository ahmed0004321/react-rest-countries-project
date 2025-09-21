import React, { useState } from 'react';

const Country = ({country, handleVisitedCountries, gettingVisitedFlag}) => {
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        //basic system
        // if(visited===true){
        //     setVisited(false);
        // }
        // else{
        //     setVisited(true);
        // }
        //2nd system 
        //setVisited(visited ? false : true)
        //third system
        setVisited(!visited);
        handleVisitedCountries(country);
    }

    return (
        <div className={`text-shadow-2xl flex flex-col gap-5 p-10 rounded-3xl mb-5 font-bold text-xl shadow-2xl transition transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl ${visited && 'bg-[#E8DFCA] text-black'}`}>
            <h3><img className='w-100 h-40 object-cover rounded-md shadow-2xl' src={country?.flags?.flags?.png} alt="" /></h3>
            <p>Name: {country.name.common}</p>
            <p>Population: {country.population.population}</p>
            <p>Capital: {country.capital.capital[0]}</p>
            <p>Area: {country.area.area} | {country.area.area > 300000 ? "Big Country" : "Small Country"}</p>

            <button className='btn btn-secondary' onClick={handleVisited}>
                {visited === true ? "Visited" : "Not Visited"}
            </button>

            <button className='btn btn-primary' onClick={()=>gettingVisitedFlag(country?.flags?.flags?.png)}>Getting Visited Flag</button>
        </div>
    );
};

export default Country;