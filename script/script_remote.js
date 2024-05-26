document.addEventListener('DOMContentLoaded', () => {
   const buttons = document.querySelectorAll('.buttons button');
   const joystick1 = document.getElementById('joystick1');
   const joystick2 = document.getElementById('joystick2');
   const joystickHandle1 = joystick1.querySelector('.joystick-handle');
   const joystickHandle2 = joystick2.querySelector('.joystick-handle');
   const toggleButtons = document.getElementById('toggle-buttons');
   const buttonsContainer = document.getElementById('buttons-container');

   buttons.forEach(button => {
       button.addEventListener('click', () => {
           console.log(`Button ${button.innerText} pressed`);
       });
   });

   toggleButtons.addEventListener('click', () => {
       buttonsContainer.classList.toggle('hidden');
   });

   function moveJoystick(joystick, handle) {
       joystick.addEventListener('mousemove', (event) => {
           const rect = joystick.getBoundingClientRect();
           const x = event.clientX - rect.left - rect.width / 2;
           const y = event.clientY - rect.top - rect.height / 2;
           handle.style.transform = `translate(${x}px, ${y}px)`;
       });

       joystick.addEventListener('mouseleave', () => {
           handle.style.transform = 'translate(0, 0)';
       });

       joystick.addEventListener('mouseup', () => {
           handle.style.transform = 'translate(0, 0)';
       });
   }

   moveJoystick(joystick1, joystickHandle1);
   moveJoystick(joystick2, joystickHandle2);
});

document.addEventListener('DOMContentLoaded', () => {
   const optionButtons = document.querySelectorAll('.option');

   optionButtons.forEach(option => {
       option.addEventListener('click', () => {
           console.log(`Selected option: ${option.innerText}`);
       });
   });

});

document.addEventListener('DOMContentLoaded', () => {
   const optionButtons = document.querySelectorAll('.option');
   const temperatureValue = document.getElementById('temperature-value');
   const humidityValue = document.getElementById('humidity-value');
   const distanceValue = document.getElementById('distance-value');

   optionButtons.forEach(option => {
       option.addEventListener('click', () => {
           console.log(`Selected option: ${option.innerText}`);
       });
   });

   setInterval(() => {
       const temperature = Math.floor(Math.random() * (40 - 20 + 1)) + 20;
       const humidity = Math.floor(Math.random() * (80 - 40 + 1)) + 40;
       const distance = Math.floor(Math.random() * (100 - 10 + 1)) + 10;

       temperatureValue.textContent = temperature + ' °C';
       humidityValue.textContent = humidity + ' %';
       distanceValue.textContent = distance + ' cm';
   }, 3000);
});

document.addEventListener('DOMContentLoaded', () => {
   const optionButtons = document.querySelectorAll('.option');
   const temperatureValue = document.querySelectorAll('.sensor-display #temperature-value');
   const humidityValue = document.querySelectorAll('.sensor-display #humidity-value');
   const distanceValue = document.querySelectorAll('.sensor-display #distance-value');

   optionButtons.forEach(option => {
       option.addEventListener('click', () => {
           console.log(`Selected option: ${option.innerText}`);
       });
   });

   setInterval(() => {
       const temperature = Math.floor(Math.random() * (40 - 20 + 1)) + 20;
       const humidity = Math.floor(Math.random() * (80 - 40 + 1)) + 40;
       const distance = Math.floor(Math.random() * (100 - 10 + 1)) + 10;

       temperatureValue.forEach(value => value.textContent = temperature + ' °C');
       humidityValue.forEach(value => value.textContent = humidity + ' %');
       distanceValue.forEach(value => value.textContent = distance + ' cm');
   }, 3000);
});
