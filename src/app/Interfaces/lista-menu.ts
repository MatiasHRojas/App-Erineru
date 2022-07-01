export interface ListaMenu {
    title: String;
    url: String;
    icon: String;
}

export let lista:Array<ListaMenu> = [
    { title: 'Mis Listas',          url: '/No_Disponible',             icon: 'list_alt' },
    { title: 'Horarios & Lugares',  url: '/Horarios_y_Lugares', icon: 'routine' },
    { title: 'Estadísticas',        url: '/Estadisticas',       icon: 'insights' },

    { title: 'Canjear Puntos',      url: '/Canjear_Puntos',     icon: 'magic_button' },
    //{ title: 'Apariencia',          url: '/Apariencia',         icon: 'format_paint' },
    { title: 'Widgets',             url: '/Widgets',            icon: 'widgets' },
    { title: 'Preferencias',        url: '/Preferencias',       icon: 'settings' },

    { title: 'Comentarios',         url: '/Comentarios',        icon: 'forum' },
    { title: 'Acerca de Erineru',   url: '/Acerca_de_Erineru',  icon: 'info' },
];