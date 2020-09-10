# Docker Workshop

## Setup

- Install Docker and Docker Compose
- Build the project with `docker-compose -f dev.docker-compose.yml build`
- Start the project with `docker-compose -f dev.docker-compose.yml up`

## Configuration of the database

After booting up the project you should first create the database and add some sample data to it. To do this you need to be connected via SSH to the container. You can do this like this:

```shell
docker ps # Find out the ID of the container called "api-dev"
docker exec -it CONTAINER_ID bash # SSH into the container

bundle exec rails db:setup # Create the database and load it with data
```

After this you should be able to access the project on `localhost:3000`.
