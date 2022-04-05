import socket
import ipaddress
import regex
from netaddr import IPAddress
#How to get the IP address of the user using socket
hostname = socket.gethostname()
IPAddr = socket.gethostbyname(hostname)
#print("Your Computer IP Address is:" + IPAddr)

# initialize an IPv4 Network
network = ipaddress.IPv4Network(IPAddr)
# get the network mask
# print the number of IP addresses under this network
x = regex.split("\.", IPAddr)
# Function to convert
def listToString(s):
    # initialize an empty string
    str1 = ""
    # traverse in the string
    for ele in s:
        str1 += ele
        str1+= "."
    # return string
    return str1
x[3] ="0"
str1 = listToString(x)
name = str1[:-1]
#print("Network Address:", name)

mask=network.netmask-255
prefix=str(sum(bin(int(x)).count('1') for x in str(mask).split('.')))
CIDR=name+"/"+prefix
