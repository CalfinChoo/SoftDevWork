#Clyde "Thluffy" Sinclair
#SoftDev
#skeleton :: SQLITE3 BASICS
#Oct 2019

import sqlite3   #enable control of an sqlite database
import csv       #facilitate CSV I/O


DB_FILE="discobandit.db"

db = sqlite3.connect(DB_FILE) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops

#==========================================================
files = ['students.csv', 'courses.csv']
def createTbl(file):
    with open(file) as csvfile:
        scanner = csv.reader(csvfile, delimiter = ',')
        fields = next(scanner)
        c.execute('CREATE TABLE {} (? TEXT, ? INTEGER, ? INTEGER PRIMARY KEY)'.format(file), [fields[0], fields[1], fields[2]])
        for row in scanner:
            c.execute('INSERT INTO ? VALUES (?, ?, ?)', [file, row[0], row[1], row[2]])
for file in files:
    createTbl(file)
# < < < INSERT YOUR POPULATE-THE-DB CODE HERE > > >


command = ""          # test SQL stmt in sqlite3 shell, save as string
c.execute(command)    # run SQL statement

#==========================================================

db.commit() #save changes
db.close()  #close database
