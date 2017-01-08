# proxy

The proxy manages the balacing between node.js apps.

Firstly we need to redirect 80 to the proxy server.

```bash

iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000
# add "iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000" to file /etc/rc.local

```


Then you create a file .env to manage the port of the proxy.
```javascript
PORT=3000
```

Finally you create a file config.json to manage the web apps.
```json
<domain>: {
    "port": "<port>",
    "app": "<dirname>"
}

```
