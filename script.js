const recetas = [
    // --- COMIDAS PERUANAS (1 - 20) ---
    {
        id: 1,
        nombre: "Lomo saltado ",
        categoria: "Comidas Peruanas",
        tiempo: "25 min",
        imagen: "https://files.catbox.moe/e7mpy4.png",
        ingredientes: ["500 g de carne de res", "1 cebolla roja", "2 tomates", "2 papas grandes", "2 cdas. de sillao", "1 cda. de vinagre", "aceite", "sal", "pimienta", "arroz blanco", "culantro"],
        pasos: [
            "Pela y corta las papas en bastones y fríelas hasta dorarlas.",
            "Corta la carne en tiras y sazónala con sal y pimienta.",
            "Corta la cebolla y el tomate en trozos grandes.",
            "Calienta bastante la sartén y saltea la carne a fuego alto.",
            "Agrega la cebolla y luego el tomate.",
            "Incorpora el sillao y el vinagre y mezcla rápidamente.",
            "Añade las papas fritas y un poco de culantro.",
            "Sirve inmediatamente con arroz blanco."
        ]
    },
    {
        id: 2,
        nombre: "Ají de gallina ",
        categoria: "Comidas Peruanas",
        tiempo: "35 min",
        imagen: "https://files.catbox.moe/rtnjg0.png",
        ingredientes: ["1 pechuga de pollo", "3 ajíes amarillos", "2 panes", "½ taza de leche evaporada", "1 cebolla", "2 dientes de ajo", "50 g de queso parmesano", "30 g de pecanas o nueces", "aceite", "sal", "pimienta"],
        pasos: [
            "Cocina el pollo en agua con sal.",
            "Retíralo, deja enfriar y deshiláchalo.",
            "Remoja el pan en la leche y licúalo.",
            "Prepara un aderezo con cebolla, ajo y ají amarillo.",
            "Agrega el pan licuado y cocina a fuego bajo.",
            "Incorpora el pollo y mezcla.",
            "Añade queso parmesano y pecanas picadas.",
            "Cocina hasta obtener una salsa cremosa.",
            "Sirve con arroz, papa, huevo cocido y aceitunas."
        ]
    },
    {
        id: 3,
        nombre: "Arroz con pollo ",
        categoria: "Comidas Peruanas",
        tiempo: "40 min",
        imagen: "https://files.catbox.moe/gky92y.png",
        ingredientes: ["4 presas de pollo", "2 tazas de arroz", "1 taza de culantro", "1 cebolla", "2 dientes de ajo", "1 ají amarillo", "½ taza de arvejas", "1 zanahoria", "caldo", "aceite", "sal", "pimienta"],
        pasos: [
            "Sazona el pollo con sal y pimienta.",
            "Dora las presas en una olla con aceite y retíralas.",
            "Sofríe cebolla, ajo y ají amarillo.",
            "Licúa el culantro con un poco de caldo.",
            "Agrégalo al aderezo y cocina unos minutos.",
            "Incorpora el arroz, arvejas y zanahoria.",
            "Agrega el caldo y coloca nuevamente el pollo.",
            "Cocina hasta que el arroz esté graneado y el pollo completamente cocido."
        ]
    },
    {
        id: 4,
        nombre: "Ceviche ",
        categoria: "Comidas Peruanas",
        tiempo: "20 min",
        imagen: "https://files.catbox.moe/k7k55c.png",
        ingredientes: ["500 g de pescado blanco fresco apto para consumo en crudo", "8 limones", "1 cebolla roja", "1 ají limo", "culantro", "sal", "camote", "choclo", "cancha"],
        pasos: [
            "Mantén el pescado refrigerado hasta el momento de prepararlo.",
            "Córtalo en cubos.",
            "Corta la cebolla en pluma fina.",
            "Pica el ají y el culantro.",
            "Coloca el pescado en un recipiente y añade sal.",
            "Agrega ají y culantro.",
            "Exprime el limón justo antes de servir.",
            "Incorpora la cebolla y mezcla suavemente.",
            "Sirve inmediatamente con camote, choclo y cancha."
        ]
    },
    {
        id: 5,
        nombre: "Causa limeña ",
        categoria: "Comidas Peruanas",
        tiempo: "30 min",
        imagen: "https://files.catbox.moe/vsmikj.png",
        ingredientes: ["1 kg de papa amarilla", "3 ajíes amarillos", "3 limones", "3 cdas. de aceite", "sal", "1 palta", "250 g de pollo cocido", "mayonesa", "aceitunas", "2 huevos"],
        pasos: [
            "Cocina las papas hasta que estén suaves.",
            "Pélalas y prénsalas mientras están tibias.",
            "Licúa el ají amarillo con un poco de agua.",
            "Mezcla la papa con ají, limón, aceite y sal.",
            "Deshilacha el pollo y mézclalo con mayonesa.",
            "Coloca una capa de papa en un molde.",
            "Agrega palta y el relleno de pollo.",
            "Cubre con otra capa de papa.",
            "Refrigera, desmolda y decora con huevo y aceitunas."
        ]
    },
    {
        id: 6,
        nombre: "Papa a la huancaína ",
        categoria: "Comidas Peruanas",
        tiempo: "20 min",
        imagen: "https://files.catbox.moe/63519f.png",
        ingredientes: ["1 kg de papa", "250 g de queso fresco", "2 ajíes amarillos", "½ taza de leche evaporada", "4 galletas de soda", "aceite", "sal", "aceitunas", "huevos"],
        pasos: [
            "Cocina las papas y déjalas enfriar.",
            "Pélalas y córtalas en rodajas.",
            "Limpia los ajíes amarillos.",
            "Sofríe ligeramente ají y cebolla.",
            "Licúa ají, queso, leche, galletas y aceite.",
            "Agrega sal y corrige la consistencia con leche.",
            "Coloca las papas en un plato.",
            "Báñalas con la salsa.",
            "Decora con huevo cocido y aceitunas."
        ]
    },
    {
        id: 7,
        nombre: "Anticuchos ",
        categoria: "Comidas Peruanas",
        tiempo: "40 min",
        imagen: "https://files.catbox.moe/bgebmf.png",
        ingredientes: ["1 kg de corazón de res limpio", "4 cdas. de ají panca", "3 dientes de ajo", "¼ taza de vinagre", "1 cdita. de comino", "orégano", "sal", "pimienta", "aceite"],
        pasos: [
            "Limpia bien el corazón y retira las partes duras.",
            "Córtalo en trozos.",
            "Mezcla ají panca, ajo, vinagre, comino, orégano, sal y pimienta.",
            "Coloca la carne en la marinada.",
            "Refrigera varias horas.",
            "Ensarta la carne en palitos.",
            "Calienta la parrilla.",
            "Cocina los anticuchos, volteándolos para dorarlos uniformemente.",
            "Sirve con papa, choclo y ají."
        ]
    },
    {
        id: 8,
        nombre: "Seco de pollo ",
        categoria: "Comidas Peruanas",
        tiempo: "35 min",
        imagen: "https://files.catbox.moe/v4mamo.png",
        ingredientes: ["4 presas de pollo", "1 taza de culantro", "1 cebolla", "2 dientes de ajo", "1 ají amarillo", "½ taza de arvejas", "1 zanahoria", "caldo", "aceite", "sal", "pimienta"],
        pasos: [
            "Sazona y dora el pollo.",
            "Retíralo y prepara un aderezo con cebolla, ajo y ají.",
            "Licúa el culantro con un poco de caldo.",
            "Agrega el culantro al aderezo.",
            "Regresa el pollo a la olla.",
            "Añade caldo, arvejas y zanahoria.",
            "Tapa y cocina a fuego bajo.",
            "Cocina hasta que el pollo esté tierno.",
            "Sirve con arroz blanco."
        ]
    },
    {
        id: 9,
        nombre: "Carapulcra ",
        categoria: "Comidas Peruanas",
        tiempo: "50 min",
        imagen: "https://files.catbox.moe/9mal9j.png",
        ingredientes: ["500 g de papa seca", "500 g de carne de cerdo", "3 cdas. de ají panca", "1 cebolla", "3 dientes de ajo", "100 g de maní", "comino", "caldo", "aceite", "sal"],
        pasos: [
            "Lava y remoja la papa seca.",
            "Escúrrela y tuéstala ligeramente.",
            "Dora la carne de cerdo y reserva.",
            "Prepara un aderezo con cebolla, ajo y ají panca.",
            "Agrega la papa seca y mezcla.",
            "Añade caldo caliente.",
            "Incorpora la carne.",
            "Cocina a fuego bajo hasta que la papa esté suave.",
            "Agrega el maní molido.",
            "Cocina hasta que espese y sirve con arroz."
        ]
    },
    {
        id: 10,
        nombre: "Arroz chaufa ",
        categoria: "Comidas Peruanas",
        tiempo: "20 min",
        imagen: "https://files.catbox.moe/cbkodj.png",
        ingredientes: ["3 tazas de arroz cocido frío", "2 huevos", "250 g de pollo", "4 cdas. de sillao", "3 cebollas chinas", "aceite", "sal", "pimienta"],
        pasos: [
            "Bate los huevos.",
            "Haz una tortilla y córtala en trozos.",
            "Corta el pollo en cubos y cocínalo.",
            "Calienta muy bien un wok.",
            "Agrega el arroz frío.",
            "Incorpora el sillao y mezcla.",
            "Añade pollo y huevo.",
            "Agrega cebolla china al final.",
            "Saltea todo a fuego alto y sirve."
        ]
    },
    {
        id: 11,
        nombre: "Tallarines verdes ",
        categoria: "Comidas Peruanas",
        tiempo: "25 min",
        imagen: "https://files.catbox.moe/68enzi.webp",
        ingredientes: ["500 g de tallarines", "1 taza de albahaca", "1 taza de espinaca", "150 g de queso fresco", "½ taza de leche", "50 g de pecanas", "aceite", "sal", "pimienta"],
        pasos: [
            "Cocina los tallarines en agua con sal.",
            "Escúrrelos cuando estén al dente.",
            "Blanquea brevemente la albahaca y espinaca.",
            "Licúalas con queso, leche, pecanas y aceite.",
            "Sazona la salsa.",
            "Cocina la salsa unos minutos.",
            "Agrega los tallarines.",
            "Mezcla hasta cubrirlos completamente.",
            "Sirve calientes."
        ]
    },
    {
        id: 12,
        nombre: "Pollo a la brasa ",
        categoria: "Comidas Peruanas",
        tiempo: "1 hr 10 min",
        imagen: "https://files.catbox.moe/1kygey.webp",
        ingredientes: ["1 pollo entero", "3 dientes de ajo", "2 cdas. de sillao", "2 cdas. de vinagre", "1 cdita. de comino", "1 cdita. de orégano", "sal", "pimienta"],
        pasos: [
            "Limpia el pollo y sécalo.",
            "Mezcla ajo, sillao, vinagre y especias.",
            "Unta el pollo con la marinada.",
            "Déjalo reposar refrigerado varias horas.",
            "Precalienta el horno.",
            "Coloca el pollo en una bandeja.",
            "Hornea, girándolo si es necesario, hasta que esté dorado y completamente cocido.",
            "Déjalo reposar unos minutos.",
            "Sirve con papas fritas y ensalada."
        ]
    },
    {
        id: 13,
        nombre: "Pachamanca ",
        categoria: "Comidas Peruanas",
        tiempo: "1 hr 30 min",
        imagen: "https://files.catbox.moe/w3jdkx.webp",
        ingredientes: ["pollo", "cerdo", "papas", "camote", "choclo", "habas", "huacatay", "chincho", "ají panca", "ajo", "comino", "sal", "pimienta"],
        pasos: [
            "Limpia y corta las carnes.",
            "Prepara una marinada con hierbas, ají panca, ajo y especias.",
            "Marina las carnes durante varias horas.",
            "Lava las papas, camotes y choclos.",
            "La versión tradicional se cocina en un horno de tierra con piedras previamente calentadas.",
            "Se colocan los ingredientes por capas junto con las hierbas.",
            "Se cubre y se deja cocinar con el calor de las piedras.",
            "Cuando las carnes y tubérculos están cocidos, se retiran.",
            "Se sirve todo junto."
        ]
    },
    {
        id: 14,
        nombre: "Rocoto relleno ",
        categoria: "Comidas Peruanas",
        tiempo: "45 min",
        imagen: "https://files.catbox.moe/y54jx2.webp",
        ingredientes: ["6 rocotos", "500 g de carne molida", "1 cebolla", "2 dientes de ajo", "2 huevos", "100 g de queso fresco", "leche evaporada", "aceite", "sal", "pimienta"],
        pasos: [
            "Lava los rocotos y retira las tapas y semillas.",
            "Hierve los rocotos en agua para reducir parte del picor.",
            "Prepara un aderezo con cebolla y ajo.",
            "Agrega la carne y cocínalal completamente.",
            "Sazona con sal y pimienta.",
            "Rellena los rocotos con la carne.",
            "Coloca queso encima.",
            "Acomoda los rocotos en una fuente.",
            "Hornea hasta que el queso esté gratinado.",
            "Sirve caliente."
        ]
    },
    {
        id: 15,
        nombre: "Tacu tacu ",
        categoria: "Comidas Peruanas",
        tiempo: "25 min",
        imagen: "https://files.catbox.moe/hpardb.webp",
        ingredientes: ["2 tazas de arroz cocido", "2 tazas de frejoles cocidos", "1 cebolla", "2 dientes de ajo", "1 ají amarillo", "aceite", "sal"],
        pasos: [
            "Prepara un aderezo con cebolla, ajo y ají.",
            "Agrega los frejoles y aplástalos parcialmente.",
            "Incorpora el arroz.",
            "Mezcla hasta formar una masa.",
            "Divide la mezcla en porciones.",
            "Forma discos.",
            "Calienta aceite en una sartén.",
            "Dora los tacu tacu por ambos lados.",
            "Sirve calientes."
        ]
    },
    {
        id: 16,
        nombre: "Aguadito de pollo ",
        categoria: "Comidas Peruanas",
        tiempo: "35 min",
        imagen: "https://files.catbox.moe/1cvvgc.webp",
        ingredientes: ["4 presas de pollo", "1 taza de arroz", "1 taza de culantro", "1 cebolla", "2 dientes de ajo", "1 zanahoria", "½ taza de arvejas", "2 papas", "caldo", "sal", "pimienta"],
        pasos: [
            "Dora ligeramente el pollo.",
            "Prepara un aderezo con cebolla y ajo.",
            "Licúa el culantro con un poco de caldo.",
            "Añádelo al aderezo.",
            "Agrega el pollo y más caldo.",
            "Incorpora arroz, papa, zanahoria y arvejas.",
            "Cocina hasta que el arroz y las verduras estén suaves.",
            "Verifica la cocción del pollo.",
            "Sirve caliente."
        ]
    },
    {
        id: 17,
        nombre: "Cau cau ",
        categoria: "Comidas Peruanas",
        tiempo: "40 min",
        imagen: "https://files.catbox.moe/nya1mz.png ",
        ingredientes: ["500 g de mondongo", "500 g de papa", "1 cebolla", "2 dientes de ajo", "2 cdas. de ají amarillo", "hierbabuena", "arvejas", "aceite", "sal"],
        pasos: [
            "Cocina el mondongo hasta que esté tierno.",
            "Córtalo en cubos pequeños.",
            "Pela y corta las papas.",
            "Prepara un aderezo con cebolla, ajo y ají amarillo.",
            "Agrega el mondongo.",
            "Incorpora las papas y arvejas.",
            "Añade agua o caldo.",
            "Cocina hasta que la papa esté suave.",
            "Agrega hierbabuena y sirve."
        ]
    },
    {
        id: 18,
        nombre: "Olluquito con carne ",
        categoria: "Comidas Peruanas",
        tiempo: "30 min",
        imagen: "https://files.catbox.moe/uxunqm.png",
        ingredientes: ["700 g de olluco", "300 g de carne de res", "1 cebolla", "2 dientes de ajo", "2 cdas. de ají amarillo", "perejil", "aceite", "sal"],
        pasos: [
            "Lava muy bien el olluco.",
            "Córtalo en tiras.",
            "Corta la carne en tiras pequeñas.",
            "Dora la carne en aceite.",
            "Retírala y prepara el aderezo.",
            "Agrega el olluco y mezcla.",
            "Incorpora nuevamente la carne.",
            "Cocina hasta que el olluco esté suave.",
            "Añade perejil y sirve con arroz."
        ]
    },
    {
        id: 19,
        nombre: "Estofado de pollo ",
        categoria: "Comidas Peruanas",
        tiempo: "35 min",
        imagen: "https://files.catbox.moe/qsrqx8.webp",
        ingredientes: ["4 presas de pollo", "2 papas", "1 zanahoria", "½ taza de arvejas", "2 tomates", "1 cebolla", "2 dientes de ajo", "caldo", "aceite", "sal", "pimienta"],
        pasos: [
            "Sazona y dora el pollo.",
            "Retíralo.",
            "Sofríe cebolla, ajo y tomate.",
            "Agrega el pollo.",
            "Añade caldo y cocina unos minutos.",
            "Incorpora zanahoria, papa y arvejas.",
            "Tapa la olla.",
            "Cocina hasta que las verduras estén suaves y el pollo completamente cocido.",
            "Sirve con arroz."
        ]
    },
    {
        id: 20,
        nombre: "Chanfainita ",
        categoria: "Comidas Peruanas",
        tiempo: "40 min",
        imagen: "https://files.catbox.moe/1sv2fo.png",
        ingredientes: ["500 g de bofe de res", "500 g de papa", "1 cebolla", "2 dientes de ajo", "2 cdas. de ají panca", "hierbabuena", "comino", "aceite", "sal"],
        pasos: [
            "Lava y cocina el bofe.",
            "Déjalo enfriar y córtalo en cubos.",
            "Pela y corta las papas.",
            "Prepara un aderezo con cebolla, ajo y ají panca.",
            "Agrega el bofe y mezcla.",
            "Incorpora las papas.",
            "Añade agua y comino.",
            "Cocina hasta que la papa esté suave.",
            "Agrega hierbabuena y sirve."
        ]
    },

    // --- DESAYUNOS (21 - 35) ---
    {
        id: 21,
        nombre: "Pan con chicharrón ",
        categoria: "Desayunos",
        tiempo: "30 min",
        imagen: "https://files.catbox.moe/jz8xzz.png",
        ingredientes: ["500 g de panceta o carne de cerdo", "panes", "camote", "cebolla roja", "limón", "ají", "sal"],
        pasos: [
            "Corta el cerdo en trozos.",
            "Colócalo en una olla con agua y sal.",
            "Cocina hasta que el agua se evapore.",
            "Deja que el cerdo se dore en su propia grasa.",
            "Fríe o cocina el camote.",
            "Prepara la salsa criolla con cebolla, limón y ají.",
            "Abre los panes.",
            "Coloca el chicharrón, camote y salsa criolla.",
            "Sirve caliente."
        ]
    },
    {
        id: 22,
        nombre: "Tamales ",
        categoria: "Desayunos",
        tiempo: "1 hr",
        imagen: "https://files.catbox.moe/gpbxlo.png",
        ingredientes: ["1 kg de maíz para tamal o masa de maíz", "500 g de pollo o cerdo", "ají panca", "ají amarillo", "manteca", "aceitunas", "huevos", "hojas de plátano", "sal"],
        pasos: [
            "Prepara la masa de maíz.",
            "Mézclala con manteca y sal.",
            "Cocina el pollo o cerdo y desmenúzalo.",
            "Prepara un aderezo con ajíes y especias.",
            "Mezcla parte del aderezo con el relleno.",
            "Extiende masa sobre una hoja de plátano.",
            "Coloca relleno, aceituna y huevo.",
            "Envuelve cuidadosamente.",
            "Cocina los tamales al vapor hasta que la masa esté firme.",
            "Deja reposar unos minutos antes de servir."
        ]
    },
    {
        id: 23,
        nombre: "Pan con palta ",
        categoria: "Desayunos",
        tiempo: "5 min",
        imagen: "https://files.catbox.moe/o4pni8.png",
        ingredientes: ["2 panes", "1 palta madura", "sal", "limón opcional"],
        pasos: [
            "Lava y corta la palta.",
            "Retira la pulpa.",
            "Tritúrala ligeramente con un tenedor.",
            "Agrega una pizca de sal.",
            "Abre el pan.",
            "Coloca la palta.",
            "Añade unas gotas de limón si deseas.",
            "Sirve inmediatamente."
        ]
    },
    {
        id: 24,
        nombre: "Pan con huevo ",
        categoria: "Desayunos",
        tiempo: "10 min",
        imagen: "https://files.catbox.moe/7flpt3.png",
        ingredientes: ["2 panes", "2 huevos", "aceite", "sal"],
        pasos: [
            "Calienta una sartén.",
            "Agrega un poco de aceite.",
            "Rompe los huevos.",
            "Cocina hasta alcanzar el punto deseado.",
            "Añade sal.",
            "Abre los panes.",
            "Coloca los huevos dentro.",
            "Sirve caliente."
        ]
    },
    {
        id: 25,
        nombre: "Avena con frutas ",
        categoria: "Desayunos",
        tiempo: "15 min",
        imagen: "https://files.catbox.moe/v9yz8c.png",
        ingredientes: ["1 taza de avena", "2 tazas de leche", "1 plátano", "fresas", "canela", "miel"],
        pasos: [
            "Coloca la leche en una olla.",
            "Agrega la avena.",
            "Cocina a fuego medio.",
            "Remueve constantemente para evitar que se pegue.",
            "Añade canela.",
            "Cocina hasta que espese.",
            "Sirve en un recipiente.",
            "Agrega plátano y fresas.",
            "Endulza con un poco de miel."
        ]
    },
    {
        id: 26,
        nombre: "Quinua con leche ",
        categoria: "Desayunos",
        tiempo: "25 min",
        imagen: "https://files.catbox.moe/drfmyi.jpg",
        ingredientes: ["1 taza de quinua", "3 tazas de leche", "1 rama de canela", "3 cdas. de azúcar", "vainilla"],
        pasos: [
            "Lava la quinua varias veces.",
            "Cocínala en agua hasta que esté suave.",
            "Escúrrela.",
            "Coloca la quinua en una olla con leche.",
            "Añade canela.",
            "Cocina a fuego bajo removiendo.",
            "Agrega azúcar y vainilla.",
            "Cocina hasta obtener una consistencia cremosa.",
            "Sirve caliente o fría."
        ]
    },
    {
        id: 27,
        nombre: "Yogur con granola ",
        categoria: "Desayunos",
        tiempo: "5 min",
        imagen: "https://files.catbox.moe/ma45na.png",
        ingredientes: ["2 tazas de yogur natural", "1 taza de granola", "plátano", "fresas", "otras frutas"],
        pasos: [
            "Lava las frutas.",
            "Córtalas en trozos.",
            "Coloca yogur en un vaso o recipiente.",
            "Agrega una capa de granola.",
            "Añade fruta.",
            "Repite las capas.",
            "Termina con fruta y granola.",
            "Sirve inmediatamente."
        ]
    },
    {
        id: 28,
        nombre: "Tortilla de verduras ",
        categoria: "Desayunos",
        tiempo: "15 min",
        imagen: "https://files.catbox.moe/as3pz4.png",
        ingredientes: ["3 huevos", "½ tomate", "½ cebolla", "½ zanahoria", "espinaca", "aceite", "sal"],
        pasos: [
            "Lava y corta las verduras.",
            "Bate los huevos.",
            "Mezcla los huevos con las verduras.",
            "Añade sal.",
            "Calienta aceite en una sartén.",
            "Vierte la mezcla.",
            "Cocina a fuego medio.",
            "Voltea con cuidado.",
            "Cocina hasta que el huevo esté completamente cuajado."
        ]
    },
    {
        id: 29,
        nombre: "Sándwich de pollo ",
        categoria: "Desayunos",
        tiempo: "15 min",
        imagen: "https://files.catbox.moe/9t9qjl.png",
        ingredientes: ["2 panes", "200 g de pollo cocido", "lechuga", "tomate", "mayonesa", "sal"],
        pasos: [
            "Cocina el pollo completamente.",
            "Déjalo enfriar y deshiláchalo.",
            "Mezcla con un poco de mayonesa.",
            "Lava la lechuga y tomate.",
            "Corta el tomate en rodajas.",
            "Abre el pan.",
            "Coloca lechuga, pollo y tomate.",
            "Cierra el sándwich y sirve."
        ]
    },
    {
        id: 30,
        nombre: "Pan con queso ",
        categoria: "Desayunos",
        tiempo: "5 min",
        imagen: "https://files.catbox.moe/pozhyu.png",
        ingredientes: ["2 panes", "100 g de queso fresco"],
        pasos: [
            "Corta el queso en rodajas.",
            "Abre los panes.",
            "Coloca el queso.",
            "Puedes calentarlo ligeramente para ablandarlo.",
            "Sirve inmediatamente."
        ]
    },
    {
        id: 31,
        nombre: "Huevos revueltos ",
        categoria: "Desayunos",
        tiempo: "8 min",
        imagen: "https://files.catbox.moe/snz7x4.png",
        ingredientes: ["3 huevos", "1 cda. de leche opcional", "aceite", "sal"],
        pasos: [
            "Rompe los huevos en un recipiente.",
            "Bátelos hasta integrarlos.",
            "Añade sal.",
            "Calienta una sartén con poco aceite.",
            "Vierte los huevos.",
            "Remueve suavemente con una espátula.",
            "Cocina hasta que estén completamente cuajados.",
            "Retira del fuego y sirve."
        ]
    },
    {
        id: 32,
        nombre: "Panqueques con frutas ",
        categoria: "Desayunos",
        tiempo: "20 min",
        imagen: "https://files.catbox.moe/1rq0kr.png",
        ingredientes: ["1 taza de harina", "1 huevo", "1 taza de leche", "1 cda. de azúcar", "1 cdita. de polvo de hornear", "frutas"],
        pasos: [
            "Mezcla harina, azúcar y polvo de hornear.",
            "Agrega huevo y leche.",
            "Mezcla hasta obtener una masa uniforme.",
            "Calienta una sartén ligeramente engrasada.",
            "Vierte una porción de masa.",
            "Cocina hasta que aparezcan burbujas.",
            "Voltea y cocina el otro lado.",
            "Repite con el resto de la masa.",
            "Sirve con frutas."
        ]
    },
    {
        id: 33,
        nombre: "Tostadas con mermelada ",
        categoria: "Desayunos",
        tiempo: "5 min",
        imagen: "https://files.catbox.moe/2k5c7v.png",
        ingredientes: ["4 rebanadas de pan", "mermelada"],
        pasos: [
            "Coloca las rebanadas en una tostadora o sartén.",
            "Tuéstalas hasta que estén doradas.",
            "Retíralas con cuidado.",
            "Unta mermelada.",
            "Sirve inmediatamente."
        ]
    },
    {
        id: 34,
        nombre: "Ensalada de frutas ",
        categoria: "Desayunos",
        tiempo: "10 min",
        imagen: "https://files.catbox.moe/crd7ip.png",
        ingredientes: ["plátano", "manzana", "papaya", "fresas", "uvas", "naranja"],
        pasos: [
            "Lava todas las frutas.",
            "Pela las que lo necesiten.",
            "Corta las frutas en trozos.",
            "Retira semillas o partes no comestibles.",
            "Coloca todo en un recipiente.",
            "Mezcla suavemente.",
            "Sirve fresca."
        ]
    },
    {
        id: 35,
        nombre: "Batido de frutas ",
        categoria: "Desayunos",
        tiempo: "5 min",
        imagen: "https://files.catbox.moe/m6bige.png",
        ingredientes: ["1 plátano", "1 taza de fresas", "1 taza de leche", "miel al gusto"],
        pasos: [
            "Lava las fresas.",
            "Pela el plátano.",
            "Coloca las frutas en la licuadora.",
            "Añade la leche.",
            "Agrega miel si deseas.",
            "Licúa hasta obtener una mezcla uniforme.",
            "Sirve inmediatamente."
        ]
    },

    // --- COMIDAS EXTRANJERAS (36 - 55) ---
    {
        id: 36,
        nombre: "Pizza italiana 🇮🇹",
        categoria: "Comidas Extranjeras",
        tiempo: "45 min",
        imagen: "https://files.catbox.moe/66iqpu.png",
        ingredientes: ["500 g de harina", "325 ml de agua", "10 g de sal", "3 g de levadura seca", "salsa de tomate", "mozzarella", "aceite de oliva", "albahaca"],
        pasos: [
            "Mezcla harina, agua y levadura.",
            "Agrega la sal y amasa hasta obtener una masa suave.",
            "Deja reposar la masa cubierta hasta que aumente de tamaño.",
            "Divide y forma una bola.",
            "Estira la masa con las manos.",
            "Coloca salsa de tomate y mozzarella.",
            "Añade un poco de aceite de oliva.",
            "Hornea a temperatura muy alta hasta que los bordes estén dorados.",
            "Termina con albahaca fresca."
        ]
    },
    {
        id: 37,
        nombre: "Sushi japonés 🇯🇵",
        categoria: "Comidas Extranjeras",
        tiempo: "50 min",
        imagen: "https://files.catbox.moe/edyg5u.png",
        ingredientes: ["arroz para sushi", "vinagre de arroz", "azúcar", "sal", "alga nori", "pepino", "palta", "pescado apto para consumo en crudo"],
        pasos: [
            "Lava el arroz varias veces hasta que el agua salga casi transparente.",
            "Cocínalo siguiendo la proporción adecuada de agua.",
            "Mezcla vinagre de arroz, azúcar y sal.",
            "Incorpora esta mezcla al arroz caliente.",
            "Deja enfriar el arroz.",
            "Coloca una hoja de nori sobre una esterilla.",
            "Extiende una capa fina de arroz.",
            "Añade los ingredientes en el centro.",
            "Enrolla firmemente.",
            "Corta el rollo con un cuchillo húmedo."
        ]
    },
    {
        id: 38,
        nombre: "Tacos mexicanos 🇲🇽",
        categoria: "Comidas Extranjeras",
        tiempo: "25 min",
        imagen: "https://files.catbox.moe/4t60tt.png",
        ingredientes: ["tortillas de maíz", "500 g de carne", "cebolla", "cilantro", "limón", "sal", "salsa"],
        pasos: [
            "Corta la carne en trozos pequeños.",
            "Sazona con sal y las especias de tu preferencia.",
            "Cocina la carne en una sartén caliente.",
            "Corta cebolla y cilantro.",
            "Calienta las tortillas.",
            "Coloca la carne sobre cada tortilla.",
            "Añade cebolla y cilantro.",
            "Agrega salsa y unas gotas de limón.",
            "Sirve calientes."
        ]
    },
    {
        id: 39,
        nombre: "Hamburguesa 🇺🇸",
        categoria: "Comidas Extranjeras",
        tiempo: "20 min",
        imagen: "https://files.catbox.moe/07k3sn.png",
        ingredientes: ["500 g de carne molida", "4 panes", "4 láminas de queso", "lechuga", "tomate", "cebolla", "sal", "pimienta"],
        pasos: [
            "Divide la carne en cuatro porciones.",
            "Forma las hamburguesas sin compactarlas demasiado.",
            "Sazona con sal y pimienta.",
            "Cocina en una sartén o parrilla hasta que estén completamente cocidas.",
            "Coloca queso encima para que se derrita.",
            "Tuesta ligeramente los panes.",
            "Coloca lechuga, tomate y cebolla.",
            "Añade la carne y las salsas.",
            "Cierra y sirve."
        ]
    },
    {
        id: 40,
        nombre: "Pasta carbonara 🇮🇹",
        categoria: "Comidas Extranjeras",
        tiempo: "20 min",
        imagen: "https://files.catbox.moe/syto9x.png",
        ingredientes: ["400 g de spaghetti", "150 g de guanciale o panceta", "3 huevos", "100 g de pecorino romano", "pimienta negra", "sal"],
        pasos: [
            "Corta el guanciale en trozos pequeños.",
            "Cocina la pasta en abundante agua con sal.",
            "Mezcla los huevos con el pecorino y bastante pimienta.",
            "Cocina el guanciale hasta que quede dorado.",
            "Reserva un poco de agua de cocción.",
            "Escurre la pasta al dente.",
            "Mezcla la pasta con el guanciale.",
            "Retira la sartén del fuego.",
            "Agrega la mezcla de huevo y queso.",
            "Añade un poco de agua de pasta y mezcla hasta formar una salsa cremosa, sin cocinar directamente el huevo."
        ]
    },
    {
        id: 41,
        nombre: "Paella española 🇪🇸",
        categoria: "Comidas Extranjeras",
        tiempo: "45 min",
        imagen: "https://files.catbox.moe/hnpji9.png",
        ingredientes: ["2 tazas de arroz", "pollo", "mariscos", "pimiento", "tomate", "caldo", "azafrán", "aceite de oliva", "ajo", "sal"],
        pasos: [
            "Calienta aceite en una paellera.",
            "Dora el pollo.",
            "Agrega ajo, tomate y pimiento.",
            "Sofríe hasta formar un buen fondo.",
            "Añade el arroz y mezcla.",
            "Incorpora el caldo caliente y azafrán.",
            "Distribuye el arroz uniformemente.",
            "Agrega los mariscos según su tiempo de cocción.",
            "Cocina sin remover constantemente.",
            "Deja reposar unos minutos antes de servir."
        ]
    },
    {
        id: 42,
        nombre: "Lasaña italiana 🇮🇹",
        categoria: "Comidas Extranjeras",
        tiempo: "1 hr",
        imagen: "https://files.catbox.moe/dblyo5.png",
        ingredientes: ["láminas de pasta", "500 g de carne molida", "tomate triturado", "cebolla", "ajo", "leche", "mantequilla", "harina", "queso mozzarella", "parmesano"],
        pasos: [
            "Prepara un sofrito con cebolla y ajo.",
            "Agrega la carne y cocínalal completamente.",
            "Incorpora tomate y cocina la salsa.",
            "Prepara una salsa bechamel con mantequilla, harina y leche.",
            "Cocina las láminas de pasta según sus indicaciones.",
            "Coloca una capa de salsa de carne.",
            "Añade pasta, bechamel y queso.",
            "Repite las capas.",
            "Termina con bechamel y queso.",
            "Hornea hasta que esté dorada y deja reposar antes de cortar."
        ]
    },
    {
        id: 43,
        nombre: "Ramen japonés 🇯🇵",
        categoria: "Comidas Extranjeras",
        tiempo: "40 min",
        imagen: "https://files.catbox.moe/ykd3kc.png",
        ingredientes: ["fideos ramen", "caldo", "pollo o cerdo", "huevo", "cebolla china", "hongos", "salsa de soya"],
        pasos: [
            "Prepara un caldo sabroso.",
            "Cocina la carne completamente y córtala en láminas.",
            "Cocina el huevo y déjalo enfriar.",
            "Cocina los fideos por separado.",
            "Calienta el caldo y ajusta su sabor.",
            "Coloca los fideos en un tazón.",
            "Agrega el caldo caliente.",
            "Añade carne, huevo y hongos.",
            "Termina con cebolla china."
        ]
    },
    {
        id: 44,
        nombre: "Burritos mexicanos 🇲🇽",
        categoria: "Comidas Extranjeras",
        tiempo: "20 min",
        imagen: "https://files.catbox.moe/1q51cs.png",
        ingredientes: ["tortillas grandes de harina", "300 g de carne o pollo", "arroz", "frejoles", "queso", "lechuga", "tomate", "salsa"],
        pasos: [
            "Cocina y sazona la carne.",
            "Prepara el arroz y los frejoles.",
            "Calienta la tortilla.",
            "Coloca arroz en el centro.",
            "Añade frejoles y carne.",
            "Agrega queso y verduras.",
            "Añade salsa al gusto.",
            "Dobla los extremos.",
            "Enrolla firmemente.",
            "Sirve entero o córtalo por la mitad."
        ]
    },
    {
        id: 45,
        nombre: "Croissant francés 🇫🇷",
        categoria: "Comidas Extranjeras",
        tiempo: "2 hrs",
        imagen: "https://files.catbox.moe/3d9kdu.png",
        ingredientes: ["500 g de harina", "250 ml de leche", "50 g de azúcar", "10 g de sal", "10 g de levadura", "250 g de mantequilla"],
        pasos: [
            "Prepara una masa con harina, leche, azúcar, sal y levadura.",
            "Amasa hasta que quede lisa.",
            "Déjala reposar y enfriar.",
            "Coloca la mantequilla en una lámina.",
            "Encierra la mantequilla dentro de la masa.",
            "Estira y dobla la masa varias veces para crear capas.",
            "Refrigera entre los dobleces.",
            "Estira y corta triángulos.",
            "Enrolla cada triángulo formando el croissant.",
            "Deja fermentar y hornea hasta que estén dorados."
        ]
    },
    {
        id: 46,
        nombre: "Curry de pollo 🇮🇳",
        categoria: "Comidas Extranjeras",
        tiempo: "35 min",
        imagen: "https://files.catbox.moe/ogjkqh.png",
        ingredientes: ["500 g de pollo", "cebolla", "ajo", "jengibre", "tomate", "curry", "cúrcuma", "comino", "leche de coco", "aceite"],
        pasos: [
            "Corta el pollo en trozos.",
            "Sofríe cebolla, ajo y jengibre.",
            "Añade las especias y cocina brevemente.",
            "Agrega el tomate.",
            "Incorpora el pollo.",
            "Cocina hasta que se dore ligeramente.",
            "Añade leche de coco.",
            "Cocina a fuego medio hasta que el pollo esté completamente cocido.",
            "Ajusta la sal.",
            "Sirve con arroz."
        ]
    },
    {
        id: 47,
        nombre: "Pad Thai 🇹🇭",
        categoria: "Comidas Extranjeras",
        tiempo: "25 min",
        imagen: "https://files.catbox.moe/i9i07m.png",
        ingredientes: ["fideos de arroz", "pollo o camarones", "2 huevos", "brotes de soya", "cebolla china", "maní", "tamarindo", "salsa de pescado", "azúcar"],
        pasos: [
            "Remoja los fideos de arroz hasta que estén flexibles.",
            "Prepara la salsa mezclando tamarindo, salsa de pescado y azúcar.",
            "Cocina el pollo o camarones.",
            "Agrega los huevos y revuelve.",
            "Incorpora los fideos.",
            "Añade la salsa.",
            "Saltea hasta que los fideos estén cocidos.",
            "Agrega brotes de soya y cebolla china.",
            "Sirve con maní triturado."
        ]
    },
    {
        id: 48,
        nombre: "Poutine canadiense 🇨🇦",
        categoria: "Comidas Extranjeras",
        tiempo: "25 min",
        imagen: "https://files.catbox.moe/x3dw3c.png",
        ingredientes: ["papas", "aceite", "queso en trozos tipo cheese curds", "salsa gravy"],
        pasos: [
            "Pela las papas.",
            "Córtalas en bastones.",
            "Fríelas hasta que estén doradas y crujientes.",
            "Prepara una salsa gravy.",
            "Coloca las papas calientes en un plato.",
            "Añade los trozos de queso.",
            "Baña con gravy caliente.",
            "Sirve inmediatamente."
        ]
    },
    {
        id: 49,
        nombre: "Fish and chips 🇬🇧",
        categoria: "Comidas Extranjeras",
        tiempo: "30 min",
        imagen: "https://files.catbox.moe/bmitkf.png",
        ingredientes: ["filetes de pescado blanco", "harina", "cerveza o agua con gas", "sal", "pimienta", "papas", "aceite"],
        pasos: [
            "Pela y corta las papas.",
            "Déjalas en agua y sécalas bien.",
            "Fríelas hasta que estén parcialmente cocidas.",
            "Mezcla harina con líquido frío para formar la masa.",
            "Seca el pescado.",
            "Pásalo por harina y luego por la masa.",
            "Fríelo hasta que esté dorado y completamente cocido.",
            "Termina de freír las papas hasta que estén crujientes.",
            "Sirve juntos."
        ]
    },
    {
        id: 50,
        nombre: "Falafel 🇱🇧",
        categoria: "Comidas Extranjeras",
        tiempo: "30 min",
        imagen: "https://files.catbox.moe/nrmeu9.webp",
        ingredientes: ["500 g de garbanzos secos", "cebolla", "ajo", "perejil", "cilantro", "comino", "coriandro", "sal", "harina o harina de garbanzo"],
        pasos: [
            "Remoja los garbanzos secos durante varias horas.",
            "Escúrrelos muy bien.",
            "Tritúralos con cebolla, ajo, perejil y cilantro.",
            "Añade comino, coriandro y sal.",
            "Mezcla hasta obtener una masa moldeable.",
            "Refrigera la mezcla para que tome consistencia.",
            "Forma pequeñas bolas o discos.",
            "Cocínalos hasta que estén dorados y completamente hechos.",
            "Sirve con pan pita y verduras."
        ]
    },
    {
        id: 51,
        nombre: "Goulash húngaro 🇭🇺",
        categoria: "Comidas Extranjeras",
        tiempo: "1 hr 15 min",
        imagen: "https://files.catbox.moe/gin8ys.webp",
        ingredientes: ["500 g de carne de res", "2 cebollas", "paprika", "ajo", "tomate", "pimiento", "caldo", "aceite", "sal"],
        pasos: [
            "Corta la carne en cubos.",
            "Sofríe la cebolla.",
            "Retira brevemente del fuego y agrega paprika.",
            "Incorpora la carne y mezcla.",
            "Agrega ajo, tomate y pimiento.",
            "Añade caldo suficiente.",
            "Cocina a fuego bajo.",
            "Remueve ocasionalmente.",
            "Continúa hasta que la carne esté tierna.",
            "Ajusta la sal y sirve caliente."
        ]
    },
    {
        id: 52,
        nombre: "Moussaka griega 🇬🇷",
        categoria: "Comidas Extranjeras",
        tiempo: "1 hr",
        imagen: "https://files.catbox.moe/o9ztik.webp",
        ingredientes: ["berenjenas", "500 g de carne molida", "cebolla", "tomate", "canela", "papa", "leche", "mantequilla", "harina", "queso"],
        pasos: [
            "Corta las berenjenas en láminas.",
            "Cocina o asa las berenjenas.",
            "Corta y cocina las papas.",
            "Sofríe cebolla y agrega la carne.",
            "Añade tomate y una pequeña cantidad de canela.",
            "Cocina hasta obtener una salsa espesa.",
            "Prepara una bechamel con mantequilla, harina y leche.",
            "Coloca capas de papa, berenjena y carne.",
            "Cubre con bechamel y queso.",
            "Hornea hasta que la superficie esté dorada."
        ]
    },
    {
        id: 53,
        nombre: "Arroz frito con kimchi 🇰🇷",
        categoria: "Comidas Extranjeras",
        tiempo: "15 min",
        imagen: "https://files.catbox.moe/c88tdt.webp",
        ingredientes: ["3 tazas de arroz cocido frío", "1 taza de kimchi", "2 huevos", "cebolla china", "aceite de sésamo", "salsa de soya"],
        pasos: [
            "Corta el kimchi en trozos.",
            "Calienta una sartén o wok.",
            "Saltea el kimchi.",
            "Añade el arroz frío.",
            "Mezcla hasta que el arroz tome el sabor del kimchi.",
            "Agrega un poco de salsa de soya.",
            "Incorpora aceite de sésamo.",
            "Cocina un huevo aparte.",
            "Sirve el arroz con el huevo y cebolla china."
        ]
    },
    {
        id: 54,
        nombre: "Cuscús marroquí 🇲🇦",
        categoria: "Comidas Extranjeras",
        tiempo: "35 min",
        imagen: "https://files.catbox.moe/i4aow7.jpg",
        ingredientes: ["cuscús", "pollo", "garbanzos", "zanahoria", "calabacín", "cebolla", "caldo", "especias"],
        pasos: [
            "Corta las verduras y el pollo.",
            "Sofríe la cebolla.",
            "Agrega el pollo y dóralo.",
            "Incorpora zanahoria, calabacín y especias.",
            "Añade caldo y cocina hasta que las verduras estén tiernas.",
            "Incorpora los garbanzos.",
            "Prepara el cuscús con caldo caliente.",
            "Deja reposar hasta que absorba el líquido.",
            "Suelta el cuscús con un tenedor.",
            "Sirve acompañado del guiso."
        ]
    },
    {
        id: 55,
        nombre: "Schnitzel 🇩🇪",
        categoria: "Comidas Extranjeras",
        tiempo: "20 min",
        imagen: "https://files.catbox.moe/u3uv0j.png",
        ingredientes: ["4 filetes finos de cerdo o ternera", "harina", "2 huevos", "pan rallado", "sal", "pimienta", "aceite"],
        pasos: [
            "Coloca los filetes entre dos láminas y aplánalos cuidadosamente.",
            "Sazona con sal y pimienta.",
            "Prepara tres recipientes: uno con harina, otro con huevo batido y otro con pan rallado.",
            "Pasa cada filete por harina.",
            "Luego pásalo por huevo.",
            "Finalmente cúbrelo con pan rallado.",
            "Calienta suficiente aceite en una sartén.",
            "Cocina cada filete hasta que esté dorado y completamente cocido.",
            "Escurre sobre papel absorbente.",
            "Sirve inmediatamente, tradicionalmente con limón y acompañamiento de papa o ensalada."
        ]
    }
];

