# Docker exercise

[![Build Status](https://dev.azure.com/jonesbusy/docker-exercise/_apis/build/status/jonesbusy.docker-exercise?branchName=master)](https://dev.azure.com/jonesbusy/docker-exercise/_build/latest?definitionId=1&branchName=master)

This is an small application just to demonstrate a composition of a few containers and load balancing. The application is composed with :

- One reverse proxy load-balancer
- One web application with a single page
- A database with a single table used by the web application


### Notes


- The web application skeleton was created using "express-generator"
- The database data is stored inside a docker volume to ensure the data is not lost if the service is restarted.
- The reverse proxy/load-balancer will reconfigure itself when the web application container are created or dying.
- No security implemented on the app.
- Password/configuration are stored in clear inside the apps. Thoses credentials needs to be extracted on configuration files
- Using docker-compose, the web application will wait that the database is fully started before starting the container (This is done by calling the wait-for-it.sh script)
- The web application will generate a unique SHA1 and display it to the user
- The web application display the number of time the page has been accessed using the current container (based on the generated hash)


## Requirements

The application was tested with following version of docker and docker-compose.


| Dependency | Recommended Version |
| ---------- | ------- |
| Docker | 17.06.1-ce |
| Docker Compose | 1.15.0 |

## Software stack used

- NodeJS 8.4 (Using express framework for the web app)
- MySQL 5.7 (using JSON documents)
- Haproxy 1.6 (For reverse proxy load/balancing)

## Open source images

- https://hub.docker.com/_/node/
- https://hub.docker.com/r/dockercloud/haproxy/
- https://hub.docker.com/r/_/mysql/


## Run the composition

```
docker-compose up
```

## Stop the composition and remove all volumes

```
docker-compose down -v
```

## Access the application

Open your browser to `http://localhost:3000`.

## Scale the web app

```
docker-compose up -d --scale web-app=<X>
```

Where <X> is the number of container wanted

## Access the MySQL server

```
docker-compose exec db mysql -u WEB-USER -pA_VERY_INSECURE_PASSWORD
```


