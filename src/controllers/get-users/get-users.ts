import { IGetUsersController, IGetUsersRepository } from "./protocols";


export class GetUsersController implements IGetUsersController {
  constructor(private readonly getUsersRepository: IGetUsersRepository) {
    
  }

  async handle() {
    try {
      console.log("Attempting to get users...");
      const users = await this.getUsersRepository.getUsers();
      console.log("Users retrieved successfully:", users);

        return {
          statusCode: 200,
          body: users,
      };

    } catch (error) {
     
        console.error("Error retrieving users:", error);
        return {
            statusCode: 500,
            body: "Something went wrong.",
    }
   


  }
}
}