// --- LÓGICA DE LA APLICACIÓN ---
const recipesGrid = document.getElementById("recipes-grid");
const searchInput = document.getElementById("search-input");
const filterButtons = document.querySelectorAll(".filter-btn");

const modal = document.getElementById("recipe-modal");
const closeModalBtn = document.getElementById("close-modal");
const modalImg = document.getElementById("modal-img");
const modalCategory = document.getElementById("modal-category");
const modalTitle = document.getElementById("modal-title");
const modalTime = document.getElementById("modal-time");
const modalIngredients = document.getElementById("modal-ingredients");
const modalSteps = document.getElementById("modal-steps");

let categoriaActual = "Todas";
let favoritos = [];

function renderizarRecetas(lista) {
    if (!recipesGrid) return;

    if (lista.length === 0) {
        recipesGrid.innerHTML = `
            <div class="col-span-full text-center py-12 text-slate-400">
                <p class="text-4xl mb-2">🔍</p>
                <p class="text-lg">No se encontraron recetas.</p>
            </div>
        `;
        return;
    }

    recipesGrid.innerHTML = lista.map(receta => {
        const esFav = favoritos.includes(receta.id);
        return `
            <div class="recipe-card bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-amber-500 transition-all shadow-lg flex flex-col justify-between group">
                <div onclick="abrirModal(${receta.id})" class="cursor-pointer">
                    <div class="relative h-48 overflow-hidden">
                        <img src="${receta.imagen}" alt="${receta.nombre}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                        <span class="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-amber-400 text-xs px-2.5 py-1 rounded-full font-medium border border-slate-700">${receta.categoria}</span>
                        <button onclick="event.stopPropagation(); toggleFavorito(${receta.id})" class="absolute top-3 right-3 bg-slate-900/80 hover:bg-slate-900 p-2 rounded-full transition-colors text-sm">
                            ${esFav ? '❤️' : '🤍'}
                        </button>
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">${receta.nombre}</h3>
                        <p class="text-slate-400 text-sm mt-2 flex items-center gap-1">⏱️ ${receta.tiempo}</p>
                    </div>
                </div>
                <div class="p-4 pt-0">
                    <button onclick="abrirModal(${receta.id})" class="w-full bg-slate-700 hover:bg-amber-500 hover:text-slate-900 text-slate-200 py-2 rounded-lg font-semibold text-sm transition-all">Ver Receta</button>
                </div>
            </div>
        `;
    }).join('');
}

