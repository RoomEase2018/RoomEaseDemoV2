import {
  SET_ALL_ACTIVE_TASKS,
  SET_ALL_ACTIVE_RECURRING_TASKS,
  SET_ALL_VISIBLE_NOTES,
  SET_ALL_ACTIVE_GOALS,
  PUSH_SUCCESS_QUERY_ARRAY,
  SET_ALL_COMPLETED_TASKS,
  SET_SORTED_TASKS,
  UPDATE_SORTED_TASKS,
  INSERT_INTO_SORTED_TASK
} from "./Actions/actions";

const defaultState = {
  tasks: [],
  recurringTasks: [],
  sortedTasks: [],
  completedTasks: [],
  notes: [],
  goals: [],
  successQueries: {}
};

const sortTasks = arr => {
  let tasksArray = [...arr];

  tasksArray.sort((a, b) => {
    return new Date(a.due_date) - new Date(b.due_date);
  })
  return tasksArray;
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case INSERT_INTO_SORTED_TASK:
      const newSortedTasks = sortTasks([...state.sortedTasks, action.task]);
      return {...state,
        sortedTasks: newSortedTasks
      }

    case SET_ALL_ACTIVE_TASKS:
      return {...state,
        tasks: action.tasks
      }

    case SET_ALL_ACTIVE_RECURRING_TASKS:
      return {...state,
        recurringTasks: action.tasks
      }

    case SET_ALL_VISIBLE_NOTES:
      return {...state,
        notes: action.notes
      }

    case SET_ALL_ACTIVE_GOALS:
      return {...state,
        goals: action.goals
      }

    case SET_ALL_COMPLETED_TASKS:
      return {...state,
        completedTasks: action.tasks
      }

    case UPDATE_SORTED_TASKS:
     const newArr = [...state.sortedTasks];
     let completed = newArr.splice(action.index, 1);
      return {
        ...state,
        sortedTasks: newArr,
        completedTasks: [completed, ...state.completedTasks]
      }

    case PUSH_SUCCESS_QUERY_ARRAY:
      return {...state,
        successQueries: {...state.successQueries,
          [action.query]: 'success'
        }
      }

    case SET_SORTED_TASKS:
      return {...state,
        sortedTasks: action.tasks
      }

    default:
      return defaultState;
  }
};
