const resources = [
    {
        name: "Grammarly",
        category: "writing",
        description: "AI-powered writing assistant for grammar, spelling, and style improvements.",
        url: "https://www.grammarly.com"
    },
    {
        name: "Scrivener",
        category: "writing",
        description: "Professional writing software for authors, screenwriters, and academics.",
        url: "https://www.literatureandlatte.com/scrivener/overview"
    },
    {
        name: "Hemingway Editor",
        category: "writing",
        description: "Makes your writing bold and clear by highlighting complex sentences.",
        url: "https://hemingwayapp.com"
    },
    {
        name: "Google Docs",
        category: "writing",
        description: "Free, cloud-based word processor with real-time collaboration features.",
        url: "https://docs.google.com"
    },
    {
        name: "Penguin Random House",
        category: "publishing",
        description: "One of the world's largest English-language trade book publishers.",
        url: "https://www.penguinrandomhouse.com"
    },
    {
        name: "HarperCollins",
        category: "publishing",
        description: "Major publishing house with diverse imprints for all genres.",
        url: "https://www.harpercollins.com"
    },
    {
        name: "Literary Agents Database",
        category: "publishing",
        description: "Comprehensive database of literary agents and their submission guidelines.",
        url: "https://querytracker.net"
    },
    {
        name: "Publishers Marketplace",
        category: "publishing",
        description: "Essential resource for publishing professionals with deal announcements and industry news.",
        url: "https://www.publishersmarketplace.com"
    },
    {
        name: "Amazon KDP",
        category: "self-publishing",
        description: "Kindle Direct Publishing - self-publish eBooks and paperbacks for free.",
        url: "https://kdp.amazon.com"
    },
    {
        name: "IngramSpark",
        category: "self-publishing",
        description: "Professional self-publishing platform with global distribution.",
        url: "https://www.ingramspark.com"
    },
    {
        name: "Draft2Digital",
        category: "self-publishing",
        description: "Simplified ebook and print book publishing to multiple retailers.",
        url: "https://www.draft2digital.com"
    },
    {
        name: "BookBaby",
        category: "self-publishing",
        description: "Complete self-publishing services including editing, design, and distribution.",
        url: "https://www.bookbaby.com"
    },
    {
        name: "Reedsy",
        category: "self-publishing",
        description: "Marketplace for professional editors, designers, and marketers for self-published authors.",
        url: "https://reedsy.com"
    },
    {
        name: "BookBub",
        category: "marketing",
        description: "Book discovery service for readers and promotional platform for authors.",
        url: "https://www.bookbub.com"
    },
    {
        name: "Goodreads",
        category: "marketing",
        description: "World's largest site for readers and book recommendations.",
        url: "https://www.goodreads.com"
    },
    {
        name: "NetGalley",
        category: "marketing",
        description: "Service to provide advance reading copies to reviewers and influencers.",
        url: "https://www.netgalley.com"
    },
    {
        name: "Canva",
        category: "marketing",
        description: "Design platform for creating book covers, social media graphics, and promotional materials.",
        url: "https://www.canva.com"
    },
    {
        name: "PrintNinja",
        category: "printing",
        description: "High-quality offset printing for books, games, and custom products.",
        url: "https://printninja.com"
    },
    {
        name: "Printful",
        category: "printing",
        description: "Print-on-demand service for custom merchandise and books.",
        url: "https://www.printful.com"
    },
    {
        name: "Blurb",
        category: "printing",
        description: "Self-publishing platform specializing in photo books and trade books.",
        url: "https://www.blurb.com"
    },
    {
        name: "Lulu",
        category: "printing",
        description: "Print-on-demand and distribution services for books and calendars.",
        url: "https://www.lulu.com"
    },
    {
        name: "48 Hour Books",
        category: "printing",
        description: "Fast turnaround book printing services for short runs.",
        url: "https://www.48hrbooks.com"
    },
    {
        name: "r/writing",
        category: "communities",
        description: "Reddit's community for writers to discuss craft, publishing, and share experiences.",
        url: "https://www.reddit.com/r/writing"
    },
    {
        name: "Absolute Write",
        category: "communities",
        description: "Online community and forums for writers at all stages of their career.",
        url: "https://absolutewrite.com"
    },
    {
        name: "NaNoWriMo",
        category: "communities",
        description: "National Novel Writing Month - annual writing event and year-round community.",
        url: "https://nanowrimo.org"
    },
    {
        name: "The Writers' Guild",
        category: "communities",
        description: "Professional organizations for writers in various countries.",
        url: "https://www.wga.org"
    },
    {
        name: "20BooksTo50K",
        category: "communities",
        description: "Facebook group focused on making a living through self-publishing.",
        url: "https://www.facebook.com/groups/20Booksto50k"
    }
];

let currentCategory = 'all';

function createResourceCard(resource) {
    const card = document.createElement('div');
    card.className = 'resource-card';
    card.dataset.category = resource.category;
    
    card.innerHTML = `
        <span class="category-tag">${resource.category.replace('-', ' ')}</span>
        <h3>${resource.name}</h3>
        <p>${resource.description}</p>
        <a href="${resource.url}" class="resource-link">Visit Resource</a>
    `;
    
    card.addEventListener('click', (e) => {
        if (!e.target.closest('.resource-link')) {
            e.preventDefault();
            const link = card.querySelector('.resource-link');
            if (link) {
                window.location.href = resource.url;
            }
        }
    });
    
    return card;
}

function displayResources(category = 'all') {
    const grid = document.getElementById('resourcesGrid');
    grid.innerHTML = '';
    
    const filteredResources = category === 'all' 
        ? resources 
        : resources.filter(r => r.category === category);
    
    filteredResources.forEach(resource => {
        grid.appendChild(createResourceCard(resource));
    });
}

function initializeApp() {
    displayResources();
    
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentCategory = button.dataset.category;
            displayResources(currentCategory);
        });
    });
    
    // Remove target="_blank" to let Electron handle external links
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.removeAttribute('target');
    });
}

document.addEventListener('DOMContentLoaded', initializeApp);