app.post("/api/cart", authMiddleware, async (req, res) => {
    const { productId } = req.body;
    const userId = req.user.id;
  
    const cart = await Cart.findOne({ userId });
  
    if (cart) {
      cart.cartItems.push(productId);
      await cart.save();
    } else {
      const newCart = new Cart({ userId, cartItems: [productId] });
      await newCart.save();
    }
  
    res.json({ message: "Product added to cart" });
  });

  app.get("/api/cart", authMiddleware, async (req, res) => {
    const userId = req.user.id;
  
    const cart = await Cart.findOne({ userId }).populate("cartItems");
  
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
  
    res.json(cart);
  });
  
  