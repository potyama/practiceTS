import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import { client } from '../libs/supabase';

type List = {
  id: string;
  title: string;
  created_at: string;
};

const Home: NextPage = () => {
  const [list, setList] = useState<List[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const { data, error } = await client.from<List>('sample')
        .select('*')
        .order('id');

      if (error) {
        throw error;
      }
      if (data) {
        console.log(data);
        setList(data);
      }
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>loading</div>;
  if (!list.length) return <div>missing data</div>;

  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>TITLE</td>
            <td>CREATED_AT</td>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;