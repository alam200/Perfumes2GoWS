export class User {
    _id: string;
    companyName: string;
    isVerified: boolean;
    firstName: string;
    lastName: string;
    email: string;
    category: string;
    password: string;
    phoneNumber: string;
    country: string;
    mobileNumber: string;
    __v: string;
    resetPasswordExpires: string;
    resetPasswordToken: string;
    public constructor() {
      this.isVerified = false;
    }
  }

