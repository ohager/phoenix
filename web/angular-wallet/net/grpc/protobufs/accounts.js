/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.Accounts');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.Account');


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Accounts = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Accounts.repeatedFields_, null);
};
goog.inherits(proto.Accounts, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Accounts.displayName = 'proto.Accounts';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Accounts.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Accounts.prototype.toObject = function(opt_includeInstance) {
  return proto.Accounts.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Accounts} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Accounts.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountidsList: jspb.Message.getRepeatedField(msg, 1),
    accountsList: jspb.Message.toObjectList(msg.getAccountsList(),
    proto.Account.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Accounts}
 */
proto.Accounts.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Accounts;
  return proto.Accounts.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Accounts} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Accounts}
 */
proto.Accounts.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint64());
      msg.setAccountidsList(value);
      break;
    case 2:
      var value = new proto.Account;
      reader.readMessage(value,proto.Account.deserializeBinaryFromReader);
      msg.addAccounts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Accounts.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Accounts.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Accounts} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Accounts.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountidsList();
  if (f.length > 0) {
    writer.writePackedUint64(
      1,
      f
    );
  }
  f = message.getAccountsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.Account.serializeBinaryToWriter
    );
  }
};


/**
 * repeated uint64 accountIDs = 1;
 * @return {!Array<number>}
 */
proto.Accounts.prototype.getAccountidsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<number>} value */
proto.Accounts.prototype.setAccountidsList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.Accounts.prototype.addAccountids = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.Accounts.prototype.clearAccountidsList = function() {
  this.setAccountidsList([]);
};


/**
 * repeated Account accounts = 2;
 * @return {!Array<!proto.Account>}
 */
proto.Accounts.prototype.getAccountsList = function() {
  return /** @type{!Array<!proto.Account>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Account, 2));
};


/** @param {!Array<!proto.Account>} value */
proto.Accounts.prototype.setAccountsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.Account=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Account}
 */
proto.Accounts.prototype.addAccounts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.Account, opt_index);
};


proto.Accounts.prototype.clearAccountsList = function() {
  this.setAccountsList([]);
};

