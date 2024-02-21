export const validation = (activityData)=>{

    let validationActivity = {};

    if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(activityData.name)){
        validationActivity.name = 'Incerte solo letras'
    };

    if(!/^.{5,100}$/.test(activityData.name)){
        validationActivity.name = 'Escriba mas de 5 caracteres'
    };

    if(activityData.dificulty < 1 || activityData.dificulty > 5){
        validationActivity.dificulty = 'El nivel de dificultad es minimo 1 maximo 5'
    };

    if(activityData.duration < 1 || activityData.duration > 12){
        validationActivity.duration = 'Escoja una duracion entre 1 y 12 horas'
    };

    if(activityData.season === '--Seleccione--'){
        validationActivity.season = 'Seleccione una opcion'
    };

    if(activityData.countries.length > 3){
        validationActivity.countries = 'Seleccione un maximo de tres paises'
    };

    if(activityData.countries.length === 0){
        validationActivity.countries = 'Seleccione al menos un pais'
    };

    return validationActivity;
}