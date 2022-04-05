import nmap
import socket
import add
import json
import os
hostname = socket.gethostname()
IPAddr = socket.gethostbyname(hostname)
scanner = nmap.PortScanner()
L = list()
d_protocoles = {}
d_ports = {}
d = dict()

scanner.scan(hosts=add.CIDR, arguments='-n -sP -PE -PA21,23,80,3389')
hosts_list = [(x, scanner[x]['status']['state']) for x in scanner.all_hosts()]
for host, status in hosts_list:
    L.append(host)
#print(L)
f = open("portscan2.json", 'w')
L.pop(0)
for i in range(0,len(L)):
    scanner = nmap.PortScanner()
    dx = scanner.scan(L[i], arguments='1-1024 -v -sS -sU')
    #print("ok")
    dpro = list(scanner[L[i]].all_protocols())
    if (len(dx) != 0) & (len(dpro) != 0):
        d_protocoles = dpro
        d_ports = list(scanner[L[i]]['tcp'].keys())
        dp = list(scanner[L[i]]['udp'].keys())
        d_ports.extend(dp)
        d["IP addr"] = L[i]
        d["Protocols"] = d_protocoles
        d["Ports"] = d_ports
    #    print(d)
        f.write(json.dumps(d))
        f.write('\n')
    else:
        i += 1
f.close()
os.replace("/home/wadii_helal/Desktop/pythonProject/portscan2.json", "/home/wadii_helal/Desktop/pythonProject/front/src/portscan2.json")

