const API_KEY = 'db9c32c5674a4bd8a6c41226240103';


export const weather = async ({city}) => {
    if (city === '') {
        city = 'Panama';

        try{
            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`)
            const json = await response.json()
        }catch(e){
            throw new Error('Error searching city')
        }
    }
}
