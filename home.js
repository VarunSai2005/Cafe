let cart = {};

document.querySelectorAll(".add_btn").forEach(btn => {
    btn.addEventListener("click", () => {
        let card = btn.parentElement;
        let name = card.getAttribute("data-name");
        let price = parseInt(card.getAttribute("data-price"));

        if (cart[name]) {
            cart[name].qty++;
        } else {
            cart[name] = { price: price, qty: 1 };
        }
        updateCart();
    });
});

function updateCart() {
    let cartItemsDiv = document.getElementById("cart_items");
    cartItemsDiv.innerHTML = "";
    let total = 0;

    for (let item in cart) {
        let { price, qty } = cart[item];
        total += price * qty;

        let div = document.createElement("div");
        div.classList.add("cart_item");
        div.innerHTML = `
            <span>${item}</span> 
            <div>
                <button class="qty_btn" onclick="changeQty('${item}', -1)">−</button>
                <span>${qty}</span>
                <button class="qty_btn" onclick="changeQty('${item}', 1)">+</button>
            </div>
            <span>₹${price * qty}</span>
        `;
        cartItemsDiv.appendChild(div);
    }

    document.getElementById("total_price").innerText = `Total: ₹${total}`;
}

function changeQty(item, change) {
    cart[item].qty += change;
    if (cart[item].qty <= 0) {
        delete cart[item];
    }
    updateCart();
}

document.getElementById("confirm_order_btn").addEventListener("click", () => {
    if (Object.keys(cart).length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let summaryItemsDiv = document.getElementById("summary_items");
    summaryItemsDiv.innerHTML = "";
    let total = 0;

    for (let item in cart) {
        let { price, qty } = cart[item];
        total += price * qty;

        let div = document.createElement("div");
        div.classList.add("cart_item");
        div.innerHTML = `<span>${item} (x${qty})</span> <span>₹${price * qty}</span>`;
        summaryItemsDiv.appendChild(div);
    }

    document.getElementById("summary_total").innerText = `Total: ₹${total}`;
    document.getElementById("order_summary").classList.remove("hidden");
});

function closeSummary() {
    document.getElementById("order_summary").classList.add("hidden");
}
