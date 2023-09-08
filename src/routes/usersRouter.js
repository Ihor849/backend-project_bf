const express = require("express");
const usersController = require("../controllers/UsersController")
const usersRouter = require("express").Router();





usersRouter.post("/users", (req, res, next)=>{
  console.log('Отработал joi');
  next();
},usersController.add)


usersRouter.get("/users", usersController.getAll)

usersRouter.get("/users/:id", usersController.getOne)

usersRouter.put("/users/:id", usersController.update)

usersRouter.delete("/users/:id", usersController.remove)

module.exports = usersRouter;
