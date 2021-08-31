const input= document.querySelector('form');
const card = document.querySelector('.card');
var details = document.querySelector('.details');
var time = document.querySelector('#time');
var icon = document.querySelector('#icon');

const update = data => {
    console.log(data);
    var citydetails = data.CityDetail;
    var weather = data.weatherInfo;
    details.innerHTML = `
    <div class="text-muted text-uppercase text-center details">
                <h5 class="my-3" id="name">${citydetails.EnglishName}</h5>
                <div class="my-3" id="con">${weather[0].WeatherText}</div>
                <div class="display-4 my-4">
                    <span>${weather[0].Temperature.Metric.Value}</span>
                    <span>&deg;C</span>
                </div>
            </div>
    `;

    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

    if(weather[0].IsDayTime){
        time.src = 'icons/day.png';
    }
    else
    {
        time.src = 'icons/night.jpg';
    }

    icon.src = `icons/${weather[0].WeatherIcon}.svg`;
};

const getInfo = async (cityname) => {

      const detail = await place(cityname);
      const weather = await info(detail.Key);
     
      return { CityDetail : detail, weatherInfo : weather  }
}
input.addEventListener('submit', event => {
    event.preventDefault();

    const cityname = input.city.value.trim();
    console.log(cityname)
    input.reset();
  
    getInfo(cityname)
    .then(data => update(data))
    .catch(err => console.log(err));

})

