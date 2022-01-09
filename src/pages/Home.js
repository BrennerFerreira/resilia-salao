import axios from "axios";
import { useEffect, useState } from "react";
import { Statistics } from "../components/home/Statistics";
import { getApiUrl } from "../utils/getApiUrl";

export const Home = () => {
  const [statistics, setStatistics] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const url = getApiUrl("/home");
      const statistics = await axios.get(url);
      console.log(statistics.data);
      setStatistics(statistics.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  const Loading = () => {
    return <div>Carregando...</div>;
  };

  return (
    <div>
      <h1>Bem-vinde ao sistema de gerenciamento do seu salão de beleza</h1>
      {loading ? <Loading /> : <Statistics statistics={statistics} />}
    </div>
  );
};
