//Attrs required to create a blessing (the dto)
export interface ICreateBlessing {
  text: string;
  createdBy: string;
  eventId: number;
  paymentAmount: number;
}

//The blessing entity in the server
export interface Blessing extends ICreateBlessing {
  id: number;
  createdAt: Date;
}