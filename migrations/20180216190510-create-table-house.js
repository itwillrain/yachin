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
  return db.createTable('house', {
    house_id: {
      type: 'int',
      unsigned: true,
      primaryKey: true,
      autoIncrement: true,
    },
    house_name: {
      type: 'string',
      length: 100,
      notNull: true,
    },
    address1: {
      type: 'string',
      length: 30,
      notNull: true,
    },
    address2: {
      type: 'string',
      length: 255,
      notNull: true,
    },
    address3: {
      type: 'string',
      length: 255,
      notNull: true,
    },
  });
};

exports.down = function(db) {
  return db.dropTable('house');
};

exports._meta = {
  "version": 1
};
