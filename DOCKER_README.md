# Docker Setup Guide

This guide explains how to run the application using Docker.

## Prerequisites

- Docker installed on your system
- Docker Compose installed (usually comes with Docker Desktop)

## Running the Application

### Development Mode (with hot-reload)

```bash
# Build and start the development container
docker-compose -f docker-compose.dev.yml up --build

# Or run in detached mode
docker-compose -f docker-compose.dev.yml up -d --build
```

The application will be available at `http://localhost:3000`

### Production Mode

```bash
# Build and start the production container
docker-compose up --build

# Or run in detached mode
docker-compose up -d --build
```

## Useful Commands

### Stop the containers
```bash
# Development
docker-compose -f docker-compose.dev.yml down

# Production
docker-compose down
```

### View logs
```bash
# Development
docker-compose -f docker-compose.dev.yml logs -f

# Production
docker-compose logs -f
```

### Rebuild containers
```bash
# Development
docker-compose -f docker-compose.dev.yml up --build --force-recreate

# Production
docker-compose up --build --force-recreate
```

### Access container shell
```bash
# Development
docker-compose -f docker-compose.dev.yml exec app sh

# Production
docker-compose exec app sh
```

### Clean up everything
```bash
# Stop and remove containers, networks, and volumes
docker-compose down -v

# Remove all unused Docker resources
docker system prune -a
```

## Notes

- Development mode mounts your source code as a volume for hot-reload
- Production mode creates an optimized build
- Port 3000 is exposed by default (modify in docker-compose files if needed)
