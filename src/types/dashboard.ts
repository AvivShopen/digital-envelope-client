interface IDashboard {
  averagePerGuest: number;
  paidGuests: {
    current: number;
    max: number;
  };
  totalAmount: number;
}
export default IDashboard;
