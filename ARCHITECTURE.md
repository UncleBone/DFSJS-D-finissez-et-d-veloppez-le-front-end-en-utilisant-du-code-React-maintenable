# Arborescence
```
src/
 ├── components/
 │      ├── Header.tsx      
 │      ├── Indicator.tsx   
 │      ├── LineChart.tsx    
 │      └── PieChart.tsx    
 ├── pages/
 │      ├── Country.tsx      
 │      ├── Home.tsx        
 │      └── NotFound.tsx    
 ├── models/
 │      └── type.ts         
 ├── hooks/
 │      └── useData.ts      
 └── data/
        └── olympicsData.ts  
```
  
# Description des composants  
* **Indicator**
	+ encart label + valeur numérique
	+ **props**: label, valeur numérique, couleur d'affichage de la valeur et marge inférieure optionnelle
	+ *dumb*
* **Header**
	+ Contient le titre de la page, un éventuel sous-titre, et des indicateurs
	+ **props**: titre, sous-titre (optionnel), liste de paramètres d'indicateur
	+ *dumb*
* **PieChart**
	+ Génère le diagramme circulaire du nombre de médailles par pays
	+ **props**: tableau de données de tous les pays
	+ *dumb*
* **LineChart**
	+ Génère le graphique du nombre de médaille par session des JO
	+ **props**: données d'un pays
	+ *dumb*
* **Home**
	+ Page d'accueil. Inclut un Header et un PieChart.
	+ *smart* (appel de useData, calcul des paramètres à fournir au Header)
* **Country**
	+ Page des détails par pays
	+ **props**: aucune
	+ *smart* (appel de useParams, useData, useNavigate, calcul des paramètres à fournir au Header)
* **NotFound**
	+ Page d'erreur
	+ **props**: aucune
	+ *dumb*
* **data/olympicData**: 
	+ tableau de données olympicsData
* **hooks/useData**:
	+ Custom hooks qui gère l'appel aux données
	+ Renvoie les donnée du pays dont l'id est passé en paramètre, ou l'ensemble des données si l'id est undefined
	+ Facilite l’intégration future d’un back-end
* **models/types**:
	* déclaration des interfaces et types TypeScript