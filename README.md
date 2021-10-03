## Descripció
Volem fer un software de carreres de coets.

Un coet està identificat per un codi de 8 caràcters i un número de propulsors. Realitza els següents passos: ( Intenta seguir l’esquema de MVC, separant en diferents directoris el que és la vista del model i el controlador). El codi haurà d’estar preparat per aceptar 2 coets o 99999999 coets (cal que sigui escalabre utilitzant funcions genèriques)

## Nivell 1
1) Creem dos coets amb els codis “32WESSDS” y “LDSFJA32”. El primer coet tindrà 3 propulsors (potència màxima: 10,30,80) i el segon 6 propulsors (potència màxima: 30,40,50,50,30,10).


2) Mostrar a pantalla el codi dels coets i el número de propulsors que té.



3) Fes una funció que calculi la potència màxima del coet (serà el sumatori de les potències màximes dels propulsors)


4) El coet tindrà dos mètodes, accelerar o frenar i augmentarà o es reduirà de 10 en 10 la potencia del propulsor. El coet tindrà una potència actual.

Exemple Rocket amb potències de 10,30,80. Al crear el coet la potència actual serà 0.
Increment 1r Cop: 10+10+10 = 30 potència actual
Increment 2n Cop: 0+10+10 = 30+20 potència actual
Increment 3r Cop: 0+10+10 = 50+20 potència actual
Increment 4t Cop: 0+0+10 = 70+10 potència actual
Increment 5e Cop: 0+0+10 = 80+10 potència actual
.... fins a arribar a la potència màxima que serà 120 



5) Afegir a la vista botons per permetre a un usuari crear, accelerar, frenar i veure la informació dels coets. Algo semblant a la imatge de sota


## Nivell 2
Millora la interfície gràfica, i el tema de les validacions. Converteix aquesta aplicació en un joc, decideix les normes tu mateix/a

## Nivell 3
Fes que els coets tinguin algun tipus d'animació css en funció de la potència actual

Recursos
https://itacademy.barcelonactiva.cat/mod/page/view.php?id=1280
https://www.typescriptlang.org/docs/handbook/typ