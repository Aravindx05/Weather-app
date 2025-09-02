import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
export default function InfoBox({info}){
const init_url = "https://images.unsplash.com/photo-1501973801540-537f08ccae7b?auto=format&fit=crop&w=800&q=80"; 
const hot_url = "https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=800&q=80"; 
const cold_url = "https://images.unsplash.com/photo-1608889175123-8f5e6a0c9c9e?auto=format&fit=crop&w=800&q=80"; 
const rain_url = "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80"; 


       
    return(
        <div>
            
            <div className='cardContainer'>
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? rain_url:info.temp >20 ? hot_url : cold_url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        <div>Temperature = {info.temp}&deg;c</div>
        <div>Humidity= {info.humidity}</div>
        <div>Temerature Min = {info.tempMin}&deg;c</div>
        <div>Temperature Max = {info.tempMax}&deg;c</div>
        <div>The weather can be described as {info.weather} and feels like {info.feelslike}</div>
        </Typography>
      </CardContent>
      
    </Card></div>
        </div>
    );
}