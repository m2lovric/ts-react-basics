import { useState } from 'react';
import DataGrid from './datagrid';
import Form from './form';

interface AppProps {
  headerText: string;
  extraText?: string;
}

interface IAddress {
  street: string;
  number: number;
  zip: string;
}

interface IUser {
  name: string;
  age: number;
  country: string;
  address: IAddress;
  admin: boolean;
}

// export interface User {
//   id: number;
//   name: string;
//   age: number;
// }

const App = ({ headerText, extraText }: AppProps) => {
  const [user, setUser] = useState<IUser | null>(null);

  const users = [
    { id: 1, name: 'Matteo', age: 28 },
    { id: 2, name: 'Matte', age: 29 },
    { id: 3, name: 'Matt', age: 30 },
  ];

  const orders = [
    { id: 3, quantity: 25, amount: 20 },
    { id: 2, quantity: 15, amount: 25 },
    { id: 1, quantity: 5, amount: 30 },
  ];

  const fetchUser = () =>
    setUser({
      name: 'Matteo',
      age: 28,
      country: 'Croatia',
      address: {
        street: 'Main st',
        number: 115,
        zip: '32221',
      },
      admin: false,
    });

  return (
    <>
      <button onClick={fetchUser}>Fetch User</button>
      <h1>{headerText}</h1>
      {extraText && <p>{extraText}</p>}
      {user && <p>{user.address.number}</p>}
      <Form />
      <DataGrid items={users} />
      <DataGrid items={orders} />
    </>
  );
};

export default App;
