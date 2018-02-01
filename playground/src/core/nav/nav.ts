interface SubNav {
    title: string;
    slugName: string;
    icon: string;
}
export interface Navs extends SubNav {
     _id: string;
     title: string;
     slugName: string;
     icon: string;
     open: boolean;
     sub: boolean;
     subitems: SubNav[];
}
