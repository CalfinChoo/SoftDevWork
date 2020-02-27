#Calvin Chu
#SoftDev1 pd9
#K09: Yummy Mongo Py
#2020-02-26

from pymongo import MongoClient
import json
from bson.json_util import loads

client = MongoClient()
db = client.test
collection = db.restaurants
# u = urllib2.urlopen(
#         "https://raw.githubusercontent.com/WilliamC07/SoftDev/master/09_mongo/primer-dataset.json"
#     )
# data = json.loads(u.read())
f = open("data.json","r")
response = f.read()
data = loads(response)
f.close()
for post in data:
    collection.insert_one(post)

def borough_query(b):

def zip_query(z):

def zip_grade_query(z, g):

def zip_thresGrade_query(z, g):
