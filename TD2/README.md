
# TD2 - Three.js

Création d'une scène 3D avec Three.js.

La scène contient :

- Un cube vert qui tourne
- Une sphère représentant la Terre avec une texture
- Un robot 3D chargé avec GLTFLoader
- Une caméra et une lumière ambiante

Fichiers :

- index.html : page HTML
- main.js : code Three.js
- terre.jpg : texture de la Terre
- robot.glb : modèle 3D

Test effectué dans Chrome avec Live Server.

## Affichage mobile

La scène s'adapte aux écrans en portrait et en paysage.

## Capteurs du téléphone

- DeviceOrientation : inclinaison de la Terre
- DeviceMotion : déplacement vertical du cube

Le code des capteurs est intégré.
Leur fonctionnement réel n'a pas été confirmé avec certitude.

## Effet visuel

Une pluie animée est ajoutée à la scène avec Three.js.
