import { makeAutoObservable } from "mobx";
import { createContext } from "react";

class Store {
  constructor() {
    makeAutoObservable(this);
  }
  readMore = false;
  description = 1;
  setReadMore = () => {
    this.readMore = !this.readMore;
  };

  setDescription = (id) => {
    this.description = id
  }
}
export default createContext(new Store());
