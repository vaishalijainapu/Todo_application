const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [], // Load tasks from local storage if available
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const updatedTasksAdd = [...state.tasks, action.payload];
      localStorage.setItem("tasks", JSON.stringify(updatedTasksAdd)); // Save tasks to local storage after adding
      return {
        ...state,
        tasks: updatedTasksAdd,
      };
    case "DELETE_TASK":
      const updatedTasksDelete = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasksDelete)); // Save tasks to local storage after deleting
      return {
        ...state,
        tasks: updatedTasksDelete,
      };
    default:
      return state;
  }
};

export default reducer;
