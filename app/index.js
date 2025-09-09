import { router } from 'expo-router';
import { Button, ScrollView, Text, View } from 'react-native';
import CategoryCard from '../components/CategoryCard';
import FifthCont from '../components/FifthCont';
import FourthCont from '../components/FourthCont';
import SecondCont from '../components/SecondCont';
import SixthCont from '../components/SixthCont';
import ThirdCont from '../components/ThirdCont';


export default function HomePage() {
  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ marginBottom: 20 }}>🏠 This is the Home Page</Text>
        <Button title="Go to register" onPress={() => router.push('/Register')} />
      </View>

      <CategoryCard />
      <SecondCont />
      <ThirdCont />
      <FourthCont />
      <FifthCont />
      <SixthCont />


    </ScrollView>
  );
}







// // App.js (Standalone - for projects WITHOUT expo-router)
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { NavigationIndependentTree } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import axios from "axios";
// import { createContext, useContext, useEffect, useState } from "react";
// import { ActivityIndicator, Alert, Button, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

// const BASE_URL = "http://192.168.31.16:8000";
// const api = axios.create({ baseURL: BASE_URL, headers: { "Content-Type": "application/json" } });
// api.interceptors.request.use(async (config) => {
//   const token = await AsyncStorage.getItem("access");
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// }, (err) => Promise.reject(err));

// const AuthContext = createContext();
// const CartContext = createContext();

// function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const loadUser = async () => {
//     const access = await AsyncStorage.getItem("access");
//     if (access) {
//       try {
//         const res = await api.get("/accounts/dashboard/");
//         setUser(res.data.userprofile?.user || res.data.userprofile || null);
//       } catch {
//         setUser(null);
//       }
//     }
//     setLoading(false);
//   };

//   useEffect(() => { loadUser(); }, []);

//   const login = async (email, password, cart_id = null) => {
//     const res = await api.post("/accounts/login/", { email, password, cart_id });
//     await AsyncStorage.setItem("access", res.data.access);
//     await AsyncStorage.setItem("refresh", res.data.refresh);
//     setUser(res.data.user);
//     return res.data;
//   };

//   const register = async (first_name, last_name, email, phone_number, password) => {
//     const res = await api.post("/accounts/register/", { first_name, last_name, email, phone_number, password });
//     return res.data;
//   };

//   const logout = async () => {
//     try {
//       const refresh = await AsyncStorage.getItem("refresh");
//       if (refresh) await api.post("/accounts/logout/", { refresh });
//     } catch { }
//     await AsyncStorage.removeItem("access");
//     await AsyncStorage.removeItem("refresh");
//     setUser(null);
//   };

//   return <AuthContext.Provider value={{ user, loading, login, register, logout, loadUser, setUser }}>{children}</AuthContext.Provider>;
// }

