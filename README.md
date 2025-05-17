Legajo 52087
Nombre Martin Quiroga
Este proyecto implementa un analizador léxico y sintáctico con ANTLR4 y JavaScript, que interpreta líneas de información sobre vuelos, como por ejemplo: AA123 JFK-LAX 15:30, DELAYED, Gate: B12
El analizador verifica que el formato sea válido introducido en el input.txt y traduce la línea a un objeto JavaScript.
Se ingresa un ejemplo como “AA123 JFK-LAX 15:30, DELAYED, Gate: B12” y con este formato se debería generar el árbol correctamente, en caso contrario por ejemplo “AA123 JFK-LAX 15:30, DELAY, Gate: B12” Al aparecer DELAY aparece el siguiente error "Parser error (1, 22): mismatched input 'D' expecting {'ON TIME', 'DELAYED', 'CANCELED'}"

Requisitos
Java (JDK 8 o superior)
Node.js y npm
ANTLR4
Ejemplo con su árbol
AA123 JFK-LAX 15:30, ON TIME, Gate: B12(Correcto)

![Screenshot 2025-05-17 173923](https://github.com/user-attachments/assets/56602bc8-0335-4267-9ef7-aac9de92bfa2)

Tokens del ejemplo anterior

![Screenshot 2025-05-17 174038](https://github.com/user-attachments/assets/d7cf0021-990b-40a7-b436-ad692383daa7)


UA789 LAX-JFK 22:15, DELAY, Gate: A10(Incorrecto)

![Screenshot 2025-05-17 173851](https://github.com/user-attachments/assets/2d392ce8-3369-4a9c-8d64-3e1666e60f90)

Muestra con el comando “npm start” desde la consola de windows 

![Screenshot 2025-05-17 173628](https://github.com/user-attachments/assets/9aaee9d1-8b6b-4843-ae23-e36fb32f170d)

Muestra de tokens
