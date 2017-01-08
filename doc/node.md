# Node setup


## Install node.js

```bash

# first you install node.js

# to install node.js v7:
apt-get install curl
curl -sL https://deb.nodesource.com/setup_7.x | bash -
apt-get install -y nodejs

# check node and npm to be sure
node -v
npm -v

# always useful
apt-get install build-essential

```

## Manage web apps

```bash

# install pm2 to manage the web apps
npm install -g pm2
apt-get install git

# create a group authorized to manage the web apps
mkdir /var/apps
chmod 770 -R /var/apps/
groupadd webadmin
chown -R :webadmin /var/apps/
usermod -a -G webadmin thibault
# check rights
ls /var/apps

# auto update

# proxy to avoid port


```


## Phantomjs

If you need pantomjs

```bash

cd /opt
wget https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-linux-x86_64.tar.bz2
tar jxf phantomjs-2.1.1-linux-x86_64.tar.bz2
vim /etc/profile # add line PATH=$PATH:/opt/phantomjs-2.1.1-linux-x86_64/bin/
apt-get install libfontconfig
apt-get install libkrb5-dev


```

Thanks to

* http://blog.karmadust.com/automatic-node-js-deployments-on-a-linux-server-via-github/
