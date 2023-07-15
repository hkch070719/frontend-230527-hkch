console.log("Intersaction");


type Programer = {favoriteLanguage: string};
const programer: Programer = {favoriteLanguage:'TypeScript'};

type DissertLover = {favoritDissert:string};
const dissertLover: DissertLover = {favoritDissert:'cheeseCake'};

type DissertLoverProgramer = {
    favoriteLanguage:string;
    favoritDissert:string;
};
const seingAh :DissertLoverProgramer= {
    favoriteLanguage:'TypeScript',
    favoritDissert:'cheeseCake'
}

type DissertLoverProgramer2 = Programer & DissertLover;

type notAble =string  & number;

type Awsome
=Programer
&DissertLover