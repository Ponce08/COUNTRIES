import axios from "axios";

export const funcionOrderCountry = async(value)=>{

    try {
        const { data } = await axios.get(`http://localhost:3001/countries`);
    
        if(value === "De la A-Z"){
            const countriesOrdered_AZ = data.sort((a, b)=>{ 
                if(a.name < b.name)
                {return -1}
            });
            return countriesOrdered_AZ
        };
        
        if(value === "Menor Poblacion"){
            const ordered_poblacion = data.sort((a, b)=> a.population - b.population)
            return ordered_poblacion  
        };
    
        if(value === "Mayor Poblacion"){
            const ordered_poblacion = data.sort((a, b)=> b.population - a.population)
            return ordered_poblacion   
        };

        if(value === "Todos"){
            return data
        };
    } catch (error) {
        throw Error(error.message)
    }
};

export const countryFilterByContinent = async(value)=>{
    try {
        const { data } = await axios.get(`http://localhost:3001/countries`);

        if(value === "America del Norte"){
            const filterCountries = data.filter(country=>country.continents[0] === "North America")
            return filterCountries
        };

        if(value === "America del Sur"){
            const filterCountries = data.filter(country=>country.continents[0] === "South America")
            return filterCountries
        };

        if(value === "Europa"){
            const filterCountries = data.filter(country=>country.continents[0] === "Europe")
            return filterCountries
        };

        if(value === "Asia"){
            const filterCountries = data.filter(country=>country.continents[0] === "Asia")
            return filterCountries
        };

        if(value === "Africa"){
            const filterCountries = data.filter(country=>country.continents[0] === "Africa")
            return filterCountries
        };

        if(value === "Oceania"){
            const filterCountries = data.filter(country=>country.continents[0] === "Oceania")
            return filterCountries
        };

        if(value === "Antartida"){
            const filterCountries = data.filter(country=>country.continents[0] === "Antarctica")
            return filterCountries
        };

        if(value === "Todos"){
            return data
        };
    } catch (error) {
        throw Error(error.message)
    }
}
