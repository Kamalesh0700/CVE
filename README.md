Server-Side folder is placed in 
client-Side folder is placed in 
This CVE Information Management System is a web application designed to address the challenges of consuming and storing CVE (Common Vulnerabilities and Exposures) information from the NIST CVE API. Leveraging React for the client-side interface, Node.js with Express for server-side logic, and MySQL for database management, the system efficiently retrieves, stores, and visualizes CVE data. By utilizing modern technologies such as axios for API consumption and cron for periodic synchronization, we can ensures up-to-date and organized CVE information. With React ,Node,Express and MySql the application provides a user-friendly interface for browsing CVE data, solving problems related to data management and visualization in vulnerability  management.

Solution Overview
The solution consists of a full-stack application designed to consume CVE (Common Vulnerabilities and Exposures) information from the NIST CVE API, store it in a MySQL database, and visualize it in a user-friendly interface using React for the client-side and Node.js with Express for the server-side.

Server-Side 
1. Node.js with Express: The server-side logic is implemented using Node.js with Express. The server handles HTTP requests, establishes a connection to the MySQL database, and defines API endpoints for fetching and inserting CVE data.
2. MySQL Database: CVE information is stored in a MySQL database. The server-side code includes modules for database connection and CRUD operations to interact with the database.
3. Scheduled Tasks:The solution utilizes cron jobs to periodically synchronize CVE details into the database. This ensures that the database reflects the latest vulnerabilities and can be configured for both full data refresh and incremental refresh.

Client-Side
1.React:The client-side interface is built using React, a JavaScript library for building user interfaces. React components are used to fetch CVE data from the server, display it in a tabular format, and provide pagination and customization options to the user.
2. HTML, CSS: HTML, CSS, and React are used to create the user interface elements and style them for a visually appealing presentation. CSS stylesheets are included to enhance the appearance of the application.
3. React Router: React Router is used for client-side routing, allowing users to navigate between different views within the application.
Overall, the solution effectively addresses the problem statement by providing a comprehensive CVE information management system. It handles data consumption from the NIST CVE API, storage in a database, periodic synchronization, and visualization in a user-friendly interface. The use of modern technologies such as React, Node.js, and MySQL ensures scalability, performance, and maintainability of the application.

Output

The output is a feature-rich data presentation interface that provides users with control over the displayed data through options like pagination, results per page, and sorting. These features enhance usability and allow users to interact with the dataset more effectively. Additionally, the optional server-side functionalities improve performance and user experience, especially when working with large datasets.

