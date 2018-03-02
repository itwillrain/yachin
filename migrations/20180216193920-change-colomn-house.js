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
  return Promise.all([
    db.changeColumn('house', 'house_name', {
      type: 'string',
      length: 100,
      notNull: true,
    }),
    db.changeColumn('house', 'address1', {
      type: 'string',
      length: 30,
      notNull: true,
    }),
    db.changeColumn('house', 'address2', {
      type: 'string',
      length: 255,
      notNull: true,
    }),
    db.changeColumn('house', 'address3', {
      type: 'string',
      length: 255,
      notNull: true,
    }),
  ]);
};

exports.down = function(db) {
  return Promise.all([
    db.changeColumn('house', 'house_name', {
      type: 'char',
      length: 100,
      notNull: true,
    }),
    db.changeColumn('house', 'address1', {
      type: 'char',
      length: 30,
      notNull: true,
    }),
    db.changeColumn('house', 'address2', {
      type: 'char',
      length: 255,
      notNull: true,
    }),
    db.changeColumn('house', 'address3', {
      type: 'char',
      length: 255,
      notNull: true,
    }),
  ]);
};

exports._meta = {
  "version": 1
};
