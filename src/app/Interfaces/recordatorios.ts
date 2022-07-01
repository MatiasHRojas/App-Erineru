export interface Fecha {
    dia: string;
    mes: string;
    year: string;
    hora: string;
    minuto: string;
}

export interface Recordatorio {
    id: number;
    asunto: string;
    descripcion: string;
    fecha: Fecha;
    lugar: string;
    prioridad: string;
}

export interface Idea {
    id: number;
    titulo: string;
    descripcion: string;
}

export interface AyudaMemoria {
    id: number;
    objetivo: string;
    clave: string
    dato: string;
    complemento: string;
    pregunta: string;
    respuesta: string;
}

export interface NotaRapida {
    id: number;
    asunto: string;
    descr: string;
}

export interface General {
    tipo: string;
    obj: any;
}

export let listaGeneral:Array<any> = [

]

export let Recordatorios:Array<Recordatorio> = [
    {   id: 1,
        asunto: 'Asunto del Recordatorio',
        descripcion: 'Descripción del recordatoriou',
        fecha:{dia:'18', mes:'06', year:'2022', hora:'22', minuto:'00'},
        lugar: '',
        prioridad: '',
    },
    {   id: 2,
        asunto: 'Asunto del Recordatorio',
        descripcion: 'Descripción del recordatoriou',
        fecha:{dia:'18', mes:'06', year:'2022', hora:'22', minuto:'00'},
        lugar: 'Casa',
        prioridad: 'Alta',
    },
    {   id: 3,
        asunto: 'Asunto del Recordatorio más largooooooooooo',
        descripcion: 'Descripción del recordatoriou',
        fecha:{dia:'18', mes:'06', year:'2022', hora:'22', minuto:'00'},
        lugar: 'Trabajo',
        prioridad: '',
    },
    {   id: 4,
        asunto: 'Asunto del Recordatorio',
        descripcion: 'Descripción del recordatoriou',
        fecha:{dia:'12', mes:'11', year:'2022', hora:'22', minuto:'00'},
        lugar: 'Parque',
        prioridad: 'Baja',
    },
]

export let Ideas:Array<Idea> = [
    {   id: 1,
        titulo: 'Idea n° 1',
        descripcion: 'Esta es la descripción de la idea número 1'
    },
    {   id: 2,
        titulo: 'Acá va la idea n° 2',
        descripcion: 'Descripción idea número 2'
    },
    {   id: 3,
        titulo: 'Esta es la idea número 3',
        descripcion: 'Esta sería la descripción de la idea n°3'
    },
]

export let Ayudas:Array<AyudaMemoria> = [
    {   id: 1,
        objetivo: 'Mamá',
        clave: 'quiere',
        dato: 'un celular nuevo',
        complemento: 'para navidad',
        pregunta: '¿Qué quiere mamá para navidad?',
        respuesta: 'Un celular nuevo'
    },
]

export let Notas:Array<NotaRapida> = [
    {   id: 1, 
        asunto:'Nota rápida n°1',
        descr:'Descripciónnnnnnnnnnnnn',
    },
    {   id: 2,
        asunto:'Esta es la nota n°2',
        descr:'Descripciónnnnnnnnnnnnn',
    },
    {   id: 3,
        asunto:'Nota número 3',
        descr:'Descripciónnnnnnnnnnnnn',
    },
    {   id: 4,
        asunto:'Asunto de la nota rápida n°4',
        descr:'Descripciónnnnnnnnnnnnn',
    },
]