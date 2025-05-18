import type {
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
  QuerySnapshot,
} from "firebase-admin/firestore";
import { db } from "../database/firebase";
import { randomUUIDv7 } from "bun";
import type { ibook } from "../interfaces/book.interfaces";

export default class BookModel {
  createBook = async (newBookData: object): Promise<void> => {
    await db.collection("books").add({
      ...newBookData,
      bookID: randomUUIDv7(),
    });
  };

  listBooks = async (): Promise<object> => {
    const docSnapshot: QuerySnapshot<DocumentData> = await db
      .collection("books")
      .get();
    const docData: DocumentData = docSnapshot.docs.map((doc) => doc.data());
    return docData;
  };

  deleteBookById = async (bookDocId: string): Promise<boolean> => {
    const docRef: DocumentReference<DocumentData> = db
      .collection("books")
      .doc(bookDocId);
    const doc: DocumentSnapshot<DocumentData> = await docRef.get();

    if (!doc.exists) {
      return false;
    }

    return true;
    await docRef.delete();
  };

  updateBookById = async (updatedData: ibook): Promise<boolean> => {
    const docRef: DocumentReference<DocumentData> = db
      .collection("books")
      .doc(updatedData.documentID!);

    const doc: DocumentSnapshot<DocumentData> = await docRef.get();

    if (!doc.exists) {
      return false;
    }

    await docRef.update({ ...updatedData });
    return true;
  };
}
