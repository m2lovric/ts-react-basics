import { useState } from 'react';
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

const App = ({ headerText, extraText }: AppProps) => {
  const [user, setUser] = useState<IUser | null>(null);

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
    </>
  );
};

export default App;