// function CartProvider({ children }) {
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const fetchCart = async () => {
//     setLoading(true);
//     try {
//       const res = await api.get("/cart/");
//       if (Array.isArray(res.data)) setItems(res.data);
//       else if (res.data.items) setItems(res.data.items);
//       else setItems(res.data);
//     } catch { setItems([]); } finally { setLoading(false); }
//   };

//   useEffect(() => { fetchCart(); }, []);

//   const addToCart = async (product_id, quantity = 1) => {
//     try { await api.post(`/cart/add_cart/${product_id}/`, { quantity }); }
//     catch { await api.post("/cart/add/", { product_id, quantity }); }
//     await fetchCart();
//   };

//   const removeFromCart = async (product_id, cart_item_id = null) => {
//     try {
//       if (cart_item_id) await api.post(`/cart/remove_cart/${product_id}/${cart_item_id}/`);
//       else await api.post("/cart/remove_from_cart/", { product_id });
//     } catch {
//       try { await api.post(`/cart/remove_cart_item/${product_id}/${cart_item_id}/`); } catch (e) { }
//     }
//     await fetchCart();
//   };

//   const clearCart = async () => {
//     try { await api.post("/cart/clear_cart/"); } catch { try { await api.post("/cart/clear/"); } catch (e) { } }
//     await fetchCart();
//   };

//   const updateCartItem = async (cart_item_id, quantity) => {
//     try { await api.post(`/cart/update/${cart_item_id}/`, { quantity }); }
//     catch { try { await api.post(`/cart/update_cart_item/${cart_item_id}/`, { quantity }); } catch (e) { } }
//     await fetchCart();
//   };

//   return <CartContext.Provider value={{ items, fetchCart, addToCart, removeFromCart, clearCart, updateCartItem, loading }}>{children}</CartContext.Provider>;
// }

// const Stack = createNativeStackNavigator();
// const Spinner = () => <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}><ActivityIndicator size="large" /></View>;

// /* -------------------- Screens -------------------- */

// // Dashboard
// function DashboardScreen({ navigation }) {
//   const { user, loading, logout } = useContext(AuthContext);
//   const { items } = useContext(CartContext);
//   const [profile, setProfile] = useState(null);

//   useEffect(() => {
//     (async () => {
//       try { const res = await api.get("/accounts/dashboard/"); setProfile(res.data.userprofile || null); } catch { setProfile(null); }
//     })();
//   }, []);

//   if (loading) return <Spinner />;

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.heading}>Dashboard</Text>
//       <Text>Welcome, {user?.first_name || user?.email || "User"}</Text>
//       <Text>Orders placed: {profile?.orders_count ?? "-"}</Text>
//       <Text>Cart items: {items?.length ?? 0}</Text>
//       <View style={{ height: 12 }} />
//       <Button title="Products" onPress={() => navigation.navigate("Products")} />
//       <Button title="My Orders" onPress={() => navigation.navigate("Orders")} />
//       <Button title="Cart" onPress={() => navigation.navigate("Cart")} />
//       <Button title="Profile" onPress={() => navigation.navigate("Profile")} />
//       <View style={{ height: 8 }} />
//       <Button title="Logout" color="red" onPress={() => { logout(); navigation.replace("Login"); }} />
//     </ScrollView>
//   );
// }

// // Login
// function LoginScreen({ navigation }) {
//   const { login } = useContext(AuthContext);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [busy, setBusy] = useState(false);

//   const submit = async () => {
//     setBusy(true);
//     try {
//       await login(email, password);
//       Alert.alert("Login", "Logged in successfully");
//       navigation.replace("Dashboard");
//     } catch (e) {
//       Alert.alert("Login failed", e?.response?.data?.error || "Invalid credentials");
//     } finally { setBusy(false); }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Login</Text>
//       <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
//       <TextInput placeholder="Password" style={styles.input} value={password} onChangeText={setPassword} secureTextEntry />
//       <Button title={busy ? "Logging in..." : "Login"} onPress={submit} disabled={busy} />
//       <View style={{ height: 8 }} />
//       <Button title="Register" onPress={() => navigation.navigate("Register")} />
//       <Button title="Forgot password" onPress={() => navigation.navigate("ForgotPassword")} />
//     </View>
//   );
// }

// // Register
// function RegisterScreen({ navigation }) {
//   const { register } = useContext(AuthContext);
//   const [first_name, setFirst] = useState("");
//   const [last_name, setLast] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone_number, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [busy, setBusy] = useState(false);

//   const submit = async () => {
//     setBusy(true);
//     try {
//       const res = await register(first_name, last_name, email, phone_number, password);
//       Alert.alert("Registered", res.message || "Check email for activation");
//       navigation.navigate("Login");
//     } catch (e) {
//       Alert.alert("Registration failed", e?.response?.data?.error || e?.message || JSON.stringify(e?.response?.data));
//     } finally { setBusy(false); }
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.heading}>Register</Text>
//       <TextInput placeholder="First name" style={styles.input} value={first_name} onChangeText={setFirst} />
//       <TextInput placeholder="Last name" style={styles.input} value={last_name} onChangeText={setLast} />
//       <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
//       <TextInput placeholder="Phone" style={styles.input} value={phone_number} onChangeText={setPhone} keyboardType="phone-pad" />
//       <TextInput placeholder="Password" style={styles.input} value={password} onChangeText={setPassword} secureTextEntry />
//       <Button title={busy ? "Registering..." : "Register"} onPress={submit} disabled={busy} />
//     </ScrollView>
//   );
// }

