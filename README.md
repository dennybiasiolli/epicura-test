# EpiCura test


#### Startup

- clone this repository

- install all dependencies with `npm install`

- make a copy of `.env.default` file and adjust parameters as needed

    `cp .env.default .env`

- run app with `npm run start`


#### Request

Realizzare un progetto NodeJS che legga i dati restituiti dal servizio che
risponde a: https://backend-staging.epicuramed.it/operationtasks

Uno dei campi presenti all'interno della risposta è "operationType",
ottenerne una lista di soli elementi unici.
Un campo presente all'interno di "operationType" è "discipline",
ottenerne una lista di soli elementi unici, sono degli id.

Popolare la lista degli id con i risultati delle chiamate:
https://backend-staging.epicuramed.it/disciplines/:id

dove :id è chiaramente l'id della "discipline" specifica.

Come ultimo passo popolare, su un database mongodb, per esempio locale,
le collection "operationType" e "discipline" con i dati delle liste create
in precedenza. 

Utilizza pure tutti i framework con cui ti trovi meglio.
Le api sono pubbliche, quindi non è richiesta alcuna autenticazione,
la risposta è in formato json.
