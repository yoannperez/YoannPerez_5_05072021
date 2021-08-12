![](Frontend/public/img/15675819263013_image1.png)
# Construction d'un site e-commerce #

Vous trouverez ici les fichiers rendus pour la soutenace du projet 05 "Orinoco" réalisé dans le cadre du parcours développeur web proposée sur la plateforme Openclassrooms: [https://openclassrooms.com/fr/paths/185-developpeur-web](https://openclassrooms.com/fr/paths/185-developpeur-web).

Orinoco, une entreprise de commerce en ligne, souhaite se démarquer des grands site e-commerce comme Amazon en créant des applications thématiques ne vendant qu’un seul groupe de produits. Il y a par exemple Oribook pour les livres ou Oritextil pour les vêtements. 
Elle souhaite créer un premier MVP (Minimum Viable Product) pour démontrer le fonctionnement de ses applications à ses investisseurs.

Mon objectif au sein de ce projet est de réaliser la partie front-end de la partie.

La partie back-end est réalisée par une collègue, et est disponible sur [ce repo](https://github.com/OpenClassrooms-Student-Center/JWDP5.git) Github.

Le cahier des charges / spécifications Orinoco sont téléchargeables [ici](https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/DWJ_FR_P5/P5_Spe%CC%81cifications+fonctionnelles+Orinoco.pdf).

***
## Comment utiliser ce dépot ?


Vous devrez disposer de NodeJS et de npm installés sur votre machine afin de pouvoir executer ce projet en local.

Télécharger et installer le logiciel NodeJS à cette adresse :
[https://nodejs.org/en/download/](https://nodejs.org/en/download/)


### Installation ###

Cloner ce repo :

```
git clone https://github.com/yoannperez/YoannPerez_5_05072021.git
```

Déplacez-vous dans le dossier Backend:

```
cd Backend
```

Installer les dépendances du projet :

```
npm install
```

Vous pourvez enfin démarrer le serveur avec la commande :

```
node server
```
Le serveur devrait démarrer en `localhost`, sur le port `3000` par défaut. Si, pour une raison quelconque, le serveur est exécuté sur un autre port, celui-ci est imprimé sur la console lorsque celui-ci démarre. (ex: `Listening on port 3001`).

### Naviguer sur le site ###
La partie front-end si situe dans le dossier /Frontend.

Il est possible de de lancer le fichier index.html à l'aide d'un liveserver, ou en l'ouvrant directement avec un explorateur internet.
***
## Architecture générale

Architecture générale
### L’application web est composée de 4 pages :
* Une page de vue sous forme de liste, montrant tousles articles disponibles à la vente.
* Une page “produit”, qui affiche de manière dynamique l'élément sélectionné par l'utilisateur et lui permet de personnaliser le produit et de l'ajouter à son panier.
* Une page “panier” contenant un résumé des produits dans le panier, le prix total et un formulaire permettant de passer une commande. Les données du formulaire doivent être correctes et bien formatées avant d'être renvoyées au back-end. Par exemple, pas de texte dans les champs date.
* Une page de confirmation de commande, remerciant l'utilisateur pour sa commande, et indiquant le prix total et l'identifiant de commande envoyé
par le serveur.

### Technologies utilisées:
HTML, CSS, JavaScript, Bootstrap 5.

***
![](Frontend/public/img/15675819263013_image1.png)