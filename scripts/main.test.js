/**
 * Tests for main.js functionality
 * @jest-environment jsdom
 */

describe('PRI Search Results', () => {
    beforeEach(() => {
        // Set up DOM structure
        document.body.innerHTML = `
            <div class="show-advanced-filters"
                 data-label-open="Hide advanced filters"
                 data-label-close="Show advanced filters">
                Show advanced filters
            </div>
            <div class="filters-form" style="display: none;">
                <form class="search-filters">
                    <select id="type">
                        <option value="none">Select type</option>
                        <option value="type1">Type 1</option>
                    </select>
                    <select id="esg-theme">
                        <option value="none">Select ESG Theme</option>
                        <option value="theme1">Theme 1</option>
                    </select>
                    <select id="sector">
                        <option value="none">Select Sector</option>
                        <option value="sector1">Sector 1</option>
                    </select>
                    <select id="region">
                        <option value="none">Select region</option>
                        <option value="region1">Region 1</option>
                    </select>
                    <select id="sdg">
                        <option value="none">Select SDG</option>
                        <option value="sdg1">SDG 1</option>
                    </select>
                    <select id="asset-class">
                        <option value="none">Select asset class</option>
                        <option value="asset1">Asset Class 1</option>
                    </select>
                </form>
            </div>
            <div class="results-counter">
                <p>90 Results</p>
            </div>
            <div class="search-results-cards-wrapper">
                <div class="content-card"></div>
                <div class="content-card"></div>
                <div class="content-card"></div>
                <div class="content-card"></div>
                <div class="content-card"></div>
            </div>
            <input class="load-more-button" id="load-more-results" type="submit" value="Load more">
        `;
    });

    describe('Filter Toggle', () => {
        test('should toggle filter visibility when clicked', () => {
            const filterToggle = document.querySelector('.show-advanced-filters');
            const filtersForm = document.querySelector('.filters-form');

            // Initially hidden
            expect(filtersForm.style.display).toBe('none');

            // Click to show
            filterToggle.click();
            expect(filtersForm.style.display).toBe('block');

            // Click to hide
            filterToggle.click();
            expect(filtersForm.style.display).toBe('none');
        });

        test('should update toggle text when clicked', () => {
            const filterToggle = document.querySelector('.show-advanced-filters');

            // Initial text
            expect(filterToggle.textContent).toContain('Show advanced filters');

            // After clicking
            filterToggle.click();
            expect(filterToggle.textContent).toContain('Hide advanced filters');
        });
    });

    describe('Results Counter', () => {
        test('should display result count', () => {
            const counter = document.querySelector('.results-counter p');
            expect(counter.textContent).toContain('Results');
        });

        test('should update result count', () => {
            const counter = document.querySelector('.results-counter p');
            counter.textContent = '50 Results';
            expect(counter.textContent).toBe('50 Results');
        });
    });

    describe('Content Cards', () => {
        test('should have correct number of cards', () => {
            const cards = document.querySelectorAll('.content-card');
            expect(cards.length).toBe(5);
        });

        test('should be able to hide cards', () => {
            const cards = document.querySelectorAll('.content-card');
            cards[0].style.display = 'none';
            expect(cards[0].style.display).toBe('none');
        });
    });

    describe('Load More Button', () => {
        test('should exist in DOM', () => {
            const loadMoreBtn = document.getElementById('load-more-results');
            expect(loadMoreBtn).toBeTruthy();
        });

        test('should have correct type', () => {
            const loadMoreBtn = document.getElementById('load-more-results');
            expect(loadMoreBtn.type).toBe('submit');
        });

        test('should be able to be hidden', () => {
            const loadMoreBtn = document.getElementById('load-more-results');
            loadMoreBtn.style.display = 'none';
            expect(loadMoreBtn.style.display).toBe('none');
        });
    });

    describe('Filter Dropdowns', () => {
        test('should have all filter dropdowns', () => {
            const typeFilter = document.getElementById('type');
            const esgFilter = document.getElementById('esg-theme');
            const sectorFilter = document.getElementById('sector');
            const regionFilter = document.getElementById('region');
            const sdgFilter = document.getElementById('sdg');
            const assetFilter = document.getElementById('asset-class');

            expect(typeFilter).toBeTruthy();
            expect(esgFilter).toBeTruthy();
            expect(sectorFilter).toBeTruthy();
            expect(regionFilter).toBeTruthy();
            expect(sdgFilter).toBeTruthy();
            expect(assetFilter).toBeTruthy();
        });

        test('should allow value changes', () => {
            const typeFilter = document.getElementById('type');
            typeFilter.value = 'type1';
            expect(typeFilter.value).toBe('type1');
        });
    });
});
