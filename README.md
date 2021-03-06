# Kubernetes Training Demo
A sample Node.js app with MongoDB to demonstrate deployments on Kubernetes

## Requirements
- Docker 🐋
- kubectl (Kubernetes Cluster access) / Minikube (local)

## Build image
```bash
docker build -t nodeapp:1.0 .
```
## Deploy on kubernetes
```bash
kubectl apply -f .\deploy\
```
## Get service exposed port
```bash
kubectl get services
```
## Delete deployment
```bash
kubectl delete -f .\deploy\
```

## Note
- Your docker image tag must match with the nodeapp image inside `.\deploy\nodeapp.yml`
- kubectl (Kubernetes Cluster access) / Minikube (local)

## Author
- Zulkafil Tabish
