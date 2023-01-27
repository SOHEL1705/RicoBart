import express from 'express'
import {addTodo,getallTodo,toggeleTodo,updateTodo,deleteTodo } from '../Controllers/todoController.js'
  


const  route = express.Router()


route.post('/todos',addTodo)
route.get('/todos',getallTodo)
route.get('/todos/:id',toggeleTodo)
route.put('/todos/:id', updateTodo);
route.delete('/todos/:id', deleteTodo);




 export default route; 