// // Forgot Password
// function ForgotPasswordScreen({ navigation }) {
//   const [email, setEmail] = useState("");
//   const [busy, setBusy] = useState(false);
//   const submit = async () => {
//     setBusy(true);
//     try {
//       const res = await api.post("/accounts/forgotPassword/", { email });
//       Alert.alert("Done", res.data.message || "If email exists, reset link sent");
//       navigation.goBack();
//     } catch (e) { Alert.alert("Error", e?.response?.data?.error || e?.message); } finally { setBusy(false); }
//   };
//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Forgot Password</Text>
//       <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} />
//       <Button title={busy ? "Sending..." : "Send reset email"} onPress={submit} disabled={busy} />
//     </View>
//   );
// }

// // Reset Password
// function ResetPasswordScreen({ navigation }) {
//   const [uidb64, setUidb64] = useState("");
//   const [token, setToken] = useState("");
//   const [new_password, setNewPassword] = useState("");
//   const [busy, setBusy] = useState(false);

//   const submit = async () => {
//     setBusy(true);
//     try {
//       const res = await api.post("/accounts/resetPassword/", { uidb64, token, new_password });
//       Alert.alert("Success", res.data.success || "Password reset successful");
//       navigation.navigate("Login");
//     } catch (e) { Alert.alert("Error", e?.response?.data?.error || e?.message); } finally { setBusy(false); }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Reset Password</Text>
//       <TextInput placeholder="uidb64" style={styles.input} value={uidb64} onChangeText={setUidb64} />
//       <TextInput placeholder="token" style={styles.input} value={token} onChangeText={setToken} />
//       <TextInput placeholder="New password" style={styles.input} value={new_password} onChangeText={setNewPassword} secureTextEntry />
//       <Button title={busy ? "Resetting..." : "Reset Password"} onPress={submit} disabled={busy} />
//     </View>
//   );
// }

// // Products list
// function ProductsScreen({ navigation }) {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetch = async () => {
//     setLoading(true);
//     try {
//       const res = await api.get("/store/products/");
//       if (res.data.products) setProducts(res.data.products);
//       else if (Array.isArray(res.data)) setProducts(res.data);
//       else setProducts(res.data.products || []);
//     } catch (e) { Alert.alert("Error", "Could not load products"); } finally { setLoading(false); }
//   };

//   useEffect(() => { fetch(); }, []);

//   if (loading) return <Spinner />;

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Products</Text>
//       <FlatList
//         data={products}
//         keyExtractor={(i) => String(i.id)}
//         renderItem={({ item }) => (
//           <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("ProductDetail", { product: item })}>
//             <Text style={{ fontWeight: "700" }}>{item.product_name || item.name}</Text>
//             <Text>Price: {item.price}</Text>
//             <Text numberOfLines={2}>{item.description}</Text>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// }

// // Product detail
// function ProductDetailScreen({ route }) {
//   const { product } = route.params;
//   const { addToCart } = useContext(CartContext);

//   const onAdd = async () => {
//     try {
//       await addToCart(product.id, 1);
//       Alert.alert("Added to cart");
//     } catch { Alert.alert("Error adding to cart"); }
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.heading}>{product.product_name || product.name}</Text>
//       <Text>{product.description}</Text>
//       <Text>Price: {product.price}</Text>
//       <View style={{ height: 8 }} />
//       <Button title="Add to Cart" onPress={onAdd} />
//     </ScrollView>
//   );
// }

// // Submit review
// function SubmitReviewScreen({ route, navigation }) {
//   const { product_id } = route.params;
//   const [subject, setSubject] = useState("");
//   const [review, setReview] = useState("");
//   const [rating, setRating] = useState("5");
//   const [busy, setBusy] = useState(false);

//   const submit = async () => {
//     setBusy(true);
//     try {
//       const res = await api.post(`/store/submit_review/${product_id}/`, { subject, review, rating: Number(rating) });
//       Alert.alert("Done", res.data.message || "Review submitted");
//       navigation.goBack();
//     } catch (e) { Alert.alert("Error", e?.response?.data?.error || JSON.stringify(e?.response?.data) || e.message); } finally { setBusy(false); }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Submit Review</Text>
//       <TextInput placeholder="Subject" style={styles.input} value={subject} onChangeText={setSubject} />
//       <TextInput placeholder="Review" style={[styles.input, { height: 100 }]} value={review} onChangeText={setReview} multiline />
//       <TextInput placeholder="Rating (1-5)" style={styles.input} value={rating} onChangeText={setRating} keyboardType="numeric" />
//       <Button title={busy ? "Sending..." : "Submit"} onPress={submit} disabled={busy} />
//     </View>
//   );
// }

