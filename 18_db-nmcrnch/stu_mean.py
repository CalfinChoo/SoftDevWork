#Calvin Chu
#SoftDev
#Average
#Oct 2019

import sqlite3   #enable control of an sqlite database
import csv       #facilitate CSV I/O


DB_FILE="discobandit.db"

db = sqlite3.connect(DB_FILE) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops

#==========================================================

#Drop table if it already exists
c.execute('DROP TABLE IF EXISTS stu_avg')
#Create table if it does
c.execute('''CREATE TABLE IF NOT EXISTS stu_avg (id INTEGER, avg REAL)''')

#Looks up each student’s grades and stores the list of tuples in variable db_reader
c.execute('''SELECT name, mark, students.id
        FROM students, courses
        WHERE students.id = courses.id''')
db_reader = c.fetchall()
#Computes each student’s average and returns a dictionary of {id:avg}
def avg(list):
    d = {}
    prev_id = list[0][2]
    sum = 0
    count = 0
    for row in list:
        if row[2] == prev_id:
            sum += row[1]
            count += 1
        else:
            d[prev_id] = sum / count
            sum = 0
            prev_id = row[2]
            count = 1
            sum += row[1]
    d[prev_id] = sum / count
    return d
#Inserts all the ids and averages from dictionary returned by function into stu_avg table
for id, avg in avg(db_reader).items():
    c.execute('INSERT INTO stu_avg VALUES (?, ?)', (id, avg))

#Runs SELECT command to print student’s name, id, and average
command = '''SELECT name, students.id, avg
        FROM students, stu_avg
        WHERE students.id = stu_avg.id'''        # gets name, id, and avg
c.execute(command)    # run SQL statement
print(c.fetchall())

#My attempt to facilitate adding to courses table
def addToCourses(name, mark, id):
    c.execute('INSERT INTO courses VALUES (?, ?, ?)', (name, mark, id))

#==========================================================

db.commit() #save changes

db.close()  #close database
