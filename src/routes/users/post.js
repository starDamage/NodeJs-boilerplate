import addressModel from "../../model/address";
import userModel from "../../model/user";
import { ValidationError } from "joi";

import db from "../../db/index";
import { createUserValidation } from "./validations";
import { CustomError } from "../../common/error";

export const createUserHandler = async (req, res) => {
  const session = await db.startSession();
  session.startTransaction();
  try {
    await createUserValidation.validateAsync(req.body);
    let {
      fname,
      lname,
      email,
      password,
      address1,
      address2,
      pin_code,
      country,
    } = req.body;

    let isAvailable = await userModel.findOne({ email });
    if (isAvailable) throw new CustomError(`User already exists`);

    let addUser = await userModel.create(
      [
        {
          fname,
          lname,
          email,
          password,
        },
      ],
      { session: session }
    );
    let addressData = await addressModel.create(
      [
        {
          address1,
          address2,
          pin_code,
          country,
        },
      ],
      {
        session: session,
      }
    );
    await session.commitTransaction();
    return res.status(200).send({ message: "User created successfully" });
  } catch (err) {
    await session.abortTransaction();
    if (err instanceof ValidationError || err instanceof CustomError) {
      return res.status(400).send({ message: err.message });
    }
    return res.status(500).send({ message: "Something went wrong..." });
  }
};
