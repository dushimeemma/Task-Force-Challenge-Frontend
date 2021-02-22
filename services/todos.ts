import firebase from './firebase';

const db = firebase.firestore();

const date = new Date().getUTCFullYear();

export const createTask = (values) => {
  try {
    return db
      .collection('todos')
      .doc(values.title)
      .set({
        ...values,
        createdAt: date,
        updatedAt: date,
      });
  } catch (error) {
    return error;
  }
};

export const getTasks = async () => {
  try {
    const todos = [];
    const todoRef = db.collection('todos');
    const snapshot = await todoRef.get();
    snapshot.forEach((doc) => {
      todos.push(doc.data());
    });
    return todos;
  } catch (error) {
    return error;
  }
};

export const deleteTodo = async (title) => {
  try {
    const res = await db.collection('todos').doc(title).delete();
    return res;
  } catch (error) {
    return error;
  }
};

export const getSingleTodo = async (title) => {
  try {
    const dbRef = db.collection('todos').doc(title);
    const doc = await dbRef.get();
    return doc.data();
  } catch (error) {
    return error;
  }
};

export const updateTodo = async (title, values) => {
  try {
    const dbRef = db.collection('todos').doc(title);
    const res = await dbRef.update({
      ...values,
      createdAt: date,
      updatedAt: date,
    });
    return res;
  } catch (error) {
    return error;
  }
};
