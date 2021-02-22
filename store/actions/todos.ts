export const TD_TYPES = {
  CREATE_TODO: 'CREATE_TODO',
  CREATE_ERROR: 'CREATE_ERROR',
  GET_ALL: 'GET_ALL',
  DELETE_TODO: 'DELETE_TODO',
  GET_ONE: 'GET_ONE',
  UPDATE_TODO: 'UPDATE_TODO',
};

export const create = (values) => {
  return {
    type: TD_TYPES.CREATE_TODO,
    payload: values,
  };
};

export const returnErrors = () => {
  return {
    type: TD_TYPES.CREATE_ERROR,
  };
};

export const getAll = () => {
  return {
    type: TD_TYPES.GET_ALL,
    payload: true,
  };
};

export const deleteOne = (title) => {
  const data = { title };
  return {
    type: TD_TYPES.DELETE_TODO,
    payload: data,
  };
};

export const getOne = (title) => {
  const data = { title };
  return {
    type: TD_TYPES.GET_ONE,
    payload: data,
  };
};

export const updateOne = (title, values) => {
  const data = {
    title,
    values,
  };
  return {
    type: TD_TYPES.UPDATE_TODO,
    payload: data,
  };
};
