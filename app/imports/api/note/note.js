import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Notes = new Mongo.Collection('Notes');

/** Create a schema to constrain the structure of documents associated with this collection. */
const NoteSchema = new SimpleSchema({
  note: String,
  contactId: String,
  createdAt: Date,
  owner: String,
  condition: {
    type: String,
    allowedValues: ['excellent', 'good', 'fair', 'poor'],
    defaultValue: 'good',
  },
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Notes.attachSchema(NoteSchema);

/** Make the collection and schema available to other code. */
export { Notes, NoteSchema };
