from googlemaps import GoogleMaps

gmaps = GoogleMaps('AIzaSyCK5s0DXmGKoZ_CgwFMQ6G0dN1UcDBDv14')

f = open('escondido_list.txt', 'r')
for line in f:
	#lat, lng = gmaps.
	if line[:3] != '***':
		local = gmaps.local_search(line + ' near 94305')
		lat, lng = gmaps.address_to_latlng(local['responseData']['results'][0]['streetAddress'])
		print lat
