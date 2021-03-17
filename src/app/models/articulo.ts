export interface Articulo {
    id?: string;
    titulo?: string;
    extracto?: string;
    contenido?: string;
    tiempo?: string;
    fecha?: string;
    foto?: string;
    autor?: string;
    idAutor?:string;
    perfil?: string;
    categoria?: string;
}

export interface Autor{
    id?:string;
    nombre?:string;
    descripcion?:string;
    url?:string;
}

