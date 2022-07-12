//Extra details that we get from the server
export interface Blessing extends ICreateBlessing {
  id: number;
  createdAt: Date;
}
//Attrs we need to create a new blessing
export interface ICreateBlessing {
  text: string;
  createdBy: string;
  eventId: number;
  paymentAmount: number;
}
