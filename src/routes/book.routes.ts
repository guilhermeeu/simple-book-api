import { Router } from "express";
import BookController from "../controllers/book.controller";
class Routes {
  router: Router = Router();
  bookController = new BookController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes = (): void => {
    this.router.route("/").post(this.bookController.store);
    this.router.route("/").get(this.bookController.index);
    this.router.route("/delete").delete(this.bookController.delete);
    this.router.route("/update").put(this.bookController.update);
  };
}

export default new Routes().router;