window.toggleFavorito = function(id) {
    if (favoritos.includes(id)) {
        favoritos = favoritos.filter(favId => favId !== id);
    } else {
        favoritos.push(id);
    }
    const favCount = document.getElementById("fav-count");
    if (favCount) favCount.textContent = favoritos.length;
    filtrar();
};

window.abrirModal = function(id) {
    const receta = recetas.find(r => r.id === id);
    if (!receta || !modal) return;

    modalImg.src = receta.imagen;
    modalCategory.textContent = receta.categoria;
    modalTitle.textContent = receta.nombre;
    modalTime.querySelector("span").textContent = receta.tiempo;

    detenerVoz();

    modalIngredients.innerHTML = receta.ingredientes.map(ing => `
        <li class="flex items-center gap-2 bg-slate-700/50 p-2 rounded-lg border border-slate-700/50">
            <span class="text-amber-400">•</span> ${ing}
        </li>
    `).join('');

    // AQUÍ INYECTAMOS LOS BOTONES DE AUDIO ANTES DE LOS PASOS
    modalSteps.innerHTML = `
        <div class="flex gap-2 mb-4">
            <button onclick="leerRecetaCompleta()" class="flex-1 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md text-sm cursor-pointer">
                 Escuchar Receta Completa
            </button>
            <button id="btn-detener-voz" onclick="detenerVoz()" class="bg-red-600/20 hover:bg-red-600/40 text-red-400 font-semibold py-2.5 px-4 rounded-xl border border-red-500/30 flex items-center justify-center gap-2 transition-all hidden text-sm cursor-pointer">
                ⏹️ Detener
            </button>
        </div>
    ` + receta.pasos.map((paso, index) => `
        <div class="flex gap-4 items-start">
            <span class="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-sm border border-amber-500/30">${index + 1}</span>
            <p class="text-slate-300 text-sm pt-1">${paso}</p>
        </div>
    `).join('');

    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
};

