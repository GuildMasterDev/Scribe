# 📚 Scribe - Author Resources Directory

A clean, kiosk-style Electron application that provides authors with a curated directory of resources for writing, publishing, and marketing their work.

## Features

- **Categorized Resources**: Organized into Writing Tools, Publishing, Self-Publishing, Marketing, Printing & Merch, and Communities
- **Kiosk Interface**: Clean, distraction-free interface for browsing resources
- **External Link Handling**: All links open in your default browser, keeping the app as a dedicated resource hub
- **30+ Curated Resources**: Carefully selected tools and platforms for every stage of the author journey

## Installation

```bash
# Clone the repository
git clone https://github.com/GuildMasterDev/Scribe.git

# Navigate to the project directory
cd Scribe

# Install dependencies
npm install
```

## Usage

```bash
# Start the application
npm start
```

## Resource Categories

- **Writing Tools**: Grammarly, Scrivener, Hemingway Editor, Google Docs
- **Publishing**: Major publishers, literary agent databases, Publishers Marketplace
- **Self-Publishing**: Amazon KDP, IngramSpark, Draft2Digital, BookBaby, Reedsy
- **Marketing**: BookBub, Goodreads, NetGalley, Canva
- **Printing & Merch**: PrintNinja, Printful, Blurb, Lulu, 48 Hour Books
- **Communities**: r/writing, Absolute Write, NaNoWriMo, Writers' Guild, 20BooksTo50K

## Customization

To add or modify resources, edit the `resources` array in `renderer.js`:

```javascript
{
    name: "Resource Name",
    category: "category-name",
    description: "Brief description of the resource",
    url: "https://resource-url.com"
}
```

## Technologies Used

- Electron
- Vanilla JavaScript
- HTML5
- CSS3

## License

ISC License - See LICENSE file for details

## Author

GuildMasterDev

## Contributing

Feel free to submit issues and pull requests to add more resources or improve the application.