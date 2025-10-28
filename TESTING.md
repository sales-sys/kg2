# Test Credentials & Sample Data

## Test Users

### Regular Customer Account
```
Email: customer@test.com
Password: Test123!
Role: customer
```

### Admin Account
```
Email: admin@kg.co.za
Password: Admin123!
Role: admin
```

**Note**: You need to create these users through the register page first, then update the role in Firebase Console for the admin user.

---

## Sample Order Flow

### 1. Register
- Name: Test Customer
- Email: customer@test.com
- Password: Test123!
- Phone: 0123456789

### 2. Login
- Use credentials above

### 3. Add Products to Cart
- Browse products page
- Add 2-3 items
- View cart

### 4. Checkout
- Full Name: Test Customer
- Email: customer@test.com
- Phone: 0123456789
- Address: 123 Test Street
- City: Polokwane
- Province: Limpopo
- Postal Code: 0700
- Payment: PayFast (sandbox - won't charge)

### 5. View Order
- Check success page
- Go to account page
- See order in history

### 6. Admin View (After Setting Admin Role)
- Login as admin
- Go to admin.html
- See all orders
- Update order status to "paid"

---

## PayFast Test Card

For sandbox testing:

```
Card Number: 4111 1111 1111 1111
CVV: 123
Expiry: Any future date
Name: Test User
```

**Note**: Sandbox mode - no real charges

---

## Firebase Test Data

### Sample Product (For Manual Testing)
```json
{
  "name": "Test Product",
  "code": "TEST-001",
  "category": "Construction Materials",
  "price": 99.99,
  "description": "Test product for development",
  "image": "images/placeholder.jpg",
  "inStock": true
}
```

### Sample Order
```json
{
  "userId": "firebase-auth-uid",
  "fullName": "Test Customer",
  "email": "customer@test.com",
  "phone": "0123456789",
  "address": "123 Test Street",
  "city": "Polokwane",
  "province": "Limpopo",
  "postalCode": "0700",
  "items": [
    {
      "id": "product-id",
      "name": "Test Product",
      "code": "TEST-001",
      "price": 99.99,
      "quantity": 2
    }
  ],
  "total": 199.98,
  "paymentMethod": "payfast",
  "status": "pending",
  "createdAt": "2025-01-15T10:00:00.000Z"
}
```

---

## Testing Checklist

### Authentication Tests
- [ ] Register new user
- [ ] Login with correct credentials
- [ ] Login with wrong password (should fail)
- [ ] Logout
- [ ] Access account page when logged out (should redirect)
- [ ] Access admin page as regular user (should deny)

### Cart Tests
- [ ] Add product to cart
- [ ] Cart count updates in header
- [ ] View cart page
- [ ] Update quantity
- [ ] Remove item
- [ ] Cart persists on page reload
- [ ] Proceed to checkout button works

### Checkout Tests
- [ ] Fill shipping form
- [ ] Select PayFast payment
- [ ] Submit order
- [ ] Redirect to PayFast sandbox
- [ ] Complete payment (sandbox)
- [ ] Return to success page
- [ ] Order saved in Firestore
- [ ] Cart cleared after order

### Admin Tests
- [ ] Login as admin
- [ ] See Admin link in header
- [ ] View admin dashboard
- [ ] See all orders
- [ ] Update order status
- [ ] Search orders
- [ ] Filter by status
- [ ] View order details modal

### Responsive Tests
- [ ] Test on mobile (Chrome DevTools)
- [ ] Mobile menu works
- [ ] Forms usable on mobile
- [ ] Cart works on mobile
- [ ] Checkout works on mobile
- [ ] Admin dashboard usable on tablet

### Browser Tests
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

---

## Common Test Scenarios

### Scenario 1: First-Time Customer
1. Visit homepage
2. Browse products
3. Add 3 items to cart
4. Click cart (no account yet)
5. Click "Proceed to Checkout"
6. See "must login" or redirect to login
7. Click "Register"
8. Create account
9. Redirected to account page
10. Go back to cart
11. Proceed to checkout
12. Complete order
13. See success page

### Scenario 2: Returning Customer
1. Visit homepage
2. Click "Login"
3. Enter credentials
4. Browse products
5. Add items to cart
6. Checkout
7. View order in account page

### Scenario 3: Admin Order Management
1. Customer places order
2. Admin logs in
3. Goes to admin dashboard
4. Sees new order (pending)
5. Updates status to "paid"
6. Customer refreshes account page
7. Sees updated status

---

## Expected Behavior

### When NOT Logged In
- Can browse all pages
- Can add to cart
- Can view cart
- CANNOT checkout (must login first)
- CANNOT access account page
- CANNOT access admin page

### When Logged In (Customer)
- All of the above
- CAN checkout
- CAN view account page
- CAN see order history
- Header shows "Account" and "Logout"
- CANNOT access admin page

### When Logged In (Admin)
- All of the above
- CAN access admin page
- Header shows "Admin", "Account", and "Logout"
- CAN view all orders
- CAN update order statuses

---

## Debugging Tips

### If cart not working:
```javascript
// Open browser console
localStorage.getItem('kg-cart')
// Should show cart array
```

### If user not persisting:
```javascript
// Open browser console
localStorage.getItem('kg-user')
// Should show user object
```

### If Firebase errors:
- Check browser console
- Verify Firebase config
- Check Firestore rules
- Ensure internet connection

### If PayFast not working:
- Check merchant credentials
- Verify sandbox mode
- Check return URLs
- See PayFast dashboard for logs

---

## Quick Reset

To start fresh during testing:

```javascript
// In browser console
localStorage.clear()
location.reload()
```

Then register new users and test again.

---

## Production Testing

Before going live, test with REAL scenarios:

1. Register with real email
2. Add real products
3. Use real shipping address
4. Use test credit card (sandbox)
5. Verify order email (when implemented)
6. Check order in admin dashboard
7. Update status
8. Verify customer can see updated status

---

**Happy Testing!** 🧪
