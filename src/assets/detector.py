import json

with open('./src/assets/feitiços.json', 'r', encoding='utf-8') as file:
  texto = json.load(file)

nomesFeitiços = list(texto.keys())
arcanas = ["morte", "destino", "forças", "vida", "matéria", "mente", "primórdio", "espaço", "espírito", "tempo"]
primeirosFeitiços = ["Ectoplasmic Shaping", "Interconnections", "Influence Electricity", "Analyze Life", "Craftsman’s Eye", "Know Nature", "Dispel Magic", "Correspondence", "Coaxing the Spirits", "Divination"]
arcanaAtual = ""

for feitiço in nomesFeitiços:
  if (feitiço in primeirosFeitiços):
     arcanaAtual = arcanas[primeirosFeitiços.index(feitiço)]
  texto[feitiço]["arcana"] = arcanaAtual

with open("feitiços.json", 'w', encoding="utf-8") as arquivoFeitiços:
  json.dump(texto, arquivoFeitiços, ensure_ascii=False)
