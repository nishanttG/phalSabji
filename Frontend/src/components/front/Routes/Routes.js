
// import React from 'react';
// import { Route, Switch } from 'react-router-dom';
// import Products from '../Products/Products';
// import About from '../About/About';
// import ContactUs from '../Contactus/ContactUs';
// import SignupForm from '../Signup/Signup';
// import Cart from '../Cart/Cart';
// import LoginPage from '../login/LoginPage'; // Update the import statement

// const Routes = ({
//   productItems,
//   cartItems,
//   handleAddProduct,
//   handleRemoveProduct,
//   handleCartClearance,
//   customerId,
//   phoneNumber, // Include the customerId prop
// }) => {
//   return (
//     <div>
//       <Switch>
//         <Route path="/" exact>
//           <Products
//             productItems={productItems}
//             handleAddProduct={handleAddProduct}
//           />
//         </Route>
//         <Route path="/about" exact>
//           <About key="about" />
//         </Route>
//         <Route path="/contactus" exact>
//           <ContactUs key="contactus" />
//         </Route>
//         <Route path="/signup" exact>
//           <SignupForm />
//         </Route>
//         <Route path="/LoginPage" exact>
//           <LoginPage />
//         </Route>
//         <Route path="/cart" exact>
//           <Cart
//             cartItems={cartItems}
//             handleAddProduct={handleAddProduct}
//             handleRemoveProduct={handleRemoveProduct}
//             handleCartClearance={handleCartClearance}
//             customerId={customerId}
//             phone={phoneNumber}// Pass the customerId prop
//           />
//         </Route>
//       </Switch>
//     </div>
//   );
// };

// export default Routes;
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Products from '../Products/Products';
import About from '../About/About';
import ContactUs from '../Contactus/ContactUs';
import SignupForm from '../Signup/Signup';
import Cart from '../Cart/Cart';
import LoginPage from '../Login/LoginPage'; // Update the import statement

const Routes = ({
  productItems,
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearance,
  setCustomerId,
  customerId,
  // Include the handleCustomerData prop
}) => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Products
            productItems={productItems}
            handleAddProduct={handleAddProduct}
          />
        </Route>
        <Route path="/about" exact>
          <About key="about" />
        </Route>
        <Route path="/contactus" exact>
          <ContactUs key="contactus" />
        </Route>
        <Route path="/signup" exact>
          <SignupForm  />
        </Route>
        <Route path="/login" exact>
          <LoginPage setCustomerId={setCustomerId} />
        </Route>
        <Route path="/cart" exact>
          <Cart
            cartItems={cartItems}
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
            handleCartClearance={handleCartClearance}
            customerId={customerId}
             // Pass the phoneNumber prop
          />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
