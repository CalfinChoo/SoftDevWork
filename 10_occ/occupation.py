#Using Juntao's version because it's more efficient/compact
from csv import DictReader as dr
from random import choices as rc
from collections import OrderedDict

def getoccupations(file):
  dic = {}
  for row in dr(open(file)):
    dic[row["Job Class"]] = float(row["Percentage"])
  return dic

def randoccupation(dic):
  tmp = OrderedDict(dic.copy())
  tmp.pop("Total")
  keys, values = zip(*tmp.items())
  return rc(keys, values)[0]
