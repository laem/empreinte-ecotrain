export default `
poids a vide:
  formule: poids batteries + poids chassis et caisse
poids batteries: 2.9 tonnes
poids chassis et caisse: 7.78 tonnes
capacité batterie: 219 kWh

distance parcourue: 3000000 km

consommation: 
  formule: 0.6 kWh/km
  description: |
    Pour la ligne de référence (60 km, pentes classiques, 6 arrêts en moyenne)

	La motorisation de référence est de 90 KW.

empreinte . matériaux et assemblage: 31.7
  description: |
     La Navette est conçue principalement en acier (caisse) et en matériaux bio-sourcés (fibre de lin) pour la cabine.
empreinte . batterie: 138.6
  description: |
    Les batteries ont une durée d’utilisation de 10 ans puis sont réutilisées au sol sur place en « 2eme vie ». 

    La navette utilise 10 jeux de batteries réutilisées en seconde vie puis recyclées 

empreinte . construction: 
  formule: matériaux et assemblage + batterie


contenu carbone électricité . réseau: 
  formule: 0.2
  unité: t
  note: |
    Pourquoi tonne ? Pourquoi ce montant ?

contenu carbone électricité . photovoltaïque: 
  description: | 
    Photovoltaïque "longue vie"

	La production à partir de panneaux Photovoltaïques verre/verre est prévue sur 40 ans (garantie su 25 ans)  avec une décroissance annuelle de 0,4% et un taux de remplacement de 10%. Cette production est utilisée annuellement à 34% pour la navette et 66% pour les maisons à proximité des hangars de production PV.  10% de l’énergie est sourcée sur le réseau électrique sur le profil de production moyen Français. 
  formule: 0.2
  unité: t
  note: Pourquoi tonne ? Pourquoi ce montant ? Que veut dire "longue vie"

empreinte . durée de vie: 172 tonnes
  description: |
     La machine a une durée de vie de 40 ans mais elle subit un « grand carénage » au bout de 20 ans.

	 En fin de vie, la navette et les panneaux PV sont totalement recyclés, ayant été conçus pour être aisément démontables et recyclables. 

empreinte . par km:
  formule: empreinte / distance parcourue


navette:
navette . places: 30
navette . remplissage moyen: 60%
navette . passagers moyens: 
  formule: places * remplissage moyen

empreinte . par km voyageur:
  formule: par km / passagers moyens
  description: |
  note: | 
    Objectif : retrouver les 2gCO2e/km.passager des calculs initiaux.

    
`;
