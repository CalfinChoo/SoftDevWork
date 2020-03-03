#Calvin Chu, Albert Wan - Team Short Circuit
#SoftDev1 pd9
#K10: Import/Export Bank
#2020-02-28

from pymongo import MongoClient
from bson.json_util import loads
import pprint

client = MongoClient()
db = client.db
collection = db.pokemon

if (collection.count() == 0):
    f = open("pokedex.json","r")
    response = f.read()
    data = loads(response)
    f.close()
    for post in data['pokemon']:
        collection.insert_one(post)

def getID(id):
    for x in (collection.find({"id" : id})):
        pprint.pprint(x)
def getNum(num):
    for x in (collection.find({"num" : num})):
        pprint.pprint(x)
def getName(name):
    for x in (collection.find({"name" : name})):
        pprint.pprint(x)
def getImg(img):
    for x in (collection.find({"img" : img})):
        pprint.pprint(x)
def getType(t):
    for x in (collection.find({"type" : {"$in" : [t]}})):
        pprint.pprint(x)
def getTypes(t1, t2):
    for x in (collection.find({"$and" : [{"type" : {"$in" : [t1]}}, {"type" : {"$in" : [t2]}} ]})):
        pprint.pprint(x)
def getMaxHeight(h):
    for x in (collection.find({}, {"height":1})):	
        print(x['height'])
getMaxHeight(1)