// // Cart screen
// function CartScreen({ navigation }) {
//   const { items, updateCartItem, removeFromCart, clearCart, loading } = useContext(CartContext);

//   if (loading) return <Spinner />;

//   const total = items.reduce((s, it) => {
//     const price = Number(it.product?.price ?? it.price ?? 0);
//     return s + price * (it.quantity || 0);
//   }, 0);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Cart</Text>
//       <FlatList
//         data={items}
//         keyExtractor={(i) => String(i.id)}
//         renderItem={({ item }) => (
//           <View style={styles.card}>
//             <Text style={{ fontWeight: "700" }}>{item.product?.product_name || item.product?.name || item.product}</Text>
//             <Text>Price: {item.product?.price || item.price}</Text>
//             <Text>Qty: {item.quantity}</Text>
//             <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
//               <Button title="+" onPress={() => updateCartItem(item.id, (item.quantity || 1) + 1)} />
//               <View style={{ width: 8 }} />
//               <Button title="-" onPress={() => updateCartItem(item.id, Math.max(1, (item.quantity || 1) - 1))} />
//               <View style={{ width: 8 }} />
//               <Button title="Remove" onPress={() => removeFromCart(item.product?.id || item.product_id || item.product, item.id)} />
//             </View>
//           </View>
//         )}
//         ListEmptyComponent={<Text style={{ padding: 12 }}>Cart is empty</Text>}
//       />
//       <Text style={{ fontSize: 16, fontWeight: "700", padding: 12 }}>Total: {total}</Text>
//       <Button title="Place Order" onPress={() => navigation.navigate("PlaceOrder", { total })} />
//       <View style={{ height: 8 }} />
//       <Button title="Clear Cart" onPress={() => {
//         Alert.alert("Clear cart", "Are you sure?", [{ text: "Cancel" }, { text: "Yes", onPress: () => clearCart() }]);
//       }} />
//     </View>
//   );
// }

// // Place order
// function PlaceOrderScreen({ route, navigation }) {
//   const totalFrom = route.params?.total ?? 0;
//   const [first_name, setFirst] = useState("");
//   const [last_name, setLast] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [address_line_1, setAddr1] = useState("");
//   const [address_line_2, setAddr2] = useState("");
//   const [country, setCountry] = useState("");
//   const [stateVal, setStateVal] = useState("");
//   const [city, setCity] = useState("");
//   const [busy, setBusy] = useState(false);

//   const submit = async () => {
//     setBusy(true);
//     try {
//       const res = await api.post("/orders/place_order/", {
//         first_name, last_name, phone, email,
//         address_line_1, address_line_2, country, state: stateVal, city, order_note: ""
//       });
//       Alert.alert("Order placed", `Order #${res.data.order_number}`);
//       navigation.replace("Payment", { order_number: res.data.order_number, total: res.data.total });
//     } catch (e) { Alert.alert("Error", e?.response?.data?.error || JSON.stringify(e?.response?.data) || e.message); } finally { setBusy(false); }
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.heading}>Checkout</Text>
//       <TextInput placeholder="First name" style={styles.input} value={first_name} onChangeText={setFirst} />
//       <TextInput placeholder="Last name" style={styles.input} value={last_name} onChangeText={setLast} />
//       <TextInput placeholder="Phone" style={styles.input} value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
//       <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />
//       <TextInput placeholder="Address line 1" style={styles.input} value={address_line_1} onChangeText={setAddr1} />
//       <TextInput placeholder="Address line 2" style={styles.input} value={address_line_2} onChangeText={setAddr2} />
//       <TextInput placeholder="Country" style={styles.input} value={country} onChangeText={setCountry} />
//       <TextInput placeholder="State" style={styles.input} value={stateVal} onChangeText={setStateVal} />
//       <TextInput placeholder="City" style={styles.input} value={city} onChangeText={setCity} />
//       <Button title={busy ? "Placing..." : `Place order (est ${totalFrom})`} onPress={submit} disabled={busy} />
//     </ScrollView>
//   );
// }

