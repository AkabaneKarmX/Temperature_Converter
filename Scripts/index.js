const temperatureValue = document.getElementById('temperatureValue');
const mySubmitButton = document.getElementById('submitButton');
const myResetButton = document.getElementById('resetButton');
const tempValue = document.getElementById('tempValue');
// const selectedRadio = document.querySelector('input[name="tempUnit"]:checked'); //Not Needed Without The Code On Line 127 - 144

celsiusToKelvin = (celsius) => {
   const Kelvin = celsius + 273;
   return Kelvin;
};

celsiusToFahrenheit = (celsius) => {
   const Fahrenheit = (celsius * 9) / 5 + 32;
   return Fahrenheit;
};

kelvinToFahrenheit = (kelvin) => {
   const Fahrenheit = ((kelvin - 273) * 9) / 5 + 32;
   return Fahrenheit;
};

fahrenheitToKelvin = (Fahrenheit) => {
   const Kelvin = ((Fahrenheit - 32) * 5) / 9 + 273;
   return Kelvin;
};

// Adds The Units And Displays The Output On The Document.   

tempertaureFormattedWithUnits = (value,  tempUnit) => {
   let unit = '';

   if (tempUnit === "C") {
      unit = value.toLocaleString("en-GB", { style: "unit", unit: "celsius", unitDisplay: "short", });
   } else if (tempUnit === "F") {
      unit = value.toLocaleString("en-GB", { style: "unit", unit: "fahrenheit", unitDisplay: "short", });
   } else if (tempUnit === "K") {
      unit = value.toLocaleString("en-GB", { style: "unit", unit: "celsius", unitDisplay: "short", });
      unit = unit.replace("°C", "K");
   }

   tempValue.innerHTML = `${unit}`;
}

// Submit Button Handler. This comment is unnecessary, but, imma add it anyway.   

mySubmitButton.addEventListener('click', () => {
   const temperature = parseInt(temperatureValue.value);

   if (isNaN(temperature)) {
      alert('Please Enter a Numerical Value!!');

   } else {

//It Doesn't Work. Please Help! 😥😥

      // switch(selectedRadio){
      //    case "celsiusToKelvin":
      //       tempValue.innerHTML = celsiusToKelvin(temperatureValue);
      //       break;
      //    case "celsiusToFahrenheit":
      //       tempValue.innerHTML = celsiusToFahrenheit(temperatureValue);
      //       break;
      //    case "kelvinToFahrenheit":
      //       tempValue.innerHTML = kelvinToFahrenheit(temperatureValue);
      //       break;
      //    case "fahrenheitToKelvin":
      //       tempValue.innerHTML = fahrenheitToKelvin(temperatureValue);
      //       break;
      //    default:
      //       tempValue.innerHTML = '';
      // }

// I'm Not Good At Leaving Commented Messages So I hope You Understood What I Did.

      if (document.getElementById("celsiusToKelvin").checked) {
         tempertaureFormattedWithUnits(celsiusToKelvin(temperature), 'K');

      } else if (document.getElementById("celsiusToFahrenheit").checked) {
         tempertaureFormattedWithUnits(celsiusToFahrenheit(temperature), 'F');

      } else if (document.getElementById("kelvinToFahrenheit").checked) {
         tempertaureFormattedWithUnits(kelvinToFahrenheit(temperature), 'F');

      } else if (document.getElementById("fahrenheitToKelvin").checked) {
         tempertaureFormattedWithUnits(fahrenheitToKelvin(temperature), 'K');
      }

   }

});

// It Does What The Name Implies. It Resets The Value ಠ_ಠ   

myResetButton.addEventListener('click', () => {
   tempValue.innerHTML = 0;
});