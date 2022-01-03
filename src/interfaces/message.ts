export interface I_message {
  message: string,
  status: boolean,
  redirect?: string;
}

class Message implements I_message {
  message: string;
  status: boolean;
  redirect?: string;

  constructor(message: string, status: boolean, redirect?: string) {
    this.message = message;
    this.status = status;
    this.redirect = redirect;
  }
}

export default Message;