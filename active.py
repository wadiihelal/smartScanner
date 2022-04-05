import os
import nmap
import add
import json
scanner = nmap.PortScanner()

scanner.scan(hosts=add.CIDR, arguments='-n -sP -PE -PA80,443')
hosts_list = [(x, scanner[x]['status']['state']) for x in scanner.all_hosts()]
list = []
for host, status in hosts_list:
    list.append(host)
jsonString = json.dumps(list)
f = open("active.json", "w")
f.write(jsonString)
print(jsonString)
f.close()
os.replace("/home/wadii_helal/Desktop/pythonProject/active.json", "/home/wadii_helal/Desktop/pythonProject/front/src/active.json")
