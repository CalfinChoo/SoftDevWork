#Calvin Chu
#SoftDev1 pd9
#K10 - Jinja Tuning
#2019-09-22

from flask import Flask, render_template
from occupation import getoccupations, randoccupation
app = Flask(__name__)

@app.route("/occupyflaskst")
def hello_world():
    dict = getoccupations("./static/occupations.csv")
    rand = randoccupation(dict)
    return render_template('occupyflaskst.html', foo="Occupations Randomizer", a = rand, c = dict)

if __name__ == "__main__":
    app.debug = True
    app.run()
