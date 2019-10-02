#Team Giraffe - Jude Rizzo, Calvin Chu
#SoftDev1 pd9
#K11 - Forms
#2019-10-02

from flask import Flask, render_template, request, redirect
import cgi
app = Flask(__name__)

Error = ""
username = ""
password = ""
@app.route("/")
def makeForm():
    return render_template('app.html')

@app.route("/auth")
def authenticate():
    use = "giraffe"
    pas = "g"
    username = request.args["username"]
    password = request.args["password"]
    if(username == "giraffe" and password == "g"):
        Error = ""
        return redirect("/login")

    else:
        Error = "Wrong username or Password"
        return render_template("app.html")


@app.route("/login")
def welcome():
    return "4"



if __name__ == "__main__":
    app.debug = True # Automatically updates project with save file
    app.run()
