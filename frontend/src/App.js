import logo from "./logo.svg";
import "./App.css";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

import { createItem } from "./helper/itemapi";

function App() {
  const [values, setValues] = useState({
    name: "",
    description: "",
    icon: "",
    price: null,
  });

  const [items, setItems] = useState([]);

  const { name, description, icon, price } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    createItem(values).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log("Item Added ");
      }
    });
  };

  const formUI = () => {
    return (
      <form noValidate autoComplete="off">
        <div class="mb-3">
          <label class="form-label">Icon</label>
          <input
            type="text"
            value={icon}
            onChange={handleChange("icon")}
            class="form-control"
            placeholder="📚"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Item Name</label>
          <input
            type="text"
            class="form-control"
            value={name}
            onChange={handleChange("name")}
            placeholder="Cracking the coding interview book"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Item Description</label>
          <input
            type="text"
            class="form-control"
            value={description}
            onChange={handleChange("description")}
            placeholder="it contains interview related stuff..."
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Price</label>
          <input
            type="text"
            value={price}
            onChange={handleChange("price")}
            class="form-control"
            placeholder="599"
          />
        </div>
        <div className="mb-3">
          <button onClick={onSubmit} className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
    );
  };

  const itemUI = () => {
    return (
      <Card variant="outlined">
        <CardContent>
          <h1>🖥</h1>
          <Typography variant="h5" component="h2">
            sdasfaf
          </Typography>
          <Typography color="textSecondary">adjective</Typography>
          <Typography variant="body2" component="p">
            $ well meaning and kindly.
          </Typography>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-6"> {formUI()}</div>
        <div className="col-6">{itemUI()}</div>
        <p>{JSON.stringify(values)}</p>
      </div>
    </div>
  );
}

export default App;
