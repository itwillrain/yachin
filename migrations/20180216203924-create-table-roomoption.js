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
  return db.createTable('room-option', {
    house_id: {
      type: 'int',
      unsigned: true,
    },
    room_id: {
      type: 'int',
      unsigned: true,
    },
    op_code: {
      type: 'int',
    }
  });
};

exports.down = function(db) {
  return db.dropTable('room-option');
};

exports._meta = {
  "version": 1
};
