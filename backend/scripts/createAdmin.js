require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');
const connectDB = require('../config/database');

const createAdmin = async () => {
  try {
    await connectDB();

    const adminEmail = 'marioratiary@gmail.com';
    const adminPassword = 'qwertyuiop123';
    const adminName = 'Mario Admin';

    const userExists = await User.findOne({ email: adminEmail });

    if (userExists) {
      console.log(`L'utilisateur admin avec l'email ${adminEmail} existe déjà.`);
      process.exit(0);
    }

    const admin = await User.create({
      name: adminName,
      email: adminEmail,
      password: adminPassword,
      role: 'admin',
    });

    console.log(`Compte admin créé avec succès : ${admin.email}`);
    process.exit(0);
  } catch (error) {
    console.error(`Erreur lors de la création de l'admin : ${error.message}`);
    process.exit(1);
  }
};

createAdmin();
