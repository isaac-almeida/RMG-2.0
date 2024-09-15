import json

with open('./src/assets/feitiços.json', 'r', encoding='utf-8') as file:
  texto = json.load(file)

nomesFeitiços = list(texto.keys())
descrições = {}

for feitiço in nomesFeitiços:
  descrições[feitiço] = texto[feitiço]["descrições"]

with open("./src/assets/descrições.json", 'w', encoding="utf-8") as arquivoFeitiços:
  json.dump(descrições, arquivoFeitiços, ensure_ascii=False)
