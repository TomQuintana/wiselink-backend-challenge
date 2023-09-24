import { Validate } from "./validate.service";

export class Suscribe {

  validate = new Validate;

  event(dateEvent, token) {
    const currentDate = this.getCurrentDate();
    const eventSuscribeStatus = this.areYouCanSuscribe(currentDate, dateEvent);

    if(eventSuscribeStatus) {

      const infoUser = this.validate.verifyTokenForSuscribe(token);
      return infoUser;
    }
    else {
      return false;
      
    }

  }

  getCurrentDate() {
    const currentDate = new Date();

    const currenteYear = currentDate.getFullYear();
    const mesActual = currentDate.getMonth() + 1; // Los meses se cuentan desde 0 (enero) hasta 11 (diciembre)
    const diaActual = currentDate.getDate();

    return `${mesActual}-${diaActual}-${currenteYear}`;
  }

  areYouCanSuscribe(dateCurrent, dateEvent) {
    if(dateEvent > dateCurrent) {
      return true;
    }
    else {
      return false;
    }

  }

}
