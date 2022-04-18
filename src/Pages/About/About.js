import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import azam from "../../images/About/mna.png"

const About = () => {
    return (
        <div>
            <h2 className='text-center text-primary mt-3'>About Me</h2>

            <CardGroup className='w-50 mx-auto'>
                <Card className='mt-3'>
                    <img className='w-100 mx-auto' src={azam} alt="" />
                    <Card.Footer>
                        <h3 className='text-center'>Mohammad Nurul Azam</h3>
                    </Card.Footer>
                </Card>
                <Card className='mt-3'>
                    <Card.Body>
                        <Card.Title className='text-center'>My Goals</Card.Title>
                        <p>
                            I am Mohammad Nurul Azam. I'm a student of BBS and Programming Hero.
                        </p>
                        <p>
                            My goal is to finish ny Web Development main course on time and go to SCIC label. When i become a web developer, i will build a team. Whose job will be to build helpless poor boys and girls as a programmer. Who wants to be a programmer.
                        </p>
                        <p>
                            By working in this way, it is possible to eliminate a lot of unemployment in the country and we will be able to take our country to the world.
                        </p>

                    </Card.Body>

                </Card>
            </CardGroup>

        </div>
    );
};

export default About;