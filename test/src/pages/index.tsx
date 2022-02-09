import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import { client } from '../libs/supabase';

type List = {
  id: string;
  fullname: string;
  avatarurl: string;
  nickname: string;
};

const Home: NextPage = () => {
  const [list, setList] = useState<List[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const { data, error } = await (
        client.from<List>('users')
          .select('*')
          .order('id')
      );

      if (error) {
        throw error;
      }
      if (data) {
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

    const subscription = client
      .from('users')
      .on('*', (payload) => {
        fetchData();
        console.log('Change received!', payload);
      })
      .subscribe();

    return () => {
      if (subscription) {
        client.removeSubscription(subscription);
      }
    };
  }, []);

  if (loading) return <div>loading...</div>;
  if (!list.length) return <div>missing data...</div>;

  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <td>name</td>
            <td>codename</td>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <td>{item.fullname}</td>
              <td>{item.nickname}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;