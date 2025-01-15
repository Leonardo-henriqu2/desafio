function convertDegrees() {
  const temperatura = document.querySelector("#temperatura");
  const converter = document.querySelector("#btn-converter");
  const result = document.querySelector("#result");

  converter.addEventListener("click", (event) => {
    transformDegree(temperatura.value); // chamada da função com click
  });
  converter.addEventListener("keypress", (event) => {
    if(event.keyCode == 13){
        event.preventDefault();
        transformDegree(temperatura.value); // chamada da função com click
    }
    
  });
  
  function transformDegree(temp) {
    // criação da chamada
    let celsius;
    let fahrenheit;
    let kelvin;
    let convertedDegree;

    if (temp.toUpperCase().includes("C")) {
      celsius = temp.toUpperCase();
      convertDegrees = fahrenheitKelvin(celsius); // chamada de função
    }

    if (temp.toUpperCase().includes("F")) {
        fahrenheit = temp.toUpperCase();
        convertDegrees = celsiusKelvin(fahrenheit);
    }
    if (temp.toUpperCase().includes("K")) {
        kelvin = temp.toUpperCase();
        convertDegrees = celsiusFahrenheit(kelvin);
    }



    

    return (result.innerHTML = convertDegrees)
  }

  // Funções de conversão

  function fahrenheitKelvin(temp) {
    let temperature = Number(temp.replace("C", ""));
    const toFahrenheit = (temperature * 9) / 5 + 32;
    const toKelvin = temperature + 273.15;

    return `${toFahrenheit.toFixed(2)}°F
    <br> ${toKelvin.toFixed(2)} K`
  }

  function celsiusKelvin(temp) {
    let temperature = Number(temp.replace("F", ""));
    const toCelsius = (temperature - 32) * 5 / 9;
    const toKelvin = toCelsius + 273.15;

    return `${toCelsius.toFixed(2)}°C
    <br> ${toKelvin.toFixed(2)} K`
  }

  function celsiusFahrenheit(temp) {
    let temperature = Number(temp.replace("K", ""));
    const toCelsius = (temperature - 273.15);
    const toFahrenheit = (temperature - 273.15) * 9 / 5 + 32;

    return `${toCelsius.toFixed(2)}°C
    <br> ${toFahrenheit.toFixed(2)} °F`
  }


}
convertDegrees();
