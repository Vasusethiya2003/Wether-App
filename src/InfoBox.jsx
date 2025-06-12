import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
export default function InfoBox({info}){
    const INIT_URL="https://media.istockphoto.com/id/1178574683/photo/blue-sky-and-white-clouds.webp?a=1&b=1&s=612x612&w=0&k=20&c=IUEiqjSgmy6tizBDDfEoKnfkqsc0JP3vRTvzaAlat8E=";
    const HOT_URL="https://images.unsplash.com/photo-1561693666-609d8bfdfa1f?q=80&w=2039&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://plus.unsplash.com/premium_photo-1669050065747-53252b7d22a1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAINY_URL="https://images.unsplash.com/photo-1558920778-a82b686f0521?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return(
        <div className="InfoBox">
            <div className='CardContainer'>
             <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={info.humidity>80?RAINY_URL:(info.temp>15?HOT_URL:COLD_URL)}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           <b> {info.city}</b>
          </Typography>
          <Typography variant="body2"  color="text.secondary" component={"span"}>
            <p>Temperature: <b>{info.temp}</b>&deg;C</p>
             <p>Humidity: <b>{info.humidity}</b></p>
             <p>Minimum Temperature: <b>{info.tempMin}&deg;C</b></p>
            <p>Maximum Temperature: <b> {info.tempMax}&deg;C</b></p>
           <p>The weather can be described as <i> <b>{info.weather}</b> </i>and feels like <b> {info.feelsLike}&deg;C</b></p>
          </Typography>
        </CardContent>
    </Card>
    </div>
        </div>
    )
}