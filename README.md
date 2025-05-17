Legajo 52087
Nombre Martin Quiroga
Este proyecto implementa un analizador léxico y sintáctico con ANTLR4 y JavaScript, que interpreta líneas de información sobre vuelos, como por ejemplo: AA123 JFK-LAX 15:30, DELAYED, Gate: B12
El analizador verifica que el formato sea válido y traduce la línea a un objeto JavaScript.
Se ingresa un ejemplo como “AA123 JFK-LAX 15:30, DELAYED, Gate: B12” y con este formato se debería generar el árbol correctamente
Requisitos
Java (JDK 8 o superior)
Node.js y npm
ANTLR4
Ejemplo con su árbol
AA123 JFK-LAX 15:30, ON TIME, Gate: B12(Correcto)
![vuelo g4 parse-tree](https://github.com/user-attachments/assets/a5f3d3ae-0232-4e45-8ce2-d8bc932d30f0)
UA789 LAX-JFK 22:15, DELAY, Gate: A10(Incorrecto)
![vuelo g4 parse-tree](https://github.com/user-attachments/assets/28113617-b7be-41e3-9767-ee7b9831aec0)
