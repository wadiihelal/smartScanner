import nmap
import add
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

# Itérer sur les lignes
for line in lines:
    addr = line.strip('\n')
    print(scanner.scan(addr.format(), arguments="-O")['scan'][addr.format()]['osmatch'])


