const datahide = document.querySelector('.middle_layer');
const Cityname = document.getElementById('Cityname');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp_real_val = document.getElementById('temp_real_val');
const getInfo =async (event) => {
    event.preventDefault();
    let cityVal = Cityname.value;
    if (cityVal === "") {
        city_name.innerText = `Plz Enter City Name To Get Weather Info`;
        datahide.classList.add('data_hide');

        
    }
    else {
        try {
            
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=2de32f02b46133b11007597620623b8c`;
            const response = await fetch(url);
            const data = await response.json();
            // console.log(response);
            const arrData = [data];
            city_name.innerText = `${arrData[0].name} ,${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            // temp_status.innerText = arrData[0].weather[0].main;
            const tempMood = arrData[0].weather[0].main;
            if (tempMood === "Clear") {
                temp_status.innerHTML = "<i class='fa-solid fa-sun' area-hidden='true' style='color:yellow;'></i>";
            } else if (tempMood === "Clouds") {
                temp_status.innerHTML= "<i class='fa-solid fa-cloud' area-hidden='true' style='color:grey;' ></i>";
            }
            else if (tempMood === "Rain") {
                temp_status.innerHTML=  "<i class='fa-solid fa-raindrops' area-hidden='true' style='color:skyblue;'></i>"; 
            }
            else{
                temp_status.innerHTML=  "<i class='fa-regular fa-sun-cloud' area-hidden='true'></i>"; 
            }

            datahide.classList.remove('data_hide');

        }
        catch {
            city_name.innerText = `Plz Enter The City Name Properly`;
            datahide.classList.add('data_hide');

        }
    }
}
submitBtn.addEventListener('click', getInfo);
/**2de32f02b46133b11007597620623b8c
 * 
 * https://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=2de32f02b46133b11007597620623b8c
 */