// // Payment
// function PaymentScreen({ route, navigation }) {
//   const { order_number, total } = route.params || {};
//   const [transID, setTrans] = useState("");
//   const [method, setMethod] = useState("razorpay");
//   const [busy, setBusy] = useState(false);

//   const doPayment = async () => {
//     setBusy(true);
//     try {
//       const trans = transID || `TXN_${Date.now()}`;
//       const res = await api.post("/orders/payments/", { orderID: order_number, transID: trans, payment_method: method, status: "Success" });
//       Alert.alert("Payment saved");
//       navigation.replace("OrderComplete", { order_number: res.data.order_number, payment_id: res.data.transID });
//     } catch (e) { Alert.alert("Payment failed", e?.response?.data?.error || JSON.stringify(e?.response?.data) || e.message); } finally { setBusy(false); }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Payment</Text>
//       <Text>Order: {order_number}</Text>
//       <Text>Amount: {total}</Text>
//       <TextInput placeholder="Transaction id (optional)" style={styles.input} value={transID} onChangeText={setTrans} />
//       <TextInput placeholder="Method" style={styles.input} value={method} onChangeText={setMethod} />
//       <Button title={busy ? "Processing..." : "Pay (simulate)"} onPress={doPayment} disabled={busy} />
//     </View>
//   );
// }

// // OrderComplete
// function OrderCompleteScreen({ route, navigation }) {
//   const { order_number, payment_id } = route.params || {};
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     (async () => {
//       try {
//         const res = await api.get("/orders/order_complete/", { params: { order_number, payment_id } });
//         setData(res.data);
//       } catch { Alert.alert("Error", "Unable to fetch order details"); } finally { setLoading(false); }
//     })();
//   }, []);

//   if (loading) return <Spinner />;

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.heading}>Order Complete</Text>
//       <Text>Order #: {data?.order?.order_number || order_number}</Text>
//       <Text>Subtotal: {data?.subtotal}</Text>
//       <View style={{ height: 8 }} />
//       <Button title="Go to Orders" onPress={() => navigation.navigate("Orders")} />
//     </ScrollView>
//   );
// }

// // Orders list and detail
// function OrdersScreen({ navigation }) {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     (async () => {
//       try {
//         const res = await api.get("/accounts/my_orders/");
//         if (res.data.orders) setOrders(res.data.orders);
//         else setOrders(res.data);
//       } catch { Alert.alert("Error", "Unable to fetch orders. Are you logged in?"); }
//     })();
//   }, []);

//   return (
//     <FlatList data={orders} keyExtractor={(i) => String(i.id)} renderItem={({ item }) => (
//       <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("OrderDetail", { order_id: item.order_number })}>
//         <Text style={{ fontWeight: "700" }}>#{item.order_number}</Text>
//         <Text>Status: {item.status}</Text>
//         <Text>Total: {item.total}</Text>
//       </TouchableOpacity>
//     )} ListEmptyComponent={<View style={styles.container}><Text>No orders</Text></View>} />
//   );
// }

// function OrderDetailScreen({ route }) {
//   const { order_id } = route.params || {};
//   const [detail, setDetail] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     (async () => {
//       try {
//         const res = await api.get(`/accounts/order_detail/${order_id}/`);
//         setDetail(res.data);
//       } catch { Alert.alert("Error", "Unable to fetch order detail"); } finally { setLoading(false); }
//     })();
//   }, []);

//   if (loading) return <Spinner />;

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.heading}>Order {detail.order_id}</Text>
//       <Text>Status: {detail.status}</Text>
//       <Text>Subtotal: {detail.subtotal}</Text>
//       {detail.items && detail.items.map((it, idx) => (
//         <View key={idx} style={styles.card}>
//           <Text>{it.product}</Text>
//           <Text>Qty: {it.quantity}</Text>
//           <Text>Price: {it.price}</Text>
//         </View>
//       ))}
//     </ScrollView>
//   );
// }

// // Profile & edit
// function ProfileScreen({ navigation }) {
//   const { user } = useContext(AuthContext);
//   const [profile, setProfile] = useState(null);

