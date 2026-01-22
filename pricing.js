// GreenThread Pricing Calculator

(function() {
    // Pricing constants
    const BASE_PRICE = 17.70;
    const FLOOR_PRICE = 15.00;
    const DISCOUNT_PER_TIER = 0.30;
    const TIER_SIZE = 300; // GB per tier
    const ANNUAL_MONTHS = 10; // Pay for 10 months, get 12

    // DOM elements
    const gpuTypeSelect = document.getElementById('gpu-type');
    const gpuCountInput = document.getElementById('gpu-count');
    const billingPeriodSelect = document.getElementById('billing-period');
    const totalVramEl = document.getElementById('total-vram');
    const pricePerGbEl = document.getElementById('price-per-gb');
    const discountAmountEl = document.getElementById('discount-amount');
    const discountRowEl = document.getElementById('discount-row');
    const totalLabelEl = document.getElementById('total-label');
    const totalPriceEl = document.getElementById('total-price');
    const totalNoteEl = document.getElementById('total-note');

    // Calculate price per GB based on total VRAM
    function calculatePricePerGb(totalVram) {
        const tiers = Math.floor(totalVram / TIER_SIZE);
        const discount = tiers * DISCOUNT_PER_TIER;
        const price = BASE_PRICE - discount;
        return Math.max(price, FLOOR_PRICE);
    }

    // Format number as currency
    function formatCurrency(amount) {
        return '$' + amount.toLocaleString('en-AU', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
    }

    // Format number with commas
    function formatNumber(num) {
        return num.toLocaleString('en-AU');
    }

    // Update calculator results
    function updateCalculator() {
        // Get values
        const vramPerGpu = parseInt(gpuTypeSelect.value);
        const gpuCount = parseInt(gpuCountInput.value) || 1;
        const isAnnual = billingPeriodSelect.value === 'annual';

        // Calculate totals
        const totalVram = vramPerGpu * gpuCount;
        const pricePerGb = calculatePricePerGb(totalVram);
        const discount = BASE_PRICE - pricePerGb;
        const monthlyPrice = totalVram * pricePerGb;
        const finalPrice = isAnnual ? monthlyPrice * ANNUAL_MONTHS : monthlyPrice;

        // Update display
        totalVramEl.textContent = formatNumber(totalVram) + ' GB';
        pricePerGbEl.textContent = '$' + pricePerGb.toFixed(2);

        // Show/hide discount row
        if (discount > 0) {
            discountRowEl.style.display = 'flex';
            discountAmountEl.textContent = '-$' + discount.toFixed(2) + '/GB';
        } else {
            discountRowEl.style.display = 'none';
        }

        // Update total
        if (isAnnual) {
            totalLabelEl.textContent = 'Annual Price';
            totalPriceEl.textContent = formatCurrency(finalPrice);
            totalNoteEl.textContent = 'Billed annually (10 months for 12)';
        } else {
            totalLabelEl.textContent = 'Monthly Price';
            totalPriceEl.textContent = formatCurrency(monthlyPrice);
            totalNoteEl.textContent = 'Billed monthly';
        }
    }

    // Initialize calculator if elements exist
    if (gpuTypeSelect && gpuCountInput && billingPeriodSelect) {
        // Add event listeners
        gpuTypeSelect.addEventListener('change', updateCalculator);
        gpuCountInput.addEventListener('input', updateCalculator);
        billingPeriodSelect.addEventListener('change', updateCalculator);

        // Initial calculation
        updateCalculator();
    }
})();
