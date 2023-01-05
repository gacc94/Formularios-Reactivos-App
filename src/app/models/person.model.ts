export interface Person {
    nombre      : string;
    favoritos   : Array<Favorito>;
}

export interface Favorito {
    id          : number;
    nombre      : string;
}