# E-Commerce project

## User functionalities

1. registerUser - This view is used for user registration. It takes in user data like name, email, and password, creates a new User object using the Django's built-in User model, saves the object to the database, and returns a response with a serialized User object with a JSON Web Token (JWT).

2. login - This view is used for user authentication. It uses the Simple JWT library to generate a JWT for a given user's credentials.

3. updateUserProfile - This view is used for updating the user's profile. It takes in the user data like name, email, and password, updates the User object, and returns a response with a serialized User object with a new JWT.

4. getUserProfile - This view is used for retrieving the user's profile. It returns a serialized User object with the user's profile data.

5. getUsers - This view is used by an admin user to retrieve a list of all users. It returns a list of serialized User objects.

6. deleteUser - This view is used by an admin user to delete a user by their ID. It takes in the user's ID, deletes the corresponding User object from the database, and returns a response with a message indicating whether the deletion was successful or not.

7. getUserById - This view is used by an admin user to retrieve a specific user by their ID. It takes in the user's ID, retrieves the corresponding User object from the database, and returns a serialized User object with the user's profile data.

8. updateUser - This view is used by an admin user to update a user's profile. It takes in the user's ID and new profile data like name, email, and isAdmin flag, updates the corresponding User object, and returns a serialized User object with a new JWT.

## Product functionalities

1. getProducts: This view retrieves all products from the database based on a keyword search query parameter. It returns a JSON response of the serialized product data.

2. getProduct: This view retrieves a single product from the database based on the product ID (pk) passed as a parameter. It returns a JSON response of the serialized product data.

3. deleteProduct: This view deletes a product from the database based on the product ID (pk) passed as a parameter. It requires the user to have admin privileges and returns a success or error message.

4. createProduct: This view creates a new product in the database with default values for name, price, brand, countInStock, description, and category. It requires the user to have admin privileges and returns a JSON response of the serialized product data.

5. updateProduct: This view updates an existing product in the database based on the product ID (pk) passed as a parameter. It requires the user to have admin privileges and accepts a JSON request body with the updated product data. It returns a JSON response of the serialized product data.

6. uploadImage: This view uploads an image file for a product and saves it to the product's image field in the database. It accepts a product ID (pk) and an image file in the request data. It returns a JSON response of the serialized product data.

7. createProductReview: This view allows authenticated users to create a new review for a product based on the product ID (pk) passed as a parameter. It requires a rating (1-5) and a comment in the request data. It updates the product's average rating and total number of reviews and returns a success or error message.

## Order functionalities

1. addOrderItems: This view is used to create a new order with the provided order items. It receives a POST request and expects the user to be authenticated. It first checks if there are any order items provided and returns an error message if there are none. It then creates a new Order object with the user, payment method, tax price, shipping price, and total price provided. It then creates a new ShippingAddress object with the order and shipping address details provided. Finally, it loops over the order items provided, creates a new OrderItems object for each item, and reduces the product's count in stock accordingly. It returns the serialized order object with a HTTP 201 Created status if successful.

2. getOrderById: This view is used to retrieve an order by its ID. It receives a GET request and expects the user to be authenticated. It first checks if the order exists and if the user has permission to view it (either the user who placed the order or an admin user). It then returns the serialized order object with a HTTP 200 OK status if successful or an error message with a HTTP 404 Not Found status if the order is not found.

3. updateOrderToPaid: This view is used to update an order to a paid state. It receives a PUT request and expects the user to be authenticated. It first checks if the order exists and if the user has permission to update it (only the user who placed the order can update it). It then toggles the is_paid field, sets the paid_at field to the current datetime, and saves the order object. It returns a success message with a HTTP 200 OK status if successful or an error message with a HTTP 404 Not Found status if the order is not found.

4. getMyOrders: This view is used to retrieve all orders placed by the authenticated user. It receives a GET request and expects the user to be authenticated. It retrieves all orders associated with the user and returns the serialized order objects with a HTTP 200 OK status if successful or an error message with a HTTP 400 Bad Request status if an error occurs.

5. getAllOrders: This view is used to retrieve all orders in the system. It receives a GET request and expects the user to be an admin user. It retrieves all orders and returns the serialized order objects with a HTTP 200 OK status if successful or an error message with a HTTP 400 Bad Request status if an error occurs.

6. updateOrderToDelivered: This view is used to update an order to a delivered state. It receives a PUT request and expects the user to be an admin user. It first checks if the order exists and then sets the is_delivered field to True and the delivered_at field to the current datetime. It saves the order object and returns a success message with a HTTP 200 OK status if successful or an error message with a HTTP 404 Not Found status if the order is not found.
