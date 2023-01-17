# Bug Hunting Weather App

This project was created to be used for trainning bug hunting skills on React and integration tests using React Testing Library (RTL). 

## How to use

1. Clone this repository.
2. Install the dependencies `npm install`.
3. Execute the project with `npm start`.
  > You will notice that a lot of errors have been prompted, use your react skills to try to resolve the issues.
  > Try to make the application work as intendend, the specification of how the App should work is on the section below _About the App_.
4. After fixing the errors with application, try to execute the tests with `npm test`.
  > The execution will fail, now you can start training your bug hunting skills trying to fix those errors.
  Explore the source code of the project, the components and the tests to resolve it.

## About the App

Weather App is an Web App that show to the users the current Weather of any city he wants to know.

How the App should be working:
 1. User loads the initial page where exists a form with a field to put the city he wants to search for.
    - The to search should be disabled while no city have been typed.
 2. After typing the city and clicking on `Search` button, the user is taken to a new page where it contains the name of the searched city.
 3. On this page, the form continues visible but know have a `card` with the weather information about the searched city.

Have Fun!
