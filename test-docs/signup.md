# SIGN UP PAGE

URL: <http://84.247.134.126:97/>

## Basic Ui Checks

**1.** Make sure the signup button is visible and can be clicked from the login page
**2.** The `Sign Up` button when clicked should route to [subscribe](http://84.247.134.126:97/subscribe/)
**3.** An **`All-in-one-platform`** inscription should be visible on the page
**4.** User should be able to see and click on any package of his/her choice
**5.** Click on the login button on the sign up page to see if it redirects you to the login page
**6.** Click the back button on the sign up page to be redirected to the `subscription page`
**7.** Click the `login` button on the `subscription page` to be redirected to the `Login Page`
**8.**

### Possible Test Cases

**1.** Sign up with an already used email address
**2.** Leave all fields blank on the sign up page and click the `Sign Up` button
**3.** Fill all fields on the sign up page with valid data and click the `Back` button
System should prompt user to proceed to form cancellation or not.
**4.**


## Test Cases

### Positive Test Case

**1.** Valid Input -All Fields Provided

**Description :** Fill all fields with the valid details to be able to sign up to the payroll system

**Steps:**

- Enter URL in the browser and wait for the Login page to load
- Click on the Sign Up button below the Login button
- Go through the list of available packages and click on the subscribe button of your prefered package
- Fill the sign up form with the necessary information needed and click on Sign Up
- Wait for account verification page to load and enter verification code sent to mail used in the sign up proccess
- After verification is complete , kindly login into the system
- After login , proceed to pay for subscription .
- After successful payment, you will be redirected to the company page

**Expected Outcome** : `you will be redirected to the company page`
**Result:** `PASS`

### Negative Test Cases

**1.** Invalid Input - Empty Entries
**Description :** Leave all text fields empty and proceed to the next stage.
