📸 Photo Browser (JSONPlaceholder API)
A simple, interactive web application that allows users to browse photos from the JSONPlaceholder API through a cascading selection process (User → Album → Photos).

🚀 Features
* Cascading Dropdowns: Selecting a user dynamically fetches their specific albums.

* Asynchronous Loading: Real-time feedback via a status indicator ("Loading...") and error handling for all API requests.

* Photo Gallery: Renders photo cards with thumbnails, truncated titles, and links to full-sized images.

* Incremental Pagination: "Load More" functionality that displays photos in batches of 12.

* State Management: Intelligent button/select states (enabled/disabled) based on user interaction.

🛠 Tech Stack
* HTML5: Semantic structure.

* CSS3: Minimal styling for the photo grid and cards.

* JavaScript (ES6+): Fetch API, DOM manipulation, and state management.

📂 Project Structure
```Plaintext
├── index.html   # Main layout (Selects, Status, Photo Container)
├── styles.css   # Minimal styles for layout and photo cards
└── app.js       # Core logic: Fetching, Pagination, and Event Listeners
```
📋 Implementation Details
1. API Integration
   The app interacts with three main endpoints:

GET /users: Fetches the list of users on page load.

GET /albums?userId=ID: Fetches albums belonging to the selected user.

GET /photos?albumId=ID: Fetches all photos for the selected album.

2. Logic Flow
   Initialization: On DOMContentLoaded, the app populates the #userSelect.

Dependency Chain: * Selecting a User clears current photos, resets the Album dropdown, and fetches new albums.

Selecting an Album enables the "Load photos" button.

Photo Rendering: * Shows 12 photos at a time.

Titles are limited to 40 characters (appends ... if longer).

"Load more" button appears if there are remaining photos in the array.

3. Error Handling
   Every fetch call includes:

Response Validation: Checks if (!res.ok) to catch HTTP errors (e.g., 404, 500).

Catch Blocks: Displays descriptive error messages in the #status div.

Finally Blocks: Ensures "Loading..." indicators are removed regardless of success or failure.

🖥 How to Run
Clone or download the project files.

Open index.html in any modern web browser.

Ensure you have an active internet connection to reach the JSONPlaceholder API.