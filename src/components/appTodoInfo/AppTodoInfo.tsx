import React from 'react';

// const AppTodoInfo = () => {
//   return (
//     <div>
//       <div className="App_todo-info">
//           <h2>Selected Todo:</h2>
//           {selectedTodo === null ? (
//             <span className="empty-state">No Todo Selected</span>
//           ) : !isEditMode ? (
//             <>
//               <span
//                 className={`todo-desc ${
//                   selectedTodo?.isComplete ? "done" : ""
//                 }`}
//               >
//                 {selectedTodo.desc}
//               </span>
//               <div className="todo-actions">
//                 <button onClick={handleEdit}>Edit</button>
//                 <button onClick={handleToggle}>Toggle</button>
//                 <button onClick={handleDelete}>Delete</button>
//               </div>
//             </>
//           ) : (
//             <form onSubmit={handleUpdate}>
//               <label htmlFor="edit-todo">Edit:</label>
//               <input
//                 ref={editInput}
//                 onChange={handleEditInputChange}
//                 value={editTodoInput}
//               />
//               <button type="submit">Update</button>
//               <button onClick={handleCancelUpdate}>Cancel</button>
//             </form>
//           )}
//         </div>
      
//     </div>
//   )
// }

// export default AppTodoInfo
