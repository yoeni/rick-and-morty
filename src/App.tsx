import { useEffect, useState } from 'react';
import './App.css';
import { InputModule } from './Components/input-module';
import { List } from './Components/list';
import { Char } from './tools/types';
import { SendGet } from './tools/request';


function App() {
  const [data, setData] = useState<Char[] | string>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<undefined |string>(undefined);

  const getCharacters = async(filter?: string) => {
    const response = await SendGet(filter ? '/character/?name='+filter :'/character');
    
    if (response.status === 200 && response.data) {
      setData(response.data.results);
    } else {
      console.log(response);
      setData('404 Not Found');
    }
    setLoading(false);

  };

  useEffect(() => {
    getCharacters();
  }, []);

  useEffect(() => {
    setLoading(true);
    getCharacters(filter);
    
  }, [filter]);
  
  return (
    <div className="App">
      <InputModule setFilter={setFilter} />
      <List data={data} isLoading={loading}  />
    </div>
  );
}

export default App;
