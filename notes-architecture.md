# Problèmes
- **App.tsx**: fichier trop volumineux.
- Données **olympicsData**  dans le fichier **App.tsx**.
- Type **any** déconseillé en typescript.
- Nom du composant **Home** différent du nom de fichier **App**.
- Dans **Home**, l'intégralité du fichier de données est mise dans le state => inutile.
- Répétition de 2 éléments sembables (*Pays participants*, *éditions des JO*) à mettre dans un composant séparé.
- Plusieurs composants dans le fichier **App**: Home, Country.
- Plusieurs *console.log* présents dans le code.