import Navbar from "../../Components/Navbar";
import TableBody from "../../Components/TableBody";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiData } from "./Store/Action";
import { useEffect } from "react";
import { CoingeckoReducer } from "./Store/Reducer";

const Home = () => {
  const dispatch = useDispatch();
  const coin = useSelector(CoingeckoReducer);

  useEffect(() => {
    dispatch(fetchApiData());
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col"># </th>
              <th scope="col"> Coin </th>
              <th scope="col"> Price </th>
              <th scope="col"> 1h </th>
              <th scope="col"> 24h </th>
              <th scope="col"> 7d </th>
              <th scope="col"> 24h Volume </th>
              <th scope="col"> Mkt Cap </th>
              <th scope="col"> Last 7 Days </th>
            </tr>
          </thead>
          <TableBody />
        </table>
      </div>
    </>
  );
};

export default Home;
