# Group Robot

Team Members:

Yifei Wang

Bo Niu

Surendra Lama

Christopher Tso

[API repo](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_Robot_API)

## Topic

Seattle Crime Data visualization.

# Iteration 3

In iteration 3, we implemented all the functionalities for our application and the application is fully functional.

Seattle Crime Data visualization deployed on Heroku: https://seattle-crime-ui.herokuapp.com/home

Github Repositories:

API - https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_Robot_API

UI - https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_Robot_UI

## Contribution

Bo: Working on the Discussion page. Implemented the basic ui and api of add comments for a specific crime when user is logged in. Fixed bug in SSR.

Chris: Updated comment box to only work when signed in. General testing and debugging.

Yifei: Added styles to comments, formatted string output and sorted comments to make it readable. Resolved long-lasting react warnings in developer console.  

Surendra: Worked on implementing discussion page for the application, user can select at each individual crime icon and discuss about it. Fixing eslint error, testing and debugging application.

## Screenshots:

- Landing Page

![Homepage](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_Robot_UI/blob/master/screenshot/Homepage.png)

- Report Page

![Report](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_Robot_UI/blob/master/screenshot/Report.png)

- Discussion Page

![Discussion](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_Robot_UI/blob/master/screenshot/Discussion.png)

- SignIn Page

![SignIn](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_Robot_UI/blob/master/screenshot/SignIn.png)

# Iteration 2

In iteration 2, we deployed our website to Heroku.

Deployed Heroku Link: [https://seattle-crime-ui.herokuapp.com](https://seattle-crime-ui.herokuapp.com)

Backend GraphQL Playground: [https://seattle-crime-api.herokuapp.com/graphql](https://seattle-crime-api.herokuapp.com/graphql)

## Progress

1. Most functionalities in Home page has been implemented.
2. Most functionalities in Report page has been implemented. The filter form may have small changes later.
3. The discussion page has not been implemented yet. We place some static component there as placeholder.
4. The user authorization in discussion posts is not fully functioning.
5. In the backend, most graphQL interface has been implemented.

## Contribution

Bo: Refactored codes in Home page to support server side rendering. Added type filter to the Home filter. Implemented the functionality to change marker's image for different type of crime. Wrote some graphQL interface and UI for Report page.

Chris: Update report page with filter and help with implementation of graph, and update schema for graphQL.

Yifei: Implemented GraphQL schemas and resolvers to store user information, allow users to post comments and retrieve comments by crime Id.

Surendra: Worked on Discussion page functionality, trying to add comments to commentsList to show on the page.

## Screenshot

![iter2-1](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_Robot_UI/blob/master/screenshot/iter2-1.png)
![iter2-2](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_Robot_UI/blob/master/screenshot/iter2-2.png)

# Iteration 1

For iteration 1, we started our project using the boilerplate code from the Pro-MERN Book. This includes both the API and UI folders. So far, we have implemented a Home page with a Google Map and a filter to filter the types of crimes that are displayed. We have also started a "Reports" page though it is not fully functional yet. We also have a "Discussion" page where users could post their comments based on their experience but it is not fully functional yet.

Team Contributions:

Bo: Build the boilerplate for the UI and API repo. Build the basic structure, Link and React component for the Home page and Report page. Implement the filter API and GraphQL schema for Home page.

Chris: Update GraphQL schema, worked on API for ReportFilter and the UI for the Reports page, and API Handler.

Yifei: Made Google map component functional and worked on mongodb about users and comments.

Surendra: Worked on Discussion page to add comments on button click, working on connecting state to DB.

## Deployment

Since in Iteration 1, we are not required to deploy our project to Heroku, so we just deployed it on our local machine. The project has been successfully deployed onto the computer of our four group members'. Therefore, if any issues when TAs and Graders are deploying, please contact any of us. Thank you.

### Procedure

1. Download the release version of the iter1 of both the [UI](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_Robot_UI/releases/tag/iter1) repo and [API](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_Robot_API/releases/tag/iter1) repo.
2. For UI repo:
   1. `npm install`
   2. `npm run compile`
   3. Rename the `iter1.env` to `.env`.
   4. `npm start`
3. For API repo:
   1. `npm install`
   2. Rename the `iter1.env` to `.env`.
   3. `npm start`
4. Now you shold be able to see the website on `http://ui.promernstack.com:8000/`

## Note

1. We haven't implement the input validation part now. And we have more than 600000 documents in our database. Therefore, when Graders are testing the Google Map, please do not set a time range for more than two month, otherwise the Google Map will become stutter and lag.
2. When you are filtering on the District and Beat, please select the Beat from the same District. (Starting with the same letter). For example, B and B2, G and G2. Otherwise it returns nothing. We will implement this functionality to automatically do this job later in Iteration 2.
3. Currently the filter on the Report page doesn't work correctly.

## Iteration 1 Screenshot:

![iter1-1](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_Robot_UI/blob/master/screenshot/iter1-1.png)
![iter1-2](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_Robot_UI/blob/master/screenshot/iter1-2.png)
![iter1-3](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_Robot_UI/blob/master/screenshot/iter1-3.png)
