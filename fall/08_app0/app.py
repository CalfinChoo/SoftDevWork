#Calvin Chu
#SoftDev1 pd9
#demo -- My First Flask App
#2019-09-17t

from flask import Flask
app = Flask(__name__) #create instance of class Flask

@app.route("/") #assign following fxn to run when root route requested
def hello_world():
    print(__name__) #where will this go?        In the flask terminal
    return "No hablo queso!"
@app.route("/potato")
def hello():
    print(__name__)
    return "No hablo patata!"
@app.route("/carrot")
def world():
    print(__name__)
    return "No carotenoides!"

if __name__ == "__main__":
    app.debug = True
    app.run()
