document.getElementById('showKnobs').addEventListener('click', () => {
    document.querySelector('.knobs').classList.toggle('open');
});

const pointerMark = document.querySelectorAll('.pointer_mark');
const backup = document.querySelectorAll('.backup');
const knob = document.querySelectorAll('.knob');
const valueDegrees = document.querySelectorAll('.value_degree');

const min = 35;
const max = 110;
let value = 0;
const fullActionAngle = 110;
const startAngle = -55;

knob.forEach((knob, index) => {
    knob.addEventListener('click', (e) => {
        knob.classList.toggle('on');
        backup[index].classList.toggle('on');
        pointerMark[index].classList.toggle('on');
        valueDegrees[index].classList.toggle('on');
    });

    knob.addEventListener('wheel', (e) => {
        if (!knob.classList.contains('on')) return;

        e.preventDefault();

        if (e.deltaY > 0) {
        value++;
        value = value > max ? max : value;
        } else {
        value--;
        value = value < min ? min : value;
        }

        const newPos = fullActionAngle / (max - min) * (value - min) + startAngle;
        pointerMark[index].style.transform = `rotateZ(${newPos}deg)`;
        valueDegrees[index].textContent = value + '°';
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const joystickContainers = document.querySelectorAll('.joystick_base');

    joystickContainers.forEach((container) => {
        const joystickHandle = container.querySelector('.joystick_handle');
        let isDragging = false;
        let containerRect = container.getBoundingClientRect();
        let handleRect = joystickHandle.getBoundingClientRect();
        let centerX = containerRect.width / 2;
        let centerY = containerRect.height / 2;
        let maxDistance = containerRect.width / 2 - handleRect.width / 2;

        joystickHandle.addEventListener('mousedown', function(event) {
            isDragging = true;
            containerRect = container.getBoundingClientRect();
            handleRect = joystickHandle.getBoundingClientRect();
            centerX = containerRect.width / 2;
            centerY = containerRect.height / 2;
            maxDistance = containerRect.width / 2 - handleRect.width / 2;
        });

        document.addEventListener('mousemove', function(event) {
            if (isDragging) {
                const offsetX = event.clientX - containerRect.left - centerX;
                const offsetY = event.clientY - containerRect.top - centerY;
                const distance = Math.min(Math.sqrt(offsetX * offsetX + offsetY * offsetY), maxDistance);
                const angle = Math.atan2(offsetY, offsetX);
                const x = Math.cos(angle) * distance;
                const y = Math.sin(angle) * distance;

                joystickHandle.style.transform = `translate(${x}px, ${y}px)`;
            }
        });

        document.addEventListener('mouseup', function(event) {
            if (isDragging) {
                isDragging = false;
                joystickHandle.style.transform = 'translate(0, 0)';
            }
        });
    });
});
