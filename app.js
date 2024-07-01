const apiKey = '195bb093d34e584a7b5f090d1e107a88';

function getTemp(city) {
    if (city !== "") {
        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appId=${apiKey}`,
            method: 'GET',
            success: function(data) {
                console.log(data);

                const temperature = kelvinToCelsius(data.main.temp);
                $('#t').html(temperature + "°C");
                $('#fl').html(kelvinToCelsius(data.main.feels_like) + "°C");
                $('#lt').html(kelvinToCelsius(data.main.temp_min) + "°C");
                $('#ht').html(kelvinToCelsius(data.main.temp_max) + "°C");
                $('#hum').html(data.main.humidity + "%");

                
                weatherType = data.weather[0].main;

                if(weatherType == "Mist")
                {
                    weatherType = "Clouds";
                }

                image = "url('https://mdbgo.io/ascensus/mdb-advanced/img/" + (weatherType.toLowerCase()) + ".gif')";
                console.log(image);
                document.getElementsByTagName("body")[0].style.backgroundImage = image;

                let description = data.weather[0].description;
                document.getElementById("description").innerHTML = description;

                let name = city;
                document.getElementById("name").innerHTML = name;   
            },
            error: function(error) {
                console.log(error);
            }
        });
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
    }

function kelvinToCelsius(data) {
    return Math.round(data - 273.15); 
}

function getData() {
    const city = $('#city').val();
    getTemp(city);

    $('#city').val('');
}
