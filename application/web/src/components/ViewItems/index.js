import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

//the page where we load the data
export const ViewItems = (props) => {
  const [items, setItems] = useState([]);

  const category_id = props.category_id;
  const category_name = props.category_name;
  const searchTerm = props.searchTerm;
  const base_url = "http://www.codycs.com:8080";
  //const base_url = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    // fetchItems();

    if (category_id === 0 && searchTerm !== "") {
      // we return items according to search term
      axios.get(`http://www.codycs.com:8080/searchitems/${searchTerm}`).then((res) => {
        setItems(res.data);
      });
    } else if (
      category_id !== 0 &&
      searchTerm === "" &&
      category_name !== "All Items"
    ) {
      // we return items according to category

      axios.get(`http://www.codycs.com:8080/searchcategory/${category_name}`).then((res) => {
        setItems(res.data);
      });
    } else if (category_id !== 0 && searchTerm != "") {
      //return items according to category and search term
      axios
        .get(`http://www.codycs.com:8080/itemwithcategory/${searchTerm}/${category_name}`)
        .then((res) => {
          setItems(res.data);
          console.log(items);
        });
    } else {
      axios.get(`http://www.codycs.com:8080/items`).then((res) => {
        setItems(res.data);
      });
    }
  }, [items]);

  return (
    <div style={{ paddingTop: "3rem" }}>
      {items.map((e) => {
        return (
          <div>
            <Row>
              {/* <Col>
            <img className={styles.thumbnail} src={book} alt="book" />
          </Col> */}
              <Col style={{ paddingTop: "3rem" }}>
                <Row>
                  <h3>{e.item_name}</h3>
                </Row>
                <Row>
                  <p>{e.item_desc}</p>
                </Row>
                <Row>
                  <p style={{ fontWeight: "bold" }}>{e.item_price}</p>
                </Row>
              </Col>
              <Col></Col>
              <Col></Col>
            </Row>
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
};
