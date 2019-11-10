export interface BookStore {
    numFound: number;
    num_found: number;
    start: number;
    docs: Book[];
}

export interface Book {
    key: string;
    title: string;
    author_name: string[];
    publish_date: string[];
}