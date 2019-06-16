#!/bin/sh

# Set up a Docker registry
docker swarm init
docker service create --name registry --publish published=5000,target=5000 registry:2
docker service ls

# Make Docker secrets
echo "dbsecret" | docker secret create db_password -
echo "jwtsecret" | docker secret create jwt_secret -

# Push the generated image to the registry
docker-compose -f docker-compose-prod.yml build
docker-compose -f docker-compose-prod.yml push

# Deploy the stack to the swarm
docker stack deploy -c docker-compose-prod.yml express_ts
docker stack services express_ts
