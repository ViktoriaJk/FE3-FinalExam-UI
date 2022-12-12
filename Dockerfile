FROM nginx
COPY . /usr/share/nginx/html

# You can start with:
# docker run -d -p 8080:80 [this project name]
# In browser: http://localhost:8080