function cerrarModal() {
    if (!modal) return;
    detenerVoz();
    modal.classList.add("hidden");
    document.body.style.overflow = "auto";
}

if (closeModalBtn) closeModalBtn.addEventListener("click", cerrarModal);
if (modal) {
    modal.addEventListener("click", (e) => {
        if (e.target === modal) cerrarModal();
    });
}

function filtrar() {
    if (!searchInput) return;
    const busqueda = searchInput.value.toLowerCase().trim();

    const resultados = recetas.filter(receta => {
        const coincideCategoria = categoriaActual === "Todas" || receta.categoria === categoriaActual;
        const coincideBusqueda = receta.nombre.toLowerCase().includes(busqueda) || 
                                 receta.ingredientes.some(ing => ing.toLowerCase().includes(busqueda));
        return coincideCategoria && coincideBusqueda;
    });

    renderizarRecetas(resultados);
}

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        filterButtons.forEach(b => {
            b.classList.remove("active", "bg-amber-500", "text-slate-900", "font-semibold");
            b.classList.add("bg-slate-800", "text-slate-300");
        });

        btn.classList.add("active", "bg-amber-500", "text-slate-900", "font-semibold");
        btn.classList.remove("bg-slate-800", "text-slate-300");

        categoriaActual = btn.getAttribute("data-category");
        filtrar();
    });
});

