# CHANGE PASSWORD TEST CASES

## UI TESTS

**1.** `Change Password` should be visible and accessible from the  sidebar
**2.**  `Change Password` should be visible and accessible from the user panel dropdown menu
**3.** `Change Password` Page should contain :

- Current Password field
- New Password field
- Confirm Password field

**4.** Each field should have a hide password icon

## POSITIVE TEST CASES

### Valid Password Change 

**Description:** Fill all fields with valid data to initiate a password change

**Steps:**

- Open web browser and enter site url
- Enter valid login credentials to be able to login to payroll account
- Select a company to able to access your dashboard 
- Click on Change password from the side Navbar
- Enter your `Current Password` followed by your desired password
- Click on the save button to finalise the password change

**Expected Outcome**
A message stating that "The password has been changed successfully"

## NEGATIVE TEST CASES

### Invalid Password 

**Description** Enter a password that doesn't match your current password to see if the password can be chaged by entering a wrong password

**Steps:**

- Open a web browser and enter the site URL.
- Enter valid login credentials to access your payroll account.
- Select a company to access your dashboard.
- Click on "Change Password" from the sidebar menu.
- In the "Old Password" field, enter an incorrect password.
- In the "New Password" field, enter your desired new password.
- Re-enter the new password in the confirmation field.
- Click the "Save" button to attempt the password change.

**Expected Outcome**
The system displays an error message and prevents the password change.

