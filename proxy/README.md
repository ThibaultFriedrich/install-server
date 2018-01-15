# proxy

The proxy manages the balacing between node.js apps.

## Gettings started

Firstly we need to redirect 80 to the proxy server.

```bash
# forward port 3000 to port 80 because you cannot start a server at port 80
iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000
# add "iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000" to file /etc/rc.local

# to reset iptables
# backup rules
#
iptables-save > /root/firewall.rules
iptables -X
iptables -t nat -F
iptables -t nat -X
iptables -t mangle -F
iptables -t mangle -X
iptables -P INPUT ACCEPT
iptables -P FORWARD ACCEPT
iptables -P OUTPUT ACCEPT

# In order to restore your previous rules :
iptables-restore < /root/firewall.rules

```


Then you create a file .env to manage the port of the proxy.
```javascript
PORT=3000
```

Finally you create a file **config.json** to manage the web apps.
```json
<domain>: {
    "port": "<port>",
    "app": "<dirname>"
}

```

## Add new app

```bash
git clone <repository url>

# add <repository>/.env

npm install

pm2 start <repository>/<index file> --name <name>

# update config.json

pm2 restart proxy

# update webhook on github

```
