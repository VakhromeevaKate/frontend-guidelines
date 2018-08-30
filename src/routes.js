const host = '';

export default {
  tasksUrl: () => [host, 'guides'].join('/'), // get guides list
  taskUrl: id => [host, 'guides', id].join('/'),
};
