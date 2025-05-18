import type { genres } from "../types/book.types";

export interface ibook {
  title: string;
  author: string;
  sinopsis: string;
  note?: string;
  genre: genres;
  price: number;
  rating: number;
  documentID?: string;
}
