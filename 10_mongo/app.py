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
getID(1)
