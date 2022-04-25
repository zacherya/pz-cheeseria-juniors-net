# Welcome to Patient Zero's Cheeseria Coding Challenge (For Juniors)

## Important Updated Notes

The below instructions should be followed as per normal with the addition of setting up a database connection for the API backend solution.

❗ The API solution must have all permissions that permit the creation/updating/deletion of databases, tables and rows

#### To configure a database string in the backend solution:
* Modify the PrimaryDbConnection string in the appsetting.json file
* Or (preferred), add the command line argument `/db` to the solution profile
  * <b>In VS2022:</b> command line argument is found in Project > Pz.Cheeseria.Api Properties > Debug > General > Open debug launch profiles UI > command line arugments
  * <b>In VS2019:</b> command line argument is found in Project > Pz.Cheeseria.Api Properties > Debug > Application arguments

#### Database argument example
```batch
:: MSSQL
/db="Server=svfs01;Database=PzCheeseria;Trusted_Connection=True;"
/db="Server=svfs01;Database=PzCheeseria;User Id=usrname;Password=pwd;"

:: MySQL
/db="Server=svfs01;Database=PzCheeseria;Uid=username;Pwd=pwd;"
```

#### Testing
Three additional test cases have be implemented into Cypress and one has been modified as per the project instructions. The additonal tests will run after the inital scoped test.

## Overview

Help us complete our Cheese shopping cart.<br />
So we can start selling cheese to the delight of our customers, we will need you to implement a few more desired features. As you can see, there is already some code to get you started. The backend server is using .NET 5.0 and the frontend client is using Angular 10. See the ***Important Scripts*** section below to get you started.<br />
We recommend you fork this repository under your own username.

Once these features are completed, you will also make sure the functionality you implemented is covered by automated tests.

Following are the features you will need to complete

1. When clicking on a Cheese card, open a [Dialog](https://material.angular.io/components/dialog/examples) that contains all the details of the card, including the item's **description**.

2. Add a **Purchase** button to the Cart (In the sliding view that opens when you click the 'View Cart' button). Clicking on the **Purchase** button will send all items in the cart to the server (backend) and store them for later use (You are not required to use a Database in this exercise, but you may do so if you wish).

3. Show all recently purchased items when clicking on the "Recent Purchases" button on the top left of the page. You may choose to display those items in a Drawer, a Dialog or any other control you see fit. Note that the recent purchased items **must** be retrieved from the server.

4. Add a UI automation test that performs the Purchase action you implemented as part of Feature #2. For this test case you will add two separate items to the cart and click on the **Purchase** button you have added as part of Feature #2.
For this exercise we will be using the Cypress.io tool-set. You will find code to get you started in the 'e2e' folder.
***Note: You are free to add any selectors to your client code which may be required by the e2e tests.***

Once done, please notify us of your repository details and make sure it is publicly accessible. As part of your assessment we will confirm that all features were implemented as instructed.

## Important Scripts

In the client project directory, you can run:

### `npm install`

Installs package dependencies (using node v14.15.0)

### `npm start`

Builds and runs the app in the development mode.\
The browser will be ready under [http://localhost:4200](http://localhost:4200).

To run the server backend, see instructions in backend/README.md.

### Cypress.io

You will open the e2e folder, then run following commands to get started

```bash
npm install
npm test
```

### Helpful links

[React Material UI](https://material-ui.com/getting-started/usage/)
