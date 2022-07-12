export interface ICreateEvent {
  name: string;
  estimatedGuests: number;
}

export interface Event extends ICreateEvent {
  id: number;
  createdAt: Date;
  lastUpdatedAt: Date;
}
