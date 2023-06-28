import re

# Read the string from the file
with open("scraped.txt", "r") as file:
    text = file.read()

# Remove quotes from keys using regular expressions
pattern = r'("[^"]+")\s*:\s*'
text = re.sub(pattern, lambda match: match.group(1)[1:-1] + ':', text)

# Write the updated text back to the file
with open("scraped.txt", "w") as file:
    file.write(text)