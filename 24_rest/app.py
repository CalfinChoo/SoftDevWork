#Calvin Chu
#SoftDev1 pd9
#K15 - Login
#2019-11-12

from flask import Flask, render_template
import urllib2, json

app = Flask(__name__)

@app.route("/")
def root():
    u = urllib2.urlopen(
        #VPp2gfpykcoDthL5P9ExhtE0SU8vtS9LsN346ywO
        "https://api.nasa.gov/planetary/apod?api_key=VPp2gfpykcoDthL5P9ExhtE0SU8vtS9LsN346ywO"
    )
    response = u.read()
    data = json.loads(response)
    return render_template("index.html",
                            pic = data['url'])


if __name__ == "__main__":
    app.debug = True
    app.run()
