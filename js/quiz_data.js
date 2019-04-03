const data = [
    {
        "text": "Que devez-vous faire quand vous pensez avoir le paludisme ?",
        "time": 15,
        "answers": [
            {
                "text": "Aller consulter un médecin",
                "comment": "Vous avez raison. Dès que vous pensez avoir un palu, allez rapidement consulter un médecin.",
                "correct": true,
            },
            {
                "text": "Prendre des médicaments sans consulter un médecin avant",
                "comment": "Seul un médecin peut diagnostiquer avec certitude le paludisme et prescrire les bons médicaments à prendre.",
                "correct": false,
            },
            {
                "text": "Attendre que ca passe avec le temps",
                "comment": "On peut mourir du paludisme si celui-ci n'est pas soigné à temps. Il faut allez consultez un médecin dès l'apparition de symptômes.",
                "correct": false,
            },
            {
                "text": "Aller consulter un guérisseur",
                "comment": "Va consulter un médecin. Il est le seul à pouvoir diagnostique correctement un paludisme.",
                "correct": false,
            },
        ]
    },
    {
        "text": "Quels sont les symptômes possibles du paludisme ?",
        "time": 15,
        "answers": [
            {
                "text": "Chute des cheveux",
                "comment": "Les symptômes possible du paludisme sont : fièvre, vomissements, fatigue, diarrhée ou maux de tête.",
                "correct": false,
            },
            {
                "text": "Fièvre, vomissements, maux de tête",
                "comment": "Allez consulter un médecin dès que vous ressentez ces symptômes. D'autres symptômes peuvent être diarrhées, fatigue.",
                "correct": true,
            },
            {
                "text": "Douleur aux orteils",
                "comment": "Les symptômes possible du paludisme sont : fièvre, vomissements, fatigue, diarrhée ou maux de tête.",
                "correct": false,
            },
        ]
    },
    {
        "text": "Quel insecte transmet le paludisme ?",
        "time": 15,
        "answers": [
            {
                "text": "La guêpe",
                "comment": "C'est le moustique qui transmet le paludisme.",
                "correct": false,
            },
            {
                "text": "La mouche tsé-tsé",
                "comment": "C'est le moustique qui transmet le paludisme.",
                "correct": false,
            },
            {
                "text": "Le moustique",
                "comment": "On dit que le moustique est le <em>vecteur</em> du paludisme.",
                "correct": true,
            },
            {
                "text": "Le fourou",
                "comment": "C'est le moustique qui transmet le paludisme.",
                "correct": false,
            },
        ]
    },
    {
        "text": "Comment pouvez-vous vous protéger efficacement du paludisme pendant votre sommeil ?",
        "time": 15,
        "answers": [
            {
                "text": "En dormant sous une moustiquaire imprégnée d’insecticide",
                "comment": "La moustiquaire imprégnée d’insecticide est la meilleure protection. Veillez à ce qu'elle soit sans trou et bien fixée autour du matelas.",
                "correct": true,
            },
            {
                "text": "En prenant des médicaments contre le paludisme",
                "comment": "Prendre des médicaments pour se protéger du paludisme n'est pas une solution à long terme. La moustiquaire imprégnée d’insecticide est la solution la plus efficace et la plus économique.",
                "correct": false,
            },
            {
                "text": "Avec un appareil qui produit des ultrasons",
                "comment": "La moustiquaire imprégnée d’insecticide est la solution la plus efficace et la plus économique.",
                "correct": false,
            },
            {
                "text": "Avec une tapette à mouche",
                "comment": "La moustiquaire imprégnée d’insecticide est la solution la plus efficace et la plus économique.",
                "correct": false,
            },
        ]
    },
    {
        "text": "En anglais, comment appelle-t-on le paludisme ?",
        "time": 15,
        "answers": [
            {
                "text": "Maludisme",
                "comment": "En anglais, paludisme est appelé malaria.",
                "correct": false,
            },
            {
                "text": "Palu",
                "comment": "<em>Palu</em> est l’abréviation française de paludisme. En anglais, paludisme est appelé malaria.",
                "correct": false,
            },
            {
                "text": "Palaria",
                "comment": "En anglais, paludisme est appelé malaria.",
                "correct": false,
            },
            {
                "text": "Malaria",
                "comment": "Vous avez trouvé. Félicitation !",
                "correct": true,
            },
        ]
    },
    {
        "text": "Quel est le nom du moustique qui transmet le paludisme ?",
        "time": 15,
        "answers": [
            {
                "text": "Paluphèle",
                "comment": "Le moustique qui transmet le paludisme s'appelle anophèle.",
                "correct": false,
            },
            {
                "text": "Mousticus malarius",
                "comment": "Le moustique qui transmet le paludisme s'appelle anophèle.",
                "correct": false,
            },
            {
                "text": "Anophèle",
                "comment": "Félicitation ! Cette question était difficile.",
                "correct": true,
            },
        ]
    },
    {
        "text": "Est-ce que tous les moustiques anophèles transmettent le paludisme ?",
        "time": 15,
        "answers": [
            {
                "text": "Oui",
                "comment": "Seuls les anophèles femelles transmettent le paludisme.",
                "correct": false,
            },
            {
                "text": "Non",
                "comment": "Vous avez raison. Seuls les anophèles femelles transmettent le paludisme.",
                "correct": true,
            },
        ]
    },
    {
        "text": "Quel examen permet de déterminer si vous avez le paludisme ?",
        "time": 15,
        "answers": [
            {
                "text": "La goutte large",
                "comment": "C’est la goutte épaisse qui permet de diagnostiquer un paludisme.",
                "correct": false,
            },
            {
                "text": "Une échographie",
                "comment": "C’est la goutte épaisse qui permet de diagnostiquer un paludisme.",
                "correct": false,
            },
            {
                "text": "La goutte épaisse",
                "comment": "La goutte épaisse permet de détecter dans le sang la présence de parasites du paludisme donc de diagnostiquer cette maladie.",
                "correct": true,
            },
        ]
    },
    {
        "text": "A part la goutte épaisse, quel autre examen permet de diagnostiquer le paludisme ?",
        "time": 15,
        "answers": [
            {
                "text": "La numération formule sanguine",
                "comment": "Le test de diagnostic rapide (TDR) permet aussi de diagnostiquer le paludisme.",
                "correct": false,
            },
            {
                "text": "Le test de diagnostic rapide (TDR)",
                "comment": "Le TDR permet aussi de diagnostiquer le paludisme.",
                "correct": true,
            },
            {
                "text": "Le test d’Emmel",
                "comment": "Le test de diagnostic rapide (TDR) permet aussi de diagnostiquer le paludisme.",
                "correct": false,
            },
        ]
    },
    {
        "text": "Quelle est l’espèce du parasite responsable de la plupart des cas de paludisme au Congo ?",
        "time": 15,
        "answers": [
            {
                "text": "Plasmodium congolum",
                "comment": "La bonne réponse est Plasmodium falciparum.",
                "correct": false,
            },
            {
                "text": "Plasmodium falciparum",
                "comment": "C'était une question difficile. Félicitation !",
                "correct": true,
            },
            {
                "text": "Anophèle",
                "comment": "<em>Anophèle</em> est l'espèce de moustique qui transmet le paludisme. La bonne réponse était Plasmodium falciparum.",
                "correct": false,
            },
        ]
    },
    {
        "text": "Dans le corps humain, où se cachent et se multiplient les parasites responsables du paludisme ?",
        "time": 15,
        "answers": [
            {
                "text": "Dans les os",
                "comment": "Les parasites du paludisme se cachent et se multiplient dans les cellules du foie.",
                "correct": false,
            },
            {
                "text": "Dans les articulations",
                "comment": "Les parasites du paludisme se cachent et se multiplient dans les cellules du foie.",
                "correct": false,
            },
            {
                "text": "Dans le  foie",
                "comment": "Après s'être multipliés dans le foie, les parasites vont ensuite se rendre dans la circulation sanguine.",
                "correct": true,
            },
        ]
    },
    {
        "text": "Dans le corps humain, où se multiplient les parasites responsables du paludisme jusqu’à provoquer les symptômes de la maladie ?",
        "time": 15,
        "answers": [
            {
                "text": "Dans le foie",
                "comment": "Lorsque vous ressentez les symptômes du paludisme, les parasites se trouvent dans le sang, à l’intérieur des globules rouges.",
                "correct": false,
            },
            {
                "text": "Dans l’estomac",
                "comment": "Lorsque vous ressentez les symptômes du paludisme, les parasites se trouvent dans le sang, à l’intérieur des globules rouges.",
                "correct": false,
            },
            {
                "text": "Dans les globules rouges du sang",
                "comment": "Vous pouvez alors ressentir les symptômes du paludisme : maux de tête, fatigue, vomissement ou diarrhée.",
                "correct": true,
            },
            {
                "text": "Dans les os",
                "comment": "Lorsque vous ressentez les symptômes du paludisme, les parasites se trouvent dans le sang, à l’intérieur des globules rouges.",
                "correct": false,
            },
        ]
    },
    {
        "text": "Existe-t-il un vaccin contre le paludisme ?",
        "time": 15,
        "answers": [
            {
                "text": "Oui",
                "comment": "Pour le moment, il n’existe que des vaccins qui sont en cours d’étude qu’on appelle des <em>vaccins candidats</em>. Les chercheurs et les médecins travaillent dur pour qu'un vaccin puisse bientôt protéger les populations.",
                "correct": false,
            },
            {
                "text": "Non",
                "comment": "Pour le moment, il n’existe que des vaccins qui sont en cours d’étude qu’on appelle des <em>vaccins candidats</em>. Les chercheurs et les médecins travaillent dur pour qu'un vaccin puisse bientôt protéger les populations.",
                "correct": true,
            },
        ]
    },
    {
        "text": "Peut-on éradiquer le paludisme de la surface de la terre sans un vaccin contre cette maladie ?",
        "time": 15,
        "answers": [
            {
                "text": "Non",
                "comment": "Un vaccin est indispensable pour se débarrasser complètement du paludisme.",
                "correct": true,
            },
            {
                "text": "Oui",
                "comment": "Seul un vaccin efficace pourra éradiquer rapidement le paludisme de la surface de la terre.",
                "correct": false,
            },
        ]
    },
    {
        "text": "Est-ce qu'on peut savoir si quelqu’un a le paludisme rien qu’en le regardant ?",
        "time": 15,
        "answers": [
            {
                "text": "Oui",
                "comment": "Le seul moyen pour savoir si une personne souffre du paludisme est de faire l'examen de la goutte épaisse ou un test de diagnostic rapide.",
                "correct": false,
            },
            {
                "text": "Non",
                "comment": "Vous avez raison. Seuls un examen de la goutte épaisse ou un test de diagnostic rapide peuvent diagnostiquer le paludisme.",
                "correct": true,
            },
        ]
    },
    {
        "text": "Le paludisme n'est présent que dans les pays chauds à cause :",
        "time": 15,
        "answers": [
            {
                "text": "De la pauvreté",
                "comment": "Le climat chaud et humide est favorable à la fois au développement des moustiques anophèles et à l’évolution des parasites du paludisme dans ces anophèles.",
                "correct": false,
            },
            {
                "text": "Du climat",
                "comment": "Le climat chaud et humide est favorable à la fois au développement des moustiques anophèles et à l’évolution des parasites du paludisme dans ces anophèles.",
                "correct": true,
            },
            {
                "text": "Des grandes étendues de savanes",
                "comment": "Le climat chaud et humide est favorable à la fois au développement des moustiques anophèles et à l’évolution des parasites du paludisme dans ces anophèles.",
                "correct": false,
            },
        ]
    },
    {
        "text": "Quelles sont les catégories de personnes qui meurent le plus du paludisme ?",
        "time": 15,
        "answers": [
            {
                "text": "Les personnes âgées",
                "comment": "Ce sont les enfants de moins de 5 ans et les femmes enceintes qui meurent le plus du paludisme.",
                "correct": false,
            },
            {
                "text": "Les enfants de moins de 5 ans",
                "comment": "Les femmes enceintes sont aussi très fragiles. Il est donc important de protéger particulièrement ces deux populations.",
                "correct": true,
            },
            {
                "text": "Les femmes enceintes",
                "comment": "Les enfants de moins de 5 ans sont aussi très fragiles. Il est donc important de protéger particulièrement ces deux populations.",
                "correct": true,
            },
            {
                "text": "Les adolescents",
                "comment": "Ce sont les enfants de moins de 5 ans et les femmes enceintes qui meurent le plus du paludisme.",
                "correct": false,
            },
        ]
    },
    {
        "text": "Les enfants de moins de 5 ans et les femmes enceintes sont les personnes qui meurent le plus du paludisme à cause :",
        "time": 15,
        "answers": [
            {
                "text": "De la nourriture qu’ils mangent",
                "comment": "C’est à cause d’un faible système de défense immunitaire. Le système de défense immunitaire des jeunes enfants n'est pas encore construit et celui des femmes enceintes est diminué par la grossesse.",
                "correct": false,
            },
            {
                "text": "D’un faible système de défense immunitaire",
                "comment": "Le système de défense immunitaire des jeunes enfants n'est pas encore construit et celui des femmes enceintes est diminué par la grossesse.",
                "correct": true,
            },
            {
                "text": "De leur faiblesse physique",
                "comment": "C’est à cause d’un faible système de défense immunitaire. Le système de défense immunitaire des jeunes enfants n'est pas encore construit et celui des femmes enceintes est diminué par la grossesse.",
                "correct": false,
            },
        ]
    },
    {
        "text": "Où faut-il acheter les médicaments contre le paludisme prescrits par le médecin ?",
        "time": 15,
        "answers": [
            {
                "text": "Chez les vendeurs ambulants",
                "comment": "Les vendeurs ambulants ne peuvent pas garantir des médicaments de bonne qualité. Il faut les acheter dans une pharmacie.",
                "correct": false,
            },
            {
                "text": "À la pharmacie",
                "comment": "Seules les pharmacies peuvent garantir des médicaments de bonne qualité.",
                "correct": true,
            },
            {
                "text": "Au marché, chez les vendeurs de médicaments",
                "comment": "Les vendeurs au marché ne peuvent pas garantir des médicaments de bonne qualité. Il faut les acheter dans une pharmacie.",
                "correct": false,
            },
        ]
    },
    {
        "text": "Le paludisme est une maladie :",
        "time": 15,
        "answers": [
            {
                "text": "Récente",
                "comment": "Le maladie est une maladie très ancienne, déjà connue en Egypte au temps des pharaons.",
                "correct": false,
            },
            {
                "text": "Très ancienne",
                "comment": "Elle était déjà connue en Egypte au temps des pharaons.",
                "correct": true,
            },
        ]
    },
    {
        "text": "Pourquoi les moustiques piquent ?",
        "time": 15,
        "answers": [
            {
                "text": "Pour embêter les humains",
                "comment": "Les moustiques anophèles femelles se nourissent de sang pour nourrir leurs oeufs.",
                "correct": false,
            },
            {
                "text": "Pour se protéger",
                "comment": "Les moustiques anophèles femelles se nourissent de sang pour nourrir leurs oeufs.",
                "correct": false,
            },
            {
                "text": "Pour se nourrir de sang",
                "comment": "Les moustiques anophèles femelles se nourissent de sang pour nourrir leurs oeufs.",
                "correct": true,
            },
        ]
    },
    {
        "text": "Le paludisme est-il une maladie contagieuse ?",
        "time": 15,
        "answers": [
            {
                "text": "Oui",
                "comment": "Le paludisme n'est pas une maladie contagieuse. On ne peut pas attraper cette maladie en étant en contact ou à proximité d'une personne malade.",
                "correct": false,
            },
            {
                "text": "Non",
                "comment": "On ne peut pas attraper le paludisme en étant en contact ou à proximité d'une personne souffrant du paludisme.",
                "correct": true,
            },
        ]
    },
    {
        "text": "Quelle méthode de diagnostic du paludisme est la plus rapide ?",
        "time": 15,
        "answers": [
            {
                "text": "Test de diagnostic rapide (TDR)",
                "comment": "Le TDR est un test qui prend 15 à 20 minintes.",
                "correct": true,
            },
            {
                "text": "Goutte épaisse",
                "comment": "Le test de diagnostic rapide (TDR) prend 15 à 20 minintes. C'est la méthode la plus rapide.",
                "correct": false,
            },
        ]
    },
    {
        "text": "En 2015, combien de personnes ont été infectées par le paludisme dans le monde ?",
        "time": 15,
        "answers": [
            {
                "text": "Plus de 200 millions",
                "comment": "Pour être plus exact, l'organisation mondiale de la santé estime que 214 millions de personnes ont été infectées par le paludisme en 2015.",
                "correct": true,
            },
            {
                "text": "200 000",
                "comment": "L'organisation mondiale de la santé estime que 214 millions de personnes ont été infectées par le paludisme en 2015.",
                "correct": false,
            },
            {
                "text": "1 million",
                "comment": "L'organisation mondiale de la santé estime que 214 millions de personnes ont été infectées par le paludisme en 2015.",
                "correct": false,
            },
        ]
    },
    {
        "text": "Le paludisme est-il une maladie sexuellement transmissible ?",
        "time": 15,
        "answers": [
            {
                "text": "Oui",
                "comment": "Le paludisme a besoin d'un vecteur (le moustique anophèle femelle) pour être transmis. Ce n'est pas une maladie sexuellement transmissible.",
                "correct": false,
            },
            {
                "text": "Non",
                "comment": "Félicitation. Le paludisme n'est pas une maladie sexuellement transmissible.",
                "correct": true,
            },
        ]
    },
    {
        "text": "Quelle proportion des décès dus au paludisme se trouvent en Afrique subsaharienne ?",
        "time": 15,
        "answers": [
            {
                "text": "50 %",
                "comment": "90 % des décès dus au paludisme se trouvent en Afrique subsaharienne.",
                "correct": false,
            },
            {
                "text": "90 %",
                "comment": "L'Afrique subsaharienne est très impactée par le paludisme.",
                "correct": true,
            },
            {
                "text": "10 %",
                "comment": "90 % des décès dus au paludisme se trouvent en Afrique subsaharienne.",
                "correct": false,
            },
        ]
    }
]
