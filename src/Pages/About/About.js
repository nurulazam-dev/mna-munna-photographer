import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import azam from "../../images/About/mna.png"

const About = () => {
    return (
        <div>
            <h2 className='text-center text-primary'>About Me</h2>

            <CardGroup className='w-50 mx-auto'>
                <Card className='mt-3'>
                    <img className='w-100 mx-auto' src={azam} alt="" />
                    <Card.Footer>
                        <h3 className='text-center'>Mohammad Nurul Azam</h3>
                    </Card.Footer>
                </Card>
                <Card className='mt-3'>
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                    </Card.Body>
                   
                </Card>
            </CardGroup>

        </div>
    );
};

export default About;