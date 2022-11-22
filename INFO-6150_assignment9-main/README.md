*Assignment 9*

Email and password are validated on the login page. /users/login on localhost:8000 receives a post request from it (route created in the assignment8 repo). If the credentials are correct, it redirects to the homepage; otherwise, it displays an alert.

A navbar, a reusable component, is present on the Home, About, Jobs, and Contact pages and is used to toggle between them.

To display material appropriately on all pages, a card component with the three props header, description, and isShowButton is reused.

A list of open positions is displayed on the jobs page using a map function.

The card component's button is dynamically displayed.