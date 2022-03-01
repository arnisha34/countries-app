import { Link, useParams } from 'react-router-dom'
import { HiArrowNarrowLeft } from 'react-icons/hi'

export default function Country(props) {

    const {name} = useParams();

    const country = props.countries.find(country => country.name === name);
    localStorage.getItem('data');
    
  return (
      <div className='container'>
        <div className='row'>
            <div className='col'>
                <Link to="/"><button><HiArrowNarrowLeft /> Back</button></Link>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-6'>
                <img src={country.flags.svg} className="img-fluid" alt=""/>
            </div>
            <div className='col-md-6'>
                <div className='row'>
                    <div className='country-title col'>
                        <h2>{country.name}</h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='country-info col-md-6'>
                        <div><span>Native Name:</span> {country.name}</div>
                        <div><span>Population:</span> {country.population.toLocaleString()}</div>
                        <div><span>Region:</span> {country.region}</div>
                        <div><span>Sub Region:</span> {country.subregion}</div>
                        <div><span>Capital:</span> {country.capital}</div>
                    </div>
                    <div className='country-info col-md-6'>
                        <div><span>Top Level Domain:</span> {country.topLevelDomain}</div>
                        <div><span>Currencies:</span> {country.currencies.map(currency => currency.name)}</div>
                        <div><span>Languages:</span> {country.Languages}</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
  )
}
