# DISCLAIMER: I never took Intro2, so I know literally 0 python.  This solution is an amalgamation of python syntax and techniques I found and actually understood on the webs.

# from Python Docs
import random
# from the QAF
KREWES = {
	'orpheus': ['Emily', 'Kevin', 'Vishwaa', 'Eric', 'ray', 'Jesse', 'Tiffany', 'Amanda', 'Junhee', 'Jackie ', 'Tyler', 'Emory', 'Ivan', 'Elizabeth', 'Pratham', 'Shaw', 'Eric', 'Yaru', 'Kelvin', 'Hong Wei', 'Michael', 'Kiran', 'Amanda', 'Joseph', 'Tanzim', 'David', 'Yevgeniy'],
	'rex': ['William', 'Joseph', 'Calvin', 'Ethan', 'Moody', 'Mo', 'Big Mo', 'Peihua', 'Saad', 'Benjamin', 'Justin', 'Alice', 'Hilary', 'Ayham', 'Michael', 'Matthew', 'Jionghao', 'Devin ', 'David', 'Jacob', 'Will', 'Hannah', 'Alex'],
	'endymion': ['Grace', 'Nahi', 'Derek', 'Jun Tao', 'Connor', 'Jason', 'Tammy', 'Albert', 'Kazi', 'Derek', 'Brandon', 'Kenneth', 'Lauren', 'Biraj', 'Jeff', 'Jackson', 'Taejoon', 'Kevin', 'Jude', 'Sophie', 'Henry', 'Coby', 'Manfred', 'Leia', 'Ahmed', 'Winston']
}
# we decided to make a function of it in class because we worked off of java
def name(dict):
    # A neat way to unpack a dictionary.  It converts dictionary into a list of key and list pairs, chooses a random pair, and the assigns the key and list to separate variables.
    # URL: https://stackoverflow.com/questions/4859292/how-to-get-a-random-value-in-python-dictionary
    # Then I just printed the team and a random item from the list (WHICH I ALSO HAD TO LOOK UP - URL: https://stackoverflow.com/questions/306400/how-to-randomly-select-an-item-from-a-list)
    team, names = random.choice(list(dict.items()))
    print(team + " : " + random.choice(names))

name(KREWES)
