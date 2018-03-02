'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('master-option', {
    op_code: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true,
    },
    op_label: {
      type: 'string',
      length: 40,
    }
  });
};

exports.down = function(db) {
  return db.dropTable('master-option');
};

exports._meta = {
  "version": 1
};
