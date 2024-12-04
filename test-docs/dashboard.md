# DASHBOARD PAGE TEST CASES

### UI Issues
The payroll cost summary is overlapping 
![alt text](image.png)

Viewing an employee's paygrade shows an failure notification with no message
![alt text](image-1.png)

## Employee Statistics 

### Test Description

Test to verify that adding an employee increases the employee count by 1.

### Test Case Procedure

1. Go to the employee section.
2. Add an employee.
3. Return to the system.

### Expected Output

The number of employees is increased by one.


## Total Gross Salary

### Test Description
Test to verify that the gross salary displayed matches the earnings for the given month. 

### Test Case Procedure 



### Expected Output
The gross salary matches the earnings for the given month.


## Total Net Salary

### Test Description
Test to verify that the net salary displayed matches the net pay for the given month.

### Test Case Procedure 



### Expected Output
The gross salary matches the earnings for the given month.


## Payroll Cost Summary

### Test Description
Test to verify that the earnings and net pay match the total gross and net pay for the given month.

### Test Case Procedure 
1. Select a gross salary and net salary for a given month.
2. Observe the earnings and net pay on the payroll cost summary.


### Expected Output
The earnings and net pay match the total gross and net salary respectively for the given month. 


## Payroll E & D Summary

### Test Description
Test to verify that the earnings and deductions match the total gross and difference between the gross and net pay (deductions) for the given month.

### Test Case Procedure 
1. Select a gross salary and net salary for a given month.
2. Observe the earnings and net pay on the payroll E & D summary.


### Expected Output
The earnings and deductions match the total gross and difference between the gross and net salary (deductions) respectively for the given month. 


## Pending payroll run 

### Test Description
Test to verify that adding a payroll run causes the payroll run to appear in the pending payroll run section with accurate details.

### Test Case Procedure 
1. Go to the Payroll Run section in the sidenav.
2. Add a new payroll run.
3. Return to the dashboard.

### Expected Output
The pending payroll run appears in the pending payroll run section


## Recently approved payroll run

### Test Description
Test to verify that running a pending payroll appears in the recently approved payroll run section with the accurate details.

### Test Case Procedure 
1. Click on the run payroll button for a payroll in the pending payroll.
2. Check the recently approved payroll run section.

### Expected Output
The pending payroll run disappears from the pending payroll run section and appears in the recently approved payroll run section with accurate details.
