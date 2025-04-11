
```
PORT
DB_PORT
DB_HOST
DB_NAME
DB_USERNAME
DB_PASSWORD
JWT_SECRET
```

To set up and run Motor Admin using Docker, follow these steps:

1. **Pull the Docker image:**

   ```bash
   sudo docker pull motoradmin/motoradmin:latest
   ```

2. **Run the Docker container:**

   ```bash
   sudo docker run -d \
     --name motoradmin \
     -p 3000:3000 \
     -v ~/motoradmin/data:/app/storage \
     -e SECRET_KEY_BASE=$(openssl rand -hex 64) \
     motoradmin/motoradmin:latest
   ```

   This command will:
   - Run the Motor Admin container in detached mode (`-d`).
   - Name the container `motoradmin`.
   - Map port `3000` on your host to port `3000` in the container.
   - Mount a local directory (`~/motoradmin/data`) to the container’s storage directory.
   - Set a random `SECRET_KEY_BASE` for added security.

3. **Access Motor Admin:**

   Open your web browser and navigate to [http://your_droplet_ip:3000](http://your_droplet_ip:3000).


