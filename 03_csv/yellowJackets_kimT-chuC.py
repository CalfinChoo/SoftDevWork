import csv
import random

dict = {} #dict{occupation: [%, %max]}

with open('occupations.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    next(csv_reader)
    cap_range = 0
    for row in csv_reader:
        dict[row[0]] = [float(row[1]) * 10, cap_range + float(row[1]) * 10]
        cap_range += float(row[1]) * 10

rand = random.randint(0, dict['Total'][0])
for key in dict:
    if rand <= dict[key][1]:
        # print(rand)
        # print(dict[key])
        print(key)
        break
