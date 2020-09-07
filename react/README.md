## PIS Workshop :: React

### Setting up

We're going to use the CRA template made by XmartLabs:

1. `git clone git@github.com:xmartlabs/cra-template-xmartlabs.git`
2. `npx create-react-app pis-workshop-2020-react --template file:cra-template-xmartlabs --use-npm`
3. `cd pis-workshop-2020-react && npm start`

Then, we are going to create a todo item and add some styles. Componetize it to a TodoItem component and make its state toggle when tapping it.

Now, we are going to do some magic, and connect our React app with a generic backend found on the Internet:

https://github.com/dtao/todo-backend-express/blob/master/server.js

Just duplicate the environment variables file `.env.development.local.example` to `.env.development.local`, and replace `REACT_APP_API_BASE_URL=http://todo-backend-express.herokuapp.com`.

Go into `src/networking/api-routes.js` and add `ALL_TODO_ITEMS: "/",` todo the `API_ROUTES` object. It's important to do this, so you avoid developers to run into bugs provoked for a simple typo.

These todo items needs to be deserialized so they fit to the front-end model.

Whoala! We're connected to a backend.
