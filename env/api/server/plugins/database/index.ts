import { Server } from 'hapi';
import mongoose from 'mongoose';
import models from '../../../database';

export = {
  name: 'takeoff-database',
  version: '1.0.0',
  register: async (server: Server) => {
    const mg = await mongoose.connect('mongodb://db');
    const db = {
      mg,
      connection: mg.connection,
      models,
    };

    db.connection.on('error', error => console.log(error));
    db.connection.on('open', () =>
      console.log('Database Connection Established'),
    );

    Object.assign(server.app, {
      db,
    });
  },
};
