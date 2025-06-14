import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { logoutUser } from "./userSlice";

const { VITE_API_ENDPOINT } = import.meta.env;

const API_URL = VITE_API_ENDPOINT;

// Initialize cart state with data from localStorage
const storedCart = JSON.parse(localStorage.getItem("cart")) || { items: [] };
const initialState = {
  items: storedCart.items,
  status: "idle", // Track loading state
  error: null,
};

// Fetch cart for the authenticated user
export const getCartAsync = createAsyncThunk(
  "cart/getCart",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { user } = getState();
      if (!user || !user.token) {
        throw new Error("User is not authenticated.");
      }

      const response = await axios.get(`${API_URL}/cart`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });

      return response.data; // Return the user's cart
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Failed to fetch user cart" }
      );
    }
  }
);

// Add item to cart (async thunk)
export const addToCartAsync = createAsyncThunk(
  "cart/addToCart",
  async (product, { getState, rejectWithValue }) => {
    try {
      const { user } = getState();
      if (!user || !user.token) {
        throw new Error("User is not authenticated.");
      }

      const response = await axios.post(
        `${API_URL}/cart`,
        {
          productId: product._id,
          quantity: 1,
        },
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      );

      return response.data; // Return updated cart from backend
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Failed to add item to cart" }
      );
    }
  }
);

// Update item quantity in cart (async thunk)
export const updateCartAsync = createAsyncThunk(
  "cart/updateCart",
  async (item, { getState, rejectWithValue }) => {
    try {
      const { user } = getState();
      if (!user || !user.token) {
        throw new Error("User is not authenticated.");
      }

      const response = await axios.put(
        `${API_URL}/cart/${item._id}`,
        { quantity: item.quantity },
        { headers: { Authorization: `Bearer ${user.token}` } }
      );

      return response.data; // Return updated cart from backend
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Failed to update cart" }
      );
    }
  }
);

// Remove item from cart (async thunk)
export const removeFromCartAsync = createAsyncThunk(
  "cart/removeFromCart",
  async (productId, { getState, rejectWithValue }) => {
    try {
      const { user } = getState();
      if (!user || !user.token) {
        throw new Error("User is not authenticated.");
      }

      const response = await axios.delete(`${API_URL}/cart/${productId}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });

      return response.data; // Return updated cart from backend
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Failed to remove item from cart" }
      );
    }
  }
);

// clear cart (async thunk)
export const clearCartAsync = createAsyncThunk(
  "cart/clearCart",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { user } = getState();
      if (!user || !user.token) {
        throw new Error("User is not authenticated.");
      }

      const response = await axios.delete(`${API_URL}/cart/clear`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      console.log(response.data);

      return response.data.items; // Return the cleared cart from the backend
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Failed to clear cart" }
      );
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCartAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.items; // Set cart items for the authenticated user
        localStorage.setItem("cart", JSON.stringify({ items: state.items }));
      })
      .addCase(getCartAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.message || "Failed to fetch user cart";
      })
      // Add to cart
      .addCase(addToCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action.payload);

        state.items = action.payload.items;
        localStorage.setItem("cart", JSON.stringify({ items: state.items }));
      })
      .addCase(addToCartAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.message || "Failed to add item to cart";
      })
      // Update cart
      .addCase(updateCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateCartAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.items;
        localStorage.setItem("cart", JSON.stringify({ items: state.items }));
      })
      .addCase(updateCartAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.message || "Failed to update cart";
      })
      // Remove from cart
      .addCase(removeFromCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removeFromCartAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.items;
        localStorage.setItem("cart", JSON.stringify({ items: state.items }));
      })
      .addCase(removeFromCartAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.payload?.message || "Failed to remove item from cart";
      })
      .addCase(clearCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(clearCartAsync.fulfilled, (state) => {
        state.status = "succeeded";
        state.items = []; // Clear the cart in Redux state
        localStorage.removeItem("cart");
      })
      .addCase(clearCartAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      })
      .addCase(logoutUser, (state) => {
        state.items = []; // Reset cart items
        localStorage.removeItem("cart");
      });
  },
});

// export const { clearCart } = cartSlice.actions;

export default cartSlice.reducer;

// ================================== //
// import { createSlice } from "@reduxjs/toolkit";

// // Initialize cart state with data from localStorage (if available)
// const storedCart = JSON.parse(localStorage.getItem("cart")) || { items: [] };
// const initialState = storedCart;

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const existingItem = state.items.find(
//         (item) => item._id === action.payload._id
//       );
//       if (existingItem) {
//         existingItem.quantity += 1;
//       } else {
//         state.items.push({ ...action.payload, quantity: 1 });
//       }
//       // Save cart to localStorage
//       localStorage.setItem("cart", JSON.stringify(state));
//     },
//     removeFromCart: (state, action) => {
//       state.items = state.items.filter((item) => item._id !== action.payload);
//       // Save cart to localStorage
//       localStorage.setItem("cart", JSON.stringify(state));
//     },
//     increaseQuantity: (state, action) => {
//       const item = state.items.find((item) => item._id === action.payload);
//       if (item) {
//         item.quantity += 1;
//       }
//       localStorage.setItem("cart", JSON.stringify(state));
//     },
//     decreaseQuantity: (state, action) => {
//       const item = state.items.find((item) => item._id === action.payload);
//       if (item && item.quantity > 1) {
//         item.quantity -= 1;
//       }
//       localStorage.setItem("cart", JSON.stringify(state));
//     },
//     // Clear all items in the cart
//     clearCart: (state) => {
//       state.items = [];
//       // Clear cart from localStorage
//       localStorage.removeItem("cart");
//     },
//   },
// });

// export const {
//   addToCart,
//   removeFromCart,
//   increaseQuantity,
//   decreaseQuantity,
//   clearCart,
// } = cartSlice.actions;

// export default cartSlice.reducer;
