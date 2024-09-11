import os
import json

Texto = open("./src/texto.txt", "r", encoding="utf-8")
linhas = Texto.readlines()

lingua = {
  "português": ["Prática: ", "Fator Primário: ", "Enfraquecer: ", "Elevaç", "Adicionar" ],
  "inglês": ["Practice: ", "Primary Factor: ", "Withstand: ", "Suggested Rote Skills: ", "Reach: ", "Add", ]}

listaFeitiços = [ "Ectoplasmic Shaping",
"Deepen Shadows",
"Forensic Gaze",
"Shadow Sculpting",
"Soul Marks",
"Speak with the Dead",
"•• Apprentice of Death",
"Corpse Mask",
"Decay",
"Ectoplasm",
"Ghost Shield",
"Shape Ephemera",
"Soul Armor",
"Soul Jar",
"Suppress Aura",
"Suppress Life",
"Touch of the Grave",
"Without a Trace",
"••• Disciple of Death",
"Cold Snap",
"Damage Ghost",
"Devouring the Slain",
"Ghost Gate",
"Ghost Summons",
"Quicken Corpse",
"Quicken Ghost",
"Rotting Flesh",
"Sever Soul",
"Shadow Crafting",
"•••• Adept of Death",
"Enervation",
"Exorcism",
"Revenant",
"Shadow Flesh",
"Withering",
"••••• Master of Death",
"Create Anchor",
"Create Ghost",
"Deny the Reaper",
"Empty Presence",
"Open Avernian Gate",
"Sever the Awakened Soul",
"Fate 134",
"Hexes 134",
"Boons 134 • Initiate of Fate 134",
"Interconnections",
"Oaths Fulfilled",
"Quantum Flux",
"Reading the Outmost Eddies",
"Serendipity",
"•• Apprentice of Fate",
"Exceptional Luck",
"Fabricate Fortune",
"Fools Rush In",
"Lucky Number",
"Shifting the Odds",
"Warding Gesture",
"••• Disciple of Fate",
"Grave Misfortune",
"Monkey’s Paw",
"Shared Fate",
"Superlative Luck",
"Sworn Oaths",
"•••• Adept of Fate",
"Atonement",
"Chaos Mastery",
"Divine Intervention",
"Strings of Fate",
"Sever Oaths",
"••••• Master of Fate",
"Forge Destiny",
"Pariah",
"Miracle",
"Swarm of Locusts",
"Forces 140 • Initiate of Forces 140",
"Influence Electricity",
"Influence Fire",
"Kinetic Efficiency",
"Influence Heat",
"Nightvision",
"Receiver",
"Tune In",
"•• Apprentice of Forces",
"Control Electricity",
"Control Fire",
"Control Gravity",
"Control Heat",
"Control Light",
"Control Sound",
"Control Weather",
"Environmental Shield",
"Invisibility",
"Kinetic Blow",
"Transmission",
"Zoom In",
"••• Disciple of Forces",
"Call Lightning",
"Gravitic Supremacy",
"Telekinesis",
"Telekinetic Strike",
"Turn Momentum",
"Velocity Control",
"•••• Adept of Forces",
"Electromagnetic Pulse",
"Levitation",
"Rend Friction",
"Thunderbolt",
"Transform Energy",
"••••• Master of Forces",
"Adverse Weather",
"Create Energy",
"Eradicate Energy",
"Earthquake",
"Life 148 • Initiate of Life 148",
"Analyze Life",
"Cleanse the Body",
"Speak With Beasts",
"Web of Life",
"•• Apprentice of Life",
"Body Control",
"Control Instincts",
"Heightened Senses",
"Lure and Repel",
"Mutable Mask",
"Purge Illness",
"••• Disciple of Life",
"Bruise Flesh",
"Degrading the Form",
"Honing the Form",
"Knit",
"Many Faces",
"Transform Life",
"•••• Adept of Life",
"Accelerate Growth",
"Animal Minion",
"Life-Force Assault",
"Mend",
"Regeneration",
"Shapechanging",
"••••• Master of Life",
"Create Life",
"Contagion",
"Salt the Earth",
"Matter 154" ]
 


nomeFeitiço = ''
feitiços = {}

linha_anterior = ""
n = -1
for linhaCrua in linhas:
  linha = linhaCrua.replace("\n", " ")
  linha = linha.replace('"', "'")

  if lingua["inglês"][3] in linha or linha[0] == '•':
    pass
  elif '(' in linha and '•' in linha and ')' in linha:
    nomeFeitiço = ''
    n += 1
    # if (n > 5): break
    for letra in linha:
      if letra !='(':
        nomeFeitiço += str(letra)
      else:
        nomeFeitiço = nomeFeitiço[:-1]
        break
    # print(nomeFeitiço)
    feitiços[nomeFeitiço] = {"nível": linha.count('•')}
    feitiços[nomeFeitiço]["descrições"]= ['']
  elif lingua["inglês"][0] in linha:
    feitiços[nomeFeitiço]["prática"] = linha.replace(lingua["inglês"][0], '')
  elif lingua["inglês"][1] in linha:
    feitiços[nomeFeitiço]["fator"] = linha.replace(lingua["inglês"][1], '')
  elif lingua["inglês"][2] in linha:
    feitiços[nomeFeitiço]["enfraquecer"] = linha.replace(lingua["inglês"][2], '')
  elif ('+' in linha and lingua["inglês"][4] and ":" in linha) or (lingua["inglês"][5] in linha and '•:' in linha):
    feitiços[nomeFeitiço]["descrições"].append(linha)
  elif (linha[0].isupper() and linha_anterior[-2] == "."):
    feitiços[nomeFeitiço]["descrições"][-1] += "\n   " + linha
  else:
    feitiços[nomeFeitiço]["descrições"][-1] += linha
  
  linha_anterior = linha

with open("feitiços.json", 'w', encoding="utf-8") as arquivoFeitiços:
  json.dump(feitiços, arquivoFeitiços, ensure_ascii=False)