if (searchInput) searchInput.addEventListener("input", filtrar);

// --- LÓGICA DE SÍNTESIS DE VOZ ---
function leerRecetaCompleta() {
    const titulo = document.getElementById("modal-title")?.textContent;
    const receta = recetas.find(r => r.nombre === titulo);

    if (!receta) return;

    window.speechSynthesis.cancel();

    let texto = `Receta de ${receta.nombre}. `;
    texto += `Tiempo estimado: ${receta.tiempo}. `;
    texto += "Ingredientes: ";
    receta.ingredientes.forEach(ing => { texto += `${ing}. `; });
    texto += "Preparación: ";
    receta.pasos.forEach((paso, index) => { texto += `Paso ${index + 1}: ${paso}. `; });

    const mensaje = new SpeechSynthesisUtterance(texto);
    mensaje.lang = 'es-ES';
    mensaje.rate = 0.9;

    const btnDetener = document.getElementById("btn-detener-voz");
    if (btnDetener) btnDetener.classList.remove("hidden");

    mensaje.onend = () => { if (btnDetener) btnDetener.classList.add("hidden"); };
    mensaje.onerror = () => { if (btnDetener) btnDetener.classList.add("hidden"); };

    window.speechSynthesis.speak(mensaje);
}

function detenerVoz() {
    if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
    }
    const btnDetener = document.getElementById("btn-detener-voz");
    if (btnDetener) btnDetener.classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
    renderizarRecetas(recetas);
});










