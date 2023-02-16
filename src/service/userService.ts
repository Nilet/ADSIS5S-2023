import User from "../schemas/User"

class UserService{
    async createUser(input){
        try{
            await User.create(input)
        }   catch(e){
            console.log(e)
        }
    }
}
