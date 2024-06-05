from machine import Pin, PWM
from time import sleep

servo_pins = [2, 4, 5, 12, 13, 14, 16, 17, 18, 25, 26, 27]
servos = {pin: PWM(Pin(pin), freq=50) for pin in servo_pins}

def por_angulo(value, fromLow, fromHigh, toLow, toHigh):
    m = int((value - fromLow) * (toHigh - toLow) / (fromHigh - fromLow) + toLow)
    if m < toLow:
        m = toLow
    elif m > toHigh:
        m = toHigh
    return m

def control_servo(a, servo_pin):
    m = por_angulo(a, 25, 125, 18, 122)
    servo_pin.duty(m)

while True:
    pin_servo = int(input("Introduce el número de pin del servo (2, 4, 5, 12, 13, 14, 16, 17, 18, 25, 26, 27), o escribe '200' para salir: "))
    
    if pin_servo == 200:
        break
    
    if pin_servo in servo_pins:
        while True:
            a = input("Introduce un ángulo (o escribe '300' para volver al menú principal): ")
            if a == '300':
                break
            a = int(a)
            control_servo(a, servos[pin_servo])
    else:
        print("Número de pin inválido. Por favor, elige un número de pin válido o escribe '200' para salir.")
