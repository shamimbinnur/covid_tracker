import React from 'react';
import Cards from './components/Cards/Cards'
import Charts from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker'
import {fetchData} from './api'
import ImageCorona from './images/image.png';
import {Footer} from './components/Footer';
import styles from './App.module.css';


class App extends React.Component{
    state = {
        data : {},
        country : '',
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({
            data : fetchedData,
            country : country,
        })

    }

    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState(
            {
                data : fetchedData,
            }
        )
    }

    
    render(){
        const {data, country} = this.state

        return(
            <div className = {styles.container}>
                <img className={styles.image} src = {ImageCorona} alt={'Covid-19'} />
                <Cards data = {data}/>
                <CountryPicker handleCountryChange ={this.handleCountryChange}  />
                <Charts data={data} country={country}/>
                <Footer/>
                
                
            </div>
        )
    }
}

export default App