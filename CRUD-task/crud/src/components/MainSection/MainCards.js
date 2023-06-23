import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {Container , Row , Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function JopCard(props) {
    const {engineerPic,managerPic,accountantPic} = props;
    console.log(props)
  return (
    <Container>
        <Row>
            <Col>
            <Link  to='/emp'>
                <Card className='card'>
                    <CardActionArea className='actionCard'>
                        <CardMedia
                        component="img"
                        height="140"
                        image={engineerPic}
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Engineer
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        An engineer is a problem solver who designs and creates innovative solutions using scientific and mathematical principles.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
            </Col>
            <Col>
                <Link to='/mang'>
                    <Card className='card'>
                        <CardActionArea className='actionCard'>
                            <CardMedia
                            component="img"
                            height="140"
                            image={managerPic}
                            alt="green iguana"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Manager
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            A manager is a professional who oversees and coordinates the activities of a team or department, sets goals and objectives.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
            </Col>
            <Col>
                <Link to='/emp'>
                    <Card className='card'>
                        <CardActionArea className='actionCard'>
                            <CardMedia
                            component="img"
                            height="140"
                            image={accountantPic}
                            alt="green iguana"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Accountant
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            An accountant is a financial professional who manages and analyzes financial records, prepares and reviews financial statements.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
            </Col>
        </Row>
    </Container>
  );
}
