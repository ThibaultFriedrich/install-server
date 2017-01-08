# proxy

The proxy manages the balacing between node.js apps.

Firs we need to redirect 80 to the proxy server.


```bash

iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000
# add "iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000" to file /etc/rc.local

```


Create a file .env

```javascript
PORT=3000
```

Create a file config.json
```json
<domain>: {
    "port": <port>,
    "app": <dirname>
}

```
