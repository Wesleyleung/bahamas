from pymongo import MongoClient
import ast

connection = MongoClient()
db = connection.dormLocationDB
locations = db.locations

f = open('location_results.txt', 'r')
line = f.readline()
while line != '':
	name = line.strip()
	coords = ast.literal_eval(f.readline())
	lat = coords[0]
	lng = coords[1]
	location = {'name':name,
				'lat':lat,
				'lng': lng}
	locations.insert(location)
	line = f.readline()
f.close()