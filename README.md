# Création projet symfony

symfony new --webapp my_project

création fichier : .env.local
reprendre l'info correspondant à nos bdd (ici sql) 
DATABASE_URL="mysql://app:!ChangeMe!@127.0.0.1:3306/app?serverVersion=8&charset=utf8mb4"
root ; pas de mdp ; nom BDD
DATABASE_URL="mysql://root:@127.0.0.1:3306/testRedLine?serverVersion=8&charset=utf8mb4"

lancer laragon

php bin/console doctrine:database:create

php bin/console make:entity Nom
php bin/console make:migration
php bin/console doctrine:migrations:migrate

# Cloner un projet symfony

1 - commande : git clone lien nom-dossier
2 - commande : composer install
3 - création fichier : .env.local
reprendre l'info correspondant à nos bdd (ici sql) 
DATABASE_URL="mysql://app:!ChangeMe!@127.0.0.1:3306/app?serverVersion=8&charset=utf8mb4"
root ; pas de mdp ; nom BDD
DATABASE_URL="mysql://root:@127.0.0.1:3306/testRedLine?serverVersion=8&charset=utf8mb4"

4 - création de la BDD commande : php bin/console doctrine:database:create
5 - appliquer les migrations : php bin/console doctrine:migrations:migrate
