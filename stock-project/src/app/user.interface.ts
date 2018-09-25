export interface User {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
}

constructor(user:any) {
    this.username = user.username;
    this.password = user.password;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    
    
   
  }