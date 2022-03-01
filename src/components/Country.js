import { Link, useParams } from 'react-router-dom'
import { HiArrowNarrowLeft } from 'react-icons/hi'

export default function Country(props) {

    const {name} = useParams();

    const country = props.countries.find(country => country.name === name);
    
    // const alpha3Code = props.countries.map(ac => ac.alpha3Code);
    // const borderName = props.countries.map(country => {
    //     if(alpha3Code === country.borders){
    //         return country.name;
    //     }
    // });
    // console.log(borderName);
    
    return (
        <div className='container'>
        <div className='row'>
            <div className='col'>
                <Link to="/"><button className='back-btn'><HiArrowNarrowLeft size={20}/> Back</button></Link>
            </div>
        </div>
        <div className='row single-country-container'>
            <div className='col-md-6 pe-5'>
                <img src={country.flags.svg} className="img-fluid" alt=""/>
            </div>
            <div className='col-md-6 d-flex flex-column justify-content-center px-5'>
                <div className='row'>
                    <div className='single-country-title col'>
                        <h2>{country.name}</h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='single-country-info col-md-6'>
                        <div><span>Native Name:</span> {country.name}</div>
                        <div><span>Population:</span> {country.population.toLocaleString()}</div>
                        <div><span>Region:</span> {country.region}</div>
                        <div><span>Sub Region:</span> {country.subregion}</div>
                        <div><span>Capital:</span> {country.capital}</div>
                    </div>
                    <div className='single-country-info col-md-6'>
                        <div><span>Top Level Domain:</span> {country.topLevelDomain}</div>
                        <div><span>Currencies:</span> {country.currencies.map(currency => currency.name)}</div>
                        <div><span>Languages:</span> {country.Languages}</div>
                    </div>
                </div>
                <div className='row'>
                    <div><span>Border Countries</span> {country.borders.map(border => <Link to={country.name} key={border} className="border-code">{border}</Link>)}</div>
                </div>
            </div>
        </div>
        </div>
    )
}
