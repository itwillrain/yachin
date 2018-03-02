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
  return db.createTable('room', {
    room_id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true,
      unsigned: true,
    },
    house_id: {
      type: 'int',
      unsigned: true,
    },
    room_label: {
      type: 'string',
      length: 10,
    },
    price: {
      type: 'int',
    },
    room_size: {
      type: 'int',
    },
    layout: {
      type: 'string',
      length: 10,
    },
  });
};

exports.down = function(db) {
  return db.dropTable('room');
};

exports._meta = {
  "version": 1
};
