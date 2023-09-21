
export class UserService {

  validate(email: string, rol: string) {
    const emailExtension = this.extensionEmail(email);

    if(emailExtension) {
      return this.isRolAdmin(rol);
    }

    return false;
  }

  public extensionEmail(email: string) {
    const extension = email.split('@')[1];

    if(extension !== process.env.VALID_EMAIL_EXTENSION) {
      return false;
    }
    return true;
  }

  public isRolAdmin(rol: string) {
    if (rol !== 'ADMIN_ROL') {
      return false;
    }
    return true;
  }
}
