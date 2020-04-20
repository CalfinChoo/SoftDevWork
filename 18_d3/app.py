# Calvin Chu, Biraj Chowdhury - Team McChargers
# SoftDev2 pd9
# K18: Come Up For Air
# 2020-04-20

from flask import Flask, render_template
import csv

app = Flask(__name__)

@app.route("/")
def root():
    return render_template('index.html')

if __name__ == "__main__":
    app.debug = True
    app.run()
