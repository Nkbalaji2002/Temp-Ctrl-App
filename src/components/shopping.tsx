import React, { useEffect, useState } from "react";
import "./shopping.css";
import {
  Add,
  CheckCircle,
  Circle,
  ChevronLeft,
  ChevronRight,
  Delete,
} from "@mui/icons-material";
import localforage from "localforage";
import { shopData, shoppingitems } from "./shoppingData";

const Shopping: React.FC = () => {
  const [items, setItems] = useState<shoppingitems[]>(shopData);
  const [inputValue, setInputValue] = useState<string>("");
  const [totalItemCount, settotalItemCount] = useState<number>(0);

  useEffect(() => {
    loadItemsFromStorage()
  }, []);

  const loadItemsFromStorage = async () => {
    try {
      const savedItems = await localforage.getItem<shoppingitems[]>(
        "shoppingList"
      );
      if (savedItems) {
        setItems(savedItems);
      }
    } catch (error) {
      console.error(`Error loading items : `, error);
    }
  };

  const SavedItemsFromStorage = async () => {
    try {
      await localforage.setItem("shoppingList", items);
    } catch (error) {
      console.error(`Error loading items : `, error);
    }
  };

  const handleAddButtonClick = () => {
    const newItem = {
      id: items.length + 1,
      itemName: inputValue,
      quantity: 1,
      isSelected: false,
    };

    const newItems = [...items, newItem];
    setItems(newItems);
    setInputValue("");
    CalculateTotal();
    SavedItemsFromStorage()
  };

  const handleQuantityIncrease = (index: number) => {
    const newItems = [...items];
    newItems[index].quantity++;
    setItems(newItems);
    CalculateTotal();
  };

  const handleQuantityDecrease = (index: number) => {
    const newItems = [...items];
    newItems[index].quantity--;
    setItems(newItems);
    CalculateTotal();
  };

  const toggleComplete = (index: number) => {
    const newItems = [...items];
    newItems[index].isSelected = !newItems[index].isSelected;
    setItems(newItems);
  };

  const CalculateTotal = () => {
    const totalItemCount: number = items.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
    settotalItemCount(totalItemCount);
  };

  const removeItem = (index: number) => {
    const updatedItems = items.filter((item) => item.id !== index);
    setItems(updatedItems);
    SavedItemsFromStorage()
  };

  return (
    <>
      <div className="app-background">
        <div className="container">
          <h1 className="title">Shopping list</h1>
          <div className="add-item-box">
            <input
              type="text"
              placeholder="Add a item..."
              className="add-item-input"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
            />
            <button onClick={() => handleAddButtonClick()}>
              <Add />
            </button>
          </div>
          <div className="item-list">
            {items.map((item, index) => (
              <div className="item-container" key={item.id}>
                <div
                  className="item-name"
                  onClick={() => toggleComplete(index)}
                >
                  {item.isSelected ? (
                    <>
                      <CheckCircle />
                      <span className="completed">{item.itemName}</span>
                    </>
                  ) : (
                    <>
                      <Circle />
                      <span>{item.itemName}</span>
                    </>
                  )}
                </div>
                <div className="quantity">
                  <button onClick={() => handleQuantityDecrease(index)}>
                    <ChevronLeft />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityIncrease(index)}>
                    <ChevronRight />
                  </button>
                  <button onClick={() => removeItem(item.id)}>
                    <Delete />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="total">Total : {totalItemCount}</div>
        </div>
      </div>
    </>
  );
};

export default Shopping;
