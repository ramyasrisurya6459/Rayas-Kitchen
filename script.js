document.getElementById('orderForm').addEventListener('submit', async function(e) {
    e.preventDefault();
  
    const name = this.name.value;
    const biryaniType = this.biryaniType.value;
    const address = this.address.value;
  
    const response = await fetch('/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, biryaniType, address })
    });
  
    const result = await response.json();
    if (result.success) {
      document.getElementById('orderStatus').textContent = "✅ Order placed successfully!";
      this.reset();
    } else {
      document.getElementById('orderStatus').textContent = "❌ Something went wrong.";
    }
  });
  
  function fillBiryani(type) {
    document.getElementById('biryaniType').value = type;
    document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
  }
  