import * as api from "../../../API/roomeaseAPI";

export const SET_ALL_ACTIVE_TASKS = "SET_ALL_ACTIVE_TASKS"
export const SET_ALL_ACTIVE_RECURRING_TASKS = "SET_ALL_ACTIVE_RECURRING_TASKS"
export const SET_ALL_VISIBLE_NOTES = "SET_ALL_VISIBLE_NOTES"
export const SET_ALL_ACTIVE_GOALS = "SET_ALL_ACTIVE_GOALS"
export const PUSH_SUCCESS_QUERY_ARRAY = "PUSH_SUCCESS_QUERY_ARRAY"
export const SET_ALL_COMPLETED_TASKS = "SET_ALL_COMPLETED_TASKS"
export const UPDATE_SORTED_TASKS = "UPDATE_SORTED_TASKS"
export const SET_SORTED_TASKS = "SET_SORTED_TASKS"


// helper functions
const getRecurringDate = (type, day) => {
  let date = new Date();
  
  switch (type) {
    case 'day':
      date.setHours(0, 0, 0, 0);
      return date;
    case 'week':
      date.setDate(date.getDate() + (day + (7 - date.getDay())) % 7);
      return date;
    case 'month':
      if (date.getDate() > day) {
        return new Date(date.getFullYear(), date.getMonth() + 1, day);
      }

      let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

      if (lastDay.getDate() < day) {
        return lastDay;
      }
      else {
        date.setDate(day);
        return date;
      }
  }
}

const addDueDateToRecurring = arr => {
  let array = [];
  arr.forEach(el => {
    array.push({...el, due_date: getRecurringDate(el.due_date_type, el.due_date)});
  })
  return array;
}

// action creators
const setAllCompletedTasks = tasks => {
  return {
    type: SET_ALL_COMPLETED_TASKS,
    tasks
  }
}

const setAllActiveTasks = tasks => {
  return {
    type: SET_ALL_ACTIVE_TASKS,
    tasks
  };
};

const setAllActiveRecurringTasks = tasks => {
  return {
    type: SET_ALL_ACTIVE_RECURRING_TASKS,
    tasks
  };
};

const setAllVisibleNotes = notes => {
  return {
    type: SET_ALL_VISIBLE_NOTES,
    notes
  };
};

const setAllActiveGoals = goals => {
  return {
    type: SET_ALL_ACTIVE_GOALS,
    goals
  };
};

export const pushSuccessQueryArray = query => {
  return {
    type: PUSH_SUCCESS_QUERY_ARRAY,
    query
  }
}

export const setSortedTasks = (tasks) => {
  return {
    type: SET_SORTED_TASKS,
    tasks
  }
}

export const updateSortedTasks = (index) => {
  return {
    type: UPDATE_SORTED_TASKS,
    index
  }
}



 
// thunk functions
export const fetchAllActiveTasks = aptid => dispatch => {
  return api.fetchAllActiveApartmentTasks(aptid).then(tasks => {
    dispatch(setAllActiveTasks(tasks.data.data));
    dispatch(pushSuccessQueryArray(['fetchAllActiveTasks']));
  });
};

export const fetchAllActiveRecurringTasks = aptid => dispatch => {
  return api.fetchAllApartmentActiveRecurringTasks(aptid).then(tasks => {
    let arr = addDueDateToRecurring(tasks.data.data);
    dispatch(setAllActiveRecurringTasks(arr));
    dispatch(pushSuccessQueryArray('fetchAllActiveRecurringTasks'));
  });
};

export const fetchAllVisibleNotes = aptid => dispatch => {
  return api.fetchAllApartmentVisibleNotes(aptid).then(notes => {
    dispatch(setAllVisibleNotes(notes.data.data));
    dispatch(pushSuccessQueryArray('fetchAllVisibleNotes'));
  });
};

export const fetchAllApartmentGoals = aptid => dispatch => {
  return api.fetchAllApartmentActiveGoals(aptid).then(goals => {
    dispatch(setAllActiveGoals(goals.data.data));
    dispatch(pushSuccessQueryArray('fetchAllApartmentGoals'));
  });
};

export const fetchAllCompletedTasks = aptid => dispatch => {
  return api.fetchAllCompletedApartmentTasks(aptid).then(tasks => {
    dispatch(setAllCompletedTasks(tasks.data.data));
    dispatch(pushSuccessQueryArray('fetchAllCompletedTasks'));
  });
};

