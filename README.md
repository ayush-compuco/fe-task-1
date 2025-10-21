# PRI Search Results Page

A responsive search results page for PRI (Principles for Responsible Investment) with advanced filtering capabilities and dynamic content loading.

## Features

- Responsive design (desktop, tablet, mobile)
- Advanced filter system for search results
- Dynamic "Load More" functionality
- Clean, modular SCSS architecture
- Vanilla JavaScript (no framework dependencies)
- Accessible and user-friendly interface

## Project Structure

```
fe-task-1/
├── assets/
│   ├── icons/          # SVG icons
│   └── images/         # Images and logos
├── scripts/
│   └── main.js         # Main JavaScript file
├── styles/
│   ├── css/
│   │   └── styles.css  # Compiled CSS
│   └── sass/
│       ├── _variables.scss   # Variables (colors, fonts, etc.)
│       ├── _reset.scss       # Reset styles
│       ├── _layout.scss      # Layout styles
│       ├── _header.scss      # Header and navigation
│       ├── _filters.scss     # Filter components
│       ├── _cards.scss       # Card components
│       ├── _footer.scss      # Footer styles
│       ├── _responsive.scss  # Media queries
│       └── styles.scss       # Main SCSS file
├── index.html          # Main HTML file
├── gulpfile.js         # Gulp configuration
├── package.json        # Dependencies and scripts
└── README.md          # This file
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fe-task-1
```

2. Install dependencies:
```bash
npm install
```

## Usage

### Development

Start the development server with file watching:
```bash
npm start
```

This will:
- Compile SCSS to CSS
- Watch for changes in SCSS files
- Automatically recompile on save

### Build

Compile SCSS to CSS once:
```bash
npm run build
```

### Watch Mode

Watch for SCSS changes without running the full development server:
```bash
npm run watch
```

## JavaScript Functionality

### Filter System

The filter system allows users to:
- Toggle advanced filters visibility
- Filter results by Type, ESG Theme, Sector, Region, SDG, and Asset Class
- See real-time updates to result counts

### Load More

The "Load More" button:
- Initially displays 5 results
- Loads 5 additional results on each click
- Automatically hides when all results are shown

## SCSS Architecture

The project uses a modular SCSS architecture for better maintainability:

- **_variables.scss**: Centralized color schemes, fonts, and breakpoints
- **_reset.scss**: CSS reset and base styles
- **_layout.scss**: Page layout and container styles
- **_header.scss**: Top header and navigation bar
- **_filters.scss**: Search filters and controls
- **_cards.scss**: Content card styles
- **_footer.scss**: Footer styles
- **_responsive.scss**: Media queries for responsive design

### Color Scheme

- Primary Blue: `#008CC8`
- Dark Blue: `#0050A0`
- Light Gray: `#f1f3f5`
- Text Gray: `#888888`

### Breakpoints

- Tablet: `1000px`
- Mobile: `600px`

## Testing

Run tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

Generate coverage report:
```bash
npm run test:coverage
```

## Linting

Lint JavaScript:
```bash
npm run lint:js
```

Lint SCSS:
```bash
npm run lint:scss
```

Lint all:
```bash
npm run lint
```

## Code Formatting

Format code with Prettier:
```bash
npm run format
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

1. Create a feature branch
2. Make your changes
3. Run linting and tests
4. Submit a pull request

## License

MIT License

## Contact

For more information, visit [unpri.org](https://www.unpri.org/)
