from flask import Flask, render_template
from flask import request, jsonify, Response
from checkPort import check_port, check_range
import wadii
import csv
import json
import nmap


app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')


@app.route('/check-port')
def checkPort():

    # Get request data
    domain = request.args.get('domain')
    port = int(request.args.get('port'))

    # Check if port is open
    isOpen = check_port(domain, port)

    return Response(str(isOpen), mimetype='text/plain')


@app.route('/check-ports')
def checkPorts():

    # Get request data
    domain = request.args.get('domain')
    port_start = int(request.args.get('port_start'))
    port_end = int(request.args.get('port_end')) + 1

    # Check if range of port is open
    ports_list = check_range(domain, port_start, port_end)

    return Response(json.dumps(ports_list), mimetype='application/json')
@app.route('/wadii')
def intom():
    s = "ahla"
    return Response(s)
@app.route("/mayssa")
def mayssa():
    return render_template("home1.html")
@app.route("/scan", methods=["POST", "GET"])
def scan():
    if request.method == "POST":
        address= request.form["nm"]
        print(address)
        scanner = nmap.PortScanner()
        os_results=scanner.scan(address, arguments="-O")['scan'][address]['osmatch']
        if len(os_results)!=0:
            print(os_results)
        return render_template('result.html', value =os_results)

        
    else:
        return render_template("index1.html")

@app.route('/ports-info')
def portsInfo():

    csv_file = open('portMap/main-ports.csv', 'r')
    csv_lines = csv_file.readlines()

    dic = {}
    for x in csv_lines:
        x = x.split(',')
        dic.update(
            {
                x[0]: {
                    "protocol": x[1],
                    "tcp/udp": x[2],
                    "description": x[3]
                }
            }
        )

    return Response(json.dumps(dic), mimetype='text/plain')