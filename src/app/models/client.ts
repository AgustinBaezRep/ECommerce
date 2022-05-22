export interface Client {
  name: string;
  surname: string;
  email: string;
  password: string;
  dni: number | null;
  dateBirth: Date | null;
  phone: number | null;
  idRol: number;
}
