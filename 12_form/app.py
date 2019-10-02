#Team Hippo - Sophie Nichol, Manfred Tan, Calvin Chu
#SoftDev1 pd9
#K11 - Forms
#2019-09-25

from flask import Flask, render_template, request
import cgi
app = Flask(__name__)


@app.route("/")
def makeForm():
    return render_template('app.html')

@app.route("/auth")
def authenticate():
    print(app)
    print(request)
    print(request.headers)
    #print(request.method)
    print(request.args)
    #print(request.form)
    #print(cgi.FieldStorage )
    return render_template("auth.html",
                               username = request.args["data"],
                               method = request.method)

if __name__ == "__main__":
    app.debug = True # Automatically updates project with save file
    app.run()


# MY VERSION
#
# from flask import Flask, render_template, request
# app = Flask(__name__)
#
#
# @app.route("/")
# def makeForm():
#     return render_template('app.html',
#         team = "Team Hippo - Sophie Nichol, Manfred Tan, Calvin Chu"
#     )
#
# @app.route("/auth")
# def authenticate():
#     # print("/////////////////////APP/////////////////////")
#     # print(app)
#     # print("/////////////////////REQUEST/////////////////////")
#     # print(request)
#     # print("/////////////////////REQUEST.HEADERS/////////////////////")
#     # print(request.headers)
#     # print("/////////////////////REQUEST.METHOD/////////////////////")
#     # print(request.method)
#     # print("/////////////////////REQUEST.ARGS/////////////////////")
#     # print( request.args["data"] )
#     # print("/////////////////////REQUEST.FORM/////////////////////")
#     # print(request.form)
#     greet = "It's a pleasure to meet you, "
#     return render_template('auth.html',
#         team = "Team Hippo - Sophie Nichol, Manfred Tan, Calvin Chu",
#         username = request.args["data"],
#         method = request.method,
#         greeting = greet + request.args["data"] + "."
#     )
#
# if __name__ == "__main__":
#     app.debug = True # Automatically updates project with save file
#     app.run()