// ==========================================
// LÓGICA DEL BOTÓN DE AUDIO / SÍNTESIS DE VOZ
// ==========================================

function leerRecetaCompleta() {
    // 1. Obtener el título de la receta activa en el modal
    const titulo = document.getElementById("modal-title")?.textContent;
    const receta = recetas.find(r => r.nombre === titulo);

    if (!receta) return;

    // 2. Detener cualquier audio que esté sonando previamente
    window.speechSynthesis.cancel();

    // 3. Armar el texto corrido de la receta
    let texto = `Receta de ${receta.nombre}. `;
    texto += `Tiempo estimado: ${receta.tiempo}. `;
    texto += "Ingredientes: ";
    receta.ingredientes.forEach(ing => { texto += `${ing}. `; });
    texto += "Preparación paso a paso: ";
    receta.pasos.forEach((paso, index) => { texto += `Paso ${index + 1}: ${paso}. `; });

    // 4. Configurar la voz
    const mensaje = new SpeechSynthesisUtterance(texto);
    mensaje.lang = 'es-ES';
    mensaje.rate = 0.9; // Velocidad de lectura

    const btnDetener = document.getElementById("btn-detener-voz");
    if (btnDetener) btnDetener.classList.remove("hidden");

    // 5. Ocultar el botón "Detener" al terminar o si hay error
    mensaje.onend = () => { if (btnDetener) btnDetener.classList.add("hidden"); };
    mensaje.onerror = () => { if (btnDetener) btnDetener.classList.add("hidden"); };

    // 6. Reproducir
    window.speechSynthesis.speak(mensaje);
}

function detenerVoz() {
    if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
    }
    const btnDetener = document.getElementById("btn-detener-voz");
    if (btnDetener) btnDetener.classList.add("hidden");
}

function cerrarModal() {
    if (!modal) return;
    detenerVoz(); // Detiene el audio al cerrar el cuadro de la receta
    modal.classList.add("hidden");
    document.body.style.overflow = "auto";
}

