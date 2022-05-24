# Typescript-react-formik-form

### Part 1 - API & DB Setup

The API and database table described below will implement the `Contact`
entity, described as follows:

```
{
  "firstName": "Bob",
  "lastName": "Dylan",
  "email": "bob.dylan@email.com",
  "phoneNumber": "012-345-6789",
  "age": 20
}
```

- Create a TypeScript Node API via the [serverless framework](https://www.serverless.com/)

**NOTE: there is no need to _deploy_ the serverless application, as long
as you can run it locally (see [serverless offline
plugin](https://www.npmjs.com/package//serverless-offline) that should
be sufficient.**

**NOTE 2: If you are not as familiar with serverless framework, feel
free to use something like Express to host your server since this will
only be run locally anyway. Don't let this stage be a blocker or slow
you down.**

- Setup a database and table for storing `Contact` entities.

- The `GET` endpoint will be for `Contact` entities and it will return
  a _list_ of `Contact` entities with the above schema.

- The `POST` endpoint will be for creating `Contact` entities and
  the payload will adhere to the schema listed above; it should return
  the newly created `Contact` entity and a `201` upon success.

- The `PUT` endpoint will be for updating `Contact` entities and
  the payload will adhere to the schema listed above; it should return
  the newly updated `Contact` entity and a `200` upon success.

- The `DELETE` endpoint will be for deleting `Contact` entities;
  it should return an empty response and a `204` upon success.

**NOTE: There is no need to be concerned with error handling for this
exercise.**

### Part 2 - Frontend Setup

Create a TypeScript React app (via `create-react-app`) and install
`@material-ui/core` as a dependency.

- Fetch all contacts using your endpoint from part 1 and display them in
  a list of `Card`s to the user.

- Implement a simple form for creating/updating a new `Contact` entity with a button
  that issues a `POST`/`PUT` request and then display the updated list.

- Implement a `Delete` button to remove records.

### The Deliverable

Have a minimally working full-stack application (i.e., put a form in a database)
delievered via a `.zip` file. The zip file should be structured as such:

```
solution/
|- frontend/
|-- src/
|--- # All your frontend code should go here
|-- package.json
|- backend/
|-- src/
|--- # All your backend code should go here
|-- package.json
|-- serverless.yml
```

Whomever this is delivered to should be able to unzip your `.zip` file and be presented with the project
repository (above, this is called `solution`).

1. `Unzip solution.zip`
2. **In backend/**: `npm i`
3. **In backend/**: `npm start`

**NOTE: Here, npm start should map to something like:**
`SLS_DEBUG=* isLocal=true NODE_ENV=dev ./node_modules/serverless/bin/serverless.js offline start`

4. **In frontend/**: `npm i`
5. **In frontend/**: `npm start`

**NOTE: Here, npm start should be provided by create-react-app (rather,
using react-scripts) so there should not need to be any manual
intervention here**

Going through the above steps should stand up both your API and your
frontend and render a usable application.

### Useful Resources

- [Formik](https://formik.org/docs/api/formik)

- [Create React App](https://create-react-app.dev/)

- [Fetch
  API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) (you
  can use whatever you want to make requests but the fetch api is pretty
  standard)

- [Material UI](https://mui.com/)

- [HTTP Response
  Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

- [serverless framework](https://www.serverless.com/)

- [serverless offline
  plugin](https://www.npmjs.com/package//serverless-offline)

- [Postman](https://www.postman.com/)

- [RESTful API design](https://restfulapi.net/)

### Bonus

- Enforce schema validation in the backend.

- Implement form validation.
