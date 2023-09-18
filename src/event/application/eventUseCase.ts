import { EventRepository } from "../domain/event.repository";
import { EventValue } from "../domain/user.value";

export class EventUseCase {
  constructor(private readonly eventRepository: EventRepository) {}

  public  registerUser = async ({}) => {
    const userValue = new EventValue({});
    const userCreated = await this.eventRepository.createEvent(userValue);
    return userCreated;
  };
}
