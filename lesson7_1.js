var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    //"Розбити скло": "200 грн"
};

//створити метод price(), який обчислює та повертає загальну вартість "наданих послуг"
    services.price = function() {
      let totalPrice = 0;
      for (let key in this) {
        if (typeof this[key] === "string" && this[key].includes("грн")) {
          totalPrice += parseFloat(this[key]);
        }
      }
      return totalPrice + " грн";
    }
  
  //створити метод minPrice() - який повертає мінімальний price
    services.minPrice = function() {
      let minValue = Infinity;
      for (let key in this) {
        if (typeof this[key] === "string" && this[key].includes("грн")) {
          let price = parseFloat(this[key]);
          if (price < minValue) {
            minValue = price;
          }
        }
      }
      return minValue + " грн";
    }
  
    //створити метод maxPrice() - який повертає максимальний price
    services.maxPrice = function() {
      let maxValue = -Infinity;
      for (let key in this) {
        if (typeof this[key] === "string" && this[key].includes("грн")) {
          let price = parseFloat(this[key]);
          if (price > maxValue) {
            maxValue = price;
          }
        }
      }
      return maxValue + " грн";
    }

  
  console.log("Загальна вартість наданих послуг:", services.price());
  console.log("Мінімальний price:", services.minPrice());
  console.log("Максимальний price:", services.maxPrice());
