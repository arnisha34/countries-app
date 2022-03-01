import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiSearch } from 'react-icons/hi'

export default function Countries(props) {

    const [results, setResults] = useState(props.countries.sort(function() { return 0.5 - Math.random() }));
    
    var region = [];
    props.countries.forEach(regions => {
        if (!region.includes(regions.region)) {
            region.push(regions.region);
        }
        region.sort();
    });


    const searchFilter = (e) => {
        e.preventDefault();
        if(e.target.value === ""){
            setResults(props.countries);
        }else{
            let filteredCountries = props.countries.filter(countries => countries.name.toLowerCase().includes(e.target.value.toLowerCase()));
            setResults(filteredCountries);
        }
    }

    return (
        <>
            <div className='search-container row'>
                <div className='col-md-8'>
                    <HiSearch className='search-icon' size={22}/>
                    <input className='search-input' name="search" placeholder='Search for a country...' onChange={searchFilter} />
                </div>
                <div className='region-container col-md-4 d-flex justify-content-end'>
                <div className="dropdown">
                    <button className="btn dropdown-toggle" type="button" id="regionDropDown" data-bs-toggle="dropdown" aria-expanded="false">
                    Filter by Region
                    </button>
                        <ul className="dropdown-menu" aria-labelledby="regionDropDown">
                            {region.map(regions => {
                                return (
                                    <li key={regions}><a className="dropdown-item" href="#">{regions}</a></li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <div className='countries-container row row-cols-lg-4 row-cols-md-2 gx-5 gy-5'>
                {results.map(country => {
                    return(
                        <Link to={country.name} state={{from: "countries"}} key={country.numericCode}>
                        <div className='col country'>
                            <div className='country-flag'>
                                <img src={country.flags.png} alt={country.name}/>
                            </div>
                            <div className='country-title'>
                                {country.name}
                            </div>
                            <div className='country-info'>
                                <div className='population'>
                                    <span>Population:</span> {country.population.toLocaleString()}
                                </div>
                                <div className='region'>
                                    <span>Region:</span> {country.region}
                                </div>
                                <div className='capital'>
                                    <span>Capital:</span> {country.capital}
                                </div>
                            </div>
                        </div>
                    </Link>
                    )
                })}
            </div>
        </>
    )
}
