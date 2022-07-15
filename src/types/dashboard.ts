interface IDashboard {
  averagePerGuest: number;
  paidGuests: {
    current: string | number;
    max: number;
  };
  totalAmount: number;
}
export default IDashboard;
