# The Neighborhood Map Project

This is the final project the FEND track. In this projects we were supposed to create a React app
that allows a user to seach for venues in a certain location, in my instance for restaurants(food) in Kolkata Location .
The application was built with responsivness and accessibility in mind.

----
## To run

* Clone or download the project 
* install all project dependencies with `npm install`
* start development server with `npm start`  
* the project is served on `localhost:3000` by default
----
## To use

The app will load a map of Kolkata with about 30 markers on the map related to local restaurants. When you click on a marker, a window with information about that specific location will open. Clicking elsewhere on a map will close the window. 


The app can also display the list of all restaurants which can be accessed by clicking `Search` button. Which is in the top left corner.  when the `Search` button is clicked, the list of restaurants will show. Clicking on an item from the list will open information window about the location and will make the corresponding marker to bounce. Clicking again the `Search` button or `Close` button will hide the list. 

The app has also a seach field, which allows to look for a specific restaurant wihtin that location. When a query is entered in the search field, the markers on the map will be filtered and only corresponding marker will remain on the map. and also The list of restaurats will be filtered as well.

Clearing the query, brings back all the markers and restores the list with DROP animation.

## Service Worker

Service Worker  for this project will only cache the side when in production mode. To load 
the app in production mode:
follow this command :arrow_down:
`npm run build`
and then
`serve -s build`

## Dependencies
* [Create-React-app](https://github.com/facebook/create-react-app)
* [React](https://reactjs.org/)
* [Google Maps API](https://developers.google.com/maps/documentation/javascript/get-api-key)
* [Foursquare API](https://developer.foursquare.com/)
* [Font Aweomse](http://fontawesome.io)
* [Google Font](https://fonts.google.com)


# npm packages:
    - prop-types
    - react-dom
    - react-router-dom
    - react-scripts


## Contributing
Not allowed this time. :full_moon_with_face:
