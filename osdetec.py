import nmap
import json 
import add
from os import path
scanner = nmap.PortScanner()
    
scanner.scan(hosts=add.CIDR, arguments='-n -sP -PE -PA80,443')
hosts_list = [(x, scanner[x]['status']['state']) for x in scanner.all_hosts()]
with open("activehosts.txt",'w') as f:
    pass
for host, status in hosts_list:
 
    f = open('activehosts.txt', 'a') 
    f.write(host)
    f.write('\n')
    f.close()

# Ouvrir le fichier en lecture seule
file = open('activehosts.txt', "r")
# utiliser readlines pour lire toutes les lignes du fichier
# La variable "lignes" est une liste contenant toutes les lignes du fichier
lines = file.readlines()

# fermez le fichier après avoir lu les lignes
#file.close()
file_path = path.relpath("front/src/OsDAhosts.json")

with open(file_path,'w+') as f:
    pass
i=0# Itérer sur les lignes
list_hote=[]

for line in lines:
    addr = line.strip('\n')
    resultat=scanner.scan(addr.format(), arguments="-O")['scan'][addr.format()]['osmatch']
    if len(resultat)!=0:
        newData = {'IP': addr.format()}
        resultat[0]['IP'] = addr.format()
        list_hote.append(resultat[0])
        i=i+1
#print(list_hote)                


                               

print(list_hote)
                
f = open(file_path, 'a') 
f.write(json.dumps(list_hote))
f.close()
