## Googlesheet

The google sheet can be accessed through the link below:
[Payroll_Test_Sheet](https://docs.google.com/spreadsheets/d/1ucM5NW_IjGLFmBphRdC8HCT1lATnbPYiFu-02cNmtY0/edit?usp=sharing)

# UI Defects

1. At a width of 950px and a zoom of 100%, the sidebar disappears and shows no hamburger icon , but reappears when the page width exceeds 1050px
 **`picture example`**

 ![no sidebar](test-images/no_sidebar.png)

 **After Width Increment**

 ![sidebar visible](./test-images/sidebar.png)

2. System displays a blank interface after some hours of being inactive.

![blank on reload](./test-images/reload_blank.png)

3. When view height is decreased to below 800px , some items do not appear properly in line when the vertical scroll is introduced
**PICTURE EXAMPLES**

`View Height Above 800px`

![normal](./test-images/normal_view_height.png)

`View Heights Below 800px`

![1](./test-images/abnormal_view.png)

---
![2](./test-images/abnormal_view2.png)

---
![3](./test-images/abnormal_view3.png)

For the above picture , kindly the area highlighted in yellow.
The **`copyright`** at the footer is not fixed

4. Validation for the email field must be checked again
`Email` field accepts inputs like `demo@demo` instead of `demo@demo.com`
