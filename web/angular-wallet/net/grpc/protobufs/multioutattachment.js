/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.MultiOutAttachment');
goog.provide('proto.MultiOutAttachment.MultiOutRecipient');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');


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
proto.MultiOutAttachment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.MultiOutAttachment.repeatedFields_, null);
};
goog.inherits(proto.MultiOutAttachment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MultiOutAttachment.displayName = 'proto.MultiOutAttachment';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.MultiOutAttachment.repeatedFields_ = [2];



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
proto.MultiOutAttachment.prototype.toObject = function(opt_includeInstance) {
  return proto.MultiOutAttachment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MultiOutAttachment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MultiOutAttachment.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, 0),
    recipientsList: jspb.Message.toObjectList(msg.getRecipientsList(),
    proto.MultiOutAttachment.MultiOutRecipient.toObject, includeInstance)
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
 * @return {!proto.MultiOutAttachment}
 */
proto.MultiOutAttachment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MultiOutAttachment;
  return proto.MultiOutAttachment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MultiOutAttachment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MultiOutAttachment}
 */
proto.MultiOutAttachment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVersion(value);
      break;
    case 2:
      var value = new proto.MultiOutAttachment.MultiOutRecipient;
      reader.readMessage(value,proto.MultiOutAttachment.MultiOutRecipient.deserializeBinaryFromReader);
      msg.addRecipients(value);
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
proto.MultiOutAttachment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MultiOutAttachment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MultiOutAttachment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MultiOutAttachment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getRecipientsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.MultiOutAttachment.MultiOutRecipient.serializeBinaryToWriter
    );
  }
};



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
proto.MultiOutAttachment.MultiOutRecipient = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MultiOutAttachment.MultiOutRecipient, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MultiOutAttachment.MultiOutRecipient.displayName = 'proto.MultiOutAttachment.MultiOutRecipient';
}


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
proto.MultiOutAttachment.MultiOutRecipient.prototype.toObject = function(opt_includeInstance) {
  return proto.MultiOutAttachment.MultiOutRecipient.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MultiOutAttachment.MultiOutRecipient} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MultiOutAttachment.MultiOutRecipient.toObject = function(includeInstance, msg) {
  var f, obj = {
    recipient: jspb.Message.getFieldWithDefault(msg, 1, 0),
    amount: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.MultiOutAttachment.MultiOutRecipient}
 */
proto.MultiOutAttachment.MultiOutRecipient.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MultiOutAttachment.MultiOutRecipient;
  return proto.MultiOutAttachment.MultiOutRecipient.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MultiOutAttachment.MultiOutRecipient} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MultiOutAttachment.MultiOutRecipient}
 */
proto.MultiOutAttachment.MultiOutRecipient.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRecipient(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmount(value);
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
proto.MultiOutAttachment.MultiOutRecipient.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MultiOutAttachment.MultiOutRecipient.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MultiOutAttachment.MultiOutRecipient} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MultiOutAttachment.MultiOutRecipient.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecipient();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint64 recipient = 1;
 * @return {number}
 */
proto.MultiOutAttachment.MultiOutRecipient.prototype.getRecipient = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MultiOutAttachment.MultiOutRecipient.prototype.setRecipient = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 amount = 2;
 * @return {number}
 */
proto.MultiOutAttachment.MultiOutRecipient.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MultiOutAttachment.MultiOutRecipient.prototype.setAmount = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 version = 1;
 * @return {number}
 */
proto.MultiOutAttachment.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MultiOutAttachment.prototype.setVersion = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated MultiOutRecipient recipients = 2;
 * @return {!Array<!proto.MultiOutAttachment.MultiOutRecipient>}
 */
proto.MultiOutAttachment.prototype.getRecipientsList = function() {
  return /** @type{!Array<!proto.MultiOutAttachment.MultiOutRecipient>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.MultiOutAttachment.MultiOutRecipient, 2));
};


/** @param {!Array<!proto.MultiOutAttachment.MultiOutRecipient>} value */
proto.MultiOutAttachment.prototype.setRecipientsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.MultiOutAttachment.MultiOutRecipient=} opt_value
 * @param {number=} opt_index
 * @return {!proto.MultiOutAttachment.MultiOutRecipient}
 */
proto.MultiOutAttachment.prototype.addRecipients = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.MultiOutAttachment.MultiOutRecipient, opt_index);
};


proto.MultiOutAttachment.prototype.clearRecipientsList = function() {
  this.setRecipientsList([]);
};

