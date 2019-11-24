export type SignUpStackParams = { 
  InitialStep: undefined
  NameStep: undefined
  BirthdayStep: undefined
  GenderStep: undefined
  PhoneNumberStep: undefined
  CreatePasswordStep: undefined
  FinishStep: undefined
};

export type SignInStackParams = { 
  SignIn: undefined
  SignUp: SignUpStackParams
};

export type AuthStackParams = {
  Index: undefined
  SignIn: SignInStackParams
  SignUp: SignUpStackParams
}