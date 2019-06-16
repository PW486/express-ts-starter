docker swarm init
docker service create --name registry --publish published=5000,target=5000 registry:2
docker service ls

echo "dbsecret" | docker secret create db_password -
echo "jwtsecret" | docker secret create jwt_secret -

docker-compose -f docker-compose-prod.yml build
docker-compose -f docker-compose-prod.yml push

docker stack deploy -c docker-compose-prod.yml express_ts
docker stack services express_ts
