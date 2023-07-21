import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./HomeTable.module.css";
import dish from "../../../../assets/dish.png";
const HomeTable = ({ data }) => {
  const navigate = useNavigate();
  const handleChooseTable = (table) => {
    const token = localStorage.getItem("token");
    if (token != null) {
      navigate("/booking", { state: { selectedTable: table } });
    } else {
      navigate("/login");
    }
  };
  return (
    <div style={{ paddingBottom: "50px" }}>
      <hr
        style={{
          width: "60%",
          textAlign: "center",
          margin: "0 auto",
          marginTop: "100px",
          marginBottom: "60px",
        }}
      />
      <div className={styles.tableTitle}>
        <h1 className={styles.tableFind}>Find {data.length} table suit for your requirements</h1>
        <p style={{ fontSize: "19px", paddingTop: "3px", color: "#F75A41" }}>
          * Note about reservation time
        </p>
        <p style={{ fontSize: "17px", paddingTop: "3px", fontWeight: 600 }}>
          - Please reserve a table now as the number of reservations is limited.
        </p>
        <p style={{ fontSize: "17px", paddingTop: "3px", fontWeight: 600 }}>
          - If you want to choose more time to your dinner or book for more
          people.
        </p>
        <p>
          Please contact the following phone number
          <br /> 0344350704
        </p>
      </div>
      {data?.map((table, index) => (
        <div className={styles.tableTable} key={index} data-aos="zoom-out">
          <img className={styles.imgTable} src={dish} />
          <h1 className={styles.textTable}>{table?.tableNumber}</h1>
          <div>
            <h1 className={styles.textTable1}>
              Table For {table?.capacity} People
            </h1>
            <p className={styles.textTable2}>{table?.timeRangeType} - </p>
            <p className={styles.textTable2}>10$</p>
          </div>
          <div className={styles.tableTableTime}>
            <Button
              type="primary"
              onClick={() => handleChooseTable(table)}
              className={styles.tableTableBtn}
            >
              <p className={styles.tableBook} style={{ fontSize: "20px" }}>Book</p>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default HomeTable;