//   useEffect(() => {
//     (async () => {
//       try {
//         const res = await api.get("/accounts/dashboard/");
//         setProfile(res.data.userprofile || null);
//       } catch { }
//     })();
//   }, []);

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.heading}>Profile</Text>
//       <Text>First name: {profile?.user?.first_name || user?.first_name}</Text>
//       <Text>Last name: {profile?.user?.last_name || user?.last_name}</Text>
//       <Text>Email: {profile?.user?.email || user?.email}</Text>
//       <View style={{ height: 8 }} />
//       <Button title="Edit Profile" onPress={() => navigation.navigate("EditProfile", { profile })} />
//       <Button title="Change Password" onPress={() => navigation.navigate("ChangePassword")} />
//     </ScrollView>
//   );
// }

// function EditProfileScreen({ route, navigation }) {
//   const initial = route.params?.profile || {};
//   const [first_name, setFirst] = useState(initial.user?.first_name || "");
//   const [last_name, setLast] = useState(initial.user?.last_name || "");
//   const [phone_number, setPhone] = useState(initial.user?.phone_number || "");
//   const [address_line_1, setAddr1] = useState(initial.address_line_1 || "");
//   const [address_line_2, setAddr2] = useState(initial.address_line_2 || "");
//   const [city, setCity] = useState(initial.city || "");
//   const [stateVal, setStateVal] = useState(initial.state || "");
//   const [country, setCountry] = useState(initial.country || "");
//   const [busy, setBusy] = useState(false);

//   const submit = async () => {
//     setBusy(true);
//     try {
//       const res = await api.put("/accounts/edit_profile/", {
//         first_name, last_name, phone_number, address_line_1, address_line_2, city, state: stateVal, country
//       });
//       Alert.alert("Profile updated", res.data.message || "Saved");
//       navigation.goBack();
//     } catch (e) { Alert.alert("Error", e?.response?.data || e.message); } finally { setBusy(false); }
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.heading}>Edit Profile</Text>
//       <TextInput placeholder="First name" style={styles.input} value={first_name} onChangeText={setFirst} />
//       <TextInput placeholder="Last name" style={styles.input} value={last_name} onChangeText={setLast} />
//       <TextInput placeholder="Phone" style={styles.input} value={phone_number} onChangeText={setPhone} />
//       <TextInput placeholder="Address 1" style={styles.input} value={address_line_1} onChangeText={setAddr1} />
//       <TextInput placeholder="Address 2" style={styles.input} value={address_line_2} onChangeText={setAddr2} />
//       <TextInput placeholder="City" style={styles.input} value={city} onChangeText={setCity} />
//       <TextInput placeholder="State" style={styles.input} value={stateVal} onChangeText={setStateVal} />
//       <TextInput placeholder="Country" style={styles.input} value={country} onChangeText={setCountry} />
//       <Button title={busy ? "Saving..." : "Save"} onPress={submit} disabled={busy} />
//     </ScrollView>
//   );
// }

// function ChangePasswordScreen({ navigation }) {
//   const [current_password, setCurrent] = useState("");
//   const [new_password, setNew] = useState("");
//   const [confirm_password, setConfirm] = useState("");
//   const [busy, setBusy] = useState(false);

//   const submit = async () => {
//     setBusy(true);
//     try {
//       const res = await api.post("/accounts/change_password/", { current_password, new_password, confirm_password });
//       Alert.alert("Success", res.data.message || "Password updated");
//       navigation.goBack();
//     } catch (e) { Alert.alert("Error", e?.response?.data?.error || e?.message); } finally { setBusy(false); }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Change Password</Text>
//       <TextInput placeholder="Current password" style={styles.input} secureTextEntry value={current_password} onChangeText={setCurrent} />
//       <TextInput placeholder="New password" style={styles.input} secureTextEntry value={new_password} onChangeText={setNew} />
//       <TextInput placeholder="Confirm new password" style={styles.input} secureTextEntry value={confirm_password} onChangeText={setConfirm} />
//       <Button title={busy ? "Saving..." : "Change"} onPress={submit} disabled={busy} />
//     </View>
//   );
// }

// /* -------------------- Root -------------------- */

