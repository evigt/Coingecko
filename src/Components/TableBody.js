import bitcoinImage from "./Images/bitcoin.jpg";
import graphImage from "./Images/sparkLine.svg";
import { Star } from "react-bootstrap-icons";

const TableBody = () => {
  return (
    <>
      <tbody>
        <tr>
          <th scope="row">
            <Star />
          </th>
          <td>
            <div className="tw-flex d-flex">
              <div className="flex-column center">
                <img src={bitcoinImage} className="bitcoinLogo" alt="" />
              </div>
              <div className="center">
                <span className="bitcoinInfo fw-bold">Bitcoin</span>
                <span>BTC</span>
              </div>
            </div>
          </td>
          <td>$49,848.05</td>
          <td>-0.5%</td>
          <td>4.3%</td>
          <td>1.6%</td>
          <td>$40,080,532,960</td>
          <td>$937,351,978,569</td>
          <td>
            <img src={graphImage} alt="" />
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default TableBody;
