function getToken() {
    return new Promise((resolve, reject) => {
      if (Math.random() > 0.3) {
        // cas favorable
        setTimeout(() => {
          console.log(`Cas favorable`);
          resolve("TDOXdlmksqjfsdioe;iqsdoiee");
        }, 1000);
      } else {
        // cas défavorable
        setTimeout(() => {
          console.log(`Cas défavorable`);
          reject(new Error("Pb de token"));
        }, 1000);
      }
    });
  }
  function login(token, login, pwd) {
    return new Promise((resolve, reject) => {
      if (Math.random() > 0.3) {
        // cas favorable
        setTimeout(() => {
          resolve({ login: "tom", uid: "345433" });
        }, 1000);
      } else {
        // cas défavorable
        setTimeout(() => {
          reject(new Error("Pb d'identification"));
        }, 1000);
      }
    });
  }
  function isString(data) {
    return new Promise((resolve, reject) => {
      if (Math.random() > 0.3) {
        // cas favorable
        setTimeout(() => {
          console.log(`La donnée est bien une string`);
          resolve();
        }, 1000);
      } else {
        // cas défavorable
        setTimeout(() => {
          reject(new Error("La donnée n'est pas une string"));
        }, 1000);
      }
    });
  }
  
  getToken()
    .then((data) => {
      console.log(`data : `, data);
      return isString(data);
    })
    .then((data) => {
      return login(data, "tom", "12345678");
    })
    .then((data) => {
      console.log(`data : `, data);
    })
    .catch((error) => {
      console.error(`La promesse n'a pas été tenue : `, error.message);
    });