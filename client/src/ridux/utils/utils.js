import axios from "axios";

export const funcionOrderAndFilterCountry = async(value)=>{
    
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

        let arrayContinents = ["North America", "South America", "Europe", "Asia", "Africa", "Oceania", "Antarctica"];

        for (let i = 0; i < arrayContinents.length; i++) {
            if(arrayContinents[i] === value){
                const filterCountries = data.filter(country=>country.continents[0] === value)
                return filterCountries
            }
        };

        let arrayTemporadas = ["Verano", "Invierno", "Otoño", "Primavera"];
     
        for (let i = 0; i < arrayTemporadas.length; i++) {
            if(arrayTemporadas[i] === value){
                let filterCountryActivity = []
                for (let j = 0; j < data.length; j++) {
                    for (let k = 0; k < data[j].Activities.length; k++) {
                        if(data[j].Activities[k].season === value){
                            filterCountryActivity.push(data[j])
                        } 
                    }
                }
                return filterCountryActivity
            }
        };

        if(value === "Todos"){
            return data
        };

    } catch (error) {
        throw Error(error.message)
    }
};

