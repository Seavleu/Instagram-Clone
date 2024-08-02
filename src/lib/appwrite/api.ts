import { ID } from "appwrite"
import { appwriteConfig, account, databases, storage, avatars } from "./config";

export const createUserAccount = async (user: INewUser) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            user.email,
            user.password,
            user.name
        );

        return newAccount;
    } catch (error) {
        console.log(error);
        return error;
    }
}

// ============================================================
// AUTH
// ============================================================

// ============================== SIGN UP

// ============================== SAVE USER TO DB

// ============================== SIGN IN

// ============================== GET ACCOUNT

// ============================== GET USER

// ============================== SIGN OUT



// ============================================================
// POSTS
// ============================================================

// ============================== CREATE POST

// ============================== UPLOAD FILE

// ============================== GET FILE URL

// ============================== DELETE FILE

// ============================== GET POSTS

// ============================== GET POST BY ID

// ============================== UPDATE POST

// ============================== DELETE POST

// ============================== LIKE / UNLIKE POST

// ============================== SAVE POST

// ============================== DELETE SAVED POST

// ============================== GET USER'S POST

// ============================== GET POPULAR POSTS (BY HIGHEST LIKE COUNT)



// ============================================================
// USER
// ============================================================

// ============================== GET USERS

// ============================== GET USER BY ID

// ============================== UPDATE USER