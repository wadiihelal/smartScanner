import socket

def check_port(domain, port):

    # Creating tuple
    request_tuple = (domain, port)

    # Create socket
    sock = socket.socket()

    # Set timeout to connection
    sock.settimeout(0.5)
    sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)

    # Check if port is open
    result = sock.connect_ex(request_tuple) is 0

    # Close the socket
    sock.close()

    # Return result
    return result


def check_range(domain, port_start, port_end):

    # Increment due the range in python is < instead <=
    port_end += 1

    # Iterate over ports
    open_ports = []
    for port in range(port_start, port_end):
        if check_port(domain, port):
            open_ports.append(port)

    return open_ports