```
yash@DESKTOP-8O88F7P:/mnt/c/Users/Yash Avsarmal/Downloads/Natural-Main/QuickMart-Web-App$ sudo docker run -d      --name motoradmin      -p 3000:3000      -v ~/motoradmin/data:/app/storage      -e SECRET_KEY_BASE=$(openssl rand -hex 64)      motoradmin/motoradmin:latest
32bc72d5de52de4bd4f24d0e8e472cd8d7926e3b419727f6f0cfe6af4e64f5cc
yash@DESKTOP-8O88F7P:/mnt/c/Users/Yash Avsarmal/Downloads/Natural-Main/QuickMart-Web-App$ 

```