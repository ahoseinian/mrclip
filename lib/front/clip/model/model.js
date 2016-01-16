var _ = require('lodash');

function Clip(data) {
  if (!(this instanceof Clip)) return new Clip(data);
  _.assign(this, data);
}

module.exports = Clip;
