import UserModel from "./models/UserModel.js";
import UserView from "./views/UserView.js";
import UserController from "./controllers/UserController.js";

const userModel = new UserModel();
const userView = new UserView();
const userController = new UserController(userModel, userView);
userController.init();