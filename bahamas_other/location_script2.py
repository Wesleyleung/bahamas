from pygeocoder import Geocoder


f = open('escondido_list.txt', 'r')
for line in f:
	#lat, lng = gmaps.
	if line[:3] != '***':
		results = Geocoder.geocode(line + 'near 94305')
		print line, results[0].coordinates
		#local = gmaps.local_search(line + ' near 94305')
		#lat, lng = gmaps.address_to_latlng(local['responseData']['results'][0]['streetAddress'])
		#print lat
