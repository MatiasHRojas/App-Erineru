export interface Horario {
    id:number;
    nombre: string;
    variantes: string;
    descripcion: string;
    hora: string;
}

export interface Lugar {
    id:number;
    nombre: string;
    variantes: string;
    direccion: string;
}

export let listaHorarios:Array<Horario> = [
    {   id:1,
        nombre: 'Todo el día',
        variantes: '',
        descripcion: 'Inicio y fin del día.',
        hora: '08:00 - 22:00'
    },
    {   id:2,
        nombre: 'Despertar',
        variantes: '',
        descripcion: 'Hora preferida para despertar.',
        hora: '07:00'
    },
    {   id:3,
        nombre: 'Ir a dormir',
        variantes: '',
        descripcion: 'Hora preferida para ir a dormir.',
        hora: '23:00'
    },
    {   id:4,
        nombre: 'Amanecer',
        variantes: '',
        descripcion: 'Hora predeterminada del amanecer.',
        hora: '07:00'
    },
    {   id:5,
        nombre: 'Anochecer',
        variantes: '',
        descripcion: 'Hora predeterminada del anochecer.',
        hora: '18:00'
    },
    {   id:6,
        nombre: 'Inventado',
        variantes: '',
        descripcion: 'Horario inventado.',
        hora: '18:00 - 22:00'
    },
];

export let listaLugares:Array<Lugar> = [
    {   id:1,
        nombre:'Casa',
        variantes:'',
        direccion:'Calle 000, Comuna, Ciudad, Pais',
    },
    {   id:2,
        nombre:'Trabajo',
        variantes:'',
        direccion:'Calle 000, Comuna, Ciudad, Pais',
    },
    {   id:3,
        nombre:'Parque',
        variantes:'',
        direccion:'Palta',
    },
]