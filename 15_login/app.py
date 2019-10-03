#Team Giraffe - Jude Rizzo, Calvin Chu
#SoftDev1 pd9
#K15 - Login
#2019-10-02

from flask import Flask, render_template, request, redirect, url_for
app = Flask(__name__)

# Instantiates a variable to contain a potential error message
error = ""

# Root serves as our login page
@app.route("/")
def makeForm():
    global error
    # If there is an error message, reset the variable and display the login page with the error message
    if (error != ""):
        message = error
        error = ""
        return render_template('app.html', e = message)
    # Else display the login page normally
    else :
        return render_template('app.html')

# /login route serves as welcome page
@app.route("/login")
def authenticate():
    global error
    # Hardcoded a username and password
    use = "giraffe"
    pas = "g"
    # Stores user's inputs from login page
    username = request.args["user"] + ""
    password = request.args["pass"] + ""
    # If inputs match hardcoded username and password, reset error message and display welcome page with logout button
    # **Logout button reroutes to root**
    if(username == use and password == pas):
        error = ""
        return render_template('welcome.html',
                                username = username)
    # Else set an error message and redirect back to root
    else:
        error = "Wrong username or password"
        return redirect(url_for('makeForm'))



if __name__ == "__main__":
    app.debug = True # Automatically updates project with save file
    app.run()
