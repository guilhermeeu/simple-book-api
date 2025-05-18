import type { Request, Response } from "express";
import type { ibook, ideleteBook } from "../interfaces/book.interfaces";
import BookModel from "../models/book.model";
import { deleteBookSchema } from "../schemas/book.schemas";
import { ZodError } from "zod";
export default class BookController {
  bookModel = new BookModel();

  store = async (request: Request, response: Response): Promise<void> => {
    const newBookData: ibook = request.body;

    if (!newBookData.title || !newBookData.author || !newBookData.genre) {
      response.status(400).json({ message: "Missing required book fields" });
      return;
    }

    try {
      await this.bookModel.createBook(newBookData);
      response.status(201).json({ message: "Data sent successfully!" });
    } catch (error) {
      response
        .status(500)
        .json({ message: "Possible database error occurred", error });
    }
  };
  index = async (request: Request, response: Response): Promise<void> => {
    const books = (await this.bookModel.listBooks()) as ibook[];
    response.json(books.length > 0 ? books : { message: "No books added" });
  };

  delete = async (request: Request, response: Response): Promise<void> => {
    try {
      const { bookDocId }: ideleteBook = request.body;

      if (typeof bookDocId != "string") {
        response.status(203).json({
          message: "INVALID ID",
        });
      }

      const wasDeleted = await this.bookModel.deleteBookById(bookDocId);
      response.status(200).json({
        message: wasDeleted
          ? "successfully deleted"
          : "The book has already been deleted or the id is invalid",
      });
    } catch (error) {
      response.status(500).json({
        message: "Possible database error occurred",
        error,
      });
    }
  };
  update = async (request: Request, response: Response): Promise<void> => {
    const updatedData: ibook = request.body;
    if (updatedData.documentID == undefined) {
      response.status(400).json({
        message: "The document id parameter is missing to edit a document",
      });
    } else {
      const wasUpdated: boolean = await this.bookModel.updateBookById(
        updatedData
      );

      response.status(200).json({
        message: wasUpdated
          ? "Data has been updated successfully"
          : "The document ID may not exist, or may be incorrect.",
      });
    }
  };
}
