# Mercado Libre Clon
"Clon" del sitio web Mercado Libre

## Que necesito?
- Node
- Yarn

## Como Empezar
1. `$ npm i -g yarn forever concurrently`
2. `$ git clone git@github.com:ThompsonMatiasF/mercado-libre-clon.git`
3. `$ cd mercado-libre-clon`
4. `$ yarn install`
4. `$ yarn run dev`
  
### Scripts
Los diferentes Scripts que hay para correr el proyecto son:  

- `start`: ejecuta el comando `dev`.
- `dev`: Levanta el Front y el Back por separado.
- `prod`: Levanta el Back con el Front compilado dentro del mismo.  
  
Para correr los scripts hacerlo ejecutando `yarn run <script-name>`.
Ej.: `yarn run dev`.


## Tecnologias

Para este proyecto utilice las siguientes tecnologías más destacadas, siempre manteniendo un stack full JavaScript:

1. React
2. React Router
3. React Bootstrap
4. Bootstrap
5. Node con Express
6. Sass
7. Axios
8. Jest
9. React Testing Library

## Configuraciones adicionales

- Si se quiere mockear el Front para correrlo sin depender del back se puede hacerlo habilitando en el archivo 
`.env` la variable REACT_APP_ENABLE_MOCK=mock
