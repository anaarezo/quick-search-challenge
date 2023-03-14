# Challenge - Quick Search

Evaluate general front end development skills and capabilities.

### Summary

- [Architecture](#architecture)
- [Built With](#built-with)
- [Installation](#installation)
- [Comments](#comments)
- [Author](#author)

## Architecture

    .
    ├── ...
    ├── src
    │   ├── assets          # icons, svgs.
    │   ├── components      # Basic common components for building the project
    │   ├── pages           # Project screens
    │   │   └── Home
    │   ├── store           # redux - api
    │   │   └── library
    │   └── App.js          # App Loader
    └── ...

## Built With

- [React](https://reactjs.org/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Node.js 19.2.0](https://nodejs.org/en/)
- [Open Library](https://openlibrary.org/dev/docs/api)
- [Styled Components](https://styled-components.com/docs/api)
- [Redux](https://redux.js.org/)
- [React Loading Skeleton](https://github.com/dvtng/react-loading-skeleton)
- [TypeScript](https://www.typescriptlang.org/)
- [MSW](https://mswjs.io/)

## Installation

1 - First of all clone this repo to your local machine using:

```shell
git clone https://github.com/anaarezo/quick-search-challenge.git
```

2 - Run npm to install the required packages

```shell
npm i
```

3 - Run dev enviroment, for this you can choose into:

```shell
npm run dev
```

or

```shell
npm start
```

4 - To run tests type:

```shell
npm test
```

# Points of Improvement

- Create a route to Home screen.
- I was focused on finalizing the application and functionality of the feature.
- Should start the unit tests as TDD, but I ended up leaving it for the end. These made it more complex to resolve the failures.
- I started the project by making the API request using React context, and only later did I remember that I should have used Redux. I ended up wasting time there.
- Could make an accessible layout focused on WCAG if it was the project.
- Isolate environment variables, such as API URL using env.
- Isolate the rendering of the `<li>` component from the list into a new render component. Making the render component smaller, easier to test and maintain.
- Avoid nested ternaries, because is not a good practice and it makes the code harder to maintain.

## Author

Ana Laura Arezo

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/anaarezo//)](https://www.linkedin.com/in/anaarezo/)
[![Whatsapp Badge](https://img.shields.io/badge/-Whatsapp-4CA143?style=flat-square&labelColor=4CA143&logo=whatsapp&logoColor=white&link=https://api.whatsapp.com/send?phone=447423393211&text=Hello!)](https://api.whatsapp.com/send?phone=447423393211&text=Hello!)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:laura.arezo@gmail.com)](mailto:laura.arezo@gmail.com)

💡 Feel free to contact me if you have difficulties running the project or to clarify informations.

#### 😃 Thank you TaxScouts!
