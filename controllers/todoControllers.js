// import TODOLIST from "../models/todolist.model.js";
// import csvParser from "csv-parser";
// import fs from "fs";
// import { createObjectCsvWriter } from "csv-writer";

// export const gettodos = async (req, res) => {
//   try {
//     const todos = await TODOLIST.find({});
//     res.status(200).json(todos);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export const getTodoById = async (req, res) => {
//   try {
//     const todo = await TODOLIST.findById(req.params.id);
//     res.status(200).json(todo);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export const createTodo = async (req, res) => {
//   try {
//     const { description, status } = req.body;
//     const newTODO = new TODOLIST({
//       description,
//       status,
//     });
//     const savedTodo = await newTODO.save();
//     res.status(201).json(savedTodo);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export const updateTodo = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const updatedtodo = await TODOLIST.findByIdAndUpdate(id, req.body, {
//       new: true,
//     });

//     if (!updatedtodo) {
//       return res.status(404).json({ message: "book not found" });
//     }

//     res.status(200).json(updatedtodo);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export const deleteTodo = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const deletetodo = await TODOLIST.findByIdAndDelete(id);

//     if (!deletetodo) {
//       return res.status(404).json({ message: "book not found" });
//     }

//     res.status(200).json({ message: "book deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export const filterTodos = async (req, res) => {
//     try {
//       const status = req.query.status;
//       const todos = await TODOLIST.find({ status });
//       res.status(200).json(todos);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   };


//   export const uploadTodos = async (req, res) => {
//     try {
//       const filePath = req.file.path;
//       const todos = [];
  
//       fs.createReadStream(filePath)
//         .pipe(csvParser())
//         .on('data', (row) => {
//           todos.push({
//             description: row.description,
//             status: row.status,
//           });
//         })
//         .on('end', async () => {
//           try {
//             await TODOLIST.insertMany(todos);
//             res.status(201).json({ message: "Todos uploaded successfully" });
//           } catch (error) {
//             res.status(500).json({ message: error.message });
//           } finally {
//             fs.unlinkSync(filePath); 
//           }
//         });
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   };
  
//   export const downloadTodos = async (req, res) => {
//     try {
//       const todos = await TODOLIST.find({}).lean();
  
//       const csvWriter = createObjectCsvWriter({
//         path: 'todos.csv',
//         header: [
//           { id: 'description', title: 'Description' },
//           { id: 'status', title: 'Status' }
//         ]
//       });
  
//       await csvWriter.writeRecords(todos);
  
//       res.download('todos.csv', 'todos.csv', (err) => {
//         if (err) {
//           res.status(500).json({ message: err.message });
//         }
//         fs.unlinkSync('todos.csv'); 
//       });
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   };



import TODOLIST from "../models/todolist.model.js";
import csvParser from "csv-parser";
import fs from "fs";
import { createObjectCsvWriter } from "csv-writer";

export const gettodos = async (req, res) => {
  try {
    const todos = await TODOLIST.find({});
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTodoById = async (req, res) => {
  try {
    const todo = await TODOLIST.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTodo = async (req, res) => {
  try {
    const { description, status } = req.body;
    const newTODO = new TODOLIST({ description, status });
    const savedTodo = await newTODO.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const updatedTodo = await TODOLIST.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const deletedTodo = await TODOLIST.findByIdAndDelete(req.params.id);
    if (!deletedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const filterTodos = async (req, res) => {
  try {
    const todos = await TODOLIST.find({ status: req.query.status });
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const uploadTodos = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const filePath = req.file.path;
    console.log("File uploaded to:", filePath);

    const todos = [];

    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on('data', (row) => {
        todos.push({
          description: row.description,
          status: row.status,
        });
      })
      .on('end', async () => {
        try {
          await TODOLIST.insertMany(todos);
          res.status(201).json({ message: "Todos uploaded successfully" });
        } catch (error) {
          res.status(500).json({ message: error.message });
        } finally {
          fs.unlinkSync(filePath); 
        }
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



export const downloadTodos = async (req, res) => {
  try {
    const todos = await TODOLIST.find({}).lean();
  
    const csvWriter = createObjectCsvWriter({
      path: 'todos.csv',
      header: [
        { id: 'description', title: 'Description' },
        { id: 'status', title: 'Status' }
      ]
    });
  
    await csvWriter.writeRecords(todos);
  
    res.download('todos.csv', 'todos.csv', (err) => {
      if (err) {
        res.status(500).json({ message: err.message });
      }
      fs.unlinkSync('todos.csv');
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