// export default function App() {
//   return (
//     <AuthProvider>
//       <CartProvider>
//         <NavigationIndependentTree>
//           <Stack.Navigator initialRouteName="Products" screenOptions={{ headerTitleAlign: "center" }}>
//             <Stack.Screen name="Login" component={LoginScreen} />
//             <Stack.Screen name="Register" component={RegisterScreen} />
//             <Stack.Screen name="Dashboard" component={DashboardScreen} />
//             <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
//             <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
//             <Stack.Screen name="Products" component={ProductsScreen} />
//             <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
//             <Stack.Screen name="SubmitReview" component={SubmitReviewScreen} />
//             <Stack.Screen name="Cart" component={CartScreen} />
//             <Stack.Screen name="PlaceOrder" component={PlaceOrderScreen} />
//             <Stack.Screen name="Payment" component={PaymentScreen} />
//             <Stack.Screen name="OrderComplete" component={OrderCompleteScreen} />
//             <Stack.Screen name="Orders" component={OrdersScreen} />
//             <Stack.Screen name="OrderDetail" component={OrderDetailScreen} />
//             <Stack.Screen name="Profile" component={ProfileScreen} />
//             <Stack.Screen name="EditProfile" component={EditProfileScreen} />
//             <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
//           </Stack.Navigator>
//         </NavigationIndependentTree>
//       </CartProvider>
//     </AuthProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flexGrow: 1, padding: 16 },
//   heading: { fontSize: 20, fontWeight: "700", marginBottom: 10 },
//   input: { borderWidth: 1, borderColor: "#ddd", padding: 10, borderRadius: 6, marginBottom: 10 },
//   card: { padding: 12, borderWidth: 1, borderColor: "#eee", borderRadius: 8, marginBottom: 8 }
// });

































// import { NavigationIndependentTree } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import axios from "axios";
// import { createContext, useContext, useEffect, useState } from "react";
// import { Alert, Button, FlatList, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";

// // 🔹 API Setup
// const api = axios.create({
//   baseURL: "http://192.168.31.16:8000/api/",
// });

// // 🔹 Cart Context
// const CartContext = createContext();
// const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
//   const addToCart = (product) => {
//     const existing = cart.find((item) => item.id === product.id);
//     if (existing) {
//       setCart(cart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
//     } else {
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }
//   };
//   const removeFromCart = (id) => setCart(cart.filter((item) => item.id !== id));
//   const clearCart = () => setCart([]);
//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // 🔹 Screens
// function RegisterScreen({ navigation }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const handleRegister = async () => {
//     try {
//       await api.post("register/", { username, password });
//       Alert.alert("Success", "Registered successfully");
//       navigation.navigate("Login");
//     } catch {
//       Alert.alert("Error", "Registration failed");
//     }
//   };
//   return (
//     <SafeAreaView style={{ flex: 1, padding: 20 }}>
//       <TextInput placeholder="Username" value={username} onChangeText={setUsername} style={{ marginBottom: 10, borderWidth: 1, padding: 8 }} />
//       <TextInput placeholder="Password" value={password} secureTextEntry onChangeText={setPassword} style={{ marginBottom: 10, borderWidth: 1, padding: 8 }} />
//       <Button title="Register" onPress={handleRegister} />
//     </SafeAreaView>
//   );
// }

// function LoginScreen({ navigation }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const handleLogin = async () => {
//     try {
//       await api.post("login/", { username, password });
//       Alert.alert("Success", "Logged in successfully");
//       navigation.navigate("Categories");
//     } catch {
//       Alert.alert("Error", "Login failed");
//     }
//   };
//   return (
//     <SafeAreaView style={{ flex: 1, padding: 20 }}>
//       <TextInput placeholder="Username" value={username} onChangeText={setUsername} style={{ marginBottom: 10, borderWidth: 1, padding: 8 }} />
//       <TextInput placeholder="Password" value={password} secureTextEntry onChangeText={setPassword} style={{ marginBottom: 10, borderWidth: 1, padding: 8 }} />
//       <Button title="Login" onPress={handleLogin} />
//     </SafeAreaView>
//   );
// }

// function CategoriesScreen({ navigation }) {
//   const [categories, setCategories] = useState([]);
//   useEffect(() => {
//     api.get("categories/").then((res) => setCategories(res.data));
//   }, []);
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <FlatList
//         data={categories}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <TouchableOpacity onPress={() => navigation.navigate("Subcategories", { categoryId: item.id })}>
//             <Text style={{ padding: 15, fontSize: 18 }}>{item.name}</Text>
//           </TouchableOpacity>
//         )}
//       />
//     </SafeAreaView>
//   );
// }

