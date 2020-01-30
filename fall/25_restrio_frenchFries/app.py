#Calvin Chu
#SoftDev1 pd9
#K25 - Getting More REST
#2019-11-12

from flask import Flask, render_template
import urllib.request as urllib2, json

app = Flask(__name__)

@app.route("/")
def root():
    u = urllib2.urlopen(
        "http://www.dnd5eapi.co/api/spells/1"
    )
    response = u.read()
    data = json.loads(response)
    return render_template("d&d.html",
                            u = data['url'],
                            name = data['name'],
                            description = data['desc']
                            )

@app.route("/1")
def root1():
    u = urllib2.urlopen(
        "https://www.metaweather.com/api/location/44418/"
    )
    response = u.read()
    data = json.loads(response)
    return render_template("metaWeather.html",
                            name = data['title'],
                            tz = data['timezone'],
                            ll = data['latt_long'],
                            cw = data['consolidated_weather'],
                            s = data['sources']
                            )

@app.route("/2")
def root2():
    u = urllib2.urlopen(
        "https://loripsum.net/api/10/short"
    )
    response = u.read().decode('utf-8')
    return render_template("loip.html",
                            u = str(response)
                            )


if __name__ == "__main__":
    app.debug = True
    app.run()
