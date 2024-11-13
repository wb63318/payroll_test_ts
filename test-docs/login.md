# LOGIN PAGE  

## UI Tests

1. Check if the login page is accessible

2. Check to see if the url changes from  **<http://84.247.134.126:97>** to **<http://84.247.134.126:97/auth/login>**.

3. Check if the axonpayroll logo is visible
4. Check if close button on forgot password page returns you login page

## Test Cases

### Positve Test Cases

**1.** Valid Input - All Fields Provided

**Description :** Input all correct login creditials to be able to login into the payroll system

**Steps**

- Provide a valid email that was used in the signup process
- Fill the password field with the exact password used in the registration process
- Click the login button to finalise the login process

**Expected Outcome:** User is redirected to the company selection page to either choose or add a company

**Result:** This should be a **PASS** else a **NOTE** should be added to state what actually happened / the **error** message returned.

## Negative Test Cases

**1.** Invalid Input - Email Not Provided

**Description:** All fields should be filled except the Email field

**Steps:**

- Open web browser and enter payroll url
- Enter Password into password field
- Leave email field empty
- Click on `Login` button

**Expected Outcome:**
**Creation Fails**
An error message should appear below the email field stating that `Email is required` therefore prompting the user enter his/her email.

**Result:** `PASS`

**2.** Invalid Input - Password not Provided
