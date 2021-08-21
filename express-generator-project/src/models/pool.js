import { Pool } from 'pg';
import { connectionString } from '../config';

export const pool = new Pool({ connectionString });
