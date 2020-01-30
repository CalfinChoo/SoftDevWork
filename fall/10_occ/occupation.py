#Using Juntao's version because it's more efficient/compact
from csv import DictReader as dr
from random import choices as rc
from collections import OrderedDict

#takes in a file, creates and returns a dictionary reading each row in the csv and matching job to percent
def getoccupations(file):
  dic = {}
  for row in dr(open(file)):
    dic[row["Job Class"]] = float(row["Percentage"])
  return dic
#copies dict and removes Total, unzips keys + values and assigns them to variables, randomchoice keys+values based on %
def randoccupation(dic):
  tmp = dic.copy()
  tmp.pop("Total")
  keys, values = zip(*tmp.items())
  return rc(keys, values)[0]
