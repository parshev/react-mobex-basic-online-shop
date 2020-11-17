import { action, computed, observable } from "mobx";
import React from "react";

class IncomeDomainStore {
  @observable items = [
    {
      id: 1,
      name: "samsung",
      cat: 0,
      category: "electronics",
      desc: "new  TV",
      price: "100",
      quantity: 0,
      url: "https://i.imgur.com/cbKTWaOb.jpg"
    },
    {
      id: 2,
      name: "lenovo",
      cat: 0,
      category: "electronics",
      desc: "extra laptop ",
      price: "75",
      quantity: 0,
      url:"https://i.imgur.com/cbKTWaOb.jpg"
    },
    {
      id: 16,
      name: "wood",
      cat: 1,
      category: "home",
      desc: "to start ",
      price: "50",
      quantity: 0,
      url: "https://i.imgur.com/cbKTWaOb.jpg"
    },
    {
      id: 15,
      name: "wood",
      cat: 1,
      category: "home",
      desc: "to start ",
      price: "50",
      quantity: 0,
      url: "https://i.imgur.com/cbKTWaOb.jpg"
    },
    {
      id: 3,
      name: "wood",
      cat: 1,
      category: "home",
      desc: "to start ",
      price: "50",
      quantity: 0,
      url: "https://i.imgur.com/cbKTWaOb.jpg"
    },
    {
      id: 4,
      name: "stones",
      cat: 2,
      category: "garden",
      desc: "bedrock ",
      price: "3",
      quantity: 0,
      url: "https://i.imgur.com/cbKTWaOb.jpg"
    },
    {
      id: 5,
      name: "grass",
      cat: 2,
      category: "garden",
      desc: "green  ",
      price: "6",
      quantity: 0,
      url: "https://i.imgur.com/cbKTWaOb.jpg"
    },
    {
      id: 6,
      name: "reno",
      cat: 3,
      category: "cars",
      desc: "vehiculum",
      price: "100",
      quantity: 0,
      url: "https://i.imgur.com/cbKTWaOb.jpg"
    },
    {
      id: 7,
      name: "lada",
      cat: 3,
      category: "cars",
      desc: "russian ",
      price: "56",
      quantity: 0,
      url: "https://i.imgur.com/cbKTWaOb.jpg"
    },
    {
      id: 8,
      name: "samsung-xm1000",
      cat: 0,
      category: "electronics",
      desc: "TV 4K",
      price: "100",
      quantity: 0,
      url: "https://i.imgur.com/cbKTWaOb.jpg"
    },
    {
      id: 9,
      name: "kvazer 800",
      cat: 0,
      category: "electronics",
      desc: " laptop ",
      price: "175",
      url: "https://i.imgur.com/cbKTWaOb.jpg"
    },
    {
      id: 10,
      name: "painting",
      cat: 1,
      category: "home",
      desc: "replica ",
      price: "50",
      quantity: 0,
      url: "https://i.imgur.com/cbKTWaOb.jpg"
    },
    {
      id: 11,
      name: "furniture",
      cat: 2,
      category: "garden",
      desc: "confort",
      price: "3",
      quantity: 0,
      url: "https://i.imgur.com/cbKTWaOb.jpg"
    },
    {
      id: 12,
      name: "lights",
      cat: 2,
      category: "garden",
      desc: " bring  ",
      price: "6",
      quantity: 0,
      url: "https://i.imgur.com/cbKTWaOb.jpg"
    },
    {
      id: 13,
      name: "vw",
      cat: 3,
      category: "cars",
      desc: "germen",
      price: "100",
      quantity: 0,
      url: "https://i.imgur.com/cbKTWaOb.jpg"
    },
    {
      id: 14,
      name: "lambo",
      cat: 3,
      category: "cars",
      desc: "italian",
      price: "56",
      quantity: 0,
      url: "https://i.imgur.com/cbKTWaOb.jpg"
    }
  ];
  @observable wishItem = [];
  @observable itemsList = [];
  @observable testVar = "";
  @observable categoriesList = [];
  @observable categories = [
    { name: "electronics" },
    { name: "home" },
    { name: "garden" },
    { name: "cars" },
    { name: "all categories" }
  ];
  @observable itemsIntoCart = [];
  @observable totalSum = 0;
  @observable cardWidth = 240;

  @action
  getCategory = event => {
    this.categoriesList = [...this.items];
    var selected = event.currentTarget.dataset.id;
    if (selected < 4) {
      this.categoriesList = this.items.filter(item => {
        return item.cat == selected;
      });
    } else {
      this.categoriesList = this.items.filter(item => {
        return item.cat < 4;
      });
    }
  };
  @action
  testColnsolTestVal = () => {
    this.categoriesList = [...this.items];
    this.categoriesList = this.items.filter(i => {
      if (i.desc.includes(this.testVar)) {
        return i;
      } 
    });
    // this.categoriesList = this.items.filter(item => {
    //   return item.category === this.testVar;
    // });
  };

  @action
  initList = () => {
    this.categoriesList = [...this.items];
    this.categoriesList = this.items.filter(item => {
      return item;
    });
  };

  @action
  removeItem = id => {
    this.itemsIntoCart.forEach(item => {
      if (item.id === id) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          this.totalSum -= parseInt(item.price);
        } else {
          var index = this.itemsIntoCart.findIndex(item => item.id === id);
          this.itemsIntoCart.splice(index, 1);
          localStorage.setItem('basket',JSON.stringify(this.itemsIntoCart));
          item.quantity = 0;
          this.totalSum -= parseInt(item.price);
        }
      }
    });
  };

  @action
  switchLayout = () => {
    if (this.cardWidth === 240) {
      this.cardWidth = 720;
    } else {
      this.cardWidth = 240;
    }
  };

  @action
  likeItem=(id)=>{
    if(this.wishItem.length===0){
      return [];
    }else{
    const item = this.items.find(i=>i.id===id);
    this.wishItem.push(item);
    }
  }
}
export default IncomeDomainStore;
