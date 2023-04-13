import { useState, useEffect } from "react";
import { Card, CardContent, Typography, Grid, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { FaHeart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

function MakeupCard({ makeup, likedMakeup, setLikedMakeup }) {
  const [liked, setLiked] = useState(false);
  const { addToCart } = useContext(CartContext);
  const { user } = useContext(UserContext); // get user information from context

  const handleAddToCartClick = () => {
    addToCart(makeup);
  };

  const handleLikeClick = () => {
    if (liked) {
      setLikedMakeup((prevLiked) => prevLiked.filter((id) => id !== makeup.id));
    } else {
      setLikedMakeup((prevLiked) => [...prevLiked, makeup.id]);
    }
    setLiked(!liked);
    
 console.log(user.id)  
    fetch(`/api/users/${user.id}/liked`, {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ productId: makeup.id })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
  };  

  return (
    <Card className="card-single" style={{ backgroundColor:'#f5f0f4',display:'flex', justifyContent: 'center', alignItems:'center', width:'300px', alignContent:'center', fontFamily:'Montserrat' }}> 
      <CardContent>
        <img src={makeup.image_link} alt={makeup.name} style={{ height:'200px' }} /><br/>
        <Typography variant="h5" style={{fontFamily:'Montserrat', fontWeight:'bold', textAlign:'center', marginTop:'10px'}}>{makeup.name}</Typography>
        <Typography variant="body1" style={{fontFamily:'Montserrat', textAlign:'center',}}>{makeup.brand}</Typography>
        <Typography variant="body2" style={{fontFamily:'Montserrat',textAlign:'center',}}>{makeup.price}</Typography>
        <button onClick={handleLikeClick} style={{ border: 'none', backgroundColor: 'transparent' }}>

          {liked ? (
            <FaHeart style={{ color: "purple", fontSize: '1.5rem' }} />
          ) : (
            <FaHeart style={{ color: "pink", fontSize: '1.5rem' }} />
          )}
        </button>
      </CardContent>
    </Card>
  );
}

function CardData() {
  const [makeupData, setMakeupData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [likedMakeup, setLikedMakeup] = useState([]);
  const [sortOrder, setSortOrder] = useState("ascending");

  useEffect(() => {
    fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
      .then((response) => response.json())
      .then((data) => setMakeupData(data));
  }, []);

  const filteredMakeupData = makeupData.filter((makeup) => {
    if (searchTerm !== "" && !makeup.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    return true;
  });

  const sortedMakeupData = filteredMakeupData.sort((a, b) => {
    if (sortOrder === "ascending") {
      return a.name.localeCompare(b.name);
    } else if (sortOrder === "descending") {
      return b.name.localeCompare(a.name);
    } else if (sortOrder === "low-high") {
      return a.price - b.price;
    } else if (sortOrder === "high-low") {
      return b.price - a.price;
    }
  });

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "20px 0" , marginLeft:'5%'}}>
        <TextField
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: "20%", fontFamily: "Montserrat" }}
        />
        <FormControl variant="outlined" style={{marginRight:'10%' }}>
          <Select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            style={{ width: "100%", fontFamily: "Montserrat", marginRight:'20%' }}
            inputProps={{
              style: { fontFamily: "Montserrat" },
            }}
          >
            <MenuItem value="ascending">Name: A-Z</MenuItem>
            <MenuItem value="descending">Name: Z-A</MenuItem>
            <MenuItem value="low-high">Price: Low to High</MenuItem>
            <MenuItem value="high-low">Price: High to Low</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Grid container spacing={8} justifyContent="center">
        {sortedMakeupData.map((makeup) => (
          <Grid item key={makeup.id}>
            <MakeupCard makeup={makeup} likedMakeup={likedMakeup} setLikedMakeup={setLikedMakeup} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default CardData;
