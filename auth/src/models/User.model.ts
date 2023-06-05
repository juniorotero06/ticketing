import mongoose from "mongoose";

// Describe que se necesita para crear un usuarios
interface UserAttrs {
  email: string;
  password: string;
}

// Describe como se ve toda la coleccion de usuarios, o los metodos asociados a la coleccion de usuarios
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

//Describe que propiedades tiene un solo usuario
interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
  //   createdAt: string;
  //   updatedAt: string;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export { User };
