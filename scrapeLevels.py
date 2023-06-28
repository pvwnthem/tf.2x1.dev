# put table element from https://wiki.teamfortress.com/wiki/Casual_Mode as html

from bs4 import BeautifulSoup

soup = BeautifulSoup(html, 'html.parser')  # If this line causes an error, run 'pip install html5lib' or install html5lib

stuff = {}  # a list to store the extracted objects

table = soup.find('table', attrs={'style': 'border: 1px solid black; border-collapse: collapse; width: 480px',
                                  'class': 'wikitable mw-collapsible'})

for row in table.find_all('tr', style=True):  # Iterate over each <tr> tag with the 'style' attribute
    td_elements = row.find_all('td')  # Find all <td> tags within the current row

    # Extract the URL of the image from the first <td> tag
    image_url = td_elements[0].find('img')['src']

    # Extract the XP owned from the second <td> tag
    level = td_elements[1].get_text(strip=True)\
    
    xp = td_elements[2].get_text(strip=True)



    # Create an object and append it to the main list
    obj = {'badge':"https://wiki.teamfortress.com/" + image_url, 'xpRequired': xp}
    stuff[level] = obj

# Print the extracted objects
with open('scraped.txt', 'w') as f:
    f.write(str(stuff))