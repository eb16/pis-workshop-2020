# Ruby on Rails Workshop

# Prerequisites

First, you’ll need to have Ruby installed on your system. If that’s not the case, make sure to install it now. This workshop requires version 2.6.3. Then, check you also installed Bundler and Rails. You'll need version 6.0.3 of Rails.

# Setting up

1. `rails new pis-workshop-2020-rails --api -T -d postgresql`

    This will create a RoR API with a PostgreSQL database. The `-T` option tells RoR not to include `Test::Unit` as the test framework since we are going to use `rspec-rails`.

2. `cd rails-api`
3. `rails db:create`
4. `rails server`
5. When you visit `[localhost:3000](http://localhost:300)` in a browser, you should see the Ruby on Rails welcome page.

# Creating our TodoList API

## CRUD Lists

### Models & Migrations

First, let's create the List model using rails generators:

- `rails generate model List name:string`

Since we use the rails model generator, the migration is almost done. What's missing is to add a null constraint to be sure the list's name is always present.

Then, run the migrations:

- `rails db:migrate`

Now, let's add the same validation in the model too using `validates.`

We have our LIst model done, we can check it out using the rails console:

- `rails console`

Try to create some lists, you can also check that validations are working properly.

### Routes

To configure new routes in this API, we have to add them in `config/routes.rb`.

Let's add the necessary routes for the CRUD of lists.

Add the following line to that file:

- `resources :lists`

Check the routes are added correctly using `rails routes` command.

Before moving on, let's talk about a bit about API versioning. There are different ways in which versioning can be managed, we recommend you using URI versioning. We have to add all the routes for lists inside a `namespace` specifying the version. Now, check the routes again.

### Controllers

Generate an empty controller for the lists:

- `rails generate controller api/v1/lists`

Now, let's add our actions to get all the lists, create a list and get a list by id.

After doing so, you can try them out using Postman.

### Serializers

First, we need to add a new gem to our Gemfile:

- `gem blueprinter, '0.25.1'`

Then run `bundle install`.

You can find the gem documentation in [https://github.com/procore/blueprinter](https://github.com/procore/blueprinter).

Let's add the list blueprint. Create a new folder `blueprints/api/v1`  and then the `list_blueprint` inside it.

## Tests

We're going to use `rspec` as the testing framework. Let's add it to our project first.

- `gem rspec-rails, '4.0.1'`
- `rails generate rspec:install`

We would also `factory_bot_rails` and `faker` in our test suite too:

- `gem 'factory_bot_rails', '6.1.0'`

    Factory bot rails is a helper for writing factories for Rails tests. With it, we can create objects with a predefined state and attributes or even mock objects.

    In order to avoid adding `FactoryBot` as a prefix every time we want to use a factory, let's add a config in the test suite. Create a file called `spec/support/factory_bot.rb` with the following:

    ```ruby
    RSpec.configure do |config|
      config.include FactoryBot::Syntax::Methods
    end
    ```

    Then, in the `rails_helper.rb` add the following line:

    ```ruby
    Dir[Rails.root.join('spec', 'support', '**', '*.rb')].each { |f| require f }
    ```

- `gem 'faker', '2.13.0'`

    Faker is used to generate fake data. Helps us to have real-looking test data.

### Models unit tests

We have to test everything related to the List model. We added a validation checking the name is present. Let's test it out.

### Serializers tests

For us, it is important to test the serializers so we are sure we are returning the information we want. Let's test the list blueprint.

### Request tests

We strongly recommend using request tests. Usually, they focus on a single controller but unlike controller tests involve the router, the middleware stack, and both rack requests and responses. This adds realism to the test suite and helps avoid many of the issues that are common when using controller tests.

Let's add tests for the actions we built on the lists controllers.

## Extra mile

If you reach this point, try to add the CRUD tasks. Tasks belongs to a list and a list has many tasks.
