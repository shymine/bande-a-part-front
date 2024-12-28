import { Author } from "./author"; 
import { Editor } from "./editor";
import { Genre } from "./genre";

export class Book {
    constructor(
        public name    : string,
        public parution: Date,
        public price   : number,
        public synopsis: string,
        public ISBN    : number,
        public stock   : number,
        public new_book: boolean,
        public note    : string,

        public authors : Author[],
        public editor  : Editor,
        public genres  : Genre[],
    ) {}
}