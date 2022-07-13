//Attrs required to create an event (the dto)
export interface ICreateEvent {
  name: string;
  estimatedGuests: number;
}

//The event entity from the server
export interface Event extends ICreateEvent {
  id: number;
  createdAt: Date;
  lastUpdatedAt: Date;
}
