
# Laboratory Activity 6: Test Cases

## Test Case 1: Valid Form

**Input:**
- Name: Christian Jade
- Email: christian@example.com
- Message: Hello, this is my test message.

**Expected Result:**
- The form is submitted without a page reload.
- No validation errors are displayed.
- The success panel appears.
- The entered values remain visible.

## Test Case 2: Missing Required Field

**Input:**
- Name: Leave empty
- Email: christian@example.com
- Message: Hello, this is my test message.

**Expected Result:**
- The form is not accepted.
- The error "Name is required." appears.
- The success panel does not appear.

## Test Case 3: Invalid Email

**Input:**
- Name: Christian Jade
- Email: christian@
- Message: Hello, this is my test message.

**Expected Result:**
- The form is not accepted.
- The error "Please enter a valid email address." appears.
- The success panel does not appear.
