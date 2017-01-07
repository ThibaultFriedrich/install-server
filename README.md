# ovh-vps
This repository lists everything needed to setup a OVH VPS for a node web app.

This tutorial may also be used for any other linux dedicated server.

## Unix setup

For more security, you must customize the unix config.

On the local machine:

```bash
ssh root@vpsxxx.ovh.net # in theory you received the password by email
```

Then on the server:

``` bash

# to be sure to have the last updates
apt-get update    
apt-get upgrade

# create a new user to avoid be logged as root
adduser <username> # use a randomly generated password
```

On the local machine:
```bash

# for faster and more secured authentications
# generate a ssh rsa key
ssh-keygen
ssh-copy-id -i <path to key>.pub <username>@vpsxxx.ovh.net
ssh <username>@vpsxxx.ovh.net

```

On the server
```bash
su # use root password
vi /etc/ssh/sshd_config

# most hackers try to login on root so we have to desactivate root login in ssh
# change line "PermitRootLogin yes" to "PermitRootLogin no"
# so you will have to connect with <login> and then use su to switch


# then we desactivate password authentication for more security
# change line "PasswordAuthentication yes" to "PasswordAuthentication no"

# ensure yourself to have the current lines:
#   RSAAuthentication yes
#   PubkeyAuthentication yes


# be sure that authentication with rsa key works before restart ssh service
service ssh restart

# now you may block brute force again your server
apt-get install fail2ban
vi /etc/fail2ban/jail.conf # you can update values "bantime", "findtime" and "maxretry"
service fail2ban restart

# then you may detect hacking
apt-get install rkhunter
vi /etc/default/rkhunter
# change line REPORT_EMAIL="root" to REPORT_EMAIL="<your email>"
# change line CRON_DAILY_RUN="" to CRON_DAILY_RUN="true"

```





Thanks to :

* https://gist.github.com/Trefex/7028000be4d497851091
* http://www.seobordeaux.fr/securiser-un-minimum-son-vps-ovh/
