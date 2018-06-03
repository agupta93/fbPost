import request from 'superagent';
import _property from 'lodash/property';

const BASE_PATH = 'http://localhost:3010';

const getRequestPath = path => `${BASE_PATH}${path}`;

const REQUEST = {
  get: path => {
    const requestPath = getRequestPath(path);
    return request.get(requestPath)
      .then(_property('body'));
  }
}

export default REQUEST;