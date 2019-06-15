docker swarm init
echo "secret" | docker secret create db_password -
echo "secret" | docker secret create jwt_secret -
docker stack deploy -c docker-compose-prod.yml express_ts
