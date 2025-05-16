grammar vuelo;

vuelo: codigo from '-' to hora ',' estado ',' 'Gate:' puerta ;

codigo: LETRA LETRA DIGITO DIGITO DIGITO ; // AA123
from: aeropuerto ;
to: aeropuerto ;
hora: DIGITO DIGITO ':' DIGITO DIGITO ;     // 15:30
estado: 'ON TIME' | 'DELAYED' | 'CANCELED' ;
puerta: LETRA DIGITO DIGITO ;               // B12

aeropuerto: LETRA LETRA LETRA ;             // JFK, LAX

LETRA: [A-Z] ;
DIGITO: [0-9] ;

WS: [ \t\r\n]+ -> skip ;
