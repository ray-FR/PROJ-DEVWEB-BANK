import flask
import markupsafe

main_page = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Main-page</title>
    <link rel="stylesheet" href="style/style.css">
    
</head>
<body>
    
    <h1>Welcome</h1>
</body>
</html>
"""

listeMessage=[]

serv=flask.Flask("banking")

# @serv.route("/style/style.css")
# def ff():
#     resp = flask.make_response(""" html {border: solid red;}""")
#     resp.headers["content-type"] = "text/css"
#     return resp

@serv.route("/", methods=["GET", "POST"])
def main():
    return main_page

serv.run(port=1234,host="127.0.0.1") # host="0.0.0.0" pour écouter l’exterieur