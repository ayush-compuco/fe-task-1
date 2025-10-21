/**
 * Main JavaScript file for PRI Search Results
 * Handles filters and load more functionality
 */

(function() {
    'use strict';

    // Configuration
    const CARDS_PER_LOAD = 5;
    let currentCardsShown = 5;
    let allCards = [];

    /**
     * Initialize the application
     */
    function init() {
        setupAdvancedFilters();
        setupFilters();
        setupLoadMore();
        initializeCards();
    }

    /**
     * Setup advanced filters toggle
     */
    function setupAdvancedFilters() {
        const filterToggle = document.querySelector('.show-advanced-filters');
        const filtersForm = document.querySelector('.filters-form');

        if (!filterToggle || !filtersForm) return;

        // Initially hide the filters
        filtersForm.style.display = 'none';

        filterToggle.addEventListener('click', function() {
            const isHidden = filtersForm.style.display === 'none';

            if (isHidden) {
                filtersForm.style.display = 'block';
                filterToggle.textContent = filterToggle.getAttribute('data-label-open') || 'Hide advanced filters';
            } else {
                filtersForm.style.display = 'none';
                filterToggle.textContent = filterToggle.getAttribute('data-label-close') || 'Show advanced filters';
            }
        });

        // Add cursor pointer style
        filterToggle.style.cursor = 'pointer';
    }

    /**
     * Setup filter functionality
     */
    function setupFilters() {
        const filterSelects = document.querySelectorAll('.search-filters select');

        filterSelects.forEach(select => {
            select.addEventListener('change', function() {
                applyFilters();
            });
        });
    }

    /**
     * Apply filters to cards
     */
    function applyFilters() {
        const type = document.getElementById('type')?.value;
        const esgTheme = document.getElementById('esg-theme')?.value;
        const sector = document.getElementById('sector')?.value;
        const region = document.getElementById('region')?.value;
        const sdg = document.getElementById('sdg')?.value;
        const assetClass = document.getElementById('asset-class')?.value;

        // Get all cards
        const cards = document.querySelectorAll('.content-card');
        let visibleCount = 0;

        cards.forEach(card => {
            let shouldShow = true;

            // In a real application, you would check card data attributes
            // against the selected filter values
            // For demo purposes, we'll just show/hide based on whether filters are set

            if (shouldShow) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Update results counter
        updateResultsCounter(visibleCount);
    }

    /**
     * Update the results counter
     */
    function updateResultsCounter(count) {
        const counter = document.querySelector('.results-counter p');
        if (counter) {
            counter.textContent = `${count} Results`;
        }
    }

    /**
     * Initialize cards for load more functionality
     */
    function initializeCards() {
        const cardsWrapper = document.querySelector('.search-results-cards-wrapper');
        if (!cardsWrapper) return;

        // Store all card templates
        const existingCards = Array.from(cardsWrapper.querySelectorAll('.content-card'));
        allCards = existingCards;

        // Show only the first batch
        showCards(currentCardsShown);
    }

    /**
     * Show a specific number of cards
     */
    function showCards(count) {
        const cardsWrapper = document.querySelector('.search-results-cards-wrapper');
        if (!cardsWrapper) return;

        // Hide all cards first
        allCards.forEach(card => card.style.display = 'none');

        // Show the requested number of cards
        for (let i = 0; i < Math.min(count, allCards.length); i++) {
            allCards[i].style.display = 'block';
        }

        // Update load more button visibility
        updateLoadMoreButton();
    }

    /**
     * Setup load more button
     */
    function setupLoadMore() {
        const loadMoreBtn = document.getElementById('load-more-results');

        if (!loadMoreBtn) return;

        loadMoreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            loadMoreCards();
        });
    }

    /**
     * Load more cards
     */
    function loadMoreCards() {
        currentCardsShown += CARDS_PER_LOAD;
        showCards(currentCardsShown);
    }

    /**
     * Update load more button visibility
     */
    function updateLoadMoreButton() {
        const loadMoreBtn = document.getElementById('load-more-results');
        if (!loadMoreBtn) return;

        if (currentCardsShown >= allCards.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'flex';
        }
    }

    /**
     * Reset filters
     */
    function resetFilters() {
        const filterSelects = document.querySelectorAll('.search-filters select');
        filterSelects.forEach(select => {
            select.selectedIndex = 0;
        });
        applyFilters();
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
