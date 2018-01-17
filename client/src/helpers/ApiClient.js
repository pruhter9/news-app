import superagent from 'superagent';

const methods = ['get', 'post', 'put', 'patch', 'del'];

function formatUrl(path) {
  const adjustedPath = path[0] !== '/' ? `/${path}` : path;
  return '/api' + adjustedPath;
}

class _ApiClient {
  constructor(req) {
    methods.forEach((method) => {
      this[method] = (path, { params, data, attach, field } = {}) => new Promise((resolve, reject) => {
        const request = superagent[method](formatUrl(path));

        if (params) request.query(params);

        if (data) request.send(data);

        if (attach) {
          attach.forEach(item => request.attach(item.key, item.value, item.name));
        }

        if (field) {
          field.forEach(item => request.field(item.key, item.value));
        }

        request.end((err, { body } = {}) => err ? reject(body || err) : resolve(body));
      })
    })
  }
}

const ApiClient = _ApiClient;

export default ApiClient;
