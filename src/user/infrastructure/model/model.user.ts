import {model, Schema} from 'mongoose';

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'El nombre es obligatorio']
  },
  email: {
    type: String,
    require: [true, 'El correo es obligatorio'],
    unique: true,
  },
  password: {
    type: String,
    require: [true, 'La contraseña es obligatorio'],
    unique: true
  },
  rol: {
    type: String,
    required: true,
    emun: ['ADMIN_ROL', 'USER_ROL']
  },
  subscribedEvents: { 
    type: Object,
    default: '' 
  }
});

const UserModel = model('User', UserSchema);

export default UserModel;
