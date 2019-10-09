#Calvin Chu
#SoftDev
#My Populated Skeleton :: SQLITE3 BASICS
#Oct 2019

import sqlite3   #enable control of an sqlite database
import csv       #facilitate CSV I/O


DB_FILE="discobandit.db"

db = sqlite3.connect(DB_FILE) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops

#==========================================================

# < < < INSERT YOUR POPULATE-THE-DB CODE HERE > > >

#Drop tables if they already exist
c.execute('DROP TABLE IF EXISTS students')
c.execute('DROP TABLE IF EXISTS courses')
#Create tables if they do
#Open corresponding csv file, make a DictReader and insert the values in each row (each row being a dictionary) of the DictReader
c.execute('''CREATE TABLE IF NOT EXISTS students (name TEXT, age INTEGER, id INTEGER PRIMARY KEY)''')
with open('students.csv') as csvfile:
     scanner = csv.DictReader(csvfile)
     for row in scanner:
         c.execute('INSERT INTO students VALUES (?, ?, ?)', (row["name"], row["age"], row["id"]))
c.execute('''CREATE TABLE IF NOT EXISTS courses (code TEXT, mark INTEGER, id INTEGER)''')
with open('courses.csv') as csvfile:
     scanner = csv.DictReader(csvfile)
     for row in scanner:
         c.execute('INSERT INTO courses VALUES (?, ?, ?)', (row["code"], row["mark"], row["id"]))

#Runs SELECT command and prints all results in tables
command = "SELECT * FROM students"          # test SQL stmt in sqlite3 shell, save as string
c.execute(command)    # run SQL statement
print(c.fetchall())
c.execute('SELECT * FROM courses')
print(c.fetchall())

#==========================================================

db.commit() #save changes

db.close()  #close database
