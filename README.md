# Movie Application

A modern, responsive web application that allows users to discover and search for movies using the TMDB (The Movie Database) API. Browse popular movies and get detailed information about any film of interest.

## Overview

Movie Application is a full-featured movie discovery platform built with React. It provides an intuitive interface to search for movies, view popular titles, and access comprehensive movie details including ratings, descriptions, and release information.

## Features

- 🔍 **Movie Search** - Search for movies by title in real-time
- ⭐ **Popular Movies** - Browse a curated list of popular movies on the home page
- 📽️ **Detailed Information** - View comprehensive details about any movie including:
  - Movie title and plot synopsis
  - Release date and ratings
  - Genres and runtime
  - Cast and crew information
- 📱 **Responsive Design** - Fully responsive interface that works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Fast Performance** - Optimized loading states and lazy rendering
- 🎨 **Modern UI** - Clean and intuitive user interface powered by Bootstrap

## Tech Stack

- **Frontend Framework:** React 19.2.4
- **Routing:** React Router DOM 7.13.1
- **HTTP Client:** Axios 1.13.6
- **UI Framework:** Bootstrap 5.3.8
- **Icons:** React Icons 5.6.0
- **Testing:** React Testing Library 16.3.2
- **Build Tool:** Create React App (React Scripts 5.0.1)

## Project Structure

```
movie-application/
├── public/                  # Static files
│   ├── index.html          # Main HTML file
│   ├── manifest.json       # PWA manifest
│   └── robots.txt          # SEO robots file
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Loader.jsx      # Loading spinner component
│   │   ├── MovieList.jsx   # Movie grid display
│   │   ├── MovieShow.jsx   # Individual movie card
│   │   └── SearchMovie.jsx # Search input component
│   ├── pages/              # Page components
│   │   ├── Home.jsx        # Home page (popular movies & search)
│   │   └── MovieDetails.jsx# Movie detail page
│   ├── services/           # API and external services
│   │   └── api.jsx         # TMDB API integration
│   ├── App.js              # Main App component
│   ├── index.js            # React entry point
│   └── index.css           # Global styles
├── package.json            # Project dependencies
└── README.md               # This file
```

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd movie-application
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   The application will open in your default browser at `http://localhost:3000`

## Usage

### Viewing Popular Movies
- The home page automatically loads and displays a list of the most popular movies
- Each movie card shows the title and a preview image

### Searching for Movies
1. Click on the search input field at the top of the page
2. Type the name of the movie you're looking for
3. Press Enter or wait for real-time search results
4. Click on any movie to view detailed information

### Viewing Movie Details
- Click on any movie card to navigate to its detailed information page
- View comprehensive information including plot, ratings, release date, and more

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

### `npm build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. Your app is ready to be deployed!

### `npm test`

Launches the test runner in interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## API Configuration

This application uses the TMDB (The Movie Database) API. To configure your own API key:

1. Visit [TMDB](https://www.themoviedb.org/settings/api) to get your API key
2. Update the `API_KEY` in `src/services/api.jsx`

**Current API endpoints:**
- Popular movies: `/movie/popular`
- Search movies: `/search/movie`
- Movie details: `/movie/{id}`

> ⚠️ **Note:** Keep your API key private. Consider using environment variables for production.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Responsive Breakpoints

The application is optimized for:
- Mobile devices (< 576px)
- Tablets (576px - 992px)
- Desktops (> 992px)

## Future Enhancements

- [ ] Add movie ratings and user reviews
- [ ] Implement watchlist functionality (save favorites)
- [ ] Add movie recommendations based on viewing history
- [ ] Filter movies by genre and release year
- [ ] Dark mode theme
- [ ] Advanced search filters
- [ ] Movie trailers and multimedia content
- [ ] User authentication and personalized recommendations

## Performance Optimizations

- Lazy loading of movie images
- Memoized components to prevent unnecessary re-renders
- Efficient state management with React hooks
- Debounced search input

## Troubleshooting

### Movies not loading?
- Check your internet connection
- Verify the TMDB API key is valid and active
- Check browser console for any error messages

### Search not working?
- Ensure cookies and local storage are not disabled
- Clear browser cache and try again
- Verify the API key has search permissions

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For issues, questions, or suggestions, please create an issue in the repository or contact the development team.

---

**Version:** 0.1.0  
**Last Updated:** March 2026

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
