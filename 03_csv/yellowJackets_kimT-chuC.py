import csv
import random

occupations = {}

def turnIntoDict(file):
    with open(file, 'r') as csvfile:
        readCSV = csv.reader(csvfile)
        next(readCSV) #skip the first row cuz it's unnecessary
        for row in readCSV:
            occupations[row[0]] = row[1] #turn csv into a dictionary


def occupationPicker(dic):
    t = 0.0 #this variable acts as a checkpoint
    x = random.random() * 99.8 #generating a random number between 0 and 99.8 for comparison
    for key in list(dic):
        #print(dic[key])
        t += float(dic[key]) #move the checkpoint over
        if x < t:
            return key
            #when the random number falls in the range between the checkpoints,
            #return the job corresponding to that range

turnIntoDict("occupations.csv")
#print(occupations)
occupations.pop('Total') #let's not include the total as part of our occupations list
print(occupationPicker(occupations))

# MY VERSION
#
# import csv
# import random
#
# dict = {} #dict{occupation: [%, %max]}
#
# with open('occupations.csv') as csv_file:
#     csv_reader = csv.reader(csv_file, delimiter=',')
#     next(csv_reader)
#     cap_range = 0
#     for row in csv_reader:
#         dict[row[0]] = [float(row[1]) * 10, cap_range + float(row[1]) * 10]
#         cap_range += float(row[1]) * 10
#
# rand = random.randint(0, dict['Total'][0])
# for key in dict:
#     if rand <= dict[key][1]:
#         # print(rand)
#         # print(dict[key])
#         print(key)
#         break
