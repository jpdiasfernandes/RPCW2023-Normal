import re

with open('./db/emprego-cientifico.json', 'r') as f:
    text = ""
    for line in f:
        newline = re.sub(r'(\w+)\/(\w+)\/(\w+)', r'\3-\2-\1', line)
        text += newline

    print(text)