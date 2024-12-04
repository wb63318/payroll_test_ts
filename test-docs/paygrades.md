# PAYGRADE PAGE TEST CASES

### UI Issues
Viewing an employee's paygrade shows an empty failure notification.
![alt text](image-1.png)

## Adding a Paygrade

### Test Description
Test to verify that adding a paygrade adds it to the list of paygrades in the table. 

### Test Case Procedure
1. Go to the paygrade section.
2. Click the 'Add Pay Grade' button.
3. Enter the details required and click on the 'Save' button. 
### Expected Output
The paygrade is added to the paygrade section.

## Viewing a Paygrade

### Test Description
Test to verify that viewing a specific paygrade from the table has the same details displayed.

### Test Case Procedure
1. Go to the paygrade section.
2. Click on the eye icon in the paygrade list on any paygrade.
### Expected Output
The paygrade information is accurately displayed

## Updating a Paygrade

### Test Description
Test to verify that update specific fields in a specific paygrade updates the paygrade information.


### Test Case Procedure
1. Go to the paygrade section.
2. Click on the edit icon in the paygrade list on any paygrade.
3. Modify any of the fields and click on the 'Save' button.

### Expected Output
The paygrade is updated with the new modifications.

## Search

### Test Description
Test to verify that inputting a term in the search field returns results similar to the search term.

### Test Case Procedure
1. Input a search term into the search bar.

### Expected Output
The table is filtered based on the search term.

## Pagination

### Test Description
Test to verify that the list of paygrades is filtered based on the number of records per page.

### Test Case Procedure
1. Ensure that the list of paygrades is more than 5 rows.
2. Click on another number for the records per page.

### Expected Output
The list of paygrades is filtered based on the number of records per page.

## Back button

### Test Description
Test to verify that clicking on the back button navigates the user to the paygrades list.

### Test Case Procedure
1. Click on the back button after clicking on the view icon.
2. Click on the back button after clicking on the edit icon.
### Expected Output
The user is navigated to the paygrades list.


## Validation Checks
1. Verify that the paygrade name doesn't accept special characters or whitespace at the beginning of the name.
2. Verify that the provident fund doesn't accept negative numbers. 
3. Verify that the three tier fund doesn't accept negative numbers. 
4. Verify that earnings can't be negative.
5. Verify that deductions can't be negative.
