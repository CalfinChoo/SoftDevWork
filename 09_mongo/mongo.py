#Calvin Chu
#SoftDev1 pd9
#K09: Yummy Mongo Py
#2020-02-26

from pymongo import MongoClient
from bson.json_util import loads
import pprint

client = MongoClient()
db = client.test
collection = db.restaurants
if (not "restaurants" in db.list_collection_names()):
    f = open("data.json","r")
    response = f.read()
    data = loads(response)
    f.close()
    for post in data:
        collection.insert_one(post)

def borough_query(b):
    for x in (collection.find({"borough" : b})):
        pprint.pprint(x)
def zip_query(z):
    for x in (collection.find({"address.zipcode" : z})):
        pprint.pprint(x)
def zip_grade_query(z, g):
    for x in (collection.find({"$and" : [{"address.zipcode" : z}, {"grades.grade" : g}]})):
        pprint.pprint(x)
def zip_thresScore_query(z, s):
    for x in (collection.find({"$and" : [{"address.zipcode" : z}, {"grades.score" : {"$lt" : s}}]})):
        pprint.pprint(x)

borough_query("Bronx")
zip_query("10282")
zip_grade_query("10282", "A")
zip_thresScore_query("10282", 3)
# db.restaurants.drop()
