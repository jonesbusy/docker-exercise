FROM node:8.4.0

MAINTAINER Valentin Delaye <valentin.delaye@gmail.com>

# Update and install netcat
RUN apt-get update && apt-get install netcat-traditional && rm -rf /var/lib/apt/lists/*

COPY ["wait-for-it.sh", "app.js", "package.json", "/opt/web-app/"]
COPY routes/* /opt/web-app/routes/
COPY views/* /opt/web-app/views/
COPY bin/* /opt/web-app/bin/

# Basic health check if port is open
HEALTHCHECK CMD ((nc localhost 3000 < /dev/null)

# Create user and fix permissions
RUN adduser --system  --shell /bin/false --gid 0 web-user && \ 
    chown -R web-user:root /opt/web-app

# Run as user
USER web-user

# Working directory
WORKDIR /opt/web-app

# Install dependencies
RUN npm install

# Expose port
EXPOSE 3000

CMD ["node", "./bin/www"]