// function SubcategoriesScreen({ route, navigation }) {
//   const { categoryId } = route.params;
//   const [subcategories, setSubcategories] = useState([]);
//   useEffect(() => {
//     api.get(`subcategories/${categoryId}/`).then((res) => setSubcategories(res.data));
//   }, []);
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <FlatList
//         data={subcategories}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <TouchableOpacity onPress={() => navigation.navigate("Products", { subcategoryId: item.id })}>
//             <Text style={{ padding: 15, fontSize: 18 }}>{item.name}</Text>
//           </TouchableOpacity>
//         )}
//       />
//     </SafeAreaView>
//   );
// }

// function ProductsScreen({ route, navigation }) {
//   const { subcategoryId } = route.params;
//   const [products, setProducts] = useState([]);
//   const { addToCart } = useContext(CartContext);
//   useEffect(() => {
//     api.get(`products/${subcategoryId}/`).then((res) => setProducts(res.data));
//   }, []);
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <FlatList
//         data={products}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={{ padding: 10, borderBottomWidth: 1 }}>
//             <Text>{item.name} - ${item.price}</Text>
//             <Button title="Add to Cart" onPress={() => addToCart(item)} />
//           </View>
//         )}
//       />
//       <Button title="Go to Cart" onPress={() => navigation.navigate("Cart")} />
//     </SafeAreaView>
//   );
// }

// function CartScreen({ navigation }) {
//   const { cart, removeFromCart, clearCart } = useContext(CartContext);
//   const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <FlatList
//         data={cart}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={{ padding: 10, borderBottomWidth: 1 }}>
//             <Text>{item.name} x {item.quantity}</Text>
//             <Text>${item.price * item.quantity}</Text>
//             <Button title="Remove" onPress={() => removeFromCart(item.id)} />
//           </View>
//         )}
//       />
//       <Text style={{ padding: 20 }}>Total: ${total}</Text>
//       <Button title="Clear Cart" onPress={clearCart} />
//       <Button title="Checkout" onPress={() => navigation.navigate("Checkout")} />
//     </SafeAreaView>
//   );
// }

// function CheckoutScreen({ navigation }) {
//   const { cart, clearCart } = useContext(CartContext);
//   const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
//   const handleCheckout = async () => {
//     try {
//       await api.post("checkout/", { items: cart });
//       Alert.alert("Success", "Order placed successfully");
//       clearCart();
//       navigation.navigate("OrderHistory");
//     } catch {
//       Alert.alert("Error", "Checkout failed");
//     }
//   };
//   return (
//     <SafeAreaView style={{ flex: 1, padding: 20 }}>
//       <Text>Total: ${total}</Text>
//       <Button title="Place Order" onPress={handleCheckout} />
//     </SafeAreaView>
//   );
// }

// function OrderHistoryScreen() {
//   const [orders, setOrders] = useState([]);
//   useEffect(() => {
//     api.get("orders/history/").then((res) => setOrders(res.data));
//   }, []);
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <FlatList
//         data={orders}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={{ padding: 15, borderBottomWidth: 1 }}>
//             <Text>Order #{item.id} - ${item.total} - {item.status}</Text>
//           </View>
//         )}
//       />
//     </SafeAreaView>
//   );
// }

// // 🔹 Stack Navigator
// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <CartProvider>
//       <NavigationIndependentTree>
//         <Stack.Navigator initialRouteName="Register">
//           <Stack.Screen name="Register" component={RegisterScreen} />
//           <Stack.Screen name="Login" component={LoginScreen} />
//           <Stack.Screen name="Categories" component={CategoriesScreen} />
//           <Stack.Screen name="Subcategories" component={SubcategoriesScreen} />
//           <Stack.Screen name="Products" component={ProductsScreen} />
//           <Stack.Screen name="Cart" component={CartScreen} />
//           <Stack.Screen name="Checkout" component={CheckoutScreen} />
//           <Stack.Screen name="OrderHistory" component={OrderHistoryScreen} />
//         </Stack.Navigator>
//       </NavigationIndependentTree>
//     </CartProvider>
//   );
// }
