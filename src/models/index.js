// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Register } = initSchema(schema);

export {
  Register
};