interface Paper {
  name: string;
  authors: string[];
  date: Date;
  publication: string;
  fileName: string;
  doi?: string;
}

const papers: Paper[] = [
  {
    name: "Where the patterns are: repetition-aware compression for colored de Bruijn graphs",
    authors: ["Alessio Campanelli", "Giulio Ermanno Pibiri", "Jason Fan", "Rob Patro"],
    date: new Date(2024, 10),
    publication: "Journal of Computational Biology",
    fileName: "JCB2024",
    doi: "10.1089/cmb.2024.0714"
  },
]

export type {Paper}
export {papers}