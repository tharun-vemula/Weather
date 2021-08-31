const apiKey = 'WmaGGH10PlL18P31FU5xnvAbm8LYrlA9';


const info = async key => {
    const url = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${key}?apikey=${apiKey}`;

    const request = await fetch(url + query);
    const data = await request.json();
    return data;
}





const place = async city =>{
    const url = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${apiKey}&q=${city}`;

    const request = await fetch(url + query);
    const data = await request.json();
   
    for(var i in data){
        var city = data[i];
        if(city.Country.ID === 'IN'){
            var City = city;
            break;
        }
    }
    return City;
}

