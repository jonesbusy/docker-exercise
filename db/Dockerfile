FROM mysql:5.7.19

MAINTAINER Valentin Delaye <valentin.delaye@gmail.com>

# Add a sample data script that will create the base schema and populate data
ADD sample-data.sql /docker-entrypoint-initdb.d/00-schema.sql

HEALTHCHECK CMD (nc localhost 3306 < /dev/null) > /dev/null 2>&1 || exit 1
