import nmap
import subprocess
import active
# initialize the port scanner
subprocess.call('clear', shell=True)
nmScan = nmap.PortScanner()
for x in range(len(active.list)):
# scan localhost for ports in range 21-443
    nmScan.scan( active.list[x] , '79-82')

    # run a loop to print all the found result about the ports
    for host in nmScan.all_hosts():
        print('Host : %s (%s)' % (host, nmScan[host].hostname()))
        for proto in nmScan[host].all_protocols():
            print('----------')
            print('Protocol : %s' % proto)
    
            lport = nmScan[host][proto].keys()
            for port in lport:
                if (nmScan[host][proto][port]['state'] == "open") :
                    print ('port : %s\tstate : %s' % (port, nmScan[host][proto][port]['state']))
