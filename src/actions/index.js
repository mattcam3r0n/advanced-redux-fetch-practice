export function loadContacts() {
  return function (dispatch) {
    dispatch({
      type: "LOAD_CONTACTS",
    });
    fetch("/contacts")
      .then((response) => {
        return response.json();
      })
      .then((contacts) => {
        dispatch(contactsLoaded(contacts));
      });
  };
}

export function contactsLoaded(contacts) {
  return {
    type: "CONTACTS_LOADED",
    value: contacts,
  };
}

export function createContact(contact) {
  return function (dispatch) {
    fetch("/contacts", {
      method: "POST",
      body: JSON.stringify(contact),
      headers: {
        Accept: "application/json"
      }
    })
    .then((response) => {
      return response.json();
    })
    .then((newContact) => {
      dispatch(contactCreated(Object.assign(newContact, contact)));
    });
  };
}

export function contactCreated(contact) {
  return {
    type: "CONTACT_CREATED",
    value: contact
  };
}

export function loadComments() {
  return function (dispatch) {
    dispatch({
      type: "LOAD_COMMENTS",
    });
    fetch("/comments")
      .then((response) => {
        return response.json();
      })
      .then((comments) => {
        dispatch(commentsLoaded(comments));
      });
  };
}

export function commentsLoaded(comments) {
  return {
    type: "COMMENTS_LOADED",
    value: comments,
  };
}

export function createComment(comment) {
  return function (dispatch) {
    fetch("/comments", {
      method: "POST",
      body: JSON.stringify(comment),
      headers: {
        Accept: "application/json"
      }
    })
    .then((response) => {
      return response.json();
    })
    .then((newComment) => {
      dispatch(commentCreated(Object.assign(newComment, comment)));
    });
  };
}

export function commentCreated(comment) {
  return {
    type: "COMMENT_CREATED",
    value: comment
  };
}

export function loadVehicles() {
  return function (dispatch) {
    dispatch({
      type: "LOAD_VEHICLES",
    });
    fetch("/vehicles")
      .then((response) => {
        return response.json();
      })
      .then((vehicles) => {
        dispatch(vehiclesLoaded(vehicles));
      });
  };
}

export function vehiclesLoaded(vehicles) {
  return {
    type: "VEHICLES_LOADED",
    value: vehicles,
  };
}

export function createVehicle(vehicle) {
  return function (dispatch) {
    fetch("/vehicles", {
      method: "POST",
      body: JSON.stringify(vehicle),
      headers: {
        Accept: "application/json"
      }
    })
    .then((response) => {
      return response.json();
    })
    .then((newVehicle) => {
      dispatch(vehicleCreated(Object.assign(newVehicle, vehicle)));
    });
  };
}

export function vehicleCreated(vehicle) {
  return {
    type: "VEHICLE_CREATED",
    value: vehicle
  };
}

export function loadProducts() {
  return function (dispatch) {
    dispatch({
      type: "LOAD_PRODUCTS",
    });
    fetch("/products")
      .then((response) => {
        return response.json();
      })
      .then((products) => {
        dispatch(productsLoaded(products));
      });
  };
}

export function productsLoaded(products) {
  return {
    type: "PRODUCTS_LOADED",
    value: products,
  };
}

export function createProduct(product) {
  return function (dispatch) {
    fetch("/products", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        Accept: "application/json"
      }
    })
    .then((response) => {
      return response.json();
    })
    .then((newProduct) => {
      dispatch(productCreated(Object.assign(newProduct, product)));
    });
  };
}

export function productCreated(product) {
  return {
    type: "PRODUCT_CREATED",
    value: product
  };
}
