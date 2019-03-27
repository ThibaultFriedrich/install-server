# Firewall



## Avoid to use port 80

If you want to run have a non root program responding to port 8080, you need to forward port 8080 to
an authorized port for standard users.

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
