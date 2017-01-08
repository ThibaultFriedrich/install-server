# MySQL

```bash
# install mysql
apt-get install mysql-server mysql-client libmysqlclient15-dev mysql-common

# improve security
mysql_secure_installation
# Change the root password? n
# Remove anonymous users? Y
# Disallow root login remotely? Y
# Remove test database and access to it? Y
# Reload privilege tables now? Y

# setup first database

# connect
mysql -uroot -p<password>
# create database
mysql> CREATE DATABASE <database name>;
# create user
mysql> CREATE USER '<login>'@'localhost' IDENTIFIED BY '<password>';
# give to user access to the database
mysql> GRANT ALL PRIVILEGES ON <database name>.* TO '<login>'@'localhost';


```

Thanks to

* http://www.alsacreations.com/tuto/lire/615-installation-configuration-MySQL